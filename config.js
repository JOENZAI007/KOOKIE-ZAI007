const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: | | "FAIZAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VNNHF6VWxGUUJ1RWZhcmpMbzg2ZldiZVZqU2lJZ1pIWWVva3llTEdFMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUtrVGFNQXUrYzNzRHUvL1B0Mjg1dEc2Y1lmQlBTM0owQXEraUtXR05RQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSWpjK0hEcGpBdG5xSzdHbkd5WHZmZWpxb0tVWWRQUTdBSzUzVzMzaW5RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUVVgyZ3krWURoMmFlOVNTVmZlalV5cXAxU1ZEVVgvQkoySEZ2NGpVS3hFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPRDcwa1dsMHV0cXhvNXlOL1BNcVZYOWxVcmx2ZWtYQThjZHV1YmxVa1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5IZnpmQittYWRkUEFnVmRsMG1TVElqOCs0OUtRL29ha2pCOXVsR0hCd0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0pWdWFGTGdNSCtiUmc5Z2M2Myt4U2RGY2RzMnBZb0x0bHZGM1dUM2gyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHVsaG5od2d3TkRCV1RqM0VLUTBLbHhId0twUVhEbEJvRE5zZndTR3lSdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpSUmY0L3ZTcmR3anhEWWJPbVloU1ZaMHZBYkpRd2FwMWJZRkQrTU1WSFNUNll5cHRlaUtvRFZrRjhCNUFqaFJqdVl2QlJWYng1OWFxeldvdzdQRWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJlaDhXTE5vcmJFaU10angrUGczeHlUOXBCUTF4Slo1akcvL29BQ3IxYURZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkwxQlk5SE1TIiwibWUiOnsiaWQiOiI5MjM0MzA5MjE3MTM6MjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiam9lbiBIYWRpIiwibGlkIjoiMTY4ODg3NDQyMjE5MDM4OjI4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSW42NzZrSEVNK2hvdEFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV3o0VG1BM1U1aWJOSTVoT0l2Vmh1eGVaS01RUXdtcmJiSDh5aXBUWG16UT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYUhaZDYzU0JyNlZPUnJsTTdVMDZ3V1YyUk93UjcrWHYzcnpGaTd5SnVkak5JYlhCblZqblBPMzh2N0VvK2xyNWhhazVmTHV0eVFteVZGWDVSa3dCQmc9PSIsImRldmljZVNpZ25hdHVyZSI6ImhCNHVuQkZzR25BcktxMDBmUUhRZkRxS0xNNFhRYWJ1RmtRR01xVldrZEtWNDdVQWxiQ1NCQjB3M2t4dGZIbEk3d0Fldzd3ME9OVjZkMmdwU3g4S2hnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTY4ODg3NDQyMjE5MDM4OjI4QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWcytFNWdOMU9ZbXpTT1lUaUwxWWJzWG1TakVFTUpxMjJ4L01vcVUxNXMwIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWtJQ0FnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Nzg5NDYyNjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRk5RIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝚂𝙴𝙴𝙽 𝚈𝙾𝚄𝚁 𝚂𝚃𝙰𝚃𝚄𝚂 𝙱𝚈 𝐐𝐚𝐝ᥱ֟፝𝐞𝐫-𝐊𝐃 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://eliteprotech-url.zone.id/1778606368589obfzir.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐐𝐚𝐝ᥱ֟፝𝐞𝐫-𝐊𝐃",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝐐𝐚𝐝ᥱ֟፝𝐞𝐫-𝐊𝐃",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923369423531",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𓆩𝐐𝐚𝐝ᥱ֟፝𝐞𝐫-𝐊𝐃𓆪",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐐𝐚𝐝ᥱ֟፝𝐞𝐫-𝐊𝐃 ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "𝐐𝐚𝐝ᥱ֟፝𝐞𝐫-𝐊𝐃",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "𝚉𝙸𝙽𝙳𝙰 𝙷𝚄𝙽 𝚈𝙰𝚁 🤖",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923369423531",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
