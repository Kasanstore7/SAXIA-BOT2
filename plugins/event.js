let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `「 *Event* 」

єνєɴт вєℓσм тєяѕє∂ια
ᴇᴠᴇɴᴛ ʙᴇʟᴏᴍ ᴛᴇʀꜱᴇᴅɪᴀ
єνєɴт вєℓσм тєяѕє∂ια
ᴇᴠᴇɴᴛ ʙᴇʟᴏᴍ ᴛᴇʀꜱᴇᴅɪᴀ
`.trim(), m)
}

handler.help = ['Event']
handler.tags = ['main', 'utama']
handler.command = /^(Event)$/i

handler.exp = 150

Module.exports = handler