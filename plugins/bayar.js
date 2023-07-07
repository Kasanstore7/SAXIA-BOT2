let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let teks = `PEMBAYARAN
DANA : 083824251440
GOPAY : 083824251440 
PULSA : COMING SOON
QRISH : COMING SOON`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: 'tes',
        sections:  [{title: "Klik di bawah", rows: [
        {title: 'Menu Utama', description: "Kembali ke semua perintah", rowId:".menu"},
        {title: 'Nomor Owner', description: "CHAT *P* TIDAK AKAN DI BALAS", rowId:".owner"},
       ] }],
        listType: 1
       }
    m.reply(teks)
}

handler.tags = ['info', 'main']
handler.command = /^(bayar|bayarstore)$/i
handler.help = ['bayar']
module.exports = handler