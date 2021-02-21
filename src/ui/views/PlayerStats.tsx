import PropTypes from "prop-types";
import { DataTable, MoreLinks, PlayerNameLabels } from "../components";
import useTitleBar from "../hooks/useTitleBar";
import { getCols, helpers } from "../util";
import type { View } from "../../common/types";
import { isSport } from "../../common";

export const formatStatGameHigh = (
	ps: any,
	stat: string,
	statType?: string,
	defaultSeason?: number,
) => {
	if (stat.endsWith("Max")) {
		if (!Array.isArray(ps[stat])) {
			return null;
		}

		// Can be [max, gid] or (for career stats) [max, gid, abbrev, tid, season]
		const row = (ps[stat] as unknown) as
			| [number, number]
			| [number, number, string, number, number];

		const abbrev = row.length > 3 ? row[2] : ps.abbrev;
		const tid = row.length > 3 ? row[3] : ps.tid;
		const season =
			row.length > 3
				? row[4]
				: ps.season !== undefined
				? ps.season
				: defaultSeason;

		return (
			<a
				href={helpers.leagueUrl([
					"game_log",
					`${abbrev}_${tid}`,
					season as any,
					row[1],
				])}
			>
				{helpers.roundStat(row[0], stat, statType === "totals")}
			</a>
		);
	}

	return helpers.roundStat(ps[stat], stat, statType === "totals");
};

const PlayerStats = ({
	abbrev,
	players,
	playoffs,
	season,
	statType,
	stats,
	superCols,
	userTid,
}: View<"playerStats">) => {
	useTitleBar({
		title: "Player Stats",
		jumpTo: true,
		jumpToSeason: season,
		dropdownView: "player_stats",
		dropdownFields: {
			teamsAndAllWatch: abbrev,
			seasonsAndCareer: season === undefined ? "career" : season,
			statTypesAdv: statType,
			playoffs,
		},
	});

	const cols = getCols(
		"Name",
		"Pos",
		"Age",
		"Team",
		...stats.map(
			stat => `stat:${stat.endsWith("Max") ? stat.replace("Max", "") : stat}`,
		),
	);

	if (statType === "shotLocations") {
		cols[cols.length - 7].title = "M";
		cols[cols.length - 6].title = "A";
		cols[cols.length - 5].title = "%";
	}

	let sortCol = cols.length - 1;
	if (isSport("football")) {
		if (statType === "passing") {
			sortCol = 9;
		} else if (statType === "rushing") {
			sortCol = cols.length - 3;
		} else if (statType === "defense") {
			sortCol = 16;
		} else if (statType === "kicking") {
			sortCol = cols.length - 11;
		} else if (statType === "returns") {
			sortCol = 12;
		}
	}

	const rows = players.map(p => {
		let pos;
		if (Array.isArray(p.ratings) && p.ratings.length > 0) {
			pos = p.ratings[p.ratings.length - 1].pos;
		} else if (p.ratings.pos) {
			pos = p.ratings.pos;
		} else {
			pos = "?";
		}

		// HACKS to show right stats, info
		let actualAbbrev;
		let actualTid;
		if (season === undefined) {
			p.stats = p.careerStats;
			actualAbbrev = p.abbrev;
			actualTid = p.tid;
			if (playoffs === "playoffs") {
				p.stats = p.careerStatsPlayoffs;
			}
		} else {
			actualAbbrev = p.stats.abbrev;
			actualTid = p.stats.tid;
		}

		const statsRow = stats.map(stat =>
			formatStatGameHigh(p.stats, stat, statType, season),
		);

		return {
			key: p.pid,
			data: [
				{
					value: (
						<PlayerNameLabels
							injury={p.injury}
							jerseyNumber={p.stats.jerseyNumber}
							pid={p.pid}
							skills={p.ratings.skills}
							watch={p.watch}
						>
							{p.nameAbbrev}
						</PlayerNameLabels>
					),
					sortValue: p.name,
					searchValue: p.name,
				},
				pos,
				p.age,
				<a
					href={helpers.leagueUrl([
						"roster",
						`${actualAbbrev}_${actualTid}`,
						...(season === undefined ? [] : [season]),
					])}
				>
					{actualAbbrev}
				</a>,
				...statsRow,
			],
			classNames: {
				"table-danger": p.hof,
				"table-info": actualTid === userTid,
			},
		};
	});

	return (
		<>
			<MoreLinks
				type="playerStats"
				page="player_stats"
				season={season}
				statType={statType}
				keepSelfLink
			/>

			<p>
				Players on your team are{" "}
				<span className="text-info">highlighted in blue</span>. Players in the
				Hall of Fame are <span className="text-danger">highlighted in red</span>
				.
				{isSport("basketball")
					? " Only players averaging more than 5 minutes per game are shown."
					: null}
			</p>

			<DataTable
				cols={cols}
				defaultSort={[sortCol, "desc"]}
				name={`PlayerStats${statType}`}
				rows={rows}
				superCols={superCols}
				pagination
			/>
		</>
	);
};

PlayerStats.propTypes = {
	abbrev: PropTypes.string.isRequired,
	players: PropTypes.arrayOf(PropTypes.object).isRequired,
	playoffs: PropTypes.oneOf(["playoffs", "regularSeason"]).isRequired,
	season: PropTypes.number, // Undefined for career totals
	statType: PropTypes.string.isRequired,
	stats: PropTypes.arrayOf(PropTypes.string).isRequired,
	superCols: PropTypes.array,
	userTid: PropTypes.number,
};

export default PlayerStats;
