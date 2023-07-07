let fs = require('fs')
let handler = async (m, { conn, command, usedPrefix, text }) => {
  let pac = JSON.parse(fs.readFileSync('./package.json'))
  let fetch = require('node-fetch')
  let _uptime = process.uptime() * 1000
  let a = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss') 
  let d = new Date(new Date + 3600000)
  let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  let runtime = clockString(_uptime)
  let usergakdaftar = Object.keys(global.db.data.users).length
  let userdaftar = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let ftex = {
            key: { 
                 fromMe: false,
                 remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
            message: { 
               "extendedTextMessage": {
                        "text": 'Info Saxia-MD',
                        "title": wm,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                             } 
                            }
  let infonyacok = `
${data.sa}${data.kki} ${conn.user.name} ${data.kka}
${data.gy} Library : *Baileys-MD*
${data.gy} Language : *Javascript*
${data.gy} Database : *MongoDB*
${data.gy} Version : *${pac.version}*
${data.gy} Developer : *@${owner[0].split("@")[0]}*
${data.gy} Runtime : *${runtime}*
${data.gy} Prefix : *Multi Prefix 「 ${usedPrefix} 」*
${data.gy} Mode : *${global.opts['self'] ? 'Self' : 'Public'}*
${data.gy} User : *${usergakdaftar}*
${data.gy} Register : *${userdaftar}*
${data.sb}
`.trim()
var as = `Tanggal : ${week}, ${date}\nWaktu : ${a} (WIB)`
 //conn.sendTBL(m.chat, infonyacok, as, fla + `${command}`, `Source Code Bot ✨`, data.sc, null, null, `Menu`, `${usedPrefix}menu`, null, null, null, null, m, 
     text: infonyacok,
contextInfo: { 
externalAdReply: { showAdAttribution: true,
title: 'Info Saxia Bot',
body: "",
thumbnailUrl: thumb,
sourceUrl: url,
mediaType: 1,
renderLargerThumbnail: true
}}},
{ quoted: ftex })

}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(info(bot)?)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}