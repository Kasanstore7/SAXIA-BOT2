let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/e2b5f64f9b450b6bcfda1.jpg'
let dann =
`
┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Dana: ${global.pdana}
┃Pulsa: ${global.ppulsa}
┃Pulsa: Coming soon
┃Gopay: ${global.pgopay}
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Saweria: https://saweria.co/
┃Trakteer: https://trakteer.id/
┃Socialbuzz: https://socialbuzz.com/
┃Thanks for Donationing!
┗━━━ꕥ
`
 await conn.sendButton(m.chat, dann, wm, qris, [['Menu', '.menu']], m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler