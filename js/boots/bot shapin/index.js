const Discord = require('discord.js')
const robot = new Discord.Client({intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_BANS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INVITES', 'GUILD_VOICE_STATES', 'GUILD_PRESENCES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING']}) 
const comms = require("./commands") 
const fs = require('fs') 
let config = require('./config.json')
let token = config.token;
let prefix = config.prefix 

robot.on("ready", function() {
  console.log(robot.user.tag)
})


robot.on('message', (msg) => {
  module.exports.msg = msg
  if (msg.author.username != robot.user.username && msg.author.discriminator != robot.user.discriminator) {
    var comm = msg.content.trim() + " "
    var comm_name = comm.slice(0, comm.indexOf(" "))
    var messArr = comm.split(" ")
    for (comm_count in comms.comms) {
      var comm2 = prefix + comms.comms[comm_count].name
      if (comm2 == comm_name) {
        comms.comms[comm_count].out(robot, msg, messArr)
      }
    }
  }
})

robot.login(token)