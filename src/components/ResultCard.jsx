/**
 * ResultCard
 * Displays the prediction result: winner and predicted goal difference.
 */
export default function ResultCard({ result, teamA, teamB }) {
    if (!result) return null;

    const { winner, goal_difference, group } = result;
    const isDraw = winner === "Draw";

    return (
        <div className="mt-8 bg-gradient-to-br from-pitch/60 to-black/40 border border-gold/30 rounded-2xl p-6 text-center shadow-2xl animate-fade-in">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
                Group {group} • Prediction
            </p>

            {isDraw ? (
                <h2 className="text-3xl font-bold text-gold">It's a Draw 🤝</h2>
            ) : (
                <h2 className="text-3xl font-bold text-gold">
                    🏆 {winner} wins
                </h2>
            )}

            <p className="text-gray-300 mt-3">
                Predicted Goal Difference{" "}
                <span className="font-bold text-white">
                    ({teamA} − {teamB})
                </span>
                :
            </p>
            <p className="text-4xl font-extrabold text-white mt-1">
                {goal_difference > 0 ? "+" : ""}
                {goal_difference}
            </p>
        </div>
    );
}