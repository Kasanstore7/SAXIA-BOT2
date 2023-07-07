let { sticker } = require('../lib/sticker.js')

let handler = async (m, { conn }) => { 
let stiker = await sticker(null, global.API(`https://telegra.ph/file/e2b5f64f9b450b6bcfda1.jpg`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
handler.customPrefix = /@6283137550315 |@6283137550315$/i
handler.command = new RegExp

module.exports = handler