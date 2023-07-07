let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/4484197c4fc255c250af8.png', m, { packname: "wa.me/4915147222100", author: "KASANUDIN\n@Kasan" })
}

handler.customPrefix = /^(@4915147222100)$/i
handler.command = new RegExp

module.exports = handler