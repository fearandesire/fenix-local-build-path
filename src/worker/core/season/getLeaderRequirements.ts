import { bySport } from "../../../common";
import { NUM_OUTS_PER_INNING } from "../../../common/constants.baseball";
import { defaultGameAttributes, g, helpers } from "../../util";

// This is for league leaders pages and player profile page stat tables
// https://www.basketball-reference.com/about/rate_stat_req.html has some info for basketball, can use as rough guide
// sortAscending can't use lowerIsBetter because some of these (like "tov") are considered "bad" if you lead it
const getLeaderRequirements = () => {
	const numGames = defaultGameAttributes.numGames[0].value;

	const basketballPerGameStats = {
		minStats: { gp: 58 },
	};
	const basketballAdvancedStats = {
		minStats: { min: 1500 },
	};
	const basketballAdvancedShootingStats = {
		minStats: { fga: 500 },
	};
	const basketballMinTp = Math.max(
		55 * Math.min(1, g.get("threePointTendencyFactor")),
		12,
	);
	const basketballTpStats = {
		minStats: {
			tp: basketballMinTp,
		},
	};
	const basketballMinFg = 300 * g.get("twoPointAccuracyFactor");
	const basketballFgStats = {
		minStats: { fg: basketballMinFg },
	};
	const basketballFt = {
		minStats: { ft: 125 * g.get("ftAccuracyFactor") },
	};

	const footballPssStats = {
		minStats: { pss: 14 * numGames },
	};
	const footballRusStats = {
		minStats: { rus: 6.25 * numGames },
	};
	const footballRecStats = {
		minStats: { rec: 1.875 * numGames },
	};

	return bySport<
		Record<
			string,
			{
				minStats?: Record<string, number>;
				sortAscending?: true;
				filter?: (p: any) => boolean;

				// For non-numeric stats and other stats that need to have a custom sort, like qbRec
				sortValue?: (value: any) => number;
			}
		>
	>({
		baseball: {
			ba: {
				minStats: { pa: numGames * 3.1 },
			},
			obp: {
				minStats: { pa: numGames * 3.1 },
			},
			slg: {
				minStats: { pa: numGames * 3.1 },
			},
			ops: {
				minStats: { pa: numGames * 3.1 },
			},
			era: {
				minStats: {
					outs: numGames * NUM_OUTS_PER_INNING,
				},
				sortAscending: true,
			},
			fip: {
				minStats: {
					outs: numGames * NUM_OUTS_PER_INNING,
				},
				sortAscending: true,
			},
			whip: {
				minStats: {
					outs: numGames * NUM_OUTS_PER_INNING,
				},
				sortAscending: true,
			},
			h9: {
				minStats: {
					outs: numGames * NUM_OUTS_PER_INNING,
				},
				sortAscending: true,
			},
			hr9: {
				minStats: {
					outs: numGames * NUM_OUTS_PER_INNING,
				},
				sortAscending: true,
			},
			bb9: {
				minStats: {
					outs: numGames * NUM_OUTS_PER_INNING,
				},
				sortAscending: true,
			},
			so9: {
				minStats: {
					outs: numGames * NUM_OUTS_PER_INNING,
				},
			},
			pc9: {
				minStats: {
					outs: numGames * NUM_OUTS_PER_INNING,
				},
				sortAscending: true,
			},
			sow: {
				minStats: {
					outs: numGames * NUM_OUTS_PER_INNING,
				},
			},
			babip: {
				minStats: {
					outs: numGames * NUM_OUTS_PER_INNING,
				},
			},
			gp: {},
			gs: {},
			pa: {},
			ab: {},
			r: {},
			h: {},
			"2b": {},
			"3b": {},
			hr: {},
			rbi: {},
			sb: {},
			cs: {},
			bb: {},
			so: {},
			tb: {},
			gdp: {},
			hbp: {},
			sh: {},
			sf: {},
			ibb: {},
			w: {},
			l: {},
			gpPit: {},
			gsPit: {},
			gf: {},
			cg: {},
			sho: {},
			sv: {},
			ip: {},
			rPit: {},
			er: {},
			hPit: {},
			"2bPit": {},
			"3bPit": {},
			hrPit: {},
			bbPit: {},
			soPit: {},
			pc: {},
			ibbPit: {},
			hbpPit: {},
			shPit: {},
			sfPit: {},
			bk: {},
			wp: {},
			bf: {},
			pos: {},
			pb: {},
			sbF: {},
			csF: {},
			csp: {},
			iso: {},
			rbat: {},
			rbr: {},
			rfldTot: {},
			rpos: {},
			rpit: {},
			raa: {},
			waa: {},
			rrep: {},
			rar: {},
			war: {},
			paMax: {},
			abMax: {},
			rMax: {},
			hMax: {},
			"2bMax": {},
			"3bMax": {},
			hrMax: {},
			rbiMax: {},
			sbMax: {},
			csMax: {},
			bbMax: {},
			soMax: {},
			gdpMax: {},
			tbMax: {},
			hbpMax: {},
			shMax: {},
			sfMax: {},
			ibbMax: {},
			ipMax: {},
			rPitMax: {},
			erMax: {},
			hPitMax: {},
			"2bPitMax": {},
			"3bPitMax": {},
			hrPitMax: {},
			bbPitMax: {},
			soPitMax: {},
			ibbPitMax: {},
			hbpPitMax: {},
			shPitMax: {},
			sfPitMax: {},
			bkMax: {},
			wpMax: {},
			bfMax: {},
			gpF: {},
			gsF: {},
			cgF: {},
			inn: {},
			ch: {},
			po: {},
			a: {},
			e: {},
			dp: {},
			fldp: {},
			rfld: {},
			rf9: {},
			rfg: {},
			winp: {
				minStats: {
					w: 10,
				},
			},
		},
		basketball: {
			pts: {
				minStats: { gp: 58, pts: 1400 },
			},
			trb: {
				minStats: { gp: 58, trb: 800 },
			},
			ast: {
				minStats: { gp: 58, ast: 400 },
			},
			orb: basketballPerGameStats,
			drb: basketballPerGameStats,
			tov: basketballPerGameStats,
			ba: basketballPerGameStats,
			pf: basketballPerGameStats,
			fg: basketballFgStats,
			fga: basketballFgStats,
			fgp: basketballFgStats,
			"2p": basketballFgStats,
			"2pa": basketballFgStats,
			"2pp": basketballFgStats,
			tp: basketballTpStats,
			tpa: basketballTpStats,
			tpp: basketballTpStats,
			ft: basketballFt,
			fta: basketballFt,
			ftp: basketballFt,
			fgAtRim: { minStats: { fgAtRim: basketballMinFg / 5 } },
			fgaAtRim: { minStats: { fgAtRim: basketballMinFg / 5 } },
			fgpAtRim: { minStats: { fgAtRim: basketballMinFg / 5 } },
			fgLowPost: { minStats: { fgLowPost: basketballMinFg / 5 } },
			fgaLowPost: { minStats: { fgLowPost: basketballMinFg / 5 } },
			fgpLowPost: { minStats: { fgLowPost: basketballMinFg / 5 } },
			fgMidRange: { minStats: { fgMidRange: basketballMinFg / 5 } },
			fgaMidRange: { minStats: { fgMidRange: basketballMinFg / 5 } },
			fgpMidRange: { minStats: { fgMidRange: basketballMinFg / 5 } },
			blk: {
				minStats: { gp: 58, blk: 100 },
			},
			stl: {
				minStats: { gp: 58, stl: 125 },
			},
			min: {
				minStats: { gp: 58, min: 1500 },
			},
			per: basketballAdvancedStats,
			ewa: basketballAdvancedStats,
			ws48: basketballAdvancedStats,
			ows: basketballAdvancedStats,
			dws: basketballAdvancedStats,
			ws: basketballAdvancedStats,
			obpm: basketballAdvancedStats,
			dbpm: basketballAdvancedStats,
			bpm: basketballAdvancedStats,
			vorp: basketballAdvancedStats,
			onOff100: basketballAdvancedStats,
			gp: {},
			gs: {},
			dd: {},
			td: {},
			qd: {},
			fxf: {},
			orbp: basketballAdvancedStats,
			drbp: basketballAdvancedStats,
			trbp: basketballAdvancedStats,
			astp: basketballAdvancedStats,
			stlp: basketballAdvancedStats,
			blkp: basketballAdvancedStats,
			tovp: {
				...basketballAdvancedStats,
				sortAscending: true,
			},
			usgp: basketballAdvancedStats,
			pm100: basketballAdvancedStats,
			ortg: basketballAdvancedStats,
			drtg: {
				...basketballAdvancedStats,
				sortAscending: true,
			},
			minMax: {},
			fgMax: {},
			fgaMax: {},
			tpMax: {},
			tpaMax: {},
			"2pMax": {},
			"2paMax": {},
			ftMax: {},
			ftaMax: {},
			orbMax: {},
			drbMax: {},
			trbMax: {},
			astMax: {},
			tovMax: {},
			stlMax: {},
			blkMax: {},
			baMax: {},
			pfMax: {},
			ptsMax: {},
			pmMax: {},
			gmscMax: {},
			tsp: basketballAdvancedShootingStats,
			efg: basketballAdvancedShootingStats,
			tpar: basketballAdvancedShootingStats,
			ftr: basketballAdvancedShootingStats,
		},
		football: {
			pssYdsPerAtt: footballPssStats,
			cmpPct: footballPssStats,
			qbRat: footballPssStats,
			rusYdsPerAtt: footballRusStats,
			pssTDPct: footballPssStats,
			pssIntPct: {
				...footballPssStats,
				sortAscending: true,
			},
			pssAdjYdsPerAtt: footballPssStats,
			pssYdsPerCmp: footballPssStats,
			pssYdsPerGame: footballPssStats,
			pssNetYdsPerAtt: footballPssStats,
			pssAdjNetYdsPerAtt: footballPssStats,
			pssSkPct: {
				...footballPssStats,
				sortAscending: true,
			},
			rusYdsPerGame: footballRusStats,
			rusPerGame: footballRusStats,
			recYdsPerRec: footballRecStats,
			recPerGame: footballRecStats,
			recYdsPerGame: footballRecStats,
			recCatchPct: footballRecStats,
			ydsPerTouch: footballRecStats,
			fgPct: {
				minStats: {
					fga: numGames,
				},
			},
			xpPct: {
				minStats: {
					xpa: numGames,
				},
			},
			pntYdsPerAtt: {
				minStats: {
					pnt: 2.5 * numGames,
				},
			},
			prYdsPerAtt: {
				minStats: {
					pr: 1.25 * numGames,
				},
			},
			krYdsPerAtt: {
				minStats: {
					kr: 1.25 * numGames,
				},
			},
			gp: {},
			gs: {},
			pssCmp: {},
			pss: {},
			pssYds: {},
			pssTD: {},
			pssInt: {},
			pssLng: {},
			pssSk: {},
			pssSkYds: {},
			fp: {},
			av: {},
			rus: {},
			rusYds: {},
			rusTD: {},
			rusLng: {},
			tgt: {},
			rec: {},
			recYds: {},
			recTD: {},
			recLng: {},
			touches: {},
			ydsFromScrimmage: {},
			rusRecTD: {},
			fmb: {},
			defInt: {},
			defIntYds: {},
			defIntTD: {},
			defIntLng: {},
			defPssDef: {},
			defFmbFrc: {},
			defFmbRec: {},
			defFmbYds: {},
			defFmbTD: {},
			defFmbLng: {},
			defSk: {},
			defTck: {},
			defTckSolo: {},
			defTckAst: {},
			defTckLoss: {},
			defSft: {},
			fmbLost: {},
			pen: {},
			penYds: {},
			fg0: {},
			fga0: {},
			fg20: {},
			fga20: {},
			fg30: {},
			fga30: {},
			fg40: {},
			fga40: {},
			fg50: {},
			fga50: {},
			fgLng: {},
			fg: {},
			fga: {},
			xp: {},
			xpa: {},
			pnt: {},
			pntYds: {},
			pntLng: {},
			pntBlk: {},
			pr: {},
			prYds: {},
			prTD: {},
			prLng: {},
			kr: {},
			krYds: {},
			krTD: {},
			krLng: {},
			allPurposeYds: {},
			qbRec: {
				sortValue: helpers.getRecordNumericValue,
			},
		},
		hockey: {
			pm: {
				filter: p => p.ratings.pos !== "G",
			},
			shft: {},
			min: {
				filter: p => p.ratings.pos !== "G",
			},
			svPct: {
				minStats: { sv: 800 },
			},
			gaa: {
				minStats: { sv: 800 },
				sortAscending: true,
			},
			ga: {},
			sa: {},
			sv: {},
			so: {},
			ppMin: {},
			shMin: {},
			pim: {},
			gpGoalie: {},
			gpSkater: {},
			g: {},
			a: {},
			pts: {},
			evG: {},
			ppG: {},
			shG: {},
			gwG: {},
			evA: {},
			ppA: {},
			shA: {},
			gwA: {},
			s: {},
			tsa: {},
			amin: {},
			fow: {},
			fol: {},
			blk: {},
			hit: {},
			tk: {},
			gv: {},
			gp: {},
			gc: {},
			ops: {},
			dps: {},
			gps: {},
			ps: {},
			gMax: {},
			aMax: {},
			pmMax: {},
			pimMax: {},
			evGMax: {},
			ppGMax: {},
			shGMax: {},
			evAMax: {},
			ppAMax: {},
			shAMax: {},
			sMax: {},
			tsaMax: {},
			shftMax: {},
			minMax: {},
			ppMinMax: {},
			shMinMax: {},
			fowMax: {},
			folMax: {},
			blkMax: {},
			hitMax: {},
			tkMax: {},
			gvMax: {},
			gaMax: {},
			svMax: {},
			gRec: {
				sortValue: helpers.getRecordNumericValue,
			},
			sPct: {
				minStats: { s: numGames },
			},
			foPct: {
				minStats: { fow: 2 * numGames },
			},
		},
	});
};

export default getLeaderRequirements;
