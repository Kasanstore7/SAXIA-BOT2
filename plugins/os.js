/*var os = require("os")
var speed = require("performance-now");

var {
 spawn,
 exec, 
execSync 
} = require("child_process");

var handler = async (m, { 
conn 
}) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr, json) => {
          let child = stdout.toString("utf-8");
          let ssd =
 child.replace(/Memory:/, "Ram:");
          m.reply(`*CPU*: ${ssd}\n*Speed*: *${latensi.toFixed(4)} MS*\n*Memory:* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*\n*OS:* *${os.version()}*\n*Platform:* *${os.platform()}*\n*Hostname:* *${os.hostname()}*`);
            });
}
handler.command = handler.help = ['os'];
handler.tags = ['main'];
module.exports = handler*/

var os = require("os")
var speed = require("performance-now");

var {
 spawn,
 exec, 
execSync 
} = require("child_process");

var handler = async (m, { 
conn 
}) => {
for (let i = 0; i < arr.length; i++) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  await conn.sendMessage(m.chat, { text: arr[i], edit: key });
}})()et timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr, json) => {
          let child = stdout.toString("utf-8");
          let ssd =
 child.replace(/Memory:/, "Ram:");
 const arr = [
  'L',
  'Lo',
  'Loa',
  'Load',
  'Loadi',
  'Loadin',
  'Loading',
  '*CPU*: ${ssd}\n*Speed*: *${latensi.toFixed(4)} MS*\n*Memory:* *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB \n*OS:* *${os.version()}*\n*Platform:* *${os.platform()}*\n*Hostname:* *${os.hostname()}*`
];

const { key } = await conn.sendMessage(m.chat, { text: 'Please Wait...' });

for (let i = 0; i < arr.length; i++) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  await conn.sendMessage(m.chat, { text: arr[i], edit: key });
}})()
}
handler.command = handler.help = ['os'];
handler.tags = ['main'];
module.exports = handler