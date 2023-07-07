let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes cheat sebesar*\n\nMoney: Infinity\nLimit: 10000\nLevel: 0`, m)
        global.db.data.users[m.sender].money = Infinity
        global.db.data.users[m.sender].limit = 10000
        global.db.data.users[m.sender].level = 0
        
}
handler.help = ['cheat']
handler.tags = ['game']
handler.command = /^(cheat)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler