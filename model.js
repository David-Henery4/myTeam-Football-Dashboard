console.log("model module works!");
// football-data.org API-KEY:  64b5f5e2c5c74667bf07a2f0291886d9
//elenaSports API-KEY: N2w0bGFlc2J1dTNpMGNxZWNzNDR1dmxya2o6MXQ4bG1udjdscjEyamNmYWNwdGE5ZW8wM3Rlc3AzNHBqdjJzNm02cTFubTE3bWpkbTNzNQ==

// USING THIS ONE
// API-FOOTBALL API-KEY (NEW): a78d0ec5177a3799beb9c9a2c3bb19ba
//a78d0ec5177a3799beb9c9a2c3bb19ba
// URL: https://v3.football.api-sports.io/

// Using 

//******************************************//

// DATA STATE OBJECT

export const state = {
  pieStats: {
    wins: 0,
    draws: 0,
    Loses: 0,
  },
  playerStats: [
    {
      name: "",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      avgRating: 0,
    },
    {
      name: "",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      avgRating: 0,
    },
    {
      name: "",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      avgRating: 0,
    },
    {
      name: "",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      avgRating: 0,
    },
    {
      name: "",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      avgRating: 0,
    },
    {
      name: "",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      avgRating: 0,
    },
  ],
  teamStats: {
    avgGoalsScored: 0,
    avgGoalsAgainst: 0,
    totalGoalScored: 0,
    totalGoalsAgainst: 0,
    longestWinStreak: 0,
    largestWin: 0,
  },
  leagueStanding: {
    standings: {},
  },
  formStats: {
    form: 0,
  },
};

// LOGIC FOR FETCHING DATA

// 1) query string to get a teams info: returns this
// team: {
// id: 42
// name: "Arsenal"
// code: "ARS"
// country: "England"
// founded: 1886
// national: false
// logo: "https://media.api-sports.io/football/teams/42.png"
// }
// venue: {
// id: 494
// name: "Emirates Stadium"
// address: "Queensland Road"
// city: "London"
// capacity: 60383
// surface: "grass"
// image: "https://media.api-sports.io/football/venues/494.png"
// }

// We can use:
// id, name, code, country, logo

// Use team code,country & current = true
// to get league.

// league: {
// id: 39
// name: "Premier League"
// type: "League"
// logo: "https://media.api-sports.io/football/leagues/39.png"
// }
// country: {
// name: "England"
// code: "GB"
// flag: "https://media.api-sports.io/flags/gb.svg"
// }
// seasons: [
// {
// year: 2021
// start: "2021-08-13"
// end: "2022-05-22"
// current: true
// coverage: {
// fixtures: {
// events: true
// lineups: true
// statistics_fixtures: true
// statistics_players: true
// }
// standings: true
// players: true
// top_scorers: true
// top_assists: true
// top_cards: true
// injuries: true
// predictions: true
// odds: true
// }

// then use league id, season of the league(only four digits E.G 2021/2022 = 2021) and team id.
// TO GET TEAM STATS.

// ALSO USE League id, Season number and team id (optional)
// to get standings (Use without team name to get whole league) Maybe sort by or use 'rank' to get correct positions.

// Use id of team, league id (optional), season number (E,G 2021/ use year property from previous search.)
// USE THIS TO GET PLAYER STATS
// WILL USE SIMULAR INFO TO GET FIXTURES

// Test wiki

const fetchWiki = async function(query){
  // const searchquery = query.trim()
  // const regex = /[ ]{2,}/gi;
  // const searchTerm = searchquery.replaceAll(regex, " ")
  // relevance added by default
  const res = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=search&exintro=1&explaintext=2&srsearch=football%20club%20${query}&srsort=relevance&origin=*`
  );
  const data = await res.json()
  console.log(data.query.search[0].title)
  const title = data.query.search[0].title;
  fetchWikiIntro(title)
  fetchWikiImage(title)
};

fetchWiki("arsenal");

const fetchWikiIntro = async function(team){
const res = await fetch(
  `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&exlimit=2&titles=${team}&explaintext=2&format=json&formatversion=2&origin=*`
);
const data = await res.json()
// console.log(data.query.pages[0].extract)
console.log(data)
}

const fetchWikiImage = async function(query){
  const res = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${query}&piprop=original&pilicense=any&origin=*`
  );
  const data = await res.json()
  console.log(data)
};


// fetchWiki("Boca_Juniors");

// https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=search&exintro=1&explaintext=1&srsearch=football%20club%20southend&origin=*

//https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=allpages&generator=search&exintro=1&apfrom=southampton&gsrsearch=football%20club&explaintext=2&origin=*

// https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=allpages&generator=search&exintro=1&apfrom=arsenal&gsrsearch=football%20club


// https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&exlimit=2&titles=Arsenal_F.C.&explaintext=2&format=json&formatversion=2&origin=*

// https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=2&exlimit=2&titles=arsenal&explaintext=2&format=json&formatversion=2&origin=*

//1
// https://en.wikipedia.org/w/api.php?action=parse&format=json&page=arsenal&prop=text

//2
// https://en.wikipedia.org/w/api.php?action=query&titles=main%20page&prop=revisions&rvprop=content&format=json&titles=arsenal

//3
// https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=arsenal

// https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=arsenal&namespace=0&limit=10

// https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=arsenal&namespace=0&limit=10&origin=*
