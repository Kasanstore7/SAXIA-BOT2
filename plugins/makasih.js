let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/31a705379b764fa20c5e5.png', m, { packname: "wa.me/4915147222100", author: "KASANUDIN\n@Kasan" })
}

handler.customPrefix = /^(Terima Kasih|Thanks|tq|makasih|makasih|makaci|thx)$/i
handler.command = new RegExp

module.exports = handler