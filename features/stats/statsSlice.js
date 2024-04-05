import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

var Airtable = require("airtable");
var base = new Airtable({
  apiKey:
    "pat4nh10f6PT2EoBm.8143dc2e79fe8b5a64a333ad1961c59cbddc50dd7937841959c15aba85b3bd26",
}).base("appmqv083cLppisF5");
const scoreCards = base("StaffScoreCards");

export const fetchStats = createAsyncThunk("stats/fetchStats", async () => {
  const records = await scoreCards.select({ view: "All" }).firstPage();
  const miniRecords = records.map((record) => ({
    id: record.id,
    fields: record.fields,
  }));
  return miniRecords;
});

export const fetchStatsByName = createAsyncThunk(
  "stats/fetchStatsByName",
  async (name) => {
    const records = await scoreCards.select({ view: name }).firstPage();
    const miniRecords = records.map((record) => ({
      id: record.id,
      fields: record.fields,
    }));
    return miniRecords;
  }
);

export const addStats = createAsyncThunk(
  "stats/addStats",
  async (values, { dispatch }) => {
    const records = await scoreCards.create(
      [
        {
          fields: {
            name: "Misty",
            attendance: 2,
            knowledge: 2,
            teamwork: 2,
            tools: 2,
            sales: 2,
            date: "2022-07-25",
            day: "Monday",
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );
    return records;
  }
);

const initialState = {
  statsArray: [],
  playerTotalsArray: [],
  playerMappedArray: [],
  teamTotalsArray: [],
  teamMappedArray: [],
  isLoading: true,
  errMsg: "",
  playerAttendanceArray: [],
  playerKnowledgeArray: [],
  playerTeamWorkArray: [],
  playerToolsArray: [],
  playerSalesArray: [],
  playerMappedAttenance: [],
  playerMappedKnowledge: [],
  playerMappedTeamwork: [],
  playerMappedTools: [],
  playerMappedSales: [],
  rankedPlayers: [],
  teamAttendanceArray: [],
  teamKnowledgeArray: [],
  teamTeamWorkArray: [],
  teamToolsArray: [],
  teamSalesArray: [],
  teamMappedAttenance: [],
  teamMappedKnowledge: [],
  teamMappedTeamwork: [],
  teamMappedTools: [],
  teamMappedSales: [],
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    addPlayerRankings: (state, action) => {
      state.rankedPlayers.push(action.payload);
    },
  },
  extraReducers: {
    [fetchStats.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchStats.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      const airTableRecords = action.payload;
      const newArray = airTableRecords.map((record) => ({
        id: record.id,
        fields: record.fields,
      }));
      state.statsArray = newArray;
      // Player Total Scores
      state.playerTotalsArray = state.statsArray.map((record) => ({
        name: record.fields.name,
        score: record.fields.scoreTotal,
        team: record.fields.teamName,
      }));
      const details = state.playerTotalsArray;
      const output = Object.values(
        details.reduce((value, object) => {
          if (value[object.name]) {
            ["score"].forEach(
              (key) =>
                (value[object.name][key] =
                  value[object.name][key] + object[key])
            );
          } else {
            value[object.name] = { ...object };
          }
          return value;
        }, {})
      );
      state.playerMappedArray = output.sort((a, b) => {
        if (a.score === b.score) {
          return b.score - a.score;
        } else {
          return b.score - a.score;
        }
      });
      //Team Total Stats
      state.teamTotalsArray = state.statsArray.map((record) => ({
        team: record.fields.teamName,
        score: record.fields.scoreTotal,
        name: record.fields.teamName,
      }));

      const teamDetails = state.teamTotalsArray;
      const teamOutput = Object.values(
        teamDetails.reduce((value, object) => {
          if (value[object.team]) {
            ["score"].forEach(
              (key) =>
                (value[object.team][key] =
                  value[object.team][key] + object[key])
            );
          } else {
            value[object.team] = { ...object };
          }
          return value;
        }, {})
      );
      state.teamMappedArray = teamOutput.sort((a, b) => {
        if (a.score === b.score) {
          return b.score - a.score;
        } else {
          return b.score - a.score;
        }
      });
      // Team Attendance Stats
      state.teamAttendanceArray = state.statsArray.map((record) => ({
        name: record.fields.name,
        attendance: record.fields.attendance,
        team: record.fields.teamName,
      }));
      const attendanceDetailsTeam = state.teamAttendanceArray;
      const attendanceOutputTeam = Object.values(
        attendanceDetailsTeam.reduce((value, object) => {
          if (value[object.team]) {
            ["attendance"].forEach(
              (key) =>
                (value[object.team][key] =
                  value[object.team][key] + object[key])
            );
          } else {
            value[object.team] = { ...object };
          }
          return value;
        }, {})
      );
      state.teamMappedAttenance = attendanceOutputTeam.sort((a, b) => {
        if (a.attendance === b.attendance) {
          return b.attendance - a.attendance;
        } else {
          return b.attendance - a.attendance;
        }
      });
      //Player Attendance Stats
      state.playerAttendanceArray = state.statsArray.map((record) => ({
        name: record.fields.name,
        attendance: record.fields.attendance,
        team: record.fields.teamName,
      }));
      const attendanceDetails = state.playerAttendanceArray;
      const attendanceOutput = Object.values(
        attendanceDetails.reduce((value, object) => {
          if (value[object.name]) {
            ["attendance"].forEach(
              (key) =>
                (value[object.name][key] =
                  value[object.name][key] + object[key])
            );
          } else {
            value[object.name] = { ...object };
          }
          return value;
        }, {})
      );
      state.playerMappedAttenance = attendanceOutput.sort((a, b) => {
        if (a.attendance === b.attendance) {
          return b.attendance - a.attendance;
        } else {
          return b.attendance - a.attendance;
        }
      });
      // Team Knowledge Stats
      state.teamKnowledgeArray = state.statsArray.map((record) => ({
        name: record.fields.name,
        attendance: record.fields.attendance,
        team: record.fields.teamName,
      }));
      const knowledgeDetailsTeam = state.teamKnowledgeArray;
      const knowledgeOutputTeam = Object.values(
        knowledgeDetailsTeam.reduce((value, object) => {
          if (value[object.team]) {
            ["knowledge"].forEach(
              (key) =>
                (value[object.team][key] =
                  value[object.team][key] + object[key])
            );
          } else {
            value[object.team] = { ...object };
          }
          return value;
        }, {})
      );
      state.teamMappedKnowledge = knowledgeOutputTeam.sort((a, b) => {
        if (a.knowledge === b.knowledge) {
          return b.knowledge - a.knowledge;
        } else {
          return b.knowledge - a.knowledge;
        }
      });
      // Player Knowledge Stats
      state.playerKnowledgeArray = state.statsArray.map((record) => ({
        name: record.fields.name,
        knowledge: record.fields.knowledge,
        team: record.fields.teamName,
      }));
      const knowledgeDetails = state.playerKnowledgeArray;
      const knowledgeOutput = Object.values(
        knowledgeDetails.reduce((value, object) => {
          if (value[object.name]) {
            ["knowledge"].forEach(
              (key) =>
                (value[object.name][key] =
                  value[object.name][key] + object[key])
            );
          } else {
            value[object.name] = { ...object };
          }
          return value;
        }, {})
      );
      state.playerMappedKnowledge = knowledgeOutput.sort((a, b) => {
        if (a.knowledge === b.knowledge) {
          return b.knowledge - a.knowledge;
        } else {
          return b.knowledge - a.knowledge;
        }
      });
      // Player Teamwork Stats
      state.playerTeamWorkArray = state.statsArray.map((record) => ({
        name: record.fields.name,
        teamwork: record.fields.teamwork,
        team: record.fields.teamName,
      }));
      const teamworkDetails = state.playerTeamWorkArray;
      const teamworkOutput = Object.values(
        teamworkDetails.reduce((value, object) => {
          if (value[object.name]) {
            ["teamwork"].forEach(
              (key) =>
                (value[object.name][key] =
                  value[object.name][key] + object[key])
            );
          } else {
            value[object.name] = { ...object };
          }
          return value;
        }, {})
      );
      state.playerMappedTeamwork = teamworkOutput.sort((a, b) => {
        if (a.teamwork === b.teamwork) {
          return b.teamwork - a.teamwork;
        } else {
          return b.teamwork - a.teamwork;
        }
      });
      // Team Teamwork Stats
      state.teamTeamWorkArray = state.statsArray.map((record) => ({
        name: record.fields.name,
        teamwork: record.fields.teamwork,
        team: record.fields.teamName,
      }));
      const teamworkDetailsTeam = state.teamTeamWorkArray;
      const teamworkOutputTeam = Object.values(
        teamworkDetailsTeam.reduce((value, object) => {
          if (value[object.team]) {
            ["teamwork"].forEach(
              (key) =>
                (value[object.team][key] =
                  value[object.team][key] + object[key])
            );
          } else {
            value[object.team] = { ...object };
          }
          return value;
        }, {})
      );
      state.teamMappedTeamwork = teamworkOutputTeam.sort((a, b) => {
        if (a.teamwork === b.teamwork) {
          return b.teamwork - a.teamwork;
        } else {
          return b.teamwork - a.teamwork;
        }
      });
      // Player Tools Stats
      state.playerToolsArray = state.statsArray.map((record) => ({
        name: record.fields.name,
        tools: record.fields.tools,
        team: record.fields.teamName,
      }));
      const toolsDetails = state.playerToolsArray;
      const toolsOutput = Object.values(
        toolsDetails.reduce((value, object) => {
          if (value[object.name]) {
            ["tools"].forEach(
              (key) =>
                (value[object.name][key] =
                  value[object.name][key] + object[key])
            );
          } else {
            value[object.name] = { ...object };
          }
          return value;
        }, {})
      );
      state.playerMappedTools = toolsOutput.sort((a, b) => {
        if (a.tools === b.tools) {
          return b.tools - a.tools;
        } else {
          return b.tools - a.tools;
        }
      });
      // Team Tools Stats
      state.teamToolsArray = state.statsArray.map((record) => ({
        name: record.fields.name,
        tools: record.fields.tools,
        team: record.fields.teamName,
      }));
      const toolsDetailsTeam = state.teamToolsArray;
      const toolsOutputTeam = Object.values(
        toolsDetailsTeam.reduce((value, object) => {
          if (value[object.team]) {
            ["tools"].forEach(
              (key) =>
                (value[object.team][key] =
                  value[object.team][key] + object[key])
            );
          } else {
            value[object.team] = { ...object };
          }
          return value;
        }, {})
      );
      state.teamMappedTools = toolsOutputTeam.sort((a, b) => {
        if (a.tools === b.tools) {
          return b.tools - a.tools;
        } else {
          return b.tools - a.tools;
        }
      });
      // Player Sales Stats
      state.playerSalesArray = state.statsArray.map((record) => ({
        name: record.fields.name,
        sales: record.fields.sales,
        team: record.fields.teamName,
      }));
      const salesDetails = state.playerSalesArray;
      const salesOutput = Object.values(
        salesDetails.reduce((value, object) => {
          if (value[object.name]) {
            ["sales"].forEach(
              (key) =>
                (value[object.name][key] =
                  value[object.name][key] + object[key])
            );
          } else {
            value[object.name] = { ...object };
          }
          return value;
        }, {})
      );
      state.playerMappedSales = salesOutput.sort((a, b) => {
        if (a.sales === b.sales) {
          return b.sales - a.sales;
        } else {
          return b.sales - a.sales;
        }
      });
      // Team Sales Stats
      state.teamSalesArray = state.statsArray.map((record) => ({
        name: record.fields.name,
        sales: record.fields.sales,
        team: record.fields.teamName,
      }));
      const salesDetailsTeam = state.teamSalesArray;
      const salesOutputTeam = Object.values(
        salesDetailsTeam.reduce((value, object) => {
          if (value[object.team]) {
            ["sales"].forEach(
              (key) =>
                (value[object.team][key] =
                  value[object.team][key] + object[key])
            );
          } else {
            value[object.team] = { ...object };
          }
          return value;
        }, {})
      );
      state.teamMappedSales = salesOutputTeam.sort((a, b) => {
        if (a.sales === b.sales) {
          return b.sales - a.sales;
        } else {
          return b.sales - a.sales;
        }
      });
    },
    [fetchStats.rejected]: (state, action) => {
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
    [fetchStatsByName.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchStatsByName.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      const airTableRecords = action.payload;
      const newRecords = airTableRecords.map((record) => record.fields);
    },
    [fetchStatsByName.rejected]: (state, action) => {
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const statsReducer = statsSlice.reducer;
export const { addPlayerRankings } = statsSlice.actions;

export const selectStats = (state) => {
  return state.stats.statsArray;
};

export const getScoreBoardStats = (state) => {
  return state.stats.playerMappedArray;
};

export const getScoreBoardStatsAttendance = (state) => {
  return state.stats.playerMappedAttenance;
};

export const getScoreBoardStatsKnowledge = (state) => {
  return state.stats.playerMappedKnowledge;
};

export const getScoreBoardStatsSales = (state) => {
  return state.stats.playerMappedSales;
};
export const getScoreBoardStatsTools = (state) => {
  return state.stats.playerMappedTools;
};

export const getScoreBoardStatsTeamwork = (state) => {
  return state.stats.playerMappedTeamwork;
};

export const getScoreBoardStatsAttendanceTeam = (state) => {
  return state.stats.teamMappedAttenance;
};

export const getScoreBoardStatsKnowledgeTeam = (state) => {
  return state.stats.teamMappedKnowledge;
};

export const getScoreBoardStatsSalesTeam = (state) => {
  return state.stats.teamMappedSales;
};
export const getScoreBoardStatsToolsTeam = (state) => {
  return state.stats.teamMappedTools;
};

export const getScoreBoardStatsTeamworkTeam = (state) => {
  return state.stats.teamMappedTeamwork;
};



export const getTeamScoreBoardStats = (state) => {
  return state.stats.teamMappedArray;
};

export const getPlayerRankings = (state) => {
  return state.stats.rankedPlayers;
};

export const selectStatsByName = (name) => (state) => {
  const stats = state.stats.statsArray.filter(
    (stat) => stat.fields.name === name
  );
  return stats;
};

export const selectStatsByTeam = (teamId) => (state) => {
  const stats = state.stats.statsArray.filter(
    (stat) => stat.fields.teamId == teamId
  );
  return stats;
};
