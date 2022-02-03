const Discord = require('discord.js')
const robot = new Discord.Client({ intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_BANS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INVITES', 'GUILD_VOICE_STATES', 'GUILD_PRESENCES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGE_TYPING', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_TYPING'] })
const config = require('./config.json')
const token = config.token
const prefix = config.prefix
const pool = require('./db')
let { MessageEmbed, Activity } = require('discord.js')

robot.on('ready', () => {
    console.log(robot.user.tag);
})
robot.on('message', async (mess) => {
    const user = mess.mentions.users.first() || mess.author;
    console.log('user', user.id);
    let message = mess.content
    console.log(message.substr(0, 9));

    let date = new Date
    date = date.toString().slice(0, 24)
    let avatar = user.avatarURL();
    await pool.query('SELECT * FROM info_user where id_user = $1', [user.id], (err, res, req) => {
        try {
            console.log('индетефикатор с таким user_id:', res, 'уже есть в базе');
            pool.query(
                'UPDATE info_user set name_user = $1, datacreate = $5, description_user = $3, mess = $4 where id_user = $2 RETURNING *',
                ['' + user.username, '' + res.rows[0].id_user, '' + user.discriminator, res.rows[0].mess + ` ${message} \n📆→ ${date} \n`, '' + (user.createdAt).toString().slice(0, 24)], (err, res, req) => {
                    console.log(res.rows[0])
                })
        } catch (e) {
            pool.query(`INSERT INTO info_user (name_user, id_user, description_user, avatar, mess, datacreate) values ($1, $2, $3, $4, $5, $6) RETURNING *`,
                [user.username, '' + user.id, '' + user.discriminator, avatar, ` ${message} \n📆→ ${date} \n `, '' + (user.createdAt).toString().slice(0, 24)], (err, res, req) => {
                    console.log(err, res.rows[0], req);
                })
        }
    })

    if (message.substr(0, 9) == prefix + 'infoUser') {
        await pool.query('SELECT * FROM info_user where id_user = $1', [user.id], (err, res, req) => {
            const exampleEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`Имя:\n ${res.rows[0].name_user}`)
                .setAuthor(`Информация о пользователи`)
                .setDescription(`Дискриминатор: \`\`\`${res.rows[0].description_user}\`\`\``)
                .addFields(
                    { name: `Id:`, value: `\`\`\`${res.rows[0].id_user}\`\`\`` },
                    { name: `Ваш аккаунт был создан:`, value: `\`\`\`${(res.rows[0].datacreate).toString().slice(0, 24)}\`\`\`` },
                )
                .setImage(res.rows[0].avatar)
                .setThumbnail(`${mess.guild.iconURL()}`)

            mess.channel.send({ embeds: [exampleEmbed] });
        })
    }
    console.log(message.substr(0, 8));

    if (message.substr(0, 8) == prefix + 'botHelp') {
        console.log(1111111111111111111111111111111);
        const exampleEmbed = new MessageEmbed()
            .addFields(
                { name: `/infoUser`, value: `\`\`\`выводит информацию о пользователе через упоминание @\`\`\`` },
            )
        mess.channel.send({ embeds: [exampleEmbed] });
    }





})

robot.login(token)