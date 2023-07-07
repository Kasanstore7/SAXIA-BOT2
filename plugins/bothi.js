let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f11babb8c87b26f5a1f5b.jpg', m, { packname: "database replit", author: "@tioclkp.replit" })
}

handler.customPrefix = /^(Bot|p|xia|manis|maniz|kiw kiw|cewek)$/i
handler.command = new RegExp

module.exports = handler