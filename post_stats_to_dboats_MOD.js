module.exports = {

	name: "Sends Stats to Discord Boats",

    section: "Other Stuff",
    
	subtitle: function (data) {
		const info = ['Only Server Count', 'Server Count'];
		return `Send ${info[parseInt(data.info)]} to Discord.Boats!`;
    },
    
	author: "MrSheldon",

	version: "1.0.0", 

	short_description: "Send bot stats to Discord Bot List!",

	fields: ["dboatsToken", "info"],

	html: function (isEvent, data) {
		return `
<div id="modinfo">
	<p>
	   <u>Mod Info:</u><br>
	   Made by MrSheldon!<br>
	</p>
	<div style="float: left; width: 99%; padding-top: 8px;">
	   Your Discord.Boats Token:<br>
	   <input id="dboatsToken" class="round" type="text">
	</div><br>
	<p>
		• Using this mod with events will be better. I suggest using this with Bot Join & Bot Leave Server event.
	</p>
	</div>
</div>`
	},

	init: function () {
	},

	action: function (cache) {

		const data = cache.actions[cache.index];
		const token = this.evalMessage(data.dboatsToken, cache);

		const WrexMODS = this.getWrexMods(); 
		const DBOATS = WrexMODS.require('boats.js'); 
        const dboats = new DBOATS(token);
        
        dboats.postStats(this.getDBM().Bot.bot.guilds.size, this.getDBM().Bot.bot.user.id).catch(e => console.log(e))
	},


	mod: function (DBM) {
	}
};
