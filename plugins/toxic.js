let handler = async (m, { conn, command, text }) => {
  await conn.sendMessage(m.chat, { delete: m.key})
}
handler.customPrefix = /(kontol|memek|anjing|anj|mek|mmk|kntl|tai|bajingan|asu|asuu|njing|njir|kon|pepek|ppk|poke|anjir|Anjrr|bedebah|sialan)/i
handler.command = new RegExp()

module.exports = handler