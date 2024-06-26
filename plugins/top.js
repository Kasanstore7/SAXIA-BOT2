let handler = async(m, { conn, text, participants }) => {
  let teks = `${text ? text : ' '}\n\n`
		      	for (let mem of participants) {
		            teks += `@${mem.id.split('@')[10]}\n`
				}
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['top10 <pesan>']
handler.tags = ['group']
handler.command = /^(top10 orang paling malas)$/i

handler.group = true
handler.admin = true

module.exports = handler