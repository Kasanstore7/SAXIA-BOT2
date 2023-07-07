let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let teks = `FITUR SEDANG EROR`.trim()
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

handler.tags = ['main', 'update']
handler.command = /^(menfess|confess)$/i
handler.help = ['menfess']
module.exports = handler