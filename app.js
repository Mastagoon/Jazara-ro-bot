const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on("ready", () => console.log(`Logged in as ${bot.user.username}`))


bot.on("guildMemberAdd",async (member) => {
    try {
        const role = await member.guild.roles.cache.find(r => r.name === "GM")
        member.setNickname(`GM ${member.user.username}`)
        if(role)
            member.roles.add(role)
    } catch(err) {
        console.log("an error has occurred.")
        console.log(err.message)
    }
})

bot.login("ODg0Njk4NjYxMDM1MDUzMTA4.YTcR1Q.6nG3tU6MI4EWVyNab3tT1NNOneY")