const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_34_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMixcbiAgICAgICAgMTMxLFxuICAgICAgICA0NyxcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgzLFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDksXG4gICAgICAgIDExMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NixcbiAgICAgICAgOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5LFxuICAgICAgICA5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NixcbiAgICAgICAgOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEsXG4gICAgICAgIDUxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0LFxuICAgICAgICA0LFxuICAgICAgICA0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExLFxuICAgICAgICA4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY2LFxuICAgICAgICA0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MixcbiAgICAgICAgMjE0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjRXdvYjRHNmxFd1ZYb2taQmVKOVROSDVaUkc1dWtiNVhFMFd6QktGdDBnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3Nzg4NTMyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODZERDRBQjAxNDgxMDg3RjdDNkRCQ0Q2M0IwQUU0OERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3OTQ0NDUyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDc3ODg1MzIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQ0MzNTE0MDFBOEE1MkQwOTNGMjNENkI3QUNFRjE1NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjc5NDQ0NTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUVFMendrSENTNmFsTHB6WUVubGNFZ1wiLFxuICBcInBob25lSWRcIjogXCI0YzkzYjU5Mi03M2U5LTQwOGMtYjRiMy1mZTk3ZGM4NDJlYjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgMTk2LFxuICAgICAgMTc1LFxuICAgICAgODMsXG4gICAgICAxMzIsXG4gICAgICA0NCxcbiAgICAgIDE1MyxcbiAgICAgIDEzMyxcbiAgICAgIDI4LFxuICAgICAgMjUxLFxuICAgICAgMTg4LFxuICAgICAgNDIsXG4gICAgICA0OSxcbiAgICAgIDg4LFxuICAgICAgMjMwLFxuICAgICAgMjQzLFxuICAgICAgMjQwLFxuICAgICAgMTk5LFxuICAgICAgMTIwLFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NixcbiAgICAgIDExMSxcbiAgICAgIDU3LFxuICAgICAgNTAsXG4gICAgICA3MSxcbiAgICAgIDQyLFxuICAgICAgMTYsXG4gICAgICAyMTAsXG4gICAgICAxMDcsXG4gICAgICAxMDYsXG4gICAgICAxMDIsXG4gICAgICA0MCxcbiAgICAgIDE2MCxcbiAgICAgIDYxLFxuICAgICAgMTE4LFxuICAgICAgNDYsXG4gICAgICAxMDMsXG4gICAgICAyMjQsXG4gICAgICAxNjAsXG4gICAgICA1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxTkhFUUhEVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDc3ODg1MzIxOjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGFudmVlclwiLFxuICAgIFwibGlkXCI6IFwiMTE1ODMxNTc2OTkzODQ4OjQ5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BYeDk2UUZFUDJ0K2JjR0dBa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU29LVnI0d2lEYnhwZk5GcmFrWTJrUHRRa1M4aS9icTd5Mm9XYll4eDFCMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWTVAzTFlxV2pZWkNtc2lyQTJoR1pmdWRLdVY4dnl2N0ZrSVpGQmhRb2dXTW9UUmNvb0xKRmF6RllndjNCeko1dldqWWo2UFdJbWNyNHdpYXFXaERDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmeTlsRTh6NkRTMndzQjRtZk9hWURCQ1ZsbzNnUTJmYktUN0tNZ3dCWFdxRWRiS2Q3Tyt5S3VQbVZyNmVWMDdJc1VGZTNtSWZUMEE3UlNaK3ozaDhpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzc4ODUzMjE6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzk0NDQ0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNIWVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0hZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWURRazFraDN0N0ljcVdHcG15V1hLQVFHdDRabTZKdUxWbE1GdWxSRWo4Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE5NjM5MDI5LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDVdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzk0NDQxNjU3NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
