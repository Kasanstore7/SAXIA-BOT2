let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Masukkan Aplikasi!\n\nContoh: ${usedPrefix + command} telegram`
	let dann = await fetch(`https://api.lolhuman.xyz/api/playstore?apikey=dannlaina&query=${text}`)
	let res = await dann.json()
	let hasil = `Nama: ${res.result.title}\nID: ${res.result.appId}\nLink: ${res.result.url}\nDeveloper: ${res.result.developer}\nDeveloper ID: ${res.result.developerId}\nCurrency: ${res.result.currency}\nPrice: ${res.result.price}\nFree: ${res.result.free}\nSummary: ${res.result.summary}\nVersi: ${res.result.score}\nScoreText: ${res.result.scoreText}`
	let thumb = `https://api.lolhuman.xyz/api/gimage?apikey=dannlaina&query=${text}`
	await conn.sendButton(m.chat, hasil, wm, thumb, [['Menu', '.menu']], m)
}

handler.help = ['playstore']
handler.tags = ['internet', 'tools']
handler.command = /^(playstore|appstore)$/i

module.exports = handler