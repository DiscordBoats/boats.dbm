module.exports = {

    name: "Post Stats to Discord.Boats",

    section: "Other Stuff",

    subtitle: function(data) {
        return `Posted stats to Discord.Boats!`;
    },

    author: "Roee Lupo",

    version: "1.0.1",

    short_description: "The official Discord Bot Maker mod for posting bot stats to Discord.Boats",

    fields: ["dboatsToken"],

    html: function(isEvent, data) {
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
		• Using this mod with events will be better. I suggest using this with the Bot Join & Bot Leave Server events.<br>
	</p>
	</div>
</div>`
    },

    init: function() {},

    action: function(cache) {

        const data = cache.actions[cache.index];
        const token = this.evalMessage(data.dboatsToken, cache);

        const WrexMODS = this.getWrexMods();
	const DBOATS = WrexMODS.require('boats.js');
        const dboats = new DBOATS(token);

        dboats.postStats(this.getDBM().Bot.bot.guilds.size, this.getDBM().Bot.bot.user.id).catch(e => console.log(e));

        this.callNextAction(cache);
    },


    mod: function(DBM) {}
};
