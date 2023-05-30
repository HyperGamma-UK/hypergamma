export default {
	// "uri": `http://127.0.0.1:3000`, // Will be added by the .env contents
	"timeout": "5.0",
	"buffer":  "0.1",
	"throttle": "0.1",
	"heartbeat": "30.0",
	// "auth": {
	// 	"token": "Q79v5tcxVQ8u"
	// },
	"data": {

        // General Information
		"provider":            		"1", // info about the game providing info 
		"map":                 		"1", // mode, map, phase, team scores
		"round":               		"1", // round phase and the winning team

        // Player
		"player_id":           		"1", // steamid
		"player_state":        		"1", // armor, flashed, equip_value, health, etc. 
		"map_round_wins":      		"1",	// history of round wins
		"player_match_stats": 		"1",	// scoreboard info
		"player_weapons":			"1", // list of player weapons and weapon state

        // // Match Spectators Only
		// "allplayers_id":       		"1", // the steam id of each player
		// "allplayers_state":    		"1", // the player_state for each player 
		// "allplayers_match_stats":  	"1", // the scoreboard info for each player
		// "allplayers_weapons":  		"1", // the player_weapons for each player
		// "allplayers_position": 		"1", // player_position but for each player
		// "phase_countdowns":    		"1", // time remaining in tenths of a second, which phase
		// "allgrenades":         		"1", // grenade effecttime, lifetime, owner, position, type, velocity
		// "bomb":                		"1", // location of the bomb, who's carrying it, dropped or not
		// "player_position":     		"1", // forward direction, position for currently spectated player
	}
}