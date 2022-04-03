console.log("model module works!");

// USING THIS ONE
// API-FOOTBALL API-KEY (NEW): a78d0ec5177a3799beb9c9a2c3bb19ba
//a78d0ec5177a3799beb9c9a2c3bb19ba
// URL: https://v3.football.api-sports.io/

// Using

//******************************************//

// DATA STATE OBJECT

export const state = {
  queryTeamInfo: {
  },
  pieStats: {
    wins: 0,
    draws: 0,
    loses: 0,
  },
  playerStats: [],
  teamStats: {
    avgGoalsScored: 0,
    avgGoalsAgainst: 0,
    totalGoalScored: 0,
    totalGoalsAgainst: 0,
    longestWinStreak: 0,
    mostGoalsOneGame: 0,
  },
  leagueStanding: [],
  minuteGoalsData: {
    minsToScore: {},
    minsToConcede: {},
  },
  nextPredictionData: {
    fixtureID: 0,
    comparisonData: {
      teamHome: {},
      teamAway: {},
      outcomePrediction: {},
    },
    predictionRadarData: {},
  },
  teamHistoryInfo: {},
  teamFixtures: {},
};

// API Header:
const headers = {
  method: "GET",
  headers: {
    "x-apisports-key": "a78d0ec5177a3799beb9c9a2c3bb19ba",
  },
};
//************************************//

//       DATA FETCHING & HANDLING


export const fetchBasicTeamInfo = async function (query) {
  try{
    const res = await fetch(
      `https://v3.football.api-sports.io/teams?name=${query}`,
      headers
      );
      if (!res.ok) throw new Error("Problem getting basic team info")
      const data = await res.json();
      const teamData = data.response[0];
      const teamVenue = data.response[0];
      return storingTeamAndVenueData(teamData)
    } catch(err){
      console.error(`Error at basic info:${err.message}`)
      throw err
    }
};

// fetchBasicTeamInfo("arsenal")

const storingTeamAndVenueData = function (teamData) {
  const {
    id = teamData.team.id,
    name = teamData.team.name,
    teamCode = teamData.team.code,
    country = teamData.team.country,
    logo = teamData.team.logo,
    venueImg = teamData.venue.image,
  } = teamData;
  //
  state.queryTeamInfo = {
    teamId: id,
    teamName: name,
    teamInitals: teamCode,
    stadiumImg: venueImg,
    teamCountry: country,
    teamLogo: logo,
  };
  return fetchLeagueInfo(id, country);
};


const fetchLeagueInfo = async function (teamCode, country) {
  try{
    const res = await fetch(
      `https://v3.football.api-sports.io/leagues?country=${country}&current=true&team=${teamCode}`,
    headers
    );
    if (!res.ok) throw new Error("Problem getting league info");
    const data = await res.json();
    console.log(data);
    console.log(data.response[0].league);
    console.log(teamCode)
    console.log(country)
    const leagueID = data.response[0].league.id;
    const leagueYear = data.response[0].seasons[0].year;
    state.queryTeamInfo.teamLeagueID = leagueID;
    state.queryTeamInfo.teamLeagueYear = leagueYear;
    console.log(state.queryTeamInfo.teamLeagueID);
    console.log(state.queryTeamInfo.teamLeagueYear);
    return fetchTeamStats(leagueID, leagueYear);
  } catch(err){
    console.error(`error at fetch league info: ${err.message}`)
    throw err
    }
  };
  
  // fetchLeagueInfo()

const fetchTeamStats = async function (leagueID, seasonYear) {
  try{
    const team = state.queryTeamInfo.teamId;
    const res = await fetch(
      `https://v3.football.api-sports.io/teams/statistics?league=${leagueID}&season=${seasonYear}&team=${team}`,
      headers
      );
      if (!res.ok) throw new Error("Problem team stats");
      // maybe change to array, use filter the
      // ones we wanna keep, then change back.
      const data = await res.json();
      // console.log(data);
      const { teamWinDrawLose = data.response.fixtures } = data;
      const { teamGoalStats = data.response.goals } = data;
      const { biggestStats = data.response.biggest } = data;
      sortTeamRecordStats(teamWinDrawLose);
      sortTeamGoalStats(teamGoalStats);
      sortTeamLargestStats(biggestStats)
      return fetchLeagueStanding(leagueID,seasonYear)
    } catch(err){
      console.error(`Error at fetch team stats: ${err.message}`)
      throw err
    }
    };
    
const sortTeamGoalStats = function(goalStats){
  state.teamStats.avgGoalsScored = goalStats.for.average.total;
  // total goals scored
  state.teamStats.totalGoalScored = goalStats.for.total.total;
  // against:
  // avg goals against
  state.teamStats.avgGoalsAgainst = goalStats.against.average.total;
  // total goals against
  state.teamStats.totalGoalsAgainst = goalStats.against.total.total;
  // minute goal stats
  // most likely to score
  state.minuteGoalsData.minsToScore = goalStats.for.minute
  // most likely to concede
  state.minuteGoalsData.minsToConcede = goalStats.against.minute
  // console.log(state);
};

