// ISO 3166-1 alpha-2 codes (FlagCDN format) for all 48 teams
const COUNTRY_CODES = {
    // Group A
    "Mexico": "mx",
    "South Africa": "za",
    "South Korea": "kr",
    "Czechia": "cz",
    // Group B
    "Canada": "ca",
    "Bosnia and Herzegovina": "ba",
    "Qatar": "qa",
    "Switzerland": "ch",
    // Group C
    "Brazil": "br",
    "Morocco": "ma",
    "Haiti": "ht",
    "Scotland": "gb-sct",
    // Group D
    "United States": "us",
    "Paraguay": "py",
    "Australia": "au",
    "Türkiye": "tr",
    // Group E
    "Germany": "de",
    "Curaçao": "cw",
    "Côte d'Ivoire": "ci",
    "Ecuador": "ec",
    // Group F
    "Netherlands": "nl",
    "Japan": "jp",
    "Sweden": "se",
    "Tunisia": "tn",
    // Group G
    "Belgium": "be",
    "Egypt": "eg",
    "Iran": "ir",
    "New Zealand": "nz",
    // Group H
    "Spain": "es",
    "Cabo Verde": "cv",
    "Saudi Arabia": "sa",
    "Uruguay": "uy",
    // Group I
    "France": "fr",
    "Senegal": "sn",
    "Iraq": "iq",
    "Norway": "no",
    // Group J
    "Argentina": "ar",
    "Algeria": "dz",
    "Austria": "at",
    "Jordan": "jo",
    // Group K
    "Portugal": "pt",
    "Congo DR": "cd",
    "Uzbekistan": "uz",
    "Colombia": "co",
    // Group L
    "England": "gb-eng",
    "Croatia": "hr",
    "Ghana": "gh",
    "Panama": "pa",
};

export default function TeamSelector({ label, teams, value, onChange }) {
    return (
        <div className="flex flex-col gap-3 w-full">
            <label className="text-sm font-semibold text-gray-300 uppercase tracking-wide">
                {label}
            </label>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                {/* Show flag only when a team is selected and a code exists */}
                {value && COUNTRY_CODES[value] && (
                    <img
                        src={`https://flagcdn.com/48x36/${COUNTRY_CODES[value]}.png`}
                        alt={`${value} flag`}
                        className="w-10 h-7 rounded shadow-md object-cover flex-shrink-0"
                    />
                )}

                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="flex-1 bg-transparent text-white outline-none cursor-pointer
                     [&>option]:text-indigo-100"
                >
                    <option value="">Select a team...</option>
                    {teams.map((team) => (
                        <option key={team} value={team}>
                            {team}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export { COUNTRY_CODES };