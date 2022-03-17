console.log("model module works!");
// football-data.org API-KEY:  64b5f5e2c5c74667bf07a2f0291886d9
//elenaSports API-KEY: N2w0bGFlc2J1dTNpMGNxZWNzNDR1dmxya2o6MXQ4bG1udjdscjEyamNmYWNwdGE5ZW8wM3Rlc3AzNHBqdjJzNm02cTFubTE3bWpkbTNzNQ==

// USING THIS ONE
// API-FOOTBALL API-KEY (NEW): a78d0ec5177a3799beb9c9a2c3bb19ba
//a78d0ec5177a3799beb9c9a2c3bb19ba
// URL: https://v3.football.api-sports.io/


//******************************************//

// DATA STATE OBJECT

export const state = {
    pieStats: {
        wins: 0,
        draws: 0,
        Loses: 0
    },
    playerStats: [
        {name: "",
            goals: 0,
            assists: 0,
            yellowCards:0,
            redCards:0,
            avgRating:0},
        {name: "",
            goals: 0,
            assists: 0,
            yellowCards:0,
            redCards:0,
            avgRating:0},
        {name: "",
            goals: 0,
            assists: 0,
            yellowCards:0,
            redCards:0,
            avgRating:0},
        {name: "",
            goals: 0,
            assists: 0,
            yellowCards:0,
            redCards:0,
            avgRating:0},
        {name: "",
            goals: 0,
            assists: 0,
            yellowCards:0,
            redCards:0,
            avgRating:0},
        {name: "",
            goals: 0,
            assists: 0,
            yellowCards:0,
            redCards:0,
            avgRating:0},
    ],
    teamStats: {
        avgGoalsScored: 0,
        avgGoalsAgainst:0,
        totalGoalScored:0,
        totalGoalsAgainst:0,
        longestWinStreak:0,
        largestWin:0,
    },
    leagueStanding: {
        standings:{},
    },
    formStats: {
        form: 0,
    },
}