const sortTeamRecordStats = function(record){
  // PieChart Data
  state.pieStats.wins = record.wins.total;
  state.pieStats.draws = record.draws.total;
  state.pieStats.loses = record.loses.total;
};

const sortTeamLargestStats = function(largeStats){
  // longest win streak
  state.teamStats.longestWinStreak = largeStats.streak.wins;
  // largest win
  state.teamStats.mostGoalsOneGame = largeStats.goals.for;
};

const fetchLeagueStanding = async function (leagueID,seasonYear) {
  try{
    const res = await fetch(
      `https://v3.football.api-sports.io/standings?league=${leagueID}&season=${seasonYear}`,
      headers
      );
      if (!res.ok) throw new Error("Problem getting league standing");
      const data = await res.json();
      const { 
        league = data.response[0].league.standings[0],
        leagueName = data.response[0].league.name
      } = data;
      
      sortLeagueStandings(league,leagueName);
      return fetchTeamsFixtures(seasonYear)
    } catch(err){
      console.error(`Error at fetch league standing: ${err.message}`)
      throw err
    }
    };
// fetchLeagueStanding()

const sortLeagueStandings = function (league,leagueName) {
  let table = []
  league.forEach((e) => {
    const tableDetails = {};
    tableDetails.leagueName = leagueName
    tableDetails.rank = e.rank;
    tableDetails.teamName = e.team.name;
    tableDetails.points = e.points;
    tableDetails.goalDiff = e.goalsDiff;
    tableDetails.tableData = e.all;
    table.push(tableDetails);
  });
  state.leagueStanding = table
  table = []
};

const fetchTeamsFixtures = async function (seasonYear) {
  try{
    const res = await fetch(
      `https://v3.football.api-sports.io/fixtures?season=${seasonYear}&team=${state.queryTeamInfo.teamId}`,
    headers
    );
    if (!res.ok) throw new Error("Problem getting team fixtures");
    //
    const data = await res.json();
    const fixturesData = data.response;
    sortFixturesData(fixturesData);
    return fetchTeamsPlayersData(seasonYear)
  } catch (err){
    console.error(`Error at fetch teams fixtures: ${err.message}`)
    throw err
  }
};
// fetchTeamsFixtures()

// sort fixtures data
const sortFixturesData = function (fixturesData) {
  let fixtureDetails = [];
  fixturesData.forEach((e, i, arr) => {
    const fixtureBreakdown = {};
    fixtureBreakdown.homeTeam = e.teams.home.name;
    fixtureBreakdown.awayTeam = e.teams.away.name;
    fixtureBreakdown.kickOffTime = e.fixture.timestamp;
    fixtureBreakdown.fixtureDate = e.fixture.date;
    fixtureBreakdown.compitition = e.league.name;
    fixtureBreakdown.score = e.score.fulltime;
    fixtureDetails.push(fixtureBreakdown);
  });
  // console.log(fixtureDetails);
  // will have to sort fixtures by date (BY DEFAULT SORTED BY COMPITITON) // TRY AGAIN
  fixtureDetails.sort((a, b) => {
    const dateA = new Date(a.fixtureDate);
    const dateB = new Date(b.fixturesDate);
    return dateA - dateB;
  });
  state.teamFixtures = fixtureDetails;
  fixtureDetails = []
};

const fetchTeamsPlayersData = async function (seasonYear) {
  try{
    const pageNumbers = [1, 2, 3];
    const pagesCombined = [];
    await Promise.all(
      pageNumbers.map(async (page) => {
        const res = await fetch(
          `https://v3.football.api-sports.io/players?season=${seasonYear}&team=${state.queryTeamInfo.teamId}&page=${page}`,
          headers
          );
          if (!res.ok) throw new Error("Problem getting teams player data");
          const data = await res.json();
          pagesCombined.push(data);
        })
        );
        const playerList = pagesCombined.flatMap((o) => {
          return o.response;
        });
        filterForFirstTeam(playerList)
        return fetchPredictionInfo(seasonYear)
      } catch (err){
        console.error(`Error at team players data: ${err.message}`)
        throw err
      }
      };
// fetchTeamsPlayersData()

const filterForFirstTeam = function(playerList){
    const firstTeam = [];
    playerList.forEach((p) => {
      p.statistics.forEach((e) => {
        if (e.games.appearences > 5) firstTeam.push(p);
      });
    });
    customPlayerStatObjs(firstTeam)
}

const customPlayerStatObjs = function(firstTeam){
  let customPlayerList = [];
  firstTeam.forEach((e) => {
    const player = {
      totalAppearences: 0,
      totalGoals: 0,
      totalAssists: 0,
      avgRating: [],
    };
    const playerNames = {
      fullName: e.player.name,
      firstName: e.player.firstname,
      lastName: e.player.lastname,
    };
    player.names = playerNames;
    //
    e.statistics.forEach((s, i) => {
      const formattedRatings = s.games.rating;
      player.totalAppearences += s.games.appearences;
      player.totalGoals += s.goals.total;
      player.totalAssists += s.goals.assists;
      player.avgRating.push(formattedRatings);
    });
    //
    // console.log(player);
    customPlayerList.push(player);
    // state.playerStats.push(player);
    state.playerStats = customPlayerList
  });
  customPlayerList = []
  // console.log(customPlayerList)
}

