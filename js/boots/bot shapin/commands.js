const Discord = require('discord.js')
const config = require('./config.json')
const prefix = config.prefix
const versions = config.versions
const token = config.token
let msg = require('./index')
let {MessageEmbed, Activity} = require('discord.js')
const { parseZone } = require('moment-timezone')
let yt = require('ytdl-core')

function random (min,max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}







var comms_list = [{
    name: 'test',
    out: function test(robot, mess, args){
        mess.channel.send('Test!')
    },
    about: 'Тестовая комманда'
},
{
    name: 'hello',
    out: function hello(robot, mess, args){
        mess.reply('Привет!')
    },
    about: 'Команда для приветствия'    
},
{
    name: 'van',
    out: function van(robot, mess, args){
        mess.channel.send(`Семпай трахни меня пожалуйста <3 ♪♪♪`)
    },
    about: 'vanya???'
},
{
    name: 'niggers',
    out: function niggers(robot, mess, args){
        mess.channel.send(`А ${random(100, 1000000)} негров за раз много или нет??? 卐 卐 卐`)
    },
    args: 'nigga?'
},
{
    name: 'vlad',
    out: function vlad(robot, mess, args){
        mess.channel.send(`Влад смог сдать с 1 раза, а я не смог с ${random(10,531)} попытки`)
    },
    args: 'vlad krasava'
},
{
    name: 'opg',
    out: function orel_or_reshka(robot, mess, args){
        mess.channel.send('монетка подбрасывается ...')
        let a = Math.floor(Math.random()*3)+1
        if (a ===1){
            mess.channel.send(':full_moon: Орёл!')
        }else if (a === 2){
            mess.channel.send(':new_moon: Решка!')
        }else {
            mess.channel.send(':last_quarter_moon: Монета упала ребром!')
        }
    },
    args: 'орел или решка'
},
{
    name: 'clear',
    out: function(robot, mess, args){
        const arggs = mess.content.split(' ').slice(1)
        const amount = arggs.join(' ')
        if (!amount) return mess.channel.send('Вы не указали, сколько сообщений нужно удалить!')
        if (isNaN(amount)) return mess.channel.send('Это не число!')

        if(amount >= 100) return mess.channel.send('Более 100 сообщений удалить нельзя, я запрещаю вам какать')
        if(amount < 1) return mess.channel.send('Число должно быть больше 1')

        async function delete_messages(){

            await mess.channel.messages.fetch({
                limit: amount
            }).then(messages => {
                mess.channel.bulkDelete(messages)
                mess.channel.send(`Удалено ${amount} сообщений`)
            })
        }

        delete_messages()
    },
    args: 'очистка'
},
{
    name: 'name',
    out: function(robot, mess, args){
        const namePeople = require('./name')
        let nameP = namePeople.names
        console.log(nameP.length)

        const arggs = mess.content.split(' ').slice(1)
        const amount = arggs.join(' ')

        let RandomName

        if(!isNaN(amount)) {
            RandomName = nameP[amount]
        }
        if(!amount){
            RandomName = nameP[Math.floor(Math.random() * (nameP.length))]
        }
        
        mess.channel.send(`Твое настоящее имя ${RandomName}`)
    },
    args: 'имя'
},
{
    name: 'userInfo',
    out: async function(robot, mess, args){


    const user = mess.mentions.users.first() || robot.users.cache.get(args[0]) || mess.author;
    const moment = require('moment');
    const member =  mess.mentions.members.first() || mess.guild.members.cache.get(args[0]) || mess.member;

    let today = new Date 
    let result = (Math.round(today - user.createdAt) /(1000*60*60*24)).toFixed(0)
    let resultGuild = (Math.round(today - moment(member.joinedAt)) /(1000*60*60*24)).toFixed(0)

    let pToday = Date.now()
    let messegCreate = mess.createdTimestamp
    let ping = (''+(pToday - messegCreate)).slice(0,2)
        if (ping <0 ){
            ping = (''+(messegCreate - pToday)).slice(0,2)
        }
    
    let role = (member.roles.cache.map(r => '🍆 '+r.name+ ' 📡').join(` \n `))
        role = role.slice(0,role.length-14)
        

    
        console.log(resultGuild, member.presence.status)//, ping);

    let status
    switch (member.presence.status) {
        case 'online' : status = `"Онлайн" <:status_online:897864232320774205>` ;  break
        case 'offline': status = `"Офлайн" <:status_offline:897864231846838304>`;  break
        case 'idle'   : status = `"Не активен" <:status_idle:897864232287236126>`; break
        case 'dnd'   : status = `"Не беспокоить" <:status_busy:897864232413069372>`; break
    
        default:`Кто ты такой блять????`
            break;
    }

        const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`Имя: ${user.username} \nТвои роли: \n${role}`)
	.setAuthor(`Информация о моей повелителе`)
	.setDescription(`#${user.discriminator}`)
    .addFields(
        { name: `Твой айди мой повелителя: `, value: user.id},
        { name: `Ваш аккаунт был создан ${result} дней назад`, value: `Ты с нами ${resultGuild} дня :woman_with_headscarf: :poop: :pig: !!! `},
        { name: `Ваш статус: ${status}`, value: `Ваш пинг: ${ping} ms`},
    )
        
	.setImage(user.displayAvatarURL())
	.setFooter(user.tag)

    

mess.channel.send({ embeds: [exampleEmbed] });
    },
    args: 'userInfo'
},
{
    name: 'play',
    out: async function(robot, mess, args){
        const ytdl = require('ytdl-core');
        const { Client, Intents } = require('discord.js');
        // Create a new client instance
        const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
        let message = mess

        const queue = new Map()
        const serverQueue = queue.get(message.guild.id)

        async function execute(message, serverQueue) {
        const args = message.content.split(' ');
        const voiceChannel = message.member.voiceChannel;
        if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
            const permissions =     voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
            return message.channel.send('I need the permissions to join and   speak in your voice channel!');
        }
        }
        const songInfo = await ytdl.getInfo(args[1]);
        const song = {
        title: songInfo.title,
        url: songInfo.video_url,
        };

        if (!serverQueue) {
  
        }else {
         serverQueue.songs.push(song);
         console.log(serverQueue.songs);
         return message.channel.send(`${song.title} has been added to the queue!`);
        }

        const queueContruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true,
           };

        // Setting the queue using our contract
        queue.set(message.guild.id, queueContruct);
        // Pushing the song to our songs array
        queueContruct.songs.push(song);
        
        try {
        // Here we try to join the voicechat and save our connection into our object.
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        // Calling the play function to start a song
        play(message.guild, queueContruct.songs[0]);
        } catch (err) {
        // Printing the error message if the bot fails to join the voicechat
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
        }

        const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', () => {
        console.log('Music ended!');
        // Deletes the finished song from the queue
        serverQueue.songs.shift();
        // Calls the play function again with the next song
        play(guild, serverQueue.songs[0]);
        })
        .on('error', error => {
        console.error(error);
        });
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

            
    },
    args: 'play music'
}
]

module.exports.comms = comms_list
