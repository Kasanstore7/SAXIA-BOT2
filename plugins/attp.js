let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('Tunggu Sebentar...')
  let res = `https://api.ibeng.tech/api/maker/attp?text=${response[0]}&apikey=tamvan`
  conn.sendFile(m.chat, res, 'dann.webp', `Done`, m, false)
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^(attp)$/i
handler.limit = true
handler.premium = true

module.exports = handler