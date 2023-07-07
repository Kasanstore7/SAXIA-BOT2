let handler = async (m, { conn }) => {
	
	// Link Script jgn di ganti ya pliss
    // Kalo mau masukin github kamu tinggal add aja link githubnya tapi jangan di hapus sumber script!
    // Jangan Ngeyell..
    // Kalo ngeyel gk bakal gw up sc lgi.
    
    let txt = `*BIG THANKS TO*


Nayla Xya.
https://github.com/naylatod7 
Kasan Xya.
https://github.com/kasanstore7
Marcel:

Aiine :
https://github.com/Aiinne/

https:/\`\`\`$Saxia\`\`\`
`
     conn.reply(m.chat, txt, global.fdocs)
}
handler.help = ['Thanks to']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler