let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
  const ftex = {
            key: { 
                 fromMe: false,
                 remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
            message: { 
               "extendedTextMessage": {
                        "text": 'Total Fitur Saxia',
                        "title": wm,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                             } 
                            }
conn.sendMessage(m.chat, {
text: `Total Fitur saat ini: ${totalf}`,
contextInfo: {
externalAdReply: { showAdAttribution: true, 
title: wm,
body: 'Total Fitur',
thumbnailUrl: thumb,
sourceUrl: sig,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: ftex})
}

handler.help = ['totalfitur']
handler.tags = ['tools']
handler.command = ['totalfitur']
handler.limit = true
module.exports = handler