const fetchPredictionInfo = async function (seasonYear) {
  try{
    // for the fixture ID
    const res = await fetch(
      `https://v3.football.api-sports.io/fixtures?season=${seasonYear}&team=${state.queryTeamInfo.teamId}&next=01`,
      headers
      );
      if (!res.ok) throw new Error("Problem getting prediction info");
      const data = await res.json();
      console.log(data.response[0].fixture.id);
      const { fixtureID = data.response[0].fixture.id } = data;
      state.nextPredictionData.fixtureID = fixtureID;
      //
      return fetchPredictionData(fixtureID) // use fixtureID
    } catch (err){
      console.error(`Error at fetch prediction info: ${err.message}`)
        throw err
    }
    };

const fetchPredictionData = async function (fixtureID) {
  try{
    const res = await fetch(
      `https://v3.football.api-sports.io/predictions?fixture=${fixtureID}`,
      headers
      );
      if (!res.ok) throw new Error("Problem getting league data");
      const data = await res.json();
      // console.log(data);
      // need to replace strength stat for radar
      const predictionData = data.response[0].predictions;
  sortingPredictionData(predictionData);
  
  const comparisonData = data.response[0].comparison;
  sortingComparisonData(comparisonData);
  
  const homeTeamsData = data.response[0].teams.home;
  const awayTeamsData = data.response[0].teams.away;
  return sortingHomeAwayCompareData(homeTeamsData, awayTeamsData);
} catch (err){
  console.error(`Error at prediction data: ${err.message}`)
  throw err
}
};
// fetchPredictionData()

const sortingPredictionData = function (data) {
  state.nextPredictionData.comparisonData.outcomePrediction = data.winner;
  state.nextPredictionData.comparisonData.overUnderGoalsData = data.goals;
  state.nextPredictionData.comparisonData.outcomePercentage = data.percent;
};

const sortingComparisonData = function (data) {
  // RADAR
  state.nextPredictionData.predictionRadarData.attack = data.att;
  state.nextPredictionData.predictionRadarData.defence = data.def;
  state.nextPredictionData.predictionRadarData.possessionDist =
    data.poisson_distribution;
  state.nextPredictionData.predictionRadarData.h2h = data.h2h;
  state.nextPredictionData.predictionRadarData.form = data.form;
  state.nextPredictionData.predictionRadarData.goals = data.goals
};

const sortingHomeAwayCompareData = function (homeData, awayData) {
  // HOME TEAM DATA
  state.nextPredictionData.comparisonData.homeName = homeData.name;
  state.nextPredictionData.comparisonData.homeWins =
    homeData.league.fixtures.wins.total
  state.nextPredictionData.comparisonData.homeLoses =
    homeData.league.fixtures.loses.total
  state.nextPredictionData.comparisonData.homeDraws =
    homeData.league.fixtures.draws.total
  // AWAY TEAM
  state.nextPredictionData.comparisonData.awayName = awayData.name;
  state.nextPredictionData.comparisonData.awayWins =
    awayData.league.fixtures.wins.total
  state.nextPredictionData.comparisonData.awayLoses =
    awayData.league.fixtures.loses.total
  state.nextPredictionData.comparisonData.awayDraws =
    awayData.league.fixtures.draws.total
  console.log(state);
  return state
};

////***************************************////
// wikipedia api

export const fetchWiki = async function (query) {
  try{
    // relevance added by default
    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=search&exintro=1&explaintext=2&srsearch=football%20club%20${query}&srsort=relevance&origin=*`
      );
      if (!res.ok) throw new Error("Problem getting wiki query");
      const data = await res.json();
      // console.log(data.query.search[0].title);
      const title = data.query.search[0].title;
      return title;
      // fetchWikiIntro(title)
  // fetchWikiImage(title)
} catch (err){
  console.error(`Error at fetching wiki: ${err.message}`)
  throw err
}
};

// fetchWiki("arsenal");

export const fetchWikiIntro = async function (team) {
  try{

    const res = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&exlimit=2&titles=${team}&explaintext=2&format=json&formatversion=2&origin=*`
      );
      if (!res.ok){
        throw new Error("Problem getting wiki data")
      }
      const data = await res.json();
  // console.log(data.query.pages[0]);
  // console.log(data); // data here
  const { historyExtract = data.query.pages[0].extract } = data;
  // console.log(historyExtract);
  state.teamHistoryInfo.history = historyExtract;
  // console.log(state.teamHistoryInfo);
  return state.teamHistoryInfo;
} catch (err){
  console.error(`Error at fetch wiki info: ${err.message}`)
  throw err
}
};


// NOT USED
// const fetchWikiImage = async function (query) {
//   const res = await fetch(
//     `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${query}&piprop=original&pilicense=any&origin=*`
//   );
//   const data = await res.json();
//   console.log(data); // data here
// };
