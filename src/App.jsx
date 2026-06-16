/**
 * Main App component for the FIFA World Cup 2026 Match Predictor.
 *
 * Responsibilities:
 * - Fetch team/group data from the backend on mount.
 * - Let the user pick Team A and Team B (restricted to the same group).
 * - Send a prediction request to FastAPI and display the result.
 */

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import TeamSelector from "./components/TeamSelector";
import ResultCard from "./components/ResultCard";

//* Local
// const API_BASE_URL = "http://127.0.0.1:8000";
//* Deploy
const API_BASE_URL = "https://hossam-27-fifa-predictor-space.hf.space";

export default function App() {
  const [teams, setTeams] = useState({}); // { teamName: { group, rank, form } }
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch teams + groups on mount
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/teams`)
      .then((res) => setTeams(res.data))
      .catch(() => setError("Failed to load teams from the server."));
  }, []);

  // Group teams by their World Cup group letter
  const groupedTeams = useMemo(() => {
    const grouped = {};
    Object.entries(teams).forEach(([name, info]) => {
      grouped[info.group] = grouped[info.group] || [];
      grouped[info.group].push(name);
    });
    return grouped;
  }, [teams]);

  // Teams available for Team B: same group as Team A, excluding Team A itself
  const teamBOptions = useMemo(() => {
    if (!teamA || !teams[teamA]) return [];
    const group = teams[teamA].group;
    return groupedTeams[group].filter((t) => t !== teamA);
  }, [teamA, teams, groupedTeams]);

  // Reset Team B if it becomes invalid (different group than newly selected Team A)
  useEffect(() => {
    if (teamB && !teamBOptions.includes(teamB)) {
      setTeamB("");
      setResult(null);
    }
  }, [teamBOptions, teamB]);

  const handlePredict = async () => {
    setError("");
    setResult(null);

    if (!teamA || !teamB) {
      setError("Please select both teams.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/predict`, {
        team_a: teamA,
        team_b: teamB,
      });
      setResult(response.data);
    } catch (err) {
      setError(
        err.response?.data?.detail || "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pitch via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 backdrop-blur-md">
        <h1 className="text-3xl font-extrabold text-white text-center mb-1">
          FIFA World Cup 2026 ⚽
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Group Stage Match Predictor
        </p>

        <div className="space-y-5 my-5">
          <TeamSelector
            label="Team A"
            teams={Object.keys(teams)}
            value={teamA}
            onChange={(val) => {
              setTeamA(val);
              setResult(null);
            }}
          />

          <TeamSelector
            label="Team B"
            teams={teamBOptions}
            value={teamB}
            onChange={(val) => {
              setTeamB(val);
              setResult(null);
            }}
          />
        </div>

        {error && (
          <p className="mt-4 text-red-400 text-sm text-center">{error}</p>
        )}

        <button
          onClick={handlePredict}
          disabled={loading || !teamA || !teamB}
          className="w-full mt-5 bg-indigo-100 hover:bg-indigo-200 disabled:opacity-40
                     disabled:cursor-not-allowed disabled:bg-indigo-100 text-black font-bold py-3 rounded-xl
                     transition-all duration-200 shadow-lg cursor-pointer"
        >
          {loading ? "Predicting..." : "Predict Match"}
        </button>

        <ResultCard result={result} teamA={teamA} teamB={teamB} />
      </div>
    </div>
  );
}