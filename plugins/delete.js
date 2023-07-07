let handler = function (m) {
  if (!m.quoted) throw false
 let { chat, fromUser, id, isBaileys , user, isBotAdmin, isAdmin } = m.quoted
 if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
 conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
handler.help = ['delete']
handler.tags = ['main']

handler.command = /^del|delete|unsend?$/i
handler.admin = true

module.exports = handler