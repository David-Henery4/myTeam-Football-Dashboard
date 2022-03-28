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
    // teamId: 0,
    // name: "",
    // teamCodeInitals: "",
    // country: "",
    // logoImage:"",
    // venueImage:"",
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
    largestWin: 0,
  },
  leagueStanding: {},
  minuteGoalsData: {
    minsToScore: [],
    minsToConcede: [],
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

// LOGIC FOR FETCHING DATA

// 1) fetching teams basic info
// We can use:
// id, name, code, country, logo, venueImage
const fetchBasicTeamInfo = async function (query) {
  const res = await fetch(
    `https://v3.football.api-sports.io/teams?name=arsenal`,
    headers
  );
  const data = await res.json();
  const teamData = data.response[0];
  const teamVenue = data.response[0];
  console.log(data.response[0].team);
  console.log(data.response[0].venue);
  // storingTeamAndVenueData(teamData)
  // storingTeamAndVenueData(teamVenue)
  //
  // will move to: storingTeamAndVenueData
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
  // console.log(queryTeamInfo)
  fetchLeagueInfo(id, country);
  console.log(state);
};

// fetchBasicTeamInfo()

const storingTeamAndVenueData = function (teamData, venue) {};

// 1) query string to get a teams info: DONE
// We can use:
// id, name, code, country, logo, venueImage

// Use team code,country & current = true
// to get LEAGUE.
const fetchLeagueInfo = async function (teamCode, country) {
  const res = await fetch(
    `https://v3.football.api-sports.io/leagues?country=${country}&current=true&team=${teamCode}`,
    headers
  );
  const data = await res.json();
  console.log(data);
  console.log(data.response[0].league);
  const leagueID = data.response[0].league.id;
  const leagueYear = data.response[0].seasons[0].year;
  state.queryTeamInfo.teamLeagueID = leagueID;
  state.queryTeamInfo.teamLeagueYear = leagueYear;
  fetchTeamStats(leagueID, leagueYear);
};

// fetchLeagueInfo()

// need:
// league id,
// season of the league(EG - 21=current),
// team id
//

// then use league id, season of the league(only four digits E.G 2021/2022 = 2021) and team id.
// TO GET TEAM STATS.

const fetchTeamStats = async function (leagueID, seasonYear) {
  const team = state.queryTeamInfo.teamId;
  const res = await fetch(
    `https://v3.football.api-sports.io/teams/statistics?league=${leagueID}&season=${seasonYear}&team=${team}`,
    headers
  );
  // maybe change to array, use filter the
  // ones we wanna keep, then change back.
  const data = await res.json();
  console.log(data);
  const { teamWinDrawLose = data.response.fixtures } = data;
  const { teamGoalStats = data.response.goals } = data;
  const { biggestStats = data.response.biggest } = data;
  console.log(teamWinDrawLose);
  console.log(teamGoalStats);
  console.log(state);
  //piedata
  state.pieStats.wins = teamWinDrawLose.wins.total;
  state.pieStats.draws = teamWinDrawLose.draws.total;
  state.pieStats.loses = teamWinDrawLose.loses.total;
  //        team goal stats
  // for:
  // avg goals scored
  state.teamStats.avgGoalsScored = teamGoalStats.for.average.total;
  // total goals scored
  state.teamStats.totalGoalScored = teamGoalStats.for.total.total;
  // against:
  // avg goals against
  state.teamStats.avgGoalsAgainst = teamGoalStats.against.average.total;
  // total goals against
  state.teamStats.totalGoalsAgainst = teamGoalStats.against.total.total;
  // longest win streak
  state.teamStats.longestWinStreak = biggestStats.streak.wins;
  // largest win
  state.teamStats.largestWin = biggestStats.wins;

  // minute goal stats
  // most likely to score
  state.minuteGoalsData.minsToScore.push(teamGoalStats.for.minute);
  // most likely to concede
  state.minuteGoalsData.minsToConcede.push(teamGoalStats.against.minute);
  console.log(state);
};

// ALSO USE League id, Season number and team id (optional)
// to get standings (Use without team name to get whole league) Maybe sort by or use 'rank' to get correct positions.

const fetchLeagueStanding = async function () {
  const res = await fetch(
    `https://v3.football.api-sports.io/standings?league=39&season=2021`,
    headers
  );
  const data = await res.json();
  const { league = data.response[0].league.standings } = data;
  state.leagueStanding.standings = league;
  console.log(league);
  console.log(state);
};
// fetchLeagueStanding()

// Use id of team, league id (optional), season number (E,G 2021/ use year property from previous search.)
// USE THIS TO GET PLAYER STATS
// WILL USE SIMULAR INFO TO GET FIXTURES

const fetchTeamsFixtures = async function () {
  const res = await fetch(
    `https://v3.football.api-sports.io/fixtures?season=2021&team=42`,
    headers
  );
  //
  const data = await res.json();
  const fixturesData = data.response;
  sortFixturesData(fixturesData)
};
// fetchTeamsFixtures()

// sort fixtures data

const sortFixturesData = function(){
  // will have to sort fixtures by date (BY DEFAULT SORTED BY COMPITITON)
  const fixtureDetails = [];
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
  console.log(fixtureDetails);
};

const fetchTeamsPlayersData = async function () {
  const res = await fetch(
    `https://v3.football.api-sports.io/players?season=2021&team=42&page=2`,
    headers
  );
  const data = await res.json();
  console.log(data.response);
  state.playerStats = data.response;
  console.log(state.playerStats);

  const activePlayer = data.response.map((o, i, a) => {
    const players = [];
    o.statistics.forEach((e, i, a) => {
      if (e.games.appearences > 0) {
        players.push(o);
      }
    });
    return players;
  });
  //
  console.log(activePlayer);
  const playersList = activePlayer.filter((e) => e.length > 0);
  const squadListP2 = playersList.map((e) => e[0]);
  console.log(squadListP2);
};
// fetchTeamsPlayersData()

const fetchPredictionInfo = async function () {
  // for the fixture ID
  const res = await fetch(
    `https://v3.football.api-sports.io/fixtures?season=2021&team=42&next=01`,
    headers
  );
  const data = await res.json();
  const { fixtureID = data.response.fixture.id } = data;
  state.nextPredictionData.fixtureID = fixtureID;
  //
  // fetchPredictionData() // use fixtureID
};

const fetchPredictionData = async function () {
  const res = await fetch(
    `https://v3.football.api-sports.io/predictions?fixture=710859`,
    headers
  );
  const data = await res.json();
  console.log(data);
  // need to replace strength stat for radar
  const predictionData = data.response[0].predictions;
  sortingPredictionData(predictionData);

  const comparisonData = data.response[0].comparison;
  sortingComparisonData(comparisonData);

  const homeTeamsData = data.response[0].teams.home;
  const awayTeamsData = data.response[0].teams.away;
  sortingHomeAwayCompareData(homeTeamsData, awayTeamsData);
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
  // COMPARISON
  state.nextPredictionData.comparisonData.possessionDist =
    data.poisson_distribution;
  state.nextPredictionData.comparisonData.h2h = data.h2h;
  state.nextPredictionData.comparisonData.form = data.form;
};

const sortingHomeAwayCompareData = function (homeData, awayData) {
  // HOME TEAM DATA
  // Comparison
  state.nextPredictionData.comparisonData.homeName = homeData.name;
  // RADAR
  state.nextPredictionData.predictionRadarData.homeFixtureData =
    homeData.league.fixtures;
  state.nextPredictionData.predictionRadarData.homeGoalsFor =
    homeData.league.goals.for.total.total;
  state.nextPredictionData.predictionRadarData.homeGoalsAgainst =
    homeData.league.goals.against.total.total;

  // AWAY TEAM
  // COMPARISON
  state.nextPredictionData.comparisonData.awayName = awayData.name;
  // RADAR
  state.nextPredictionData.predictionRadarData.awayFixtureData =
    awayData.league.fixtures;
  state.nextPredictionData.predictionRadarData.awayGoalsFor =
    awayData.league.goals.for.total.total;
  state.nextPredictionData.predictionRadarData.awayGoalsAgainst =
    awayData.league.goals.against.total.total;
  console.log(state.nextPredictionData);
};

////***********////
// wikipedia api

export const fetchWiki = async function (query) {
  // const searchquery = query.trim()
  // const regex = /[ ]{2,}/gi;
  // const searchTerm = searchquery.replaceAll(regex, " ")
  // relevance added by default
  const res = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=search&exintro=1&explaintext=2&srsearch=football%20club%20${query}&srsort=relevance&origin=*`
  );
  const data = await res.json();
  console.log(data.query.search[0].title);
  const title = data.query.search[0].title;
  return title;
  // fetchWikiIntro(title)
  // fetchWikiImage(title)
};

// fetchWiki("arsenal");

export const fetchWikiIntro = async function (team) {
  const res = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&exlimit=2&titles=${team}&explaintext=2&format=json&formatversion=2&origin=*`
  );
  const data = await res.json();
  console.log(data.query.pages[0]);
  console.log(data); // data here
  const { historyExtract = data.query.pages[0].extract } = data;
  console.log(historyExtract);
  state.teamHistoryInfo.history = historyExtract;
  console.log(state.teamHistoryInfo);
  return state.teamHistoryInfo;
};

const fetchWikiImage = async function (query) {
  const res = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${query}&piprop=original&pilicense=any&origin=*`
  );
  const data = await res.json();
  console.log(data); // data here
};
