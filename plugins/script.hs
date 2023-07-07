var fetch = require("node-fetch");
var handler = async (m, { 
 conn,
 text,
 usedPrefix,
 command
 }) => {
var gh = 'https://github.com/BOTCAHX'
  let buttonMessage= {
'document':{'url':gh},
'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName':'Payment Methode',
'fileLength':'99999999999999',
'pageCount':'999',
'contextInfo':{
'externalAdReply':{
'showAdAttribution': true, 
'mediaUrl':gh,
'mediaType':2,
'previewType':'pdf',
'title':'INDONESIA',
'body':'© SAXIA',
'thumbnail':await(await fetch('https://telegra.ph/file/f4063ab3071f5c4af765a.png')).buffer(),
'sourceUrl':gh}},
'caption':'https://github.com/Aiinne/Aine-MD',
'footer':'©SAXIA TEAM',
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.help = ['script'];
handler.tags = ['info'];
handler.command = ['script', 'sc', 'aaaaa'];
module.exports = handler;