let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  var hl = []
  hl[0] = text.split('|')[0]
  hl[0] = no(hl[0]) + "@s.whatsapp.net"
  hl[1] = text.split('|')[1]
  
  if (!text) return conn.reply(m.chat, `${usedPrefix}claimp <nomor|hari>\n*Example:* ${usedPrefix}claimp 6283137550315|7\n\n• ${usedPrefix}claimp <@tag|hari>\n*Example:* ${usedPrefix}claimp @⁨Salwa for Dann.⁩|7`, m)
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'Pengguna tidak ada didalam data base'
//  var jumlahHari = 86400000 * hl[1]
   var jumlahHari = 1000 * hl[1]
  var now = new Date() * 1
  global.db.data.users[hl[0]].premium = 3
 // if (now < global.db.data.users[hl[0]].premiumDate) global.db.data.users[hl[0]].premiumDate += jumlahHari
  else
//global.db.data.users[hl[0]].premiumDate = now + jumlahHari
  conn.reply(m.chat,`${htki} *Upgrade Premium* ${htka}\n\nBerhasil menambahkan akses premium kepada *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.\n\n*Premium : ${msToDate(global.db.data.users[hl[0]].premiumDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } })
  conn.reply(hl[0],`${htki} *Upgrade Premium* ${htka}\n\nBerhasil menambahkan akses premium kepada *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.\n\n*Premium : ${msToDate(global.db.data.users[hl[0]].premiumDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } }) 

}
handler.help = ['claimp <nomor|hari>']
handler.tags = ['owner']
handler.command = /^(claimp)$/i
handler.owner = true
handler.fail = null
module.exports = handler

function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24*60*60*1000));
  daysms = ms % (24*60*60*1000);
  hours = Math.floor((daysms)/(60*60*1000));
  hoursms = ms % (60*60*1000);
  minutes = Math.floor((hoursms)/(60*1000));
  minutesms = ms % (60*1000);
  sec = Math.floor((minutesms)/(1000));
  return days+" Days " + hours + " Hours " + minutes + " Minutes";
  // +minutes+":"+sec;
}