const fetch = require("node-fetch")
const util = require("util")

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `📍 Contoh :  ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    m.reply(wait)
     const url = args[0];
     let re = await fetch(`https://api.betabotz.org/api/download/igdowloader?url=${url}&apikey=${kasan}`)
     let message = await re.json()  
    try {             
        for (let i of message.message.url ) {
            conn.sendFile(m.chat, i, null, `*Saxia - Md*`, m)
        }
    } catch(err) {
        m.reply(util.format(message))
    }
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(Instagram|ig|igdl|igstory)$/i
handler.limit = true

module.exports = handler