let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/2e47e51df44c568e8f281.jpg'
let dann =
`── 〔 TUTORIAL JADIBOT 〕 ───
✘.SILAHKAN KE BERANDA WHATSAPP 
✘.CARI TULISAN PERANGKAT TAUTAN 
✘.PENCET PERANGKAT TAUTAN 
✘.SILAHKAN MINTA KODE QR KE WA BOT
✘.KALO UDAH DAPET SILAHKAN SCAN
✘.TUNGGU SAMPAI PERANGKAT MASUK
✘.KALO UDAH MASUK KETIK LAGI JADIBOT
✘.CONNECT 

❍ TUTOR DAPETIN KODE QR ❍

✘.JOIN GROUP BOT
✘.JANGAN LUPA TAG OWNER
✘.BIAR DI ACC KALO UDAH DI ACC
✘.KETIK .jadibot DI NOMER BOT INI
✘.SILAHKAN SCAN  
✘.JANGAN LUPA DI BACA SEMUA`
 await conn.sendButton(m.chat, dann, wm, qris, [['Menu', '.menu']], m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(cbb||carabuatbot)$/i
module.exports = handler