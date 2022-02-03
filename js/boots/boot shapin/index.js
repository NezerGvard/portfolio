const Discord = require('discord.js');
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const {prefix} = require("./config.json")

bot.on('ready', () =>{
    console.log('Щапин попущен' + bot.user.tag);
})

bot.on('message', message => {
    if (message.content == '/van') message.channel.send('Я попущен')
})
function random (min,max) {
    return  Math.floor(Math.random() * (max - min + 1) + min)
}
let nig = random(1,10000000000)
let vladick = random(1, 100)

bot.on('message', message1 => {
    if (message1.content == '/niggers') message1.channel.send(`меня ебали ${nig} негров`)
})

bot.on('message', vlad => {
    if (vlad.content == '/vlad') vlad.channel.send(`влад красава а я так и не смог получить права с ${vladick}`)
})

// var queue = new Map();

// const ytdl = require('ytdl-core');

// bot.on('ready', () => console.log("ready"));

// bot.on('message', async (message) => {
//     if(message.author.bot) return;
//     if(message.content.indexOf(prefix) !== 0) return;

//     const args = message.content.slice(prefix.length).trim().split(/ +/g);
//     const command = args.shift().toLowerCase();

//     if(command == "play") {
//         if(!args[0]) return;
//         let url = args.join(" ");
//         if(!url.match(/(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/)) return message.channel.send("Ссылка не работает!");

//         let serverQueue = queue.get(message.guild.id);
//         let vc = message.member.voice;

//         if(!vc) return message.channel.send("Вы не в голосовом канале!");

//         if(!vc.channel.permissionsFor(client.user).has('CONNECT') || !vc.channel.permissionsFor(client.user).has('SPEAK')) return message.channel.send("У меня недостаточно прав на подключению к каналу.");

//         let songinfo = await ytdl.getInfo(url);
//         let song = {
//             title: songinfo.title,
//             url: songinfo.video_url
//         }

//         if(!serverQueue) {
//             let queueConst = {
//                 textChannel: message.channel,
//                 voiceChannel: vc.channel,
//                 connection: null,
//                 songs: [],
//                 volume: 5,
//                 playing: true
//             };

//             queue.set(message.guild.id, queueConst);
//             queueConst.songs.push(song);

//             try {
//                 let connection = await vc.channel.join();
//                 queueConst.connection = connection
//                 playSong(message.guild, queueConst.songs[0])
//             } catch (error) {
//                 console.log(error);
//                 queue.delete(message.guild.id);
//                 return message.channel.send("Ошибка: " + error);
//             }
//         } else {
//             serverQueue.songs.push(song);
//             return message.channel.send(`${song.title} добавлен в очередь!`)
//         }
//     }
// })

// /**
//  * 
//  * @param {Discord.Guild} guild 
//  * @param {Object} song 
//  */
// async function playSong(guild, song) {
//     let serverQueue = queue.get(guild.id);

//     if(!song){
//         serverQueue.voiceChannel.leave();
//         queue.delete(guild.id);
//         return;
//     }

//     const dispatcher = serverQueue.connection.play(ytdl(song.url)).on('end', () => {
//         serverQueue.songs.shift();
//         playSong(guild, serverQueue.songs[0]);
//     })
//     .on('error', () => {
//         console.log(error)
//     })

//     dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
// }

bot.login('ODkzNTE1MTkwNzc4MzYzOTQ1.YVck3g._FoZvpTmdUOmV0-epiM9ss3cRnw');