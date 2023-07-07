var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Mau cari apa`
await m.reply(wait)
  var apii = await fetch(`https://api.betabotz.org/api/search/openai-chat?text=${text}&apikey=Afifah`)
  var res = await apii.json()
  await m.reply(res.message)
}      
handler.command = handler.help = ['ai','openai','chatgpt'];
handler.tags = ['main'];
handler.premium = false
module.exports = handler;