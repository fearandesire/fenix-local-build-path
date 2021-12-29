const routeInfos = {
	// Non-league views
	"/": "dashboard",
	"/new_league": "newLeague",
	"/new_league/:x": "newLeague",
	"/achievements": "achievements",
	"/account": "account",
	"/account/login_or_register": "loginOrRegister",
	"/account/lost_password": "lostPassword",
	"/account/reset_password/:token": "resetPassword",
	"/account/update_card": "accountUpdateCard",
	"/settings": "globalSettings",
	"/dropbox": "dropbox",

	// League views
	"/l/:lid": "leagueDashboard",
	"/l/:lid/new_team": "newTeam",
	"/l/:lid/inbox": "inbox",
	"/l/:lid/message": "message",
	"/l/:lid/message/:mid": "message",
	"/l/:lid/standings": "standings",
	"/l/:lid/standings/:season": "standings",
	"/l/:lid/standings/:season/:type": "standings",
	"/l/:lid/playoffs": "playoffs",
	"/l/:lid/playoffs/:season": "playoffs",
	"/l/:lid/league_finances": "leagueFinances",
	"/l/:lid/league_finances/:season": "leagueFinances",
	"/l/:lid/history": "history",
	"/l/:lid/history/:season": "history",
	"/l/:lid/hall_of_fame": "hallOfFame",
	"/l/:lid/manage_confs": "manageConfs",
	"/l/:lid/manage_teams": "manageTeams",
	"/l/:lid/roster": "roster",
	"/l/:lid/roster/:abbrev": "roster",
	"/l/:lid/roster/:abbrev/:season": "roster",
	"/l/:lid/roster/:abbrev/:season/:playoffs": "roster",
	"/l/:lid/schedule": "schedule",
	"/l/:lid/schedule/:abbrev": "schedule",
	"/l/:lid/team_finances": "teamFinances",
	"/l/:lid/team_finances/:abbrev": "teamFinances",
	"/l/:lid/team_finances/:abbrev/:show": "teamFinances",
	"/l/:lid/team_history": "teamHistory",
	"/l/:lid/team_history/:abbrev": "teamHistory",
	"/l/:lid/free_agents": "freeAgents",
	"/l/:lid/trade": "trade",
	"/l/:lid/trading_block": "tradingBlock",
	"/l/:lid/edit_awards": "editAwards",
	"/l/:lid/edit_awards/:season": "editAwards",
	"/l/:lid/draft": "draft",
	"/l/:lid/draft_history": "draftHistory",
	"/l/:lid/draft_history/:season": "draftHistory",
	"/l/:lid/draft_team_history": "draftTeamHistory",
	"/l/:lid/draft_team_history/:abbrev": "draftTeamHistory",
	"/l/:lid/game_log": "gameLog",
	"/l/:lid/game_log/:abbrev": "gameLog",
	"/l/:lid/game_log/:abbrev/:season": "gameLog",
	"/l/:lid/game_log/:abbrev/:season/:gid": "gameLog",
	"/l/:lid/game_log/:abbrev/:season/:gid/:view": "gameLog",
	"/l/:lid/leaders": "leaders",
	"/l/:lid/leaders/:season": "leaders",
	"/l/:lid/leaders/:season/:playoffs": "leaders",
	"/l/:lid/player_bios": "playerBios",
	"/l/:lid/player_bios/:abbrev": "playerBios",
	"/l/:lid/player_bios/:abbrev/:season": "playerBios",
	"/l/:lid/player_ratings": "playerRatings",
	"/l/:lid/player_ratings/:abbrev": "playerRatings",
	"/l/:lid/player_ratings/:abbrev/:season": "playerRatings",
	"/l/:lid/player_stats": "playerStats",
	"/l/:lid/player_stats/:abbrev": "playerStats",
	"/l/:lid/player_stats/:abbrev/:season": "playerStats",
	"/l/:lid/player_stats/:abbrev/:season/:statType": "playerStats",
	"/l/:lid/player_stats/:abbrev/:season/:statType/:playoffs": "playerStats",
	"/l/:lid/team_stats": "teamStats",
	"/l/:lid/team_stats/:season": "teamStats",
	"/l/:lid/team_stats/:season/:teamOpponent": "teamStats",
	"/l/:lid/team_stats/:season/:teamOpponent/:playoffs": "teamStats",
	"/l/:lid/league_stats": "leagueStats",
	"/l/:lid/league_stats/:abbrev": "leagueStats",
	"/l/:lid/league_stats/:abbrev/:teamOpponent": "leagueStats",
	"/l/:lid/league_stats/:abbrev/:teamOpponent/:playoffs": "leagueStats",
	"/l/:lid/player/:pid": "player",
	"/l/:lid/player_game_log/:pid/:season": "playerGameLog",
	"/l/:lid/negotiation": "negotiationList",
	"/l/:lid/negotiation/:pid": "negotiation",
	"/l/:lid/player_rating_dists": "playerRatingDists",
	"/l/:lid/player_rating_dists/:season": "playerRatingDists",
	"/l/:lid/player_stat_dists": "playerStatDists",
	"/l/:lid/player_stat_dists/:season": "playerStatDists",
	"/l/:lid/player_stat_dists/:season/:statType": "playerStatDists",
	"/l/:lid/team_stat_dists": "teamStatDists",
	"/l/:lid/team_stat_dists/:season": "teamStatDists",
	"/l/:lid/export_league": "exportLeague",
	"/l/:lid/fantasy_draft": "fantasyDraft",
	"/l/:lid/live_game": "liveGame",
	"/l/:lid/event_log": "eventLog",
	"/l/:lid/event_log/:abbrev": "eventLog",
	"/l/:lid/event_log/:abbrev/:season": "eventLog",
	"/l/:lid/delete_old_data": "deleteOldData",
	"/l/:lid/draft_lottery": "draftLottery",
	"/l/:lid/draft_lottery/:season": "draftLottery",
	"/l/:lid/draft_scouting": "draftScouting",
	"/l/:lid/draft_scouting/:season": "draftScouting",
	"/l/:lid/watch_list": "watchList",
	"/l/:lid/watch_list/:statType": "watchList",
	"/l/:lid/watch_list/:statType/:playoffs": "watchList",
	"/l/:lid/watch_list/:statType/:playoffs/:flagNote": "watchList",
	"/l/:lid/customize_player": "customizePlayer",
	"/l/:lid/customize_player/:pid": "customizePlayer",
	"/l/:lid/customize_player/:pid/:type": "customizePlayer",
	"/l/:lid/history_all": "historyAll",
	"/l/:lid/upcoming_free_agents": "upcomingFreeAgents",
	"/l/:lid/upcoming_free_agents/:season": "upcomingFreeAgents",
	"/l/:lid/god_mode": "godMode",
	"/l/:lid/power_rankings": "powerRankings",
	"/l/:lid/power_rankings/:season": "powerRankings",
	"/l/:lid/power_rankings/:season/:playoffs": "powerRankings",
	"/l/:lid/export_stats": "exportStats",
	"/l/:lid/player_feats": "playerFeats",
	"/l/:lid/player_feats/:abbrev": "playerFeats",
	"/l/:lid/player_feats/:abbrev/:season": "playerFeats",
	"/l/:lid/multi_team_mode": "multiTeamMode",
	"/l/:lid/team_records": "teamRecords",
	"/l/:lid/team_records/:byType": "teamRecords",
	"/l/:lid/team_records/:byType/:filter": "teamRecords",
	"/l/:lid/awards_records": "awardsRecords",
	"/l/:lid/awards_records/:awardType": "awardsRecords",
	"/l/:lid/transactions": "transactions",
	"/l/:lid/transactions/:abbrev": "transactions",
	"/l/:lid/transactions/:abbrev/:season": "transactions",
	"/l/:lid/transactions/:abbrev/:season/:eventType": "transactions",
	"/l/:lid/danger_zone": "dangerZone",
	"/l/:lid/depth": "depth",
	"/l/:lid/depth/:abbrev": "depth",
	"/l/:lid/depth/:abbrev/:pos": "depth",
	"/l/:lid/depth/:abbrev/:pos/:playoffs": "depth",
	"/l/:lid/frivolities": "frivolities",
	"/l/:lid/frivolities/colleges": "colleges",
	"/l/:lid/frivolities/countries": "countries",
	"/l/:lid/frivolities/draft_classes": "frivolitiesDraftClasses",
	"/l/:lid/frivolities/draft_position": "frivolitiesDraftPosition",
	"/l/:lid/frivolities/jersey_numbers": "frivolitiesJerseyNumbers",
	"/l/:lid/frivolities/teams/:type": "frivolitiesTeamSeasons",
	"/l/:lid/frivolities/trades/:type": "frivolitiesTrades",
	"/l/:lid/frivolities/trades/:type/:abbrev": "frivolitiesTrades",
	"/l/:lid/frivolities/most/:type": "most",
	"/l/:lid/frivolities/most/:type/:arg": "most",
	"/l/:lid/frivolities/relatives": "relatives",
	"/l/:lid/frivolities/relatives/:pid": "relatives",
	"/l/:lid/frivolities/roster_continuity": "rosterContinuity",
	"/l/:lid/frivolities/tragic_deaths": "tragicDeaths",
	"/l/:lid/all_star": "allStar",
	"/l/:lid/all_star/draft": "allStarDraft",
	"/l/:lid/all_star/draft/:season": "allStarDraft",
	"/l/:lid/all_star/dunk": "allStarDunk",
	"/l/:lid/all_star/dunk/:season": "allStarDunk",
	"/l/:lid/all_star/three": "allStarThree",
	"/l/:lid/all_star/three/:season": "allStarThree",
	"/l/:lid/all_star/history": "allStarHistory",
	"/l/:lid/award_races": "awardRaces",
	"/l/:lid/award_races/:season": "awardRaces",
	"/l/:lid/expansion_draft": "expansionDraft",
	"/l/:lid/protect_players": "protectPlayers",
	"/l/:lid/news": "news",
	"/l/:lid/news/:abbrev": "news",
	"/l/:lid/news/:abbrev/:season": "news",
	"/l/:lid/news/:abbrev/:season/:level": "news",
	"/l/:lid/news/:abbrev/:season/:level/:order": "news",
	"/l/:lid/scheduled_events": "scheduledEvents",
	"/l/:lid/export_players": "exportPlayers",
	"/l/:lid/export_players/:season": "exportPlayers",
	"/l/:lid/import_players": "importPlayers",
	"/l/:lid/gm_history": "gmHistory",
	"/l/:lid/settings": "settings",
	"/l/:lid/trade_summary/:eid": "tradeSummary",
	"/l/:lid/head2head": "headToHead",
	"/l/:lid/head2head/:abbrev": "headToHead",
	"/l/:lid/head2head/:abbrev/:season": "headToHead",
	"/l/:lid/head2head/:abbrev/:season/:type": "headToHead",
	"/l/:lid/head2head_all": "headToHeadAll",
	"/l/:lid/head2head_all/:season": "headToHeadAll",
	"/l/:lid/head2head_all/:season/:type": "headToHeadAll",
	"/l/:lid/injuries": "injuries",
	"/l/:lid/injuries/:abbrev": "injuries",
	"/l/:lid/injuries/:abbrev/:season": "injuries",
	"/l/:lid/daily_schedule": "dailySchedule",
	"/l/:lid/daily_schedule/:season": "dailySchedule",
	"/l/:lid/daily_schedule/:season/:day": "dailySchedule",
	"/l/:lid/season_preview": "seasonPreview",
	"/l/:lid/season_preview/:season": "seasonPreview",
};

export default routeInfos;