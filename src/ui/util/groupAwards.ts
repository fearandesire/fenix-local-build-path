import groupBy from "lodash/groupBy";
import type { Player } from "../../common/types";
import helpers from "./helpers";

const awardsOrder = [
	"Inducted into the Hall of Fame",
	"Most Valuable Player",
	"Won Championship",
	"Finals MVP",
	"Defensive Player of the Year",
	"Sixth Man of the Year",
	"Most Improved Player",
	"Rookie of the Year",
	"Offensive Rookie of the Year",
	"Defensive Rookie of the Year",
	"First Team All-League",
	"Second Team All-League",
	"Third Team All-League",
	"First Team All-Defensive",
	"Second Team All-Defensive",
	"Third Team All-Defensive",
	"All-Rookie Team",
	"All-Star MVP",
	"All-Star",
	"League Scoring Leader",
	"League Rebounding Leader",
	"League Assists Leader",
	"League Steals Leader",
	"League Blocks Leader",
];

const groupAwards = (awards: Player["awards"], shortNames?: boolean) => {
	const getType = (originalType: string) => {
		if (!shortNames) {
			return originalType;
		}

		let type = originalType;

		if (type === "Inducted into the Hall of Fame") {
			type = "Hall of Fame";
		} else if (type === "Most Valuable Player") {
			type = "MVP";
		} else if (type === "Won Championship") {
			type = "Champion";
		} else if (type === "Finals MVP") {
			type = "FMVP";
		} else if (type === "Defensive Player of the Year") {
			type = "DPOY";
		} else if (type === "Sixth Man of the Year") {
			type = "SMOY";
		} else if (type === "Most Improved Player") {
			type = "MIP";
		} else if (type === "Rookie of the Year") {
			type = "ROY";
		} else if (type === "Offensive Rookie of the Year") {
			type = "OROY";
		} else if (type === "Defensive Rookie of the Year") {
			type = "DROY";
		} else {
			if (type.endsWith("Leader")) {
				type = type.replace("League ", "");
			}

			type = type
				.replace("First Team ", "")
				.replace("Second Team ", "")
				.replace("Third Team ", "");

			if (type.endsWith(" Team")) {
				type = type.replace(" Team", "");
			}
		}

		return type;
	};

	const seen = new Set();
	const awardsGrouped = [];
	const awardsGroupedTemp = groupBy(awards, award => getType(award.type));

	for (const originalType of awardsOrder) {
		const type = getType(originalType);

		if (awardsGroupedTemp[type] && !seen.has(type)) {
			awardsGrouped.push({
				type,
				count: awardsGroupedTemp[type].length,
				seasons: helpers.yearRanges(awardsGroupedTemp[type].map(a => a.season)),
			});
			seen.add(type);
		}
	}

	// Handle non-default awards, just for fun if someone wants to add more
	for (const originalType of Object.keys(awardsGroupedTemp).sort()) {
		const type = getType(originalType);
		if (!seen.has(type)) {
			awardsGrouped.push({
				type,
				count: awardsGroupedTemp[type].length,
				seasons: helpers.yearRanges(awardsGroupedTemp[type].map(a => a.season)),
			});
			seen.add(type);
		}
	}

	return awardsGrouped;
};

export default groupAwards;