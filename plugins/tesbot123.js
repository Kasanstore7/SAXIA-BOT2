const { generateWAMessageFromContent } = require('@adiwajshing/baileys');

const handler  = async (m, { conn, usedPrefix: _p }) => {

  const info = `Yes, Im Here Mastah`;

  const pre = generateWAMessageFromContent(m.chat, { liveLocationMessage:{
    degreesLatitude: 34.672314, degreesLongitude: 135.484802,
    accuracyInMeters: 0,
    speedInMps: 0,
    degreesClockwiseFromMagneticNorth: 0,
    caption: info,
    sequenceNumber: 0,
    timeOffset: 8600,
    jpegThumbnail: await getBuffer(global.img),
    contextInfo: { mentionedJid: [m.sender] }
  }}, { quoted: fakes })

  return conn.relayMessage(m.chat, pre.message, { messageId: pre.key.id })
}

handler.customPrefix = /^(tes|bot|p|test)$/i;
handler.command = new RegExp;
module.exports = handler;