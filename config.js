global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/KFkiRS6aAzGI1SUR31VgNq' , 'https://chat.whatsapp.com/LWINQc2dkeJ7x5OxNi9YR4' , 'https://chat.whatsapp.com/No-disponible' , 'https://chat.whatsapp.com/No-disponible' , 'https://chat.whatsapp.com/No-disponible'] // No tiene utilidad 
global.channelTikTok = ['https://vm.tiktok.com/ZMLNSV3YV/'] // No tiene utilidad
global.owner = ['593963619442' , '1(740)688-6775'] // Cambia los numeros por tu o tus numeros a los cuales te comtactaran y gestionaras el Bot
global.mods = ['593963619442' , '1(740)688-6775'] // No tiene utilidad
global.prems = ['593963619442' , '1(740)688-6775', '593993662918'] // Podra usar algunos comandos del apartado de propietario

//Lo siguiente no tiene nada que ver con el funcionamiento del Bot:
// Nota: Puedes contactarme si necesitas ayuda con algo al +34623442555 (este es mi numero personal/real bloqueo personas que no sean temas de la instalación)
// => Solo dudas sobre la instalación, temas generales contactarme al +34623442554 o al +56949581430
// => NO ayudo a hacer Bots, ni crearlos, ni editarlos 
// - Haré tutoriales de como editar el Bot, los videos los podran encontrar en mi canal de YouTube en https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA

global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
  bx: 'https://bx-hunter.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  pencarikode: 'https://pencarikode.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'http://hardianto-chan.herokuapp.com',
  shadow: 'https://api.reysekha.xyz',
  apialc: 'https://api-alc.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-alc.herokuapp.com': 'ConfuMods',
  'https://api.reysekha.xyz': 'apirey',
  'https://melcanz.com': 'F3bOrWzY',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://api.xteam.xyz': '5bd33b276d41d6b4',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.me': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.lolhuman.xyz': '9b817532fadff8fc7cb86862'
}

// Sticker WM
global.packname = '(☞ﾟ∀ﾟ)☞'
global.author = 'NeKosmic - Bot'


global.wm = '™𝓝𝓮𝓚𝓸𝓼𝓶𝓲𝓬 - 𝓑𝓞𝓣'
global.wait = '*Espere un momento..*'


global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
