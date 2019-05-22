module.exports = {

	name: "Sends Stats to Discord Boats",

    section: "Other Stuff",
    
	subtitle: function (data) {
		return `Send server count to Discord.Boats!`;
    },
    
	author: "MrSheldon",

	version: "1.0.0", 

	short_description: "Send bot stats to Discord Bot List!",

	fields: ["dboatsToken"],

	depends_on_mods: [
		{name:'WrexMODS',path:'aaa_wrexmods_dependencies_MOD.js'}
	],

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
	<div style="float: left; width: 90%; padding-top: 8px;">
	<br>
	<p>
		• Using this mod with events will be better. I suggest using this with Bot Join & Bot Leave Server event.<br>
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
		const DBOATS = require('boats.js');
        const dboats = new DBOATS(token);
        
        dboats.postStats(this.getDBM().Bot.bot.guilds.size, this.getDBM().Bot.bot.user.id).catch(e => console.log(e))
	},


	mod: function (DBM) {
	}
};
