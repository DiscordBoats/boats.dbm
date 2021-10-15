module.exports = {
    name: "Post Stats to discord.boats",
    section: "Other Stuff",
    subtitle: function() {
        return "Posted stats to discord.boats!";
    },
    author: "Roee Lupo",
    version: "1.0.2",
    short_description: "The official Discord Bot Maker mod for posting bot stats to discord.boats",
    fields: ["dboatsToken"],
    html: function() {
        return `
<div id="modinfo">
	<p>
	   <u>Mod Info:</u><br>
	   Made by Roee Lupo<br>
	</p>
	<div style="float: left; width: 99%; padding-top: 8px;">
	   Your discord.boats Token:<br>
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
	    const DBOATS = WrexMODS.require("boats.js");
        const dboats = new DBOATS(token);

        dboats.postStats(this.getDBM().Bot.bot.guilds.size, this.getDBM().Bot.bot.user.id).catch((e) => console.log(e));
        this.callNextAction(cache);
    },
    mod: function(DBM) {}
};
