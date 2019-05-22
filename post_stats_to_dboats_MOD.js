module.exports = {

    name: "Sends Stats to Discord Boats",

    section: "Other Stuff",

    subtitle: function(data) {
        return `Posted server count to Discord.Boats!`;
    },

    author: "MrSheldon",

    version: "1.0.0",

    short_description: "Send bot stats to Discord Bot List!",

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
		• Using this mod with events will be better. I suggest using this with Bot Join & Bot Leave Server event.<br>
	</p>
	</div>
</div>`
    },

    init: function() {},

    action: function(cache) {

        const data = cache.actions[cache.index];
        const token = this.evalMessage(data.dboatsToken, cache);

        var http = require('http')

        var body = JSON.stringify({
            server_count: this.getDBM().Bot.bot.guilds.size
        })

        var request = new http.ClientRequest({
            hostname: 'discord.boats',
            port: 443,
            path: '/api/bot/' + this.getDBM().Bot.bot.user.id,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })

        request.end(body)
    },


    mod: function(DBM) {}
};
