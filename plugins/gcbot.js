let handler = async (m, { conn }) => {
conn.reply(m.chat, sgc, m) 
}
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i

module.exports = handler