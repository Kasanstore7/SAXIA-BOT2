let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)

    let tio = `Kebijakan Privasi, Syarat Ketentuan dan Peraturan SAXIA - MD

🔐 Kebijakan Privasi
1. Bot tidak akan merekam data riwayat chat user.
2. Bot tidak akan menyebarkan nomor users.
3. Bot tidak akan menyimpan media yang dikirimkan oleh users.
4. Bot tidak akan menyalah gunakan data data users.
5. Owner berhak melihat data riwayat chat users.
6. Owner berhak melihat status users.
7. Owner dapat melihat riwayat chat, dan media yang dikirimkan users.
( DATA KALIAN AMAN 100% DAN PRIVASI KALIAN TERJAGA 100% )

📃 Peraturan Penggunaan Saxia-Botz
1. Dilarang menelpon Atau video call nomor bot.
2. Dilarang kirim berbagai bug, virtex, dll ke nomor bot.
3. Diharap Keras melakukan spam dalam penggunaan bot.
4. Dilarang Menculik bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Tidak menyalah gunakan fitur fitur bot.
6. Dilarang keras menggunakan fitur bot 18+ Bagi Yg bukan User Premium/bawah 18+
7. Dilarang Keras menghina atau mencaci Bot 
( Konsokuensi jika mlanggar= BLOCK, BANNED, SPAM BUG. BLACK LIST )

🖇️ Syarat Ketentuan  
1. Bot akan keluar dari group Jika Waktu Sewa Habis.
2. Bot dapat mem-ban users Jika melakukan Spam
3. Bot *tidak akan bertanggung jawab atas apapun yang users lakukan terhadap fitur bot.*
4. Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. Bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

📬Rules: 06 Mei 2022`.trim()
conn.sendMessage(m.chat, {
text: tio,
contextInfo: {
externalAdReply: {
title: "",
body: 'Melanggar Rules Mati aja',
thumbnailUrl: "https://telegra.ph/file/dc5a67d724b016574129b.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: false
}}},
{ quoted: m })
}
handler.help = ['rules']
handler.tags = ['info']
handler.customPrefix = /^(rules)$/i 
handler.command = new RegExp
handler.limit = false

module.exports = handler

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik";
}