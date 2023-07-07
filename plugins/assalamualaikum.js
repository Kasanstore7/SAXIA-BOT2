let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)

    let tio = `
Waalaikummussalam Warohmatulahi Wabarokatuh`.trim()
conn.sendMessage(m.chat, {
text: tio,
contextInfo: {
externalAdReply: {
title: "",
body: uptimex,
thumbnailUrl: "https://telegra.ph/file/923787faab8d91638b680.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['mode']
handler.tags = ['main']
handler.customPrefix = /^(assalamualaikum|Warohmatulahi|wabarakatuh)$/i 
handler.command = new RegExp
handler.limit = false

module.exports = handler

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik";
}