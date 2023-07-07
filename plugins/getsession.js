let fs = require('fs')
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File Dann.data.json')
    let sesi = await fs.readFileSync('./sessions')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'sessions' }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['owner']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i

handler.owner = true

module.exports = handler