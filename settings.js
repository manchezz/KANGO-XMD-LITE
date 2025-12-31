//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +254768282891

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic08rOHR5SHdQcWpHZnE0VWRqWWV1ZkZKbEwycUIwQm1jNzlIN25kSG1Iaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjJaZkFpaG9meXpsLys0SjZ0Nyt0SSs0R0JlcDZjL0tzQ0xENDM3VENFdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSzBUNnBndllORDh0R25MczRUem42Nm9seHJyTVVnbnliSVpKUDVuY0ZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPaHdvMzdpMFpVU1pCL01xdHZ3SHd3RDRCQVpXSm9aRVJCam5JOXBqNWc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdMdnh1QTdhMXhHdGhpdkhRSk00YjdIdFRtWTVsN2dtV2ZVUHBIQUlEVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1zdU5OS3AvNElqSjNIWnhBMVk5cEhzTnVXVnRxUHc5VGdsaXR5UWpoeHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0ppQU53c2h5RjhPeFVNNGVrbFI0eEd5aXBUWFFDNUNwRXVNelFqcmZsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMS8yamY3YThQaDJhTHlvdDhOQmVidTJSZjdLMUIwNjVUcUxETnAzWWNCUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9hZURtdW44WmV5akVtN0Q2UEtzbm5kb0FzTFg3cTk3TFBmaXJmUzBRWnpZczNGYW9hcXRZQS9teGlSVCtjNGgxSUkrQnBOblhQOHNtc0xXVnFNeENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiIrek12R3RTMkpQdmxycHBUb2Q3N2dGSVU0Sm02VGgwQW43dVlXQW1IbDlvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjlBQVhNRVZHIiwibWUiOnsiaWQiOiIyNTQ3NjgyODI4OTE6NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjY5MjI2OTIwNDMxNzA5OjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPVFkrZVVHRU1EazBzb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKWGZhdG1jTFBYd1RjeHJyTE5mZjBrTi9QcVl5bGlJeGJZZTlBUm4zWjNRPSIsImFjY291bnRTaWduYXR1cmUiOiI1SU4zTzhzWU81L3QyV0lPMEFsc0R5dXZJZnB6SDZiYkpPY0E5TVRJNmFQNXZxZFhkSHlHbFRvOWNmSTl0SDMxZ2dwLzJQRjJsQitUTHdEK0Q0cTBDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibnZPbmxnTkoxVXNYRWFFWmpGN25obThka3hvd0UzMVNkK0dJRHZqVC9zNjZYbXNHRm93QXZDRGlmbUZXam5zUkVlRVRSekJPM1JJd2tNMVdOOVgzQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2OTIyNjkyMDQzMTcwOTo0QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTVjMyclpuQ3oxOEUzTWE2eXpYMzlKRGZ6Nm1NcFlpTVcySHZRRVo5MmQwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0FnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjcxNTgzNTAsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSmVKIn0=

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ manchezz]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '25468282891 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
