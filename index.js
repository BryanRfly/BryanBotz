const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		ChatModification,
		waChatKey,
		mentionedJid,
		processTime,
		Browsers,
	} = require("@adiwajshing/baileys")
const { color, bgcolor } = require('./lib/color')
const { snk } = require('./src/snk')
const { rules } = require('./src/rules')
const { sewabot } = require('./src/sewabot')
const { wait, simih, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, getBuffer, getBase64, msgFilter } = require('./lib/fetcher')
const { spawn, exec, execSync } = require("child_process")
const { recognize } = require('./lib/ocr')
const { mediafireDl } = require('./lib/mediafire.js')
const { onGoing } = require('./lib/otakudesu.js')
const imageToBase64 = require('image-to-base64')
const fs = require('fs')
const os = require('os') 
// API KEY
const vhtearkey = 'APIKEY'// GET IN https://api.vhtear.com/
const lolkey = 'APIKEY' // get in lolhuman.herokuapp.com
const xteamkey = 'c81b3345e477a0c7' // GET IN xteam
const apiKey = 'APIKEY' // get in https://mhankbarbar.tech/api
const tobzkey = 'bUpgNbhIBMSCX55nz1Vk'// GET IN https://tobz-api.herokuapp.com/api
const zekskey = 'apivinz' //GET IN https://api.zeks.xyz
const hujankey = 'trial2k21' //apikey hujanapi.herokuapp.com
const codekey = 'pais' //apikey pencarikode.xyz
const leyskey = 'APIKEY' //apikey leyscoders
const imgb = '1730fc95e2bafc2a17b8ef61f042af13'// GET IN imgbb.com
//MODULE
const speed = require('performance-now');
const moment = require('moment-timezone')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const axios = require("axios")
const toMs = require('ms')
const ms = require('parse-ms')
const cron = require('node-cron')
//const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
//const imgbb = require('imgbb-uploader')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./src/antivirtex.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const user = JSON.parse(fs.readFileSync('./src/user.json'))
const afk = JSON.parse(fs.readFileSync('./src/afk.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./database/json/tebakgambar.json'))
const sambungkata = JSON.parse(fs.readFileSync('./src/sambungkata.json'))
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'))
let _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
ban = []
const vcard = 'BEGIN:VCARD\n' // JAN DI UBAH
            + 'VERSION:3.0\n' // JAN DI UBAH
            + 'FN: Miku\n' // NAMA KONTAK OWNER
            + 'ORG: Nino BOT;\n' // NAMA CREATOR
            + 'TEL;type=CELL;type=VOICE;waid=6288286421519:+62 882-8642-1519\n' // NOMER HP LU
            + 'END:VCARD'
prefix = 'z'
battre = 0
blockcall = false
hit_today = []
limitawal = 25
fake = '*Nino BOT*'
numbernye = '0'
let gambar64 = "" || fs.readFileSync('me.jpg') //tambahin fotonya sendiri

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)}H, ${pad(minutes)}Min, ${pad(seconds)}Sec `
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function starts() {
	const nino = new WAConnection()
	nino.logger.level = 'warn'
	console.log(banner.string)
	nino.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})
	nino.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(nino.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})
	fs.existsSync('./session.json') && nino.loadAuthInfo('./session.json')
	nino.on('connecting', () => {
		start('2', 'Connecting...')
	})
	nino.on('open', () => {
		success('2', 'MikuConnected')
	})
	await nino.connect({timeoutMs: 30*1000})

    nino.on('group-participants-update', async (anu) => {
		//if (!welkom.includes(anu.jid)) return
		try {
			mem = anu.participants[0]
			console.log(anu)
            try {
            pp_user = await nino.getProfilePicture(mem)
            } catch (e) {
            pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
            pp_grup = await nino.getProfilePicture(anu.jid)
            } catch (e) {
            pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add') {
            mdata = await nino.groupMetadata(anu.jid)
            memeg = mdata.participants.length
        	num = anu.participants[0]
            anu_user = nino.contacts[mem]
            teks = `Halo Sayang @${num.split('@')[0]}\nWelcome in ${mdata.subject}\n\nSilahkan Intro ya sayang\nNama : \nUmur : \nGender : \nAsal : \n\nSemoga Betah dan Jangan Lupa isi`
	        buff = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://i.ibb.co/7WK0hqB/a2c095d66e1b.jpg&username=${encodeURI(anu_user.notify)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
		nino.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'remove') {
                mdata = await nino.groupMetadata(anu.jid)
            	num = anu.participants[0]
                anu_user = nino.contacts[mem]
                memeg = mdata.participants.length
                out = `Kenapa tuh? kok bisa keluar? \nSayonara @${num.split('@')[0]} we will miss you`
                buff = await getBuffer(`https://api.lolhuman.xyz/api/base/leave?apikey=${lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://i.ibb.co/7WK0hqB/a2c095d66e1b.jpg&username=${encodeURI(anu_user.notify)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
                nino.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
			
	nino.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	nino.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        nino.sendMessage(callerId, "Telpon = BLOCK!!\nTq Autoresblock!!", MessageType.text)
        await sleep(3000)
        await nino.blockUser(callerId, "add") // Block user
})
        nino.on (`CB:action,,battery`, json => {
              const batteryLevelStr = json[2][0][1].value
              const batterylevel = parseInt (batteryLevelStr)
              battre = batterylevel
 }) 

 nino.on('chat-update', async (mek) => {
	  try {
			if (!mek.hasNewMessage) return 
			mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			const content = JSON.stringify(mek.message)
			const type = Object.keys(mek.message)[0]
			const from = mek.key.remoteJid
			const idulfitri = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=13&bulan=5')
			const insom = from.endsWith('@g.us')
			const botFebb = insom ? mek.participant : mek.key.remoteJid
			pushname2 = nino.contacts[botFebb] != undefined ? nino.contacts[botFebb].vname || nino.contacts[botFebb].notify : undefined
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const speed = require('performance-now')
			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
            const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
			let d = new Date
			let locale = 'id'
			let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
			let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
			let week = d.toLocaleDateString(locale, { weekday: 'long' })
			let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			hit_today.push(command)
			const totalhit = JSON.parse(fs.readFileSync('./lib/totalcmd.json'))[0].totalcmd
			const args = body.trim().split(/ +/).slice(1)
			const arg = budy.slice(command.length + 1, budy.length)
			const ar = args.map((v) => v.toLowerCase())
			const q = args.join(' ')
			const isCmd = body.startsWith(prefix)
			const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)

			mess = {
				wait: '_Tunggu permintaan anda sedang diproses_\n\nJika eror silahkan di ulangi.',
				asik: '_Tunggu permintaan anda sedang diproses_\n\nJika eror silahkan di ulangi.',
				success: '*Oke Desu ~*',
				wrongF: '*Format salah, lihat lagi di menu*',
				limitend: `Limit request anda sudah habis\n\nNote : *_Limit direset pada pukul 05:00 WIB_*`,
				error: {
					api: 'Mengerror Bang',
					stick: ' *Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker*',
					Iv: ' *Link nya Mokad um!*'
				},
				only: {
					group: 'Maaf! Command ini khusus untuk di dalam Group saja.',
					mod: '[❗] PERINTAH INI KHUSUS USER MOD nino BOT',
					benned: 'Karena kamu telah melanggar rules, maka kamu telah diblok/diban! \n\nHarap hubungi owner:\nwa.me/6288286421529',
					ownerG: 'Maaf! Command ini khusus untuk owner Group saja.',
					ownerB: 'Maaf! Command ini khusus untuk owner Nino saja.',
					userB: `Kamu belum terdaftar di database!, Silakan register dengan cara\nContoh : @verify\n\n*Mohon Dibaca Contohnya*`,
					admin: 'Maaf! Command ini khusus untuk Admin Group saja.',
					Badmin: 'Maaf! Command ini khusus untuk Nino ketika menjadi admin!',
				}
			}
			const botNumber = nino.user.jid
			const ownerNumber = ["6288286421519@s.whatsapp.net", "62813828362492@s.whatsapp.net"] // replace this with your number
			const mod = [ownerNumber,"6289637006225@s.whatsapp.net"]
			const adminbotnumber = ["6288286421519@s.whatsapp.net"]
			const frendsowner = ["6285607935385@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
		    let senderr = mek.key.fromMe ? nino.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
			const totalchat = await nino.chats.all()
		    const unread = await nino.loadAllUnreadMessages()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await nino.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.id : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupOwner = isGroup ? groupMetadata.owner : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isUser = user.includes(sender)
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const ismod = mod.includes(sender)
			const errorurl2 = 'https://i.ibb.co/bJ9GkwL/20201127-075249.png'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const conts = mek.key.fromMe ? nino.user.jid : nino.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? nino.user.name : conts.notify || conts.vname || conts.name || '-'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				nino.sendMessage(from, {text:teks, jpegThumbnail:gambar64}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true}})
			}
			const sendMess = (hehe, teks) => {
				nino.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nino.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nino.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
            const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { "locationMessage":{"name": "Tokyo","jpegThumbnail":gambar64}
}}
            const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                mime = res.headers['content-type']
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    nino.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                    	fs.unlinkSync(filess)
                        //let media = fs.readFileSync(asw)
                        exec(`webpmux -set exif ${addMetadata('@ShiroNekoBot')} ${filess} -o ${asw}`, async (err) => {
                        nino.sendMessage(to, fs.readFileSync(asw), MessageType.sticker,{quoted:mek})
                      //fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            });
            }
            const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link)
	nino.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	nino.sendMessage(from, hasil, type, options).catch(e => {
	nino.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
            if(time2 < "23:59:00"){
            var sselamat = 'Selamat Malam'
                                        }
            if(time2 < "19:00:00"){
            var sselamat = 'Selamat Petang...'
                                         }
            if(time2 < "18:00:00"){
            var sselamat = 'Selamat Sore'
                                         }
            if(time2 < "15:00:00"){
            var sselamat = 'Selamat Siang'
                                         }
            if(time2 < "11:00:00"){
            var sselamat = 'Selamat Pagi'
                                         }
            if(time2 < "05:00:00"){
            var sselamat = 'Selamat Malam'
                                         }
const getGroup = async function(totalchat){
	let grup = []
	let a = []
	let b = []
	for (c of totalchat){
		a.push(c.jid)
	}
	for (d of a){
		if (d && d.includes('g.us')){
			b.push(d)
		}
	}
	for (e of b){
		let ingfo = await nino.groupMetadata(e)
		grup.push(ingfo)
	}
	return grup
}
const hideTag = async function(from, text){
	let anu = await nino.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	nino.sendMessage(from, {text:text, jpegThumbnail:gambar64}, 'extendedTextMessage', {sendEphemeral: true, contextInfo: {"mentionedJid": ane}})
}  
const sendMention = async(from, text, mentioned, quoted = "") => {
    nino.sendMessage(from, text, text, { quoted: quoted, contextInfo: { mentionedJid: mentioned } })
}
const hideTagStiker = async(from, buffer) => {
    let anu = await nino.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
    nino.sendMessage(from, buffer, sticker, { sendEphemeral: true, contextInfo: { mentionedJid: ane } })
}
const kick = function(from, orangnya){
	for (let i of orangnya){
		nino.groupRemove(from, [i])
	}
}
const add = function(from, orangnya){
	nino.groupAdd(from, orangnya)
}
const promoteAdmin = async(to, target = []) => {
    const g = await nino.groupMetadata(to)
    const owner = g.owner.replace("c.us", "s.whatsapp.net")
    const me = nino.user.jid
    for (i of target) {
        if (!i.includes(me) && !i.includes(owner)) {
            await nino.groupMakeAdmin(to, [i])
        } else {
            reply("Not Premited!")
            break
        }
    }
}
const demoteAdmin = async(to, target = []) => {
    const g = await nino.groupMetadata(to)
    const owner = g.owner.replace("c.us", "s.whatsapp.net")
    const me = nino.user.jid
    for (i of target) {
        if (!i.includes(me) && !i.includes(owner)) {
            await nino.groupDemoteAdmin(to, [i])
        } else {
            reply("Not Premited!")
            break
        }
    }
}   
       const fakegroup = (teks) => {
            nino.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
                    },
                    message: {
                        "locationMessage": {
                            //"mimetype": "image/jpeg",
                            "name": fake,
                            "jpegThumbnail": gambar64
                        }
                    }
                }
            })
        }
//function check limit
const addLimit = (userId, _dir, isOwner) => {
    if (isOwner) return false
    let pos = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
        }
    })
    if (pos !== null) {
        _dir[pos].limit += 1
        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_dir))
        fs.writeFileSync('./database/json/hit.json', JSON.stringify(_dir))
    }
}
const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        } 
  const getLimit = (userId, _dir) => {
    let pos = null
    let found = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
            found = true
        }
    })
    if (found === false && pos === null) {
        const obj = { id: userId, limit: 0 }
        _dir.push(obj)
        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_dir))
        return 0
    } else {
        return _dir[pos].limit
    }
}

const getHit = (userId, _dir) => {
    let pos = null
    let found = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            pos = i
            found = true
        }
    })
    if (found === false && pos === null) {
        const obj = { id: userId, limit: 0 }
        _dir.push(obj)
        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_dir))
        return 0
    } else {
        return _dir[pos].limit
    }
}
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return reply(mess.limitend)
                            reply(`「 *LIMIT COUNT* 」
sisa limit anda : ${limitCounts}

NOTE : *_Limit direset pada pukul 05:00 WIB_*`)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        reply(`「 *LIMIT COUNT* 」
sisa limit anda : ${limitCounts}

NOTE : *_Limit direset pada pukul 05:00 WIB_*`)
                    }
				} 
		
			//funtion limited
            const isLimit = (sender) =>{ 
          	if (isOwner) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    reply(mess.limitend)
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
     let authorname = nino.contacts[sender] != undefined ? nino.contacts[sender].vname || nino.contacts[sender].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {
				if (!packname) packname = 'WABot'; if (!author) author = '@Marzz';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/${name}.exif`)) return `./src/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/${name}.exif`, buffer, (err) => {	
					return `./src/${name}.exif`	
				})	

			}
		// AFK
            for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n "
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "➸ *Alasan*  : " + afk[x.split('@')[0]]
                    }              
                    reply(ini_txt)
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply(`*${pushname2}* telah kembali dari AFK! Selamat datang kembali~`)
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
            }
      // Tebak Gambar
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && budy.match(/[1-9]{1}/)) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Anda Salah!")
                }
            }
            // Sambung Kata
            if (sambungkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = sambungkata[sender.split('@')[0]]
                userAnswer = budy.toLowerCase()
                if (userAnswer.startsWith(jawaban[jawaban.length - 1])) {
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${lolkey}&text=${userAnswer}`)
                    await nino.sendMessage(from, get_result.result, text, { quoted: mek }).then(() => {
                        sambungkata[sender.split('@')[0]] = get_result.result.toLowerCase()
                        fs.writeFileSync("./src/sambungkata.json", JSON.stringify(sambungkata))
                    })
                } else {
                    reply("Silahkan jawab dengan kata yang dimulai huruf " + jawaban[jawaban.length - 1])
                }
            }
	    if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*${pushname2}* adalah admin group, bot tidak akan kick kamu`)
		nino.updatePresence(from, Presence.composing)
		if (budy.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 ANTI LINK 」*\n\nTerdeteksi ${sender.split("@")[0]} Telah mengirim link group!\n\nMaaf kamu akan dikick`)
			nino.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}
        if (budy.includes("ดุ")){
        if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply(`${pushname2} Adalah Admin Group Kamu Tidak Akan Di kick`)
		nino.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 ANTI VIRTEX 」*\n\nMaaf ${sender.split("@")[0]} anda akan di kick dari group ${groupMetadata.subject}`)
		setTimeout( () => {
			nino.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			nino.blockUser(sender, "add")
		}, 0)
	}
	cron.schedule('0 5 * * *', () => {
        const reset = []
        _limit = reset
        console.log('Resetting user limit...')
        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
        console.log('Success!')
        }, {
        scheduled: true,
        timezone: 'Asia/Jakarta'
        })
	
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
			// CONSOLE LOG
        if (isCmd && !isGroup) {
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
            await nino.chatRead(from)}
        
        if (isCmd && isGroup) {
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            await nino.chatRead(from)}
        
        // Anti-spam
        if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
            console.log(color('[ SPAM ]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
            return reply('_wait cooldown 5 detik_')}
        
        if (isCmd && msgFilter.isFiltered(from) && isGroup) {
            console.log(color('[ SPAM ]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            return reply('_wait cooldown 5 detik_')
        }
        if (budy.toLowerCase() === `@verify`){
		if (isUser) return reply('*Kamu sudah melakukan verifikasi*')
		user.push(sender)
		fs.writeFileSync('./src/user.json', JSON.stringify(user))
		ppimg = 'https://i.ibb.co/Q9wwq6d/898c4d9c2d69.jpg'
		captionnya = `╭─「 *_VERIFY-SUCCES_* 」\`\`\`\n│ Verify Berhasil SN: \n│TM08GK8PPHBSJDH10J\`\`\`\n│\n│\`\`\`ᴘᴀᴅᴀ ${date} ${time}\`\`\`\n│\`\`\`「 ɴᴀᴍᴀ 」: ${pushname2}\`\`\`\n│\`\`\`「 ɴᴏᴍᴏʀ 」: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ\`\`\`\n│\`\`\`ꜱɪʟᴀʜᴋᴀɴ\`\`\`\n│\`\`\`ᴋɪʀɪᴍ ${prefix}menu\`\`\`\n│\`\`\`\n│ᴛᴏᴛᴀʟ ᴘᴇɴɢɢᴜɴᴀ: ${user.length} ᴏʀᴀɴɢ\`\`\`\n╰────────────────`
		daftarimg = await getBuffer(ppimg)
		nino.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
		}
			if (isCmd && !isOwner) msgFilter.addFilter(from)
			if (isCmd && isLimit(sender)) return reply(mess.limitend)
			switch(command) {
	case 'help':
    case 'menu':
      if (isBanned) return reply(mess.only.benned)    
	  if (!isUser) return reply(mess.only.userB)
     A = new Date('May 12 2021')
B = new Date().getTime();
C = A - B;
D = Math.floor( C / (1000 * 60 * 60 * 24));
E = Math.floor( C % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
F = Math.floor( C % (1000 * 60 * 60) / (1000 * 60));
G = Math.floor( C % (1000 * 60) / 1000);
IdulFitri = `${D}Hari ${E}Jam ${F}Menit ${G}Detik`
            d = new Date
             locale = 'id'
             ddate = d.toLocaleDateString(locale, {
             day: 'numeric',
             month: 'long',
             year: 'numeric'
              })
              uptime = process.uptime()
              miku = '6288286421519@s.whatsapp.net'
              ripp = '62813828362492@s.whatsapp.net'
menunya = `${sselamat} @${sender.split('@')[0]}...
Semangat Puasa nya

• *${week}, ${ddate}*

• *Jam : ${time} WIB*
• *Jam : ${wita} WITA*
• *Jam : ${wit} WIT*

*${IdulFitri}*
Menuju Idul Fitri

*Selamat Menunaikan Ibadah Puasa 1442H*

*Rilis :* 1 Mei 2021
*Total Hit :* ${totalhit} 
*Total pengguna :* ${user.length}
*Runtime :* ${kyun(uptime)}
*Baterai :* ${battre}%
*Total chat :* ${totalchat.length} 
*Unread chat :* ${unread.length} 

*STICKER MENU*
  • *${prefix}sticker*
  • *${prefix}stickernobg*
  • *${prefix}take* teks | author
  • *${prefix}delwm* reply sticker
  • *${prefix}stickerwm* teks | author
  • *${prefix}toimg* <reply sticker>
  • *${prefix}smoji* emot
  • *${prefix}smoji2* emot
  • *${prefix}ttp* text
  • *${prefix}ttp2* text
  • *${prefix}attp* text
  • *${prefix}attp2* text
  • *${prefix}trigger*

*DOWNLOAD MENU*
  • *${prefix}ytmp4* link yt
  • *${prefix}ytmp3* link yt
  • *${prefix}play* judul
  • *${prefix}joox* judul
  • *${prefix}twitter* link twt
  • *${prefix}cocofun* link ccf
  • *${prefix}smule* link
  • *${prefix}mediafire* link
  • *${prefix}soundcloud* link sc
  • *${prefix}tiktok* link tt
  • *${prefix}tiktoknowm* link tt
  • *${prefix}tiktokmusic* link tt
  • *${prefix}instagram* link ig
  • *${prefix}instastory* ussername
  • *${prefix}facebook* link fb
  • *${prefix}ytsearch* query

*GRUP MENU*
  • *${prefix}leave*
  • *${prefix}linkgc*
  • *${prefix}afk* alasan
  • *${prefix}groupinfo*
  • *${prefix}delete*
  • *${prefix}hidetag* text
  • *${prefix}listadmin*
  • *${prefix}listonline*
  • *${prefix}getpic* @tag
  • *${prefix}getbio* @tag
  • *${prefix}demote*
  • *${prefix}promote*
  • *${prefix}add* reply/tag
  • *${prefix}kick* reply/tag
  • *${prefix}antilink* on | off
  • *${prefix}nsfw* on | off
  • *${prefix}setdesc* query
  • *${prefix}setname* query
  • *${prefix}welcome* on | off
  • *${prefix}grup* buka | tutup

*RANDOM*
  • *${prefix}asupan*
  • *${prefix}jadwalsholat* kota
  • *${prefix}darkjoke*
  • *${prefix}memeindo*
  • *${prefix}quotes*
  • *${prefix}quotesdilan*
  • *${prefix}quotesanime*
  • *${prefix}img2url*

*WIBU MENU*
  • *${prefix}kiryuu* query
  • *${prefix}kanna* teks
  • *${prefix}neko*
  • *${prefix}waifu*
  • *${prefix}husbu*
  • *${prefix}miku*
  • *${prefix}sagiri*
  • *${prefix}shinobu*
  • *${prefix}kurumi*
  • *${prefix}otakunews*
  • *${prefix}dewabatch*
  • *${prefix}animanga*
  • *${prefix}nhentaisearch*
  • *${prefix}otakuongoing*
  • *${prefix}nhentaipdf* code
  • *${prefix}nhentai* code
  • *${prefix}manga* query
  • *${prefix}anaboyongoing*
  • *${prefix}jadwalanoboy*

*FUN MENU*
  • *${prefix}jadian*
  • *${prefix}gantengcek*
  • *${prefix}cantikcek*
  • *${prefix}sangecek*
  • *${prefix}lesbicek*
  • *${prefix}gaycek*
  • *${prefix}watak*
  • *${prefix}hobby*
  • *${prefix}bisakah* text
  • *${prefix}kapankah* text
  • *${prefix}apakah* text
  • *${prefix}bagaimanakah* text
  • *${prefix}alay* text
  • *${prefix}artinama* nama

*TEXT MARKER*
  • *${prefix}tahta* teks
  • *${prefix}blackpink* teks
  • *${prefix}thunder* teks
  • *${prefix}logo* teks
  • *${prefix}freefire* teks
  • *${prefix}wetglass* teks
  • *${prefix}party* teks
  • *${prefix}halloween* teks
  • *${prefix}goldplaybutton* teks
  • *${prefix}silverplaybutton* teks

*AUDIO MAKER*
  • *${prefix}bass* reply audio/vn.
  • *${prefix}nightcore* reply audio/vn.
  • *${prefix}gemuk* reply audio/vn.
  • *${prefix}apulsator* reply audio/vn.
  • *${prefix}tempo* reply audio/vn.
  • *${prefix}vibra* reply audio/vn.
  • *${prefix}hode* reply audio/vn.
  • *${prefix}fast* reply audio/vn.

*TOOLS*
  • *${prefix}nulis* teks
  • *${prefix}nobg* reply image
  • *${prefix}tts* kodebahasa text
  • *${prefix}translate* kodebahasa text

*SEARCHING*
  • *${prefix}image* query
  • *${prefix}pinterest* query
  • *${prefix}kusosearch* query
  • *${prefix}wiki* query
  • *${prefix}brainly* soal
  • *${prefix}cuaca* kota
  • *${prefix}covid* negara
  • *${prefix}lirik* judul lagu
  • *${prefix}playstore* nama apk
  • *${prefix}shopee* nama barang
  • *${prefix}lk21* query

*STALKER*
  • *${prefix}igstalk* username
  • *${prefix}mlstalk* id | server
  • *${prefix}twtstalk* username
  • *${prefix}githubstalk* ussername
  • *${prefix}tiktokstalk* username
  • *${prefix}ytstalk* ussername

*GAME MENU*
  • *${prefix}truth*
  • *${prefix}dare*
  • *${prefix}family100*
  • *${prefix}tebakgokil*
  • *${prefix}tebakbendera*
  • *${prefix}tebakkimia*
  • *${prefix}tebaklirik*
  • *${prefix}tebakgambar*
  • *${prefix}canceltebakgambar*
  • *${prefix}caklontong*
  • *${prefix}sambungkata*
  • *${prefix}cancelsambungkata*

*OWNER MENU*
  • *${prefix}ban* 
  • *${prefix}unban* 
  • *${prefix}clearall*
  • *${prefix}runtime*
  • *${prefix}setprefix* 
  • *${prefix}reset* 
  • *${prefix}clone* 
  
*BOT*
  • *${prefix}info*
  • *${prefix}owner*
  • *${prefix}donasi*
  • *${prefix}speed*
  • *${prefix}runtime*
  • *${prefix}botstat*
  
Bot WhatsApp by @${miku.split('@')[0]} && @${ripp.split('@')[0]}`
                 nino.sendMessage(from, `${menunya}`, text, { quoted: mek, contextInfo:{ mentionedJid: [sender, miku, ripp]}})
                 await limitAdd(sender) 
				 break
		   // new features
case 'reset':
                if (!isOwner) return reply(mess.only.ownerB)
                 const reset = []
                _limit = reset
                console.log('Hang tight, it\'s time to reset usage limits...')
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                reply('Limit sudah tereset\nSilahkan restart bot')
                console.log('Success!')
                break
case 'limit':
if (isOwner) return reply(`「 *LIMIT COUNT* 」
sisa limit anda : _UNLIMITED_

NOTE : *_Limit direset pada pukul 05:00 WIB_*`)
				    if (!isUser) return reply(mess.only.userB)
				    checkLimit(sender)
					break
			case 'phcomment':
			       if (isBanned) return reply(mess.only.benned)    
			       if (!isUser) return reply(mess.only.userB)
                   if (args.length == 0) return reply(`Example : ${prefix + command} nino | uwu`)
                   const usernamePh = q.substring(0, q.indexOf('|') - 1)
                   const commentPh = q.substring(q.lastIndexOf('|') + 2)
				try {
					ppPhRaw = await nino.getProfilePicture(sender)
					} catch {
						ppPhRaw = errorImg
					}

                    const dataPpPh = await bent('buffer')(ppPhRaw)
                    const linkPpPh = await uploadImages(dataPpPh, `${sender}_ph`)
                    const preprocessPh = await axios.get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${linkPpPh}&text=${commentPh}&username=${usernamePh}`)
				    anu = await getBuffer(preprocessPh.data.message)
				    await nino.sendMessage(from, anu, image)
                    await limitAdd(sender) 
                    break
            case 'shortlink':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${ini_link}`)
                    reply(ini_buffer.result)
                    break
            case 'otakuongoing':
                    if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
                    o = await onGoing()
                    console.log(o)
                    ot = '*「 Ongoing Otakudesu 」*'
                    for (let i = 0; i < o.length; i++) {
                    ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`
                }
                    buff = await getBuffer(o[0].thumb)
                    nino.sendMessage(from, buff, image, {quoted: mek, caption: ot})
                    await limitAdd(sender) 
                    break
             case 'husbu':
				    try {
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=${tobzkey}`)
					buffer = await getBuffer(res.image)
					nino.sendMessage(from, buffer, image, {quoted: mek, caption: 'Hehe:v'})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('Eror!')
					}
					await limitAdd(sender)
					break
            case 'tinyurl':
                   if (isBanned) return reply(mess.only.benned)    
				   if (!isUser) return reply(mess.only.userB)
                   nino.updatePresence(from, Presence.composing) 
                   data = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${args[0]}&apikey=${tobzkey}`)
                   hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                   reply(hasil)
                   await limitAdd(sender)
                   break
			 case 'joox':
			        if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)           
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    cuy = `
─────────────────────
◪ 「 *JOOX PLAY* 」
│
└ ❏ Judul: *${get_result.info.song}*
    ❏ Artis: *${get_result.info.singer}*
    ❏ Album: *${get_result.info.album}*
    ❏ Durasi: ${get_result.info.duration}
    ❏ Tipe: *${command}*
─────────────────────`
                    thumbnail = await getBuffer(get_result.image)
                    await nino.sendMessage(from, thumbnail, image, { quoted: mek, caption: cuy, contextInfo: { forwardingScore: 1, isForwarded: true} })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    await nino.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', ptt:true, filename: `${get_result.info.song}.mp3`, quoted: mek })
                    await limitAdd(sender)
                    break
             case 'tebakbendera':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${lolkey}`, {method: 'get'})
					anu.result = anu.result
					jawab3 = `*Jawabannya*\n\n>${anu.result.name}`
					tebakbender = `*bendera apa ini?*\n\n>[${anu.result.flag}]`
					setTimeout( () => {
					reply(jawab3)
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 detik lagi_') // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 detik lagi_')// ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 detik lagi_') // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					reply(tebakbender) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender)
					break 
             case 'nobg':
	                if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                reply(mess.wait)
	                owgi = await nino.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(10)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`https://lolhuman.herokuapp.com/api/removebg?apikey=${lolkey}&img=${anu.display_url}`)
	                nino.sendMessage(from, hehe, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage":{"product":{"productImage":{"mimetype":"image/jpeg","height":736,"width":736,"jpegThumbnail":fs.readFileSync(`./me.jpg`)},"productId":"3937202479680283","title":"©dokidokinime","currencyCode":"IDR","priceAmount1000":"999999999000","productImageCount":1},"businessOwnerJid":"0@s.whatsapp.net"}}}, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: 'Nih Hasilnya Kak...'})
	                } else {
	                reply('Jangan tambah kan apapun pada command')
	   }
	                await limitAdd(sender)
	                break
            case 'apulsator':
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    media = await nino.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} -filter_complex "apulsator=mode=sine:hz=3:width=0.1:offset_r=0" ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return faketoko(`Error: ${err}`)
                    topt = fs.readFileSync(ran)
                    nino.sendMessage(from, topt, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
          })
                    await limitAdd(sender) 
                    break
          case 'online':
          case 'listonline':
          case 'here':
                if (!isGroup) return reply(`Only group`)
                   try {
                   let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                   let online = [...Object.keys(nino.chats.get(ido).presences), nino.user.jid]
                   nino.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
                } catch (e) {
                	reply(`${e}`)
                }
                   break
       case 'chat':
				   if (args.length < 1) return reply('Apa pesan nya?')
				   var kntl = body.slice(6)
				   var ajk = kntl.split("|")[0];
			       var chatnya = kntl.split("|")[1];
				   nino.sendMessage(from, `${ajk}@s.whatsapp.net`, `Dari wa.me/${sender.replace('@s.whatsapp.net', '')}\nKatanya: ${chatnya}`)
				   await limitAdd(sender) 
				   break
		case 'tebakgokil':
                    if (isBanned) return reply(mess.only.benned)    
			        if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${lolkey}`, {method: 'get'})
					siapariu = `*${anu.result.question}*`
					setTimeout( () => {
					reply('*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					reply('_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					reply('_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					reply('_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					nino.sendMessage(from, siapariu, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
		case 'tebakkimia':
                    if (isBanned) return reply(mess.only.benned)    
			        if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${lolkey}`, {method: 'get'})
					kimia = `*${anu.result.nama}*`
					setTimeout( () => {
					nino.sendMessage(from, '*➸ Jawaban :* '+anu.result.lambang, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					nino.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					nino.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					nino.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
				}, 2500) // 1000 = 1s,
				    setTimeout( () => {
				    nino.sendMessage(from, kimia, text, {quoted: mek }) // ur cods
				}, 0) // 1000 = 1s,
				    await limitAdd(sender) 
				     break 
		case 'tebaklirik':
                if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
				anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${lolkey}`, {method: 'get'})
				lirik = `*${anu.result.question}*`
				setTimeout( () => {
				nino.sendMessage(from, '*➸ Jawaban :* '+anu.result.answer, text, {quoted: mek}) // ur cods
				}, 30000) // 1000 = 1s,
				setTimeout( () => {
				nino.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
			    }, 20000) // 1000 = 1s,
				setTimeout( () => {
				nino.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
				}, 10000) // 1000 = 1s,
				setTimeout( () => {
				nino.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
				}, 2500) // 1000 = 1s,
				setTimeout( () => {
				nino.sendMessage(from, lirik, text, {quoted: mek }) // ur cods
				}, 0) // 1000 = 1s,
				await limitAdd(sender) 
				break
             case 'mute':
                if (!isOwner) return reply(mess.only.ownerB)
                nino.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
            case 'unmute':
                if (!isOwner) return reply(mess.only.ownerB)
                nino.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break
            case 'getbio':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await nino.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                await limitAdd(sender) 
                break
		case 'getpic':
		        if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (mek.message.extendedTextMessage != undefined){
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				try {
				pic = await nino.getProfilePicture(mentioned[0])
				} catch {
				pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
		}
				thumb = await getBuffer(pic)
				nino.sendMessage(from, thumb, MessageType.image)
				{quoted : mek}}
				await limitAdd(sender) 
				break
          case 'sticktag':
          case 'stctag':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                file = await nino.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                value = args.join(" ")
                var group = await nino.groupMetadata(from)
                var member = group['participants']
                var mem = []
                 member.map(async adm => {
                 mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
                  var options = {
                  contextInfo: { mentionedJid: mem },
                  quoted: mek
            }
                   ini_buffer = fs.readFileSync(file)
                   nino.sendMessage(from, ini_buffer, sticker, options)
                   fs.unlinkSync(file)
            } else {
                   reply(`*Reply sticker yang sudah dikirim*`)
            }
                   await limitAdd(sender) 
                   break
            case 'togif':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                    encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    mediaaa = await nino.downloadAndSaveMediaMessage(encmediaaa)
                    a = await webp2gifFile(mediaaa)
                    mp4 = await getBuffer(a.result)
                    nino.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
                    fs.unlinkSync(mediaaa)
                    } else {
                    reply(mess.wrongFormat)
      }
                    await limitAdd(sender) 
                    break
             case 'tovideo':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                    encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    mediaaa = await nino.downloadAndSaveMediaMessage(encmediaaa)
                    a = await webp2gifFile(mediaaa)
                    mp4 = await getBuffer(a.result)
                    nino.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
                    fs.unlinkSync(mediaaa)
          } else {
                    reply(mess.wrongFormat)
   }
                    await limitAdd(sender) 
                    break
           case 'kiryuu':
                    if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
                    if (!q) return reply('Yg mau dicari apaan?')
                    reply(mess.wait)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/kiryuu-search?q=${q}&apikey=${leyskey}`)
					result = anu.result
					teks = `*「 KIRYUU SEARCH 」*\n\n*Hasil Pencarian : ${q}*`
					for (let v = 0; v < result.length; v++) {
						teks += `\n\n• Title: ${result[v].judul}\n• Chapter: ${result[v].chapter}\n• Rate: ${result[v].rate}\n• Url: ${result[v].url}`
					}
					buff = await getBuffer(result[0].img)
					nino.sendMessage(from, buff, image, {quoted: mek, caption: teks})
					await limitAdd(sender) 
					break
      case 'return':
      case 'run':
                    if (!isOwner) return
                    return fakegroup(JSON.stringify(eval(args.join(' '))))
                    break
			case 'kanna':
			        if (!isUser) return reply(mess.only.userB)
			        if (isBanned) return reply(mess.only.benned)   
                    if (!q) return reply(mess.wrongF)              
                    reply(mess.wait)
                    anu = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
                    buff = await getBuffer(anu.message)
                    nino.sendMessage(from, buff, image, {quoted: mek})
                    await limitAdd(sender) 
                    break
             case 'take':
             case 'colong':
            		if (!isQuotedSticker) return reply('Stiker aja om')
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		            media = await nino.downloadAndSaveMediaMessage(encmedia)
                    anu = args.join(' ').split('|')
                    satu = anu[0] !== '' ? anu[0] : ``
                    dua = typeof anu[1] !== 'undefined' ? anu[1] : `${pushname}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`
                    require('./lib/fetcher.js').createExif(satu, dua)
			        require('./lib/fetcher.js').modStick(media, nino, mek, from)
			        await limitAdd(sender) 
		            break
           case 'delwm':    
            		if (!isQuotedSticker) return reply('Stiker aja om')
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		            media = await nino.downloadAndSaveMediaMessage(encmedia)
                    anu = args.join(' ').split('|')
                    satu = anu[0] !== '' ? anu[0] : ``
                    dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
                    require('./lib/fetcher.js').createExif(satu, dua)
			        require('./lib/fetcher.js').modStick(media, nino, mek, from)
			        await limitAdd(sender) 
			        break
		     case 'santet':
			        if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                    if (args.length < 1) return reply('tag temanmu!')
                    const santet = ['Muntah Paku','Meninggoy','Meninggal','Berak Paku','Muntah Rambut','Muntah Jembut','Ketempelan MONYET!!!','Ketempelan Tuyul','Berak di Celana Terus','Menjadi Gila','Menjadi Bodoh','Berak Beling','Berak Batu']
                    const terima1 = santet[Math.floor(Math.random() * (santet.length))]
                    const nyante = body.slice(7)
                    const target3 = nyante.split('|')[0]
                    const alasan = nyante.split('|')[1]
                    reply(`Santet terkirim ke ${target}\n\nAlasan: ${alasan}\n\nJenis Santet Yang di Terima:\n*${terima1}*`)
			        break
			case 'kutuk':
                    if (args.length < 1) return reply('tag temanmu!')
                    const kutuk = ['Sapi','Batu','Babi','pohon pisang','janda','bangsat','buaya','Jangkrik','Kambbing','Bajing','kang seblak','kang gorengan','kang siomay','badut ancol','Tai Badak','Kebo','Badak','tai kotok','Bwebwek','Orang Suksesss...... tapi boong','Beban Keluarga']
                    const terima2 = kutuk[Math.floor(Math.random() * (kutuk.length))]
                    const nyantey = body.slice(7)
                    const target2 = nyantey.split('|')[0]
                    const alasan2 = nyantey.split('|')[1]
                    reply(`Kutukan terkirim ke ${target2}\n\nAlasan: ${alasan2}\n\nJenis Santet Yang di Terima:\n*${terima2}*`)
			        break
            case 'twtstalk':
                    if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)   
                    if (args.length == 0) return reply(`Example: ${prefix + command} Joko Widodo`)             
                    anu = await fetchJson(`https://lolhuman.herokuapp.com/api/twitter/${args[0]}?apikey=${lolkey}`)
                    teks = `*• Nama* : ${anu.result.name}\n*• Desc* : ${anu.result.description}\n*• Followers* : ${anu.result.followers}\n*• Following* : ${anu.result.following}\n*• Like* : ${anu.result.like}\n*• Tweet* : ${anu.result.tweet}`
                    buffer = await getBuffer(anu.result.profile_picture)
                    nino.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
                    await limitAdd(sender) 
                    break
          case 'shutdown':
                    if (!isOwner) return
	                await nino.sendMessage(from, `_Bye..._\n_Nino off dulu yaa.._`, text,{quoted: mek})
		            await sleep(1000)
                    nino.close()
		            break
		  case 'getgrup': 
          case 'getgroup': 
          case 'getg':
          case 'gruplist':
          case 'listgrup':
          case 'grouplist':
          case 'listgroup':
                     if (!isUser) return reply(mess.only.userB)
				     ingfo = await getGroup(totalchat)
				     let txt = `*List Group*\nJumlah Grup: ${ingfo.length}\n\n`
				     for (let i = 0; i < ingfo.length; i++){
					 txt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`
				}
				     reply(txt)
				     await limitAdd(sender)
	                 break
	      case 'soundcloud':
	                if (!isUser) return reply(mess.only.userB)
	                if (isBanned) return reply(mess.only.benned)   
                    reply(mess.wait)
                    data = await fetchJson(`https://naufalhoster.xyz/dl/scdlplay?apikey=iniapikeygan2211&query=${q}`, {method: 'get'})
                    teks = `*「 SOUNDCLOUD - PLAY 」*\n\n*• Title:* ${data.result.title}\n*• Genre:* ${data.result.genre}\n*• Published:* ${data.result.published_at}\n*• Filesize:* ${data.result.filesize}\n\n_Sending Audio..._`
                    thumb = await getBuffer(data.result.thumbnail)
                    nino.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
                    musik = await getBuffer(data.result.music)
                    nino.sendMessage(from, musik, audio, {mimetype: 'audio/mp4', quoted: mek})
                    await limitAdd(sender) 
                    break
             case 'get':     
                    axios.get(`${args[0]}`).then(data => reply(JSON.stringify(data.data, null, 3)))
                    await limitAdd(sender) 
                    break
        case 'fetch':             
                    if (isBanned) return reply(mess.only.benned)   
                    fetch(`${args[0]}`).then(res => res.text())  
                   .then(bu =>{
                    reply(bu)
   })
                    await limitAdd(sender) 
                    break
           case 'mlstalk':
                    if (isBanned) return reply(mess.only.benned)   
                    if (!isUser) return reply(mess.only.userB)
                    if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)          
                    ml_id = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${lolkey}`)
                    reply(get_result.result)
                    await limitAdd(sender) 
                    break
           case 'githubstalk':
					if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned) 
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/github/${body.slice(13)}?apikey=KatoNiBoss`, {method: 'get'})
					get_result = get_result.result
					txt = `Full : ${get_result.name}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.following}\n`
					txt += `Publick : ${get_result.public_repos}\n`
					txt += `Public Gits : ${get_result.public_gists}\n`
					txt += `User : ${get_result.user}\n`
					txt += `Compi : ${get_result.company}\n`
					txt += `Lokasi : ${get_result.location}\n`
					txt += `Email : ${get_result.email}\n`
					txt += `Bio : ${get_result.bio}\n`
					buffer = await getBuffer(get_result.avatar)
					nino.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					await limitAdd(sender) 
					break
           case 'lk21':
                    if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)   
                    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Link : ${get_result.link}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Views : ${get_result.views}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Tahun : ${get_result.tahun}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
                    ini_txt += `Location : ${get_result.location}\n`
                    ini_txt += `Date Release : ${get_result.date_release}\n`
                    ini_txt += `Language : ${get_result.language}\n`
                    ini_txt += `Link Download : ${get_result.link_dl}`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await nino.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    await limitAdd(sender) 
                    break
           case 'ytmp3':
                    if (isBanned) return reply(mess.only.benned)   
				    if (args.length < 1) return reply('*Masukan Url nya?*')
                    ini_link = args[0]
                    anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${ini_link}&APIKEY=${xteamkey}`)
                    					ytt = `「 *YOUTUBE MP3* 」
					
*Judul:* ${anu.judul}
*Size:* ${anu.size}
					 
*[Wait]Tunggu Sebentar kak...*`
				    buff = await getBuffer(anu.thumbnail)
					reply(mess.wait)
					buffer = await getBuffer(anu.url)
					nino.sendMessage(from, buff, image, {quoted: mek, caption: ytt})
					nino.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.url}.mp3`, quoted: mek})
					await limitAdd(sender)
				    break
		    case 'ytmp4':
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    if (isBanned) return reply(mess.only.benned)   
				    if (args.length < 1) return reply('*Masukan Url nya?*')
                    ini_link = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=${apikey}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Uploader : ${get_result.uploader}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `Description :\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await nino.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    await nino.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    await limitAdd(sender)
                    break
           case 'facebook':
                    if (isBanned) return reply(mess.only.benned)   
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkey}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    await nino.sendMessage(from, ini_buffer, video, { quoted: mek })
                    await limitAdd(sender)
                    break
             case 'cuaca':
                    if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)   
                    if (args.length == 0) return reply(`Example: ${prefix + command} Palembang`)                  
                    daerah = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    await nino.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
           case 'covidindo':
                    if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)   
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
           case 'covid':
                    if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)   
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
				case 'swm':
				case 'stickerwm':
				case 'stcwm':
		    if (!isUser) return reply(mess.only.userB)
		    if (isBanned) return reply(mess.only.benned)   
		    var Exif = require(process.cwd() + '/exif.js')
            var exif = new Exif()
            var stickerWm = (media, packname, author) => {
            ran = getRandom('.webp')
            exif.create(packname, author, from.split("@")[0])
            exec(`webpmux -set exif ./temp/${from.split("@")[0]}.exif ./${media} -o ./${ran}`, (err, stderr, stdout) => {
            if (err) return nino.sendMessage(from, String(err), text, { quoted: mek })
            nino.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
        })
    }
    if ((isMedia && !isQuotedVideo || isQuotedImage) && args.length >= 0) {
               var mediaEncrypt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var mediaFinalys = await nino.downloadAndSaveMediaMessage(mediaEncrypt, 'dlstikerwm')
               var kls = body.slice(5)
			   var has = kls.split("|")[0];
			   var kas = kls.split("|")[1];
               var packageName = `${has}`
               var packageAuthor = `${kas}`
               var exifName = 'stikerwm.exif',
                   webpName = `${from.split(/@/)[0]}.webp`
               try {
                   exec(`cwebp -q 50 dlstikerwm.jpeg -o ${webpName}`, (e, stderr, stdout) => {
                       if (e) return reply(from, String(stderr))
                           stickerWm(webpName, packageName, packageAuthor)
                   })
               } catch (e) {
                   throw e
               }
           }
                break
                case 'jadian':
                    if (!isGroup) return reply(mess.only.group)
					jds = []
				    jdii = groupMembers
				    koss = groupMembers
				    akuu = jdii[Math.floor(Math.random() * jdii.length)]
				    diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
			case 'sticker':
            case 'stiker':
            case 's':
            case 'stickergif':
            case 'stikergif':
            case 'sgif':
            if (isBanned) return reply(mess.only.benned)   
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                encmediat = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                mediat = await nino.downloadAndSaveMediaMessage(encmediat)
                ron = getRandom('.webp')
                exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
                    fs.unlinkSync(mediat)
                    if (err) return reply(`${err}`)
                    exec(`webpmux -set exif ${addMetadata('Ninochan')} ${ron} -o ${ron}`, async (error) => {
                    if (error) return reply(`${error}`)
                    nino.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
                    fs.unlinkSync(ron)
                    })
                })
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                    encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    mediat = await nino.downloadAndSaveMediaMessage(encmedia)
				    ron = getRandom('.webp')
                    exec(`ffmpeg -i ${mediat} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=15, crop=512:512" ${ron}`, (err) => {
                    fs.unlinkSync(mediat)
                    if (err) return reply(`${err}`)
                    exec(`webpmux -set exif ${addMetadata('Ninochan')} ${ron} -o ${ron}`, async (error) => {
                    if (error) return reply(`${error}`)
                    nino.sendMessage(from, fs.readFileSync(ron), sticker, {quoted:mek})
                    fs.unlinkSync(ron)
                    })
                })
			} else {
				  reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
                  break
               case 'mystat':
               case 'botstat':
               case 'ping':
               case 'speed':
               if (!isUser) return reply(mess.only.userB)
               if (isBanned) return reply(mess.only.benned)   
                    let i = []
				    let giid = []
				    for (mem of totalchat){
					i.push(mem.jid)
				}
                    const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = nino.user.phone
				    var uptime = process.uptime();
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    nino.updatePresence(from, Presence.composing) 
				    uptime = process.uptime()
                    nino.sendMessage(from, `*Host :* Nino BOT\n*Platfrom :*  ${os.platform()}\n*Core :* ${os.cpus().length}\n*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\n*CPU :* Octa-core (4x2.3 GHz Cortex-A53 & 4x1.8 GHz Cortex-A53)\n\n*V. Whatsapp :* ${wa_version}\n*Baterai :* ${battre}% 🔋\n*MCC :* ${mcc}\n*MNC :* ${mnc}\n*Versi OS :* ${os_version}\n*Merk HP :* ${device_manufacturer}\n*Versi HP :* ${device_model}\n\n*Total Chat :* ${totalchat.length}\n*Speed :* ${latensi.toFixed(4)} Second\n*Runtime :* ${kyun(uptime)}`, text, { quoted: mek})
                    await limitAdd(sender)
                    break
              case 'batrei':
                    anu = { key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: 'status@broadcast' } : {}) }, message: { "imageMessage":{"mimetype":'image/jpeg',"caption":`Status Baterai`,"jpegThumbnail": gambar64}}}
                    nino.sendMessage(from, `❏  ʙᴀᴛʀᴇɪ  [  *${battre}%*  ]\n❏ sᴛᴀᴛᴜs ᴄʜᴀʀɢɪɴɢ : ғᴀʟsᴇ`, text, { quoted: anu})
                    await limitAdd(sender)
                    break
		     case 'otakunews':
		            if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/otakunews?apikey=${leyskey}`)
					teks = '=================\n'
					no = 0
					for (let v of anu.result) {
					no += 1
					teks += `HASIL KE - ${no.toString()}\n• Title: ${v.title}\n• Thumb: ${v.img}\n• Url: ${v.url}\n=================\n`
					}
					reply(teks)
					await limitAdd(sender) 
					break
				case 'dewabatch':
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/dewabatch-search?q=${q}&apikey=${leyskey}`)
					teks = '=================\n'
					no = 0
					for (let v of anu.result) {
					no += 1
					teks += `HASIL KE - ${no.toString()}\n• Title: ${v.title}\n• Thumb: ${v.img}\n• Url: ${v.url}\n=================\n`
					}
					reply(teks)
					await limitAdd(sender) 
					break
				case 'jurnalotakupopular':
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/jurnalotaku-popular?apikey=${leyskey}`)
					teks = '=================\n'
					no = 0
					for (let v of anu.result) {
					no += 1
				    teks += `HASIL KE - ${no.toString()}\n• Title: ${v.judul}\n• Thumb: ${v.img}\n• Url: ${v.url}\n=================\n`
			}
					reply(teks)
					await limitAdd(sender) 
					break
				case 'animanga':
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/animanga?apikey=${leyskey}`)
					teks = '=================\n'
					no = 0
					for (let v of anu.result) {
					no += 1
					teks += `HASIL KE - ${no.toString()}\n• Title: ${v.title}\n• Thumb: ${v.img}\n• Url: ${v.url}\n=================\n`
					}
					reply(teks)
					await limitAdd(sender) 
					break
				case 'jadwalanoboy':
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/jadwalanoboy?apikey=${leyskey}`)
					nino.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break
				case 'anoboyongoing':
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/anoboy-ongoing?apikey=${leyskey}`)
					nino.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break
case 'mediafire':
if (isBanned) return reply(mess.only.benned)   
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_*Tunggu Proses Upload Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
await limitAdd(sender)
break
             case 'character':
                    if (!isUser) return reply(mess.only.userB)    
                    if (isBanned) return reply(mess.only.benned)   
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    reply(mess.wait)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                    ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
            }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    nino.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    await limitAdd(sender) 
                    break
            case 'manga':
                    if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)   
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    reply(mess.wait)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                    ini_txt += `- ${x.name.full} (${x.name.native})\n`
              }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    nino.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    await limitAdd(sender) 
                    break
            case 'nhentaipdf':
                    if (isBanned) return reply(mess.only.benned)   
                    reply(mess.wait)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 212121`)
                    henid = args[0]
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/nhentai/${henid}?apikey=${lolkey}`)
                    get_result = get_result.result
                    txt = `*Title Romaji* : ${get_result.title_romaji}\n`
                    txt += `*Title Native* : ${get_result.title_native}\n`
                    get_info = get_result.info
                    txt += `*Parodies* : ${get_info.parodies}\n`
                    txt += `*Tags* : ${get_info.tags.join(", ")}\n`
                    txt += `*Artist* : ${get_info.artists}\n`
                    txt += `*Group* : ${get_info.groups}\n`           
                    txt += `*Categories* : ${get_info.categories}\n`
                    txt += `*Pages* : ${get_info.pages}\n`
                    txt += `*Uploaded* : ${get_info.uploaded}\n`
                    buffer = await getBuffer(get_result.image[0])
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
                    buffer2 = await getBuffer(anu.result)
                    nino.sendMessage(from, buffer, image, {caption: txt, quoted: mek})
                    nino.sendMessage(from, buffer2, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    await limitAdd(sender) 
                    break
           case 'attp2':
                     if (!isUser) return reply(mess.only.userB)
                     if (isBanned) return reply(mess.only.benned)   
                     if (args.length < 1) return reply('Kasih teks lah omm')              
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     nino.sendMessage(from, atetepe, sticker, {quoted: mek})
                     await limitAdd(sender) 
                     break
          case 'odckey':
                    anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/web/cekapikey?apikey=${args.join(' ')}`)
                    teks = `*YOUR APIKEY*\n\n• *Request* : ${anu.limit}\n• *Creator* : ${anu.creator}\n• *Message* : ${anu.message}\n• *API* : https://onlydevcity.herokuapp.com`
                    nino.sendMessage(from, teks, text, {quoted: mek})
                    await limitAdd(sender) 
                    break
          case 'leyskey':
					data = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cekapikey?apikey=${args.join(' ')}`)
					teks = `*YOUR APIKEY*\n\n*• Status:* ${data.result.response}\n*• Apikey:* ${data.result.apikey}\n*• Hit:* ${data.result.hit}\n*•API :* https://leyscoders-api.herokuapp.com`
					nino.sendMessage(from, teks, text, {quoted: mek})
					await limitAdd(sender) 
			        break
	      case 'lolkey':
				    anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${args.join(' ')}`)
				    teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
				    nino.sendMessage(from, teks, text, {quoted: mek})
				    await limitAdd(sender) 
                    break
          case 'vhtearkey':
                    anu = await fetchJson(`https://api.vhtear.com/resultkey?apikey=${args.join(' ')}`)
                    teks = `*YOUR APIKEY*\n\n*Apikey :* ${anu.result.Apikey}\n*From :* ${anu.result.From}\n*Expired :* ${anu.result.Expired}\n*Status :* ${anu.result.Status}\n*API :* https://api.vhtear.com`
                    nino.sendMessage(from, teks, text, {quoted: mek})
                    await limitAdd(sender) 
                    break
           case 'xteamkey':
                    if (args.length < 1) return reply('Apikeynya?')
                    anu = await fetchJson(`https://api.xteam.xyz/cekey?APIKEY=${args[0]}`)
                    anu = anu.response
                    teks = `*YOUR APIKEY*\n\n*Nama:* ${anu.name}\n*Email:* ${anu.email}\n*Apikey:* ${anu.apikey}\n*Total Hit:* ${anu.totalhit}\n*Premium:* ${anu.premium}\n*Expired:* ${anu.expired}`
                    nino.sendMessage(from, teks, text, {quoted: mek})
                    await limitAdd(sender) 
                    break
          case 'pencarikey':
                    anu = await fetchJson(`https://pencarikode.xyz/check?apikey=${args.join(' ')}`)
                    teks = `*YOUR APIKEY*\n\n*Apikey :* ${anu.apikey}\n*From :* ${anu.from}\n*Expired :* ${anu.expired}\n*Countdown :* ${anu.countdown}\n*API :* https://pencarikode.xyz`
                    nino.sendMessage(from, teks, text, {quoted: mek})
                    await limitAdd(sender) 
                    break
          case 'tiktoknowm':
                    
                    if (isBanned) return reply(mess.only.benned)   
				    reply(mess.wait)
				    anu = await fetchJson(`https://lolhuman.herokuapp.com/api/tiktok?apikey=${lolkey}&url=${args[0]}`)
				    teks = `*➸ Name:* ${anu.result.author.username}\n➸ *Title:* ${anu.result.title}\n➸ *Desc:* ${anu.result.description}\n\n*Mohon Tunggu Sebentar Media Sedang Dikirim!*`
				    buffer = await getBuffer(anu.result.thumbnail)
				    nino.sendMessage(from, buffer, image, { quoted: mek, caption: teks})
				    buffer2 = await getBuffer(anu.result.link)
				    nino.sendMessage(from, buffer2, video, { mimetype: 'video/mp4', quoted: mek })
				    await limitAdd(sender) 
				    break
		   case 'tiktod':
		             
		             if (isBanned) return reply(mess.only.benned)   
		             reply(mess.wait)
		             anu = await fetchJson(`https://api.vhtear.com/tiktok_no_wm?link=${args[0]}&apikey=${vhtearkey}`)
		             buffer = await getBuffer(anu.result.video)
		             nino.sendMessage(from, buffer, video, {quoted: mek})
		             await limitAdd(sender) 
		             break
	       case 'attp':
	                if (!isUser) return reply(mess.only.userB)
	                if (isBanned) return reply(mess.only.benned)   
				    if (args.length < 1) return reply(`uhm teksnya mana?\n*Contoh ${prefix}attp stardustlrlr gans*`)
				    attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				    nino.sendMessage(from, attp2, sticker, {quoted: mek})
				    await limitAdd(sender) 
				    break
            case 'anime':
                    if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)   
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                    ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    nino.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    await limitAdd(sender) 
                    break
          case 'nhentaisearch':
                    
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    reply(mess.wait)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                    ini_txt += `Id : ${x.id}\n`
                    ini_txt += `Title English : ${x.title_english}\n`
                    ini_txt += `Title Japanese : ${x.title_japanese}\n`
                    ini_txt += `Native : ${x.title_native}\n`
                    ini_txt += `Upload : ${x.date_upload}\n`
                    ini_txt += `Page : ${x.page}\n`
                    ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
         case 'fast':
                    if (!isQuotedAudio) return reply(mess.wrongF)
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nino.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
					fs.unlinkSync(media)
					if (err) return reply('Error!')
					hah = fs.readFileSync(ran)
					nino.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
					fs.unlinkSync(ran)
			})
			         await limitAdd(sender)
					break
		case 'vibra':     
	            if (!isQuotedAudio) return reply(mess.wrongF)
		        if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                var req = args.join(' ')            
				viyin = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				veyyen = await nino.downloadAndSaveMediaMessage(viyin)
			    ran = getRandom('.mp3')
				exec(`ffmpeg -i ${veyyen} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(veyyen)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				nino.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
	})
	            await limitAdd(sender)
				break
		case 'vibrav':     
				if (!isQuotedAudio) return reply(mess.wrongF)
				if (isBanned) return reply(mess.only.benned)   
		        if (!q) return reply(mess.wrongF)
                var req = args.join(' ')            
				viyin = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				veyyen = await nino.downloadAndSaveMediaMessage(viyin)
				ran = getRandom('.mp4')
			    exec(`ffmpeg -i ${veyyen} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(veyyen)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				nino.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
                await limitAdd(sender)
				break
		case 'gemes':
		        if (!isQuotedAudio) return reply(mess.wrongF)
		        if (isBanned) return reply(mess.only.benned)   
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await nino.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				nino.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
		})
		        await limitAdd(sender)
				break
		 case 'hode':
		        if (!isQuotedAudio) return reply(mess.wrongF)
		        if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await nino.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
				nino.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
				fs.unlinkSync(ran)
		})
		        await limitAdd(sender)
				break
          case 'tempo':
                if (!isQuotedAudio) return reply(mess.wrongF)
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                var req = args.join(' ')            
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await nino.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				hah = fs.readFileSync(ran)
			    nino.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
					})
				await limitAdd(sender)
				break
         case 'fitnahpc':
               if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
               if (isBanned) return reply(mess.only.benned)    
		       if (!isUser) return reply(mess.only.userB)
               jids = `${targetpc}@s.whatsapp.net` // nomer target
               var split = args.join(' ').replace(/@|\d/gi, '').split('|')
               var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
               const responye = await nino.sendMessage(jids, `${split[1]}`, MessageType.text, options)
               await nino.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
               await limitAdd(sender)
               break
         case 'return':
                if (!isOwner) return reply('Khusus Owner!')
                return nino.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: mek })
                break
	    case 'misikak':
                if (!isOwner) return reply('Khusus Owner!')
			    nino.toggleDisappearingMessages(from, 'Aowkwok')
			    break
			case 'afk':
			if (!isGroup) return reply(mess.only.group)
                 alasan = args.join(" ")
                 afk[sender.split('@')[0]] = alasan.toLowerCase()
                 fs.writeFileSync("./src/afk.json", JSON.stringify(afk))
                 ini_txt = "Fitur AFK berhasil *diaktifkan!*\n\n"
                 if (alasan != "Nothing.") {
                 ini_txt += `➸ *Ussername*: ${pushname2}\n`
                 ini_txt += "➸ *Alasan*: " + alasan
             }
                 nino.sendMessage(from, ini_txt, text, {quoted: mek4})
                 break
          case 'caklontong':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${vhtearkey}`, {method: 'get'})
					setTimeout( () => {
					nino.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					nino.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					nino.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					nino.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					nino.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
            case 'tebakgambar': // case by piyo-chan
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    await nino.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "30 detik cukup kan? gk cukup pulang aja" }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
                    })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                case 'canceltebakgambar':
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
                    reply("Success mengcancel tebak gambar sebelumnya")
                    break
            case 'sambungkata':
                    if (sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
                    if (args.length == 0) return reply(`Example: ${prefix + command} tahu`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sambungkata?apikey=${lolkey}&text=${ini_txt}`)
                    get_result = get_result.result
                    await nino.sendMessage(from, get_result, text, { quoted: mek }).then(() => {
                    sambungkata[sender.split('@')[0]] = get_result.toLowerCase()
                    fs.writeFileSync("./src/sambungkata.json", JSON.stringify(sambungkata))
                    })
                    await limitAdd(sender)
                    break
                case 'cancelsambungkata':
                    if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
                    if (!sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete sambungkata[sender.split('@')[0]]
                    fs.writeFileSync("./src/sambungkata.json", JSON.stringify(sambungkata))
                    reply("Success mengcancel sambung kata sebelumnya")
                    break
                    case 'rules':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    nino.sendMessage(from, rules(prefix), text, { quoted: mek })
                    break
					case 'kodenuklir':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply('Fitur Nsfw Belum Dihidupkan Ketik /nsfw1 jika ingin mematikan ketik /nsfw 0')
					tod = await getBuffer(`https://i.ibb.co/Y8SQbH4/images-2021-01-06-T012645-090.jpg`)
					nino.sendMessage(from, tod, image, { quoted: mek, caption: kodenuklir()})
					break
					case 'kodenuklir2':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isNsfw) return reply('Fitur Nsfw Belum Dihidupkan Ketik /nsfw1 jika ingin mematikan ketik /nsfw 0')
					tod = await getBuffer(`https://i.ibb.co/qm1qjdD/images-2020-12-28-T142307-987.jpg`)
					nino.sendMessage(from, tod, image, { quoted: mek, caption: kodenuklir2()})
					break
                  case 'send':
					if (!isUser) return reply(mess.only.userB)  
					if (isBanned) return reply(mess.only.benned)   
					var pc = body.slice(6)
					var nomor = pc.split("|")[0];
					var org = pc.split("|")[1];
					nino.sendMessage(nomor+'@s.whatsapp.net', org, text)
					await limitAdd(sender)
					break
			case 'googleimage':
				   nino.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${vhtearkey}`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					nino.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Hasil Pencarian : '+goo+'*', quoted: mek })
					break
					case 'delete':
					case 'del':
					case 'd':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)    
					if (!isGroup)return reply(mess.only.group)
					nino.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
					case 'kalkulator':
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
			        if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${vhtearkey}`, {method: 'get'})
				    nino.sendMessage (from, `*${anu.result.data}*`, text, {quoted: mek})
				    await limitAdd(sender)
				    break 
					case 'sewabot':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					buffer = await getBuffer(`https://i.ibb.co/Q9wwq6d/898c4d9c2d69.jpg`)
					nino.sendMessage(from, buffer, image, {caption: sewabot(prefix), text, quoted: mek})
					break
					case 'animesaran':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					qute = await getBuffer(`https://i.ibb.co/F7y89KS/images-2021-01-06-T011202-662.jpg`)
					nino.sendMessage(from, qute, image, { quoted: mek, caption: animesaran() })
					break
					case 'listsurah':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					nino.sendMessage(from, listsurah(prefix) , text, { quoted: mek })
					break
				case 'info':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					me = nino.user
					uptime = process.uptime()
					tod = await getBuffer(`https://i.ibb.co/ZfS1nPC/images-2020-12-28-T142415-021.jpg`)
					teks = `*Nama bot* : ${me.name}\n*Author* : Miku \n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Total Chat* : ${totalchat.length}\n*Instagram* : *marz.edtz*\n*Youtube* : ゆいNino chan`
					buffer = await getBuffer(me.imgUrl)
					nino.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
					case 'me':
					case 'profile':
    				nino.updatePresence(from, Presence.composing)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
    				try {
					profil = await nino.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					thu = await nino.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
					me = nino.user
					uptime = process.uptime()
				    profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname2}\n➸ *Status:* ${thu.status}\n➸ *Banned :* No\n➸ *Prefix :* 「  ${prefix}  」\n➸ *Total Block Contact :* ${blocked.length}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nProfile Bot\n➸ *Nama bot :* ${me.name}\n➸ *Author :* Miku \n➸ *The bot is active on :* ${kyun(uptime)}\n`
					buff = await getBuffer(profil)
					nino.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
				case 'listblock':    
				    if (!isUser) return reply(mess.only.userB)
				    if (isBanned) return reply(mess.only.benned)    
					teks = '*BLOCK LIST* :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝐓𝐨𝐭𝐚𝐥 : ${blocked.length}`
					nino.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
	                if (!isUser) return reply(mess.only.userB)
			        if (isBanned) return reply(mess.only.benned)    
				
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await nino.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					await limitAdd(sender)
					break
					case 'turnoff':
				    case 'off':
                    if (!isOwner) return 
                    const tescuk = '0@s.whatsapp.net'
                    teks = '_Mematikan Bot..._'
                    await costum(`${teks}`, text, tescuk, '*TURNOFF*')
                    setTimeout( () => {
					process.exit()
					}, 2000)
					break
			case 'creator':
			case 'owner':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                 nino.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 nino.sendMessage(from, 'itu Owner Ku Kalo Mau Tanya Apa Apa Chat Aja ><',MessageType.text, { quoted: mek} )
                 tod = await getBuffer(`https://i.ibb.co/7GhdG3V/bb444084373a.jpg`)
                 nino.sendMessage(from, tod, image, { quoted: mek, caption: '*Itu waifu owner ku*'})
                 break
                 case 'fitnah':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				
				    if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				    var gh = body.slice(8)
				    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					nino.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					await limitAdd(sender)
					break
				case 'infogc':
				case 'infogrup':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				nino.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await nino.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					nino.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					await limitAdd(sender)
					break
				case 'groupinfo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                nino.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                ppUrl = await nino.getProfilePicture(from) // leave empty to get your own
			    buffergbl = await getBuffer(ppUrl)
		        nino.sendMessage(from, buffergbl, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
		        await limitAdd(sender)
		        break
         case 'memeimg':
         case 'memegen':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                    top = arg.split('|')[0]
                    bottom = arg.split('|')[1]
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
					ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owgi = await  nino.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
					sendMediaURL(from, `${anu1}`, mess.success)
					} else {
					reply('Gunakan foto/stiker!')
					}
					break
           case 'trigger':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    reply(mess.wait)
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    buffer = `http://api.lolhuman.xyz/api/editor/triggered?apikey=${lolkey}&img=${ini_url}`
                    exec(`wget "${buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        nino.sendMessage(from, buff, sticker, { quoted: mek })
                        fs.unlinkSync(rano)
                    })
                    break
                case 'tomp3':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                	nino.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('❌ reply videonya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nino.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
						bufferlkj = fs.readFileSync(ran)
						nino.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
					case 'chatlist':
					nino.updatePresence(from, Presence.composing)  
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					teks = 'This is list of chat number :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					nino.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
					/*case 'verify':
					nino.updatePresence(from, Presence.composing)
					if (isUser) return reply('*Kamu sudah melakukan verifikasi*')
					if (isBanned) return reply(mess.only.benned)
					user.push(sender)
					fs.writeFileSync('./src/user.json', JSON.stringify(user))
					ppimg = 'https://i.ibb.co/Q9wwq6d/898c4d9c2d69.jpg'
					captionnya = `╭─「 *_VERIFY-SUCCES_* 」\`\`\`\n│ Verify Berhasil SN: \n│TM08GK8PPHBSJDH10J\`\`\`\n│\n│\`\`\`ᴘᴀᴅᴀ ${date} ${time}\`\`\`\n│\`\`\`「 ɴᴀᴍᴀ 」: ${pushname2}\`\`\`\n│\`\`\`「 ɴᴏᴍᴏʀ 」: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴏᴛ\`\`\`\n│\`\`\`ꜱɪʟᴀʜᴋᴀɴ\`\`\`\n│\`\`\`ᴋɪʀɪᴍ ${prefix}menu\`\`\`\n│\`\`\`\n│ᴛᴏᴛᴀʟ ᴘᴇɴɢɢᴜɴᴀ: ${user.length} ᴏʀᴀɴɢ\`\`\`\n╰────────────────`
					daftarimg = await getBuffer(ppimg)
					nino.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
					break*/
					case 'totaluser':
					nino.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `╭────「 *TOTAL USER nino* 」\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────⎿ *nino* ⏋────`
					nino.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					await limitAdd(sender)
					break
				case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await nino.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    nino.sendMessage(from, yeh, text, {quoted: mek})
				    await limitAdd(sender)
			        break
		case 'hidetag':
				try {
               quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
               hideTag(from, `${quotedText}`)
				} catch {
               hideTag(from, `${q}`)
	  }
		       break
	  case 'ownergrup':
	  case 'ownergroup':
               nino.updatePresence(from, Presence.composing) 
			   if (!isUser) return reply(mess.only.userB)
			   if (isBanned) return reply(mess.only.benned)   
               if (!isUser) return reply(mess.only.userB)
			   if (isBanned) return reply(mess.only.benned)  
               options = {
               text: `Owner Group ini adalah : @${groupOwner.split("@")[0]}`,
               contextInfo: { mentionedJid: [groupOwner] }
           }
                nino.sendMessage(from, options, text, { quoted: mek } )
                await limitAdd(sender)
				break
          case 'play':
                    if (args.length < 1) return reply('Nama lagunya apa kak?')
                    if (isBanned) return reply(mess.only.benned)   
                    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(9)}&apikey=${vhtearkey}`)
                    if (anu.error) return reply(anu.error)
                    infomp3 = `*Lagu ditemukan!*\n\n➸ *Judul* : ${anu.result.title}\n➸ *Durasi* : ${anu.result.duration}\n➸ *Size* : ${anu.result.size}\n\n*[WAIT] Proses Dumlu Yakan*`
                    buffer = await getBuffer(anu.result.image)
                    lagu = await getBuffer(anu.result.mp3)
                    nino.sendMessage(from, buffer, image, { quoted: mek, caption: infomp3 })
                    nino.sendMessage(from, lagu, audio, { mimetype: 'audio/mp4', quoted: mek })
                    await limitAdd(sender) 
                    break
			case 'runtime':
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    nino.updatePresence(from, Presence.composing) 
				    uptime = process.uptime()
				    reply(`Runtime:\n◪ ${kyun(uptime)}`)
				    await limitAdd(sender)
				    break
			case 'logo':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(6)
					reply(mess.wait)
					loog = await getBuffer(`https://api.vhtear.com/gamelogo?text=${teks}&apikey=${vhtearkey}`, {method: 'get'})
					nino.sendMessage(from, loog, image, {quoted: mek, caption: 'Logo '+teks})
					await limitAdd(sender)
					break
               case 'tahta':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Teksnya mana kak? >.<')
					teks = body.slice(7)
					if (teks.length > 9) return reply('Teksnya kepanjangan, maksimal 9 karakter')
					reply(mess.wait)
					bufferrty = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=${vhtearkey}`, {method: 'get'})
					nino.sendMessage(from, bufferrty, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					await limitAdd(sender)
					break
			  case 'ban':
			  case 'addban':
			  case 'banned':
                       if ( !isOwner && !mek.key.fromMe ) return 
                       bnnd = body.slice(5)
                       ban.push(`${bnnd}@s.whatsapp.net`)
                       fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
                       reply(`Oke sudah sayang ~`)
                       break
             case 'unban':
             case 'delban':
             case 'delbanned':
                       if ( !isOwner && !mek.key.fromMe ) return 
                       bnnd = body.slice(7)
                       ban.splice(`${bnnd}@s.whatsapp.net`, 1)
                       fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
                       reply(`Oke sudah sayang ~`)
                       break
	         case 'listban':
			 case 'banlist':
			 case 'listbanned':
		     case 'bannedlist':
			           if (isBanned) return reply(mess.only.benned)    
				       nino.updatePresence(from, Presence.composing) 
					   if (!isUser) return reply(mess.only.userB)
					   teks = 'This is list of banned number\n'
					   for (let benn of ban) {
					   teks += `➸ @${benn.split('@')[0]}\n\n`
					}
					   teks += `Total : ${ban.length}`
					   nino.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					   break
				case 'quran':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					nino.sendMessage(from, quran, text, {quoted: mek})
					break
             case 'qrcode':
                    if (isBanned) return reply(mess.only.benned)    
			        if (!isUser) return reply(mess.only.userB)
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return nino.sendMessage(from, '𝐌𝐚𝐬𝐮𝐤𝐚𝐧 𝐓𝐞𝐤𝐬/𝐔𝐫𝐥 𝐘𝐚𝐧𝐠 𝐈𝐧𝐠𝐢𝐧 𝐃𝐢 𝐁𝐮𝐚?? 𝐐??', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					nino.sendMessage(from, bufferr, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'leave': 
			      if (!isGroup) return reply(mess.only.group)
		       	anu = await nino.groupLeave(from, '𝗕𝘆𝗲𝗲', groupId)
	               break
	            case 'leaveall':
                if (!isOwner) return reply(mess.only.ownerB)
                    const allGroup = await nino.getAllGroups()
                    for (let gclist of allGroup) {
                    await nino.sendText(gclist.contact.id)
                    await nino.groupLeave(gclist.contact)
                }
                   reply(mess.succes)
                   break
                   case 'chika':
                   if (isBanned) return reply(mess.only.benned)    
			       if (!isUser) return reply(mess.only.userB)
	               anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
		           sasu = JSON.parse(JSON.stringify(anu));
		           ke =  sasu[Math.floor(Math.random() * sasu.length)];
			       nye = await getBuffer(ke)
			       nino.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: mek })
                   await limitAdd(sender)
				   break
	            case 'getses':
	                if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                    if (!isOwner) return nino.reply(from, 'Perintah ini hanya untuk Owner bot', id)
                    const sesPic = await nino.getSnapshot()
                    nino.sendFile(from, sesPic, 'session.png', 'Neh...', id)
                    break
			case 'setname':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                    if (!isGroup) return reply(mess.only.group)
			        if (!isGroupAdmins) return reply(mess.only.admin)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    if (args.length < 1) return reply('𝐭𝐞𝐤𝐬𝐧𝐲𝐚 𝐤𝐚𝐤')
				    ppUrl = await nino.getProfilePicture(from) // leave empty to get your own
			        bufferd = await getBuffer(ppUrl)
                    nino.groupUpdateSubject(from, `${body.slice(9)}`)
                    nino.sendMessage(from, bufferd, image, {quoted: mek, caption: `Succes, Ganti Nama Grup\nYang Sebelumnya *${groupName}*`})
                    await limitAdd(sender)
                    break
                case 'setdesc':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				ppUrl = await nino.getProfilePicture(from) // leave empty to get your own
			    bufferf = await getBuffer(ppUrl)
                nino.groupUpdateDescription(from, `${body.slice(9)}`)
                nino.sendMessage(from, bufferf, image, {quoted: mek, caption: `Succes, Ganti Deskripsi Grup\nYang Sebelumnya *${groupDesc}*`})
                await limitAdd(sender)
                break
				case 'tts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return nino.sendMessage(from, 'Kode bahasanya mana om?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return nino.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							bufferg = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							nino.sendMessage(from, bufferg, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
					case 'imgtag':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await nino.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await nino.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        nino.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    case 'stickernobg':
                var imgbb = require('imgbb-uploader')
                if (isBanned) return reply(mess.only.benned)   
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    owgi = await nino.downloadAndSaveMediaMessage(ger)
                    anu = await imgbb("9e30873557f06f55ddbb42f758173c79", owgi)
                    teks = `${anu.display_url}`
                    ranpp = getRandom('.png')
                    ranop = getRandom('.webp')
                    anu1 = await fetchJson(`https://api.vhtear.com/removebgwithurl?link=${teks}&apikey=${vhtearkey}`, { method: 'get' })
                    exec(`wget ${anu1.result.image} -O ${ranpp} && ffmpeg -i ${ranpp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranop}`, (err) => {
                        fs.unlinkSync(ranpp)
                        if (err) return reply(mess.error.stick)
                        nobg = fs.readFileSync(ranop)
                        nino.sendMessage(from, nobg, sticker, { quoted: mek })
                        fs.unlinkSync(ranop)
                    })
                } else {
                    reply('Gunakan foto!')
                }
                await limitAdd(sender)
                break
	            case 'setpp':
	                if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await nino.downloadAndSaveMediaMessage(mek)
                    await nino.updateProfilePicture (from, media)
                    reply('Sukses mengganti icon Grup')
                    await limitAdd(sender) 
                    break
                case 'apakah':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					nino.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender) 
					break
				case 'rate':
				case 'nilai':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					rate = body.slice(1)
					const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					nino.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender) 
					break
					case 'gantengcek':
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					ganteng = body.slice(1)
					const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					nino.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					await limitAdd(sender) 
					break
			case 'cantikcek':
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					cantik = body.slice(1)
					const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
					const tik = can[Math.floor(Math.random() * can.length)]
					nino.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					await limitAdd(sender) 
					break
			case 'persenbucin':
		            if (isBanned) return reply(mess.only.benned)    
			        if (!isUser) return reply(mess.only.userB)
                    if (args.length < 1) return zn.reply(from, 'Namanya siapa?')
                    persenbucin = ["4%\n\nHadehh🤦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\nHadehhh🏃","74%\n\nbucen Teroosss","83%\n\nSekali² kek Ga bucin Gitu","97%\n\nHadehh Pakboi²","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi","29%\n\nKasian Mana Masih Muda","94%\n\nDasar Pakboi","75%\n\nYa Ampun"]
                    const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
                    nino.sendMessage(from, 'Persen Bucin: '+query+'\nJawaban : '+ pbucin)
                    await limitAdd(sender) 
		            break
		case 'cekkelamin':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
			        const seanl = await axios.get(`https://api.genderize.io/?name=${body.slice(12)}`)
			        const name11 = seanl.data.name
                    const genderr = seanl.data.gender
			        reply(`    「 Cek Kelamin \n\nNama : ${name11} \n Jenis Kelamin : ${genderr}\n\nMale : Laki-Laki\nFemale : Perempuan\nNull : Error`)
		            break
				case 'watak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					watak = body.slice(1)
					const wa =['peny ayang','pem urah','Pem arah','Pem aaf','Pen urut','Ba ik','bap eran','Baik Hati','peny abar','Uw u','top deh, poko knya','Suka Memb antu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					nino.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					await limitAdd(sender) 
					break
				case 'hobby':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					nino.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender) 
					break
				case 'bisakah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					nino.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender) 
					break
				case 'kapankah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					nino.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender) 
					break
					case 'toxic':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					kapankah = body.slice(1)
					const toxic =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ole = toxic[Math.floor(Math.random() * toxic.length)]
					nino.sendMessage(from, ole, text, { quoted: mek })
					await limitAdd(sender) 
					break
				case 'truth':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					nino.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender) 
					break
				case 'dare':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					nino.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender) 
					break		
                case 'tagme':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tagged!`,
					contextInfo: { mentionedJid: [nom] }
					}
					nino.sendMessage(from, tag, text, {quoted: mek})
					break
                case 'donasi':
				case 'donate':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					nino.sendMessage(from, '──「 𝘿𝙊𝙉𝘼𝙏𝙀 」──\n\nDonasi Untuk Masuk Grup Bisa Melalui\nPulsa : 0812-7889-5306\nDana : 0882-8642-1519\n\n~ 10k/bulan via Dana\n~ 15k/bulan via Pulsa\n\nHubungi Owner :\nwa.me/6288286421519\nwa.me/6281278895306\n\nTerima kasih yang sudah mau donasi...\nhasil donasi akan digunakan penambahan biaya ApiKey\n\n──「 *Nino BOT* 」──', text, { quoted: mek })
					break
                case 'lirik':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break
			case 'meme': 
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					meme = await kagApi.memes()
					bufferk = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					nino.sendMessage(from, bufferk, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender) 
					break
			case 'memeindo':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    reply(mess.wait)
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
					buffer = await getBuffer(memein.result)
					nino.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender) 
					break 
		case 'ssweb':
				      if (isBanned) return reply(mess.only.benned)    
				      if (!isUser) return reply(mess.only.userB)
				      if (args.length < 1) return reply('Urlnya mana gan?')
				      try {
				      teks = `${body.slice(7)}`
				      reply(mess.wait)
				      buff = await getBuffer(`https://api.vhtear.com/ssweb?link=${teks}&type=pc&apikey=${vhtearkey}`, {method: 'get'})
				      nino.sendMessage(from, buff, image, {quoted: mek})
				} catch {
				      reply (mess.error.bug)
				}
				      await limitAdd(sender) 
		              break 
					case 'jadian':
                    if (!isGroup) return reply('perintah ini hanya dapat digunakan di dalam grup')
                    up = groupMembers
                    aku = up[Math.floor(Math.random() * up.length)];
                    kamu = up[Math.floor(Math.random() * up.length)];
                    sapa = `Cieee... @${(/[@c.us]/g, '')} (💘) @${(/[@c.us]/g, '')} baru jadian nih\nBagi pj nya dong`
                    nino.sendMessage(from, sapa)
                    await limitAdd(sender) 
                    break
                    case 'nhentai':         
                    if (isBanned) return reply(mess.only.benned)   
                    kod = body.slice(9)
                    data = await fetchJson(`http://lolhuman.herokuapp.com/api/nhentai/${kod}?apikey=${lolkey}`, {method: 'get'})
                    short1 = await fetchJson(`https://naufalhoster.xyz/tools/tinyurl?apikey=4gahFk-71mhPQ-jj0w0a&url=${data.result.read}`, {method: 'get'})
                    //short2 = await fetchJson(`https://naufalhoster.xyz/tools/tinyurl?apikey=4gahFk-71mhPQ-jj0w0a&url=${data.result.file_pdf}`, {method: 'get'})
                    teks = `*Title :* ${data.result.title_romaji}\n*Parodies :* ${data.result.info.parodies}\n*Character :* ${data.result.info.characters[0]}\n*Kategori :* ${data.result.info.categories}\n*Uploader :* ${data.result.info.uploaded}\n\n*Tags ${data.result.info.tags[0]}*\n\nRead :${short1.result.shortUrl}`
                    thumb = await getBuffer(data.result.image[0])
                    nino.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
                    await limitAdd(sender) 
                    break	
                    case 'nhentaisearch':
                    reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
               case 'translate':
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    if (isBanned) return reply(mess.only.benned)   
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolkey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    await limitAdd(sender) 
                    break
                    case 'quotesanime':
                    if (isBanned) return reply(mess.only.benned)   
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
                    quotes = quotes.result
                    quote = quotes.quote
                    char = quotes.character
                    anime = quotes.anime
                    episode = quotes.episode
                    reply(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
                    await limitAdd(sender) 
                    break
                    case 'playstore':    
                    if (isBanned) return reply(mess.only.benned)   
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appId}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Link : ${x.url}\n`
                        ini_txt += `Price : ${x.priceText}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
                case 'shopee':
                    if (isBanned) return reply(mess.only.benned)   
                    if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
               case 'waktu':
                   if (isBanned) return reply(mess.only.benned)   
                   reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
                   await limitAdd(sender)
                   break
              case 'sider':
                    if (!isGroup) return reply(mess.only.group)
            try {
                    const reader = await getMessageReaders(quotedMsgObj.id)
                    let list = ''
                    for (let pembaca of reader) {
                    list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
            }
                    sendTextWithMentions(from, `Ciee, Ngeread...\n${list}`)
            } catch(err) {
                    console.log(err)
                    reply(`Maaf, Belum Ada Yang Membaca Pesan Nino atau Mereka Menonaktifkan Read Receipts`)    
            }
                    break
                case 'brainly':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    if (isBanned) return reply(mess.only.benned)   
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${lolkey}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
                    case 'ssweb2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} http://api.lolhuman.xyz`)
                    ini_link = args[0]
                    ini_buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/sswebfull?apikey=${lolkey}&url=${ini_link}`)
                    nino.sendMessage(from, ini_buffer, image, { quoted: mek })
                    await limitAdd(sender) 
                    break
                case 'darkjoke': 
                    if (isBanned) return reply(mess.only.benned)   
				    gatauda = body.slice(8)
				    reply(mess.wait)
				    buffer = await getBuffer(`http://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`, {method: 'get'})
				    nino.sendMessage(from, buffer, image, {quoted: mek})
				    await limitAdd(sender) 
				    break
           case 'googleimg':
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${lolkey}&query=${ini_url}`)
                    ini_sticker = ini_url.result
                    for (sticker_ in ini_sticker) {
                    buffer = await getBuffer(ini_sticker[sticker_])
                    nino.sendMessage(from, buffer, image, {quoted: mek})
                    }
                    await limitAdd(sender) 
                    break
          case 'readall':
					var chats = await nino.chats.all()
                    chats.map( async ({ jid }) => {
                    await nino.chatRead(jid)
                    })
					teks = `\`\`\`Berhasil membaca ${chats.length} Chat !\`\`\``
					await nino.sendMessage(from, teks, MessageType.text, {quoted: mek})
					console.log(chats.length)
					await limitAdd(sender) 
					break
           case 'tiktokstalk':
                    if (isBanned) return reply(mess.only.benned)   
                    if (args.length < 1) return reply('Usernamenya mana tod?')
				    reply(mess.wait)
				    anu = await fetchJson(`https://lolhuman.herokuapp.com/api/stalktiktok/${args.join(' ')}?apikey=${lolkey}`)
				    buffer = await getBuffer(anu.result.user_picture)
				    teks = `*➸ Ussername:* ${anu.result.username}\n*➸ Nickname:* ${anu.result.nickname}\n*➸ Bio:* ${anu.result.bio}\n*➸ Followers:* ${anu.result.followers}\n*➸ Followings:* ${anu.result.followings}\n*➸ Like:* ${anu.result.likes}\n*➸ Video:* ${anu.result.video}`
				    nino.sendMessage(from, buffer, image, { quoted: mek, caption: teks})
				    await limitAdd(sender) 
				    break
           case 'bucin':
                    if (isBanned) return reply(mess.only.benned)   
                    bucin = await fetchJson(`http://api.lolhuman.xyz/api/random/katabucin?apikey=${lolkey}`, {method: 'get'})
                    reply(`${bucin.result}`)
                    await limitAdd(sender) 
                    break
           case 'translate':
			        var tr = body.slice(11)
			        var kode = tr.split("|")[0];
			        var quer = tr.split("|")[1];
			        anu = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode}?apikey=${lolkey}&text=${quer}`, {method: 'get'})
		            teks = `*From :* ${anu.result.from}\n\n*To :* ${anu.result.to}\n\n*Original :* ${anu.result.original}\n\n*Translated :* ${anu.result.translated}\n\n*Pronunciation :* ${anu.result.pronunciation}`
			        reply(teks)
			        await limitAdd(sender) 
			        break
              case 'nulis':
				    nino.updatePresence(from, Presence.composing)
				    if (isBanned) return reply(mess.only.benned)   
			        if (args.length < 1) return reply(`*Usage :*\n${prefix}nulis yourtext\n\n*Ex :*\n${prefix}nulis Tes123`)
			        reply(mess.wait)
					tulis = body.slice(7)
					nulis = await getBuffer(`http://api.lolhuman.xyz/api/nulis?apikey=${lolkey}&text=${tulis}`, {method: 'get'})
					nino.sendMessage(from, nulis, image, {quoted: mek})
					await limitAdd(sender) 
					break
            case 'ytstalk':
                  if (isBanned) return reply(mess.only.benned)
                  anu = await fetchJson(`http://api.lolhuman.xyz/api/ytmeknel?apikey=${lolkey}&query=${body.slice(9)}`, {method: 'get'})
                  teks = `*YOUTUBE - STALK*`
                  var nomore = '1'
                  for (let i = 0; i < anu.result.length; i++) {
                  teks += `\n\n*Urutan ${nomore}*\n*meknel name :* ${anu.result[i].meknel_name}\n*meknel id :* ${anu.result[i].meknel_id}\n*meknel created :* ${anu.result[i].meknel_created}`
                  nomore++
                }
                  buff = await getBuffer(anu.result[0].meknel_picture.high.url)
                  nino.sendMessage(from, buff, image, {quoted: mek, caption: teks})
                  await limitAdd(sender) 
                  break
               case 'wasted':
                    if (isBanned) return reply(mess.only.benned)   
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nino.downloadAndSaveMediaMessage(enmedia)
					anu = await imgbb("1cf4d50db9a95c32b4f1b1c199183373", media)
					teks = `${anu.display_url}`
					foto = await getBuffer(`http://api.lolhuman.xyz/api/editor/wasted?apikey=${lolkey}&img=${teks}`, {method: 'get'})
					nino.sendMessage(from, foto, image, {quoted: mek})
					await limitAdd(sender) 
					break
                    case 'asupan':
                    if (isBanned) return reply(mess.only.benned)
                    reply(mess.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
                    buffer = await getBuffer(get_result.result)
                    nino.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" })
                    await limitAdd(sender) 
                    break
                case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                    if (isBanned) return reply(mess.only.benned)   
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} nino mek`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    nino.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    await limitAdd(sender) 
                    break
             case 'smoji':
                    if (isBanned) return reply(mess.only.benned)
                    reply(mess.wait)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolkey}`)
                    nino.sendMessage(from, buffer, sticker, { quoted: mek })
                    await limitAdd(sender) 
                    break
            case 'smoji2':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Lol Human`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=${lolkey}`)
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=` + ini_buffer.result.emoji.whatsapp)
                    await nino.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    await limitAdd(sender) 
                    break
           case 'tiktoknowm3':
					try {
			        if (isBanned) return reply(mess.only.benned)
					if (args.length < 1) return reply('Urlnya mana?')
					if(!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					reply(mess.wait)
					anu = await fetchJson(`http://api-melodicxt-3.herokuapp.com/api/tiktok/downloader?url=${args[0]}&apiKey=administrator`, {method: 'get'})
					buffer = await getBuffer(anu.data.no_watermark)
					nino.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('Error gan')
					await limitAdd(sender) 
					}
					break
                    case 'tiktoknowm2':
                    if (isBanned) return reply(mess.only.benned)
                    reply(mess.wait)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    buffer = await getBuffer(get_result.result.link)
                    nino.sendMessage(from, buffer, video, { quoted: mek })
                    await limitAdd(sender) 
                    break
	       case 'instagram':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    reply(mess.wait)
				    anu = await fetchJson(`https://lolhuman.herokuapp.com/api/instagram2?apikey=${lolkey}&url=${args[0]}`)
				    buffer = await getBuffer(anu.result.media[0])
				    teks = `*➸ Name:* ${anu.result.account.username}\n*➸ Title:* ${anu.result.caption}`
				    nino.sendMessage(from, buffer, video, { quoted: mek, caption: teks})
				    await limitAdd(sender) 
				    break
                    case 'hilih':
					try {
                   quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					i = (teks) => {
					return teks.replace(/['a','o','u','e','A','O','U','E']/g, "i");
					}
					reply(i(quotedText))
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					i = (teks) => {
					return teks.replace(/['a','o','u','e','A','O','U','E']/g, "i");
					}
					reply(i(args.join(' ')))
					}
					break
					case 'holoh':
					try {
                   quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					i = (teks) => {
					return teks.replace(/['a','o','u','e','A','O','U','E']/g, "o");
					}
					reply(i(quotedText))
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					i = (teks) => {
					return teks.replace(/['a','o','u','e','A','O','U','E']/g, "o");
					}
					reply(i(args.join(' ')))
					}
					break
					case 'heleh':
					try {
                   quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					i = (teks) => {
					return teks.replace(/['a','o','u','e','A','O','U','E']/g, "e");
					}
					reply(i(quotedText))
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					i = (teks) => {
					return teks.replace(/['a','o','u','e','A','O','U','E']/g, "e");
					}
					reply(i(args.join(' ')))
					}
					break
            case 'img2url':          
                    if (isBanned) return reply(mess.only.benned)   
                    var imgbb = require('imgbb-uploader')
                    var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                    var media = await  nino.downloadAndSaveMediaMessage(encmedia)       
                    imgbb('acf1ad5f22ad5822dc163cce74aedfd4', media)
                   .then(data => {
                    var caps = `*「 _IMAGE TO URL_ 」*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                    nino.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                    .catch(err => {
                    throw err
                })
                    await limitAdd(sender) 
                    break
               case 'smule':
                    if (isBanned) return reply(mess.only.benned)
				    if (args.length < 1) return reply('Tolong masukan url!')
                    reply(mess.wait)
                    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/smule?apikey=${lolkey}&url=${args[0]}`)
                    teks = `Title: ${anu.result.title}`
                    buffer = await getBuffer(anu.result.video)
                    nino.sendMessage(from, buffer, video, { caption: teks, quoted: mek })
                    await limitAdd(sender) 
                    break
             case 'spamsms':
                    reply(mess.wait)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${nomor}`)
                    reply("Success")
                    await limitAdd(sender) 
                    break
                case 'cocofun':
				    try {
					reply(mess.wait)
					if (isBanned) return reply(mess.only.benned)   
				    if (args.length < 1) return reply('Urlnya mana um?')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/cocofun?apikey=${lolkey}&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.result.title}\n*Tag* : ${anu.result.tag}\n*Likes* : ${anu.result.likes}\n*Dislike* : ${anu.result.dislike}\n*Views* : ${anu.result.views}\n*Uploader* : ${anu.result.uploader}\n*Duration* : ${anu.result.duration}`
					thumb = await getBuffer(anu.result.thumbnail)
					nino.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result.nowm)
					nino.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('Error gan')
					}
					await limitAdd(sender) 
					break
		        case 'bts':
                case 'exo':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                reply(mess.wait)
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
                    nino.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender) 
                    break
                    case 'quotes':
                    if (!isUser) return reply(mess.only.userB)
                    if (isBanned) return reply(mess.only.benned)
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${author}*`)
                    await limitAdd(sender) 
                    break
                    case 'quotesdilan':
                    quotedilan = await fetchJson(`http://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
                    reply(quotedilan.result)
                    await limitAdd(sender) 
                    break
			case 'pasangan':
			      if (isBanned) return reply(mess.only.benned)    
				  if (!isUser) return reply(mess.only.userB)
				  pa = `${body.slice(10)}`
				  sa = pa.split("/")[0];
				  ngan = pa.split("/")[1];
				  anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${vhtearkey}`, {method: 'get'})
				  nino.sendMessage(from, `${anu.result.hasil}`, {quoted: mek})
				  await limitAdd(sender) 
			      break 
		  case 'wa.me':
		  case 'wame':
			       if (isBanned) return reply(mess.only.benned)    
				   if (!isUser) return reply(mess.only.userB)
                   nino.updatePresence(from, Presence.composing) 
                   options = {
                   text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
                   contextInfo: { mentionedJid: [sender] }
    }
                   nino.sendMessage(from, options, text, { quoted: mek } )
                   await limitAdd(sender) 
				   break
		        case 'gaycek':
		            if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					nino.sendMessage(from, 'Seberapa gay lu: *'+rate+'*\n\nJawaban : '+ kl+'%', text, { quoted: mek })
					await limitAdd(sender) 
					break
			case 'lesbicek':
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					nino.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
		     case 'sangecek':
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					nino.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
			case 'spamcall':
                   reply('Wait..')
                   if (args[0].startsWith('08')) return reply('Gunakan nomor awalan 8/n ex : *8796662*')
                   if (args[0].startsWith('82255123081')) return reply('Gagal tidak dapat menelpon nomer bot')
                   if (args[0].startsWith('82387804410')) return reply('Gagal tidak dapat menelpon nomer owner')
                   var data = body.slice(10)
                   await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                   await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                   await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                   await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                   await fetchJson(`https://api-zeks.harispoppy.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                   await limitAdd(sender) 
                   break	
				case 'wiki':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                    if (args.length < 1) return reply('teks nya mana om?')
                    teks = body.slice(5)
                    reply(mess.wait)
                    anu = await fetchJson(`https://arugaz.herokuapp.com/api/wiki?q=${query}`, {method: 'get'})
                    if (anu.error) return reply(anu.error)
                    bufferfff = await getBuffer(anu.wiki)
                    hasil = `${anu.result}`
                    nino.sendMessage(from, bufferfff, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender) 
                    break
               case 'infogempa':
                   if (isBanned) return reply(mess.only.benned)    
			       if (!isUser) return reply(mess.only.userB)
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${tobzkey}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   bufferggg = await getBuffer(anu.map)
                   reply = ` *potensi* \n ${anu.potensi} *lokasi* \n${anu.lokasi} *magnitude* \n${anu.magnitude} *koordinat* \n${anu.koordinat} *kedalaman* \n${anu.kedalaman}`
                   nino.sendMessage(from, bufferggg, image, {quoted: mek, caption: hasil})
                   break
			case 'family100':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${vhtearkey}`, {method: 'get'})
					setTimeout( () => {
					nino.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					nino.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					nino.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					nino.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					nino.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender)
					break
                case 'brainly2':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://api.vhtear.com/branly?query=${body.slice(9)}&apikey=${vhtearkey}`, {method: 'get'})
					reply(anu.result.data)
					await limitAdd(sender)
					break
case 'image':
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`, thumbnail: fs.readFileSync('./stik/fake.jpeg')})
}
}
await limitAdd(sender)
break
				case 'elang':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=elang&apikey=${vhtearkey}`, {method: 'get'})
					var eln = JSON.parse(JSON.stringify(anu.result));
					var elnn =  eln[Math.floor(Math.random() * eln.length)];
					nyer = await getBuffer(elnn)
					nino.sendMessage(from, nyer, image, { caption: 'elang!!', quoted: mek })
					break
				//animefoto
				case 'naruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=naruto&apikey=${vhtearkey}`, {method: 'get'})
					var naru = JSON.parse(JSON.stringify(anu.result));
					var to =  naru[Math.floor(Math.random() * naru.length)];
					nyew = await getBuffer(to)
					nino.sendMessage(from, nyew, image, { caption: 'naruto!!', quoted: mek })
					break
					//animefoto
				case 'unta':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=unta&apikey=${vhtearkey}`, {method: 'get'})
					var unt1 = JSON.parse(JSON.stringify(anu.result));
					var unt2 =  unt1[Math.floor(Math.random() * unt1.length)];
					nyea = await getBuffer(unt2)
					nino.sendMessage(from, nyea, image, { caption: 'unta!!', quoted: mek })
					break
					//tokyoghoul
				case 'kaneki':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${vhtearkey}`, {method: 'get'})
					var kan = JSON.parse(JSON.stringify(anu.result));
					var eki =  kan[Math.floor(Math.random() * kan.length)];
					nyes = await getBuffer(eki)
					nino.sendMessage(from, nyes, image, { caption: 'kaneki!!', quoted: mek })
					break
			case 'picthewan':
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=hewanimut&apikey=${vhtearkey}`, {method: 'get'})
					var kan = JSON.parse(JSON.stringify(anu.result));
					var eki =  kan[Math.floor(Math.random() * kan.length)];
					nyed = await getBuffer(eki)
					nino.sendMessage(from, nyed, image, { caption: 'kaneki!!', quoted: mek })
					break
				case 'toukachan':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=ToukaKirishima&apikey=${vhtearkey}`, {method: 'get'})
					var tou = JSON.parse(JSON.stringify(anu.result));
					var ka =  tou[Math.floor(Math.random() * tou.length)];
					nyef = await getBuffer(ka)
					nino.sendMessage(from, nyef, image, { caption: 'toukachan!!', quoted: mek })
					break
				case 'rize':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=RizeKamishiro&apikey=${vhtearkey}`, {method: 'get'})
					var ri = JSON.parse(JSON.stringify(anu.result));
					var ze =  ri[Math.floor(Math.random() * ri.length)];
					nyeg = await getBuffer(ze)
					nino.sendMessage(from, nyeg, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'kurumi':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kurumitokisakikawai&apikey=${vhtearkey}`, {method: 'get'})
					var kur = JSON.parse(JSON.stringify(anu.result));
					var imi =  kur[Math.floor(Math.random() * kur.length)];
					nyek = await getBuffer(imi)
					nino.sendMessage(from, nyek, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender)
					break
				case 'miku':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=Nakanomiku&apikey=${vhtearkey}`, {method: 'get'})
					var mi = JSON.parse(JSON.stringify(anu.result));
					var ku =  mi[Math.floor(Math.random() * mi.length)];
					nyel = await getBuffer(ku)
					nino.sendMessage(from, nyel, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender)
					break
                case 'pinterest':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(mess.search)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pin}&apikey=${vhtearkey}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					nino.sendMessage(from, pine, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					await limitAdd(sender)
					break
				case 'tiktok':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isUser) return reply(mess.only.userB)
                    if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
					anu = await fetchJson(`https://api.vhtear.com/tiktokdl?link=${args[0]}&apikey=${vhtearkey}`, {method: 'get'})
					reply('[WAIT] Proses Dumlu Yakan')
					buffer = await getBuffer(anu.result.video)
					nino.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
					await limitAdd(sender)
					break
			case 'tiktokmusic':
					try {
			        if (isBanned) return reply(mess.only.benned)
					if (args.length < 1) return reply('Urlnya mana?')
					if(!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					reply(mess.wait)
					anu = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${args[0]}`, {method: 'get'})
					nino.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', quoted: mek})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
				    reply('Error gan')
					}
					await limitAdd(sender)
					break
		case 'google':
		            if (isBanned) return reply(mess.only.benned)
                    if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Google Search : \n'
                    for (var x of get_result) {
                    ini_txt += `• Title : ${x.title}\n`
                    ini_txt += `Link : ${x.link}\n`
                    ini_txt += `Desc : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender)
                    break
			case 'ytsearch':
			        if (isBanned) return reply(mess.only.benned)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Tahu Bacem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                    txt += `Title : ${get_result[x].title}\n`
                    txt += `Views : ${get_result[x].views}\n`
                    txt += `Published : ${get_result[x].published}\n`
                    txt += `Thumbnail : ${get_result[x].thumbnail}\n`
                    txt += `Link : https://www.youtube.com/watch?v=${get_result[x].videoId}\n\n`
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break
		case 'soundcloud2':
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Urlnya mana gan?')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/soundcloud?apikey=${lolkey}&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					reply(mess.wait)
					buffer = await getBuffer(anu.result)
					nino.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek })
					await limitAdd(sender)
					break
		case 'instastory':
					try {
			        if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('Usernamenya mana kak?')
				    query = body.slice(12)
				    reply(mess.wait)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/igstory/${query}?apikey=${lolkey}`)
					buffer = await getBuffer(anu.result[0].url)
					nino.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek })
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('Error gan')
					}
					await limitAdd(sender)
					break
           case 'twitter':
                    if (isBanned) return reply(mess.only.benned)
                    if (args.length < 1) return reply('Urlnya mana gan?')
                    if (!isUrl(args[0]) && !args[0].includes('www.twitter.com')) return reply(mess.error.Iv)
                    anu = await fetchJson(`http://lolhuman.herokuapp.com/api/twitter?apikey=${lolkey}&url=${args[0]}`)
                    reply(mess.wait)
                    data = anu.result[0].link
                    buffer = await getBuffer(data)
                    nino.sendMessage(from, buffer, video, { quoted: mek })
                    await limitAdd(sender) 
                    break
		     case 'profiltiktok':
			        if (isBanned) return reply(mess.only.benned)    
			        if (!isUser) return reply(mess.only.userB)
			        reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/tiktokprofile?query=${body.slice(14)}&apikey=${vhtearkey}`, {method: 'get'})
			        tiktok = await getBuffer(anu.result.picture)
                    nino.sendMessage (from, tiktok, image, {quoted: mek})
                    await limitAdd(sender)
			        break 
				case 'tulis':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Yang mau di tulis apaan?')
					tulis = body.slice(6)
					reply(mess.wait)
					buffer4 = await getBuffer(`https://api.vhtear.com/write?text=${tulis}&apikey=${vhtearkey}`, {method: 'get'})
					nino.sendMessage(from, buffer4, image, {quoted: mek, caption: 'Succes Oni-mek'})
					await limitAdd(sender)
					break
			    case 'shorturl':
			        if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${body.slice(10)}&apikey=${tobzkey}`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        await limitAdd(sender)
			        break
				case 'instagram2':
				    if (!isUser) return reply(mess.only.userB)
					try {
					if (args.length < 1) return reply('urlnya mana gan?')
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${lolkey}&url=${ini_url}`)
                    reply(mess.wait)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    buffer = await getBuffer(ini_url)
                    nino.sendMessage(from, buffer, ini_type, { quoted: mek })
                    } catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('Error gan')
					}
					await limitAdd(sender)
                    break
                           // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (!isUser) return reply(mess.only.userB)            
                    reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        nino.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    await limitAdd(sender)
                    break
                // Textprome //
                case 'blackpink':
                case 'halloween':
                case 'jokerlogo':
                case 'thunder':
                    if (!isUser) return reply(mess.only.userB)            
                    reply(mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        nino.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    await limitAdd(sender)
                    break
             case 'otakudesusearch':
             case 'otakusearch':
                    if (!isUser) return reply(mess.only.userB)
                    if (!q) return reply(mess.wrongF)
                    query = args.join(" ")
                    reply(mess.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Judul : ${get_result.judul}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Episode : ${get_result.episodes}\n`
                    txt += `Aired : ${get_result.aired}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Genre : ${get_result.genres}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Studios : ${get_result.status}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                    txt += `\n\n*${get_link[x].title}*\n`
                    for (var y in get_link[x].link_dl) {
                    info = get_link[x].link_dl[y]
                    txt += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
                    txt += `\`\`\`Size : \`\`\`${info.size}\n`
                    txt += `\`\`\`Link : \`\`\`\n`
                    down_link = info.link_dl
                    for (var z in down_link) {
                    txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break
                    case 'alquranaudio':
                    if (!isUser) return reply(mess.only.userB)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
                    nino.sendMessage(from, buffer, audio, { quoted: lol, mimetype: Mimetype.mp4Audio })
                    await limitAdd(sender)
                    break
                case 'kusonimesearch':
                case 'kusosearch':
                    if (!isUser) return reply(mess.only.userB)
                    if (!q) return reply(mess.wrongF)
                    query = args.join(" ")
                    reply(mess.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                    txt += `\n${x}\n`
                    for (var y in link_dl[x]) {
                    txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    nino.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
           case 'telesticker':
                    if (!isUser) return reply(mess.only.userB)
                    if (!q) return reply(mess.wrongF)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                    buffer = await getBuffer(ini_sticker[sticker_])
                    nino.sendMessage(from, buffer, sticker)
                    }
                    await limitAdd(sender)
                    break
			    case 'igstalk':
			        if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Masukan username mu!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${ige}&apikey=${vhtearkey}`, {method: 'get'})
					buffer7 = await getBuffer(anu.result.picture)
					capt = `User Ditemukan!!\n\n*➸ Nama :* ${anu.result.full_name}\n*➸ Username :* ${anu.result.username}\n*➸ Followers :* ${anu.result.follower}\n*➸ Mengikuti :* ${anu.result.follow}\n*➸ Jumlah Post :* ${anu.result.post_count}\n*➸ Private :* ${anu.result.is_private}\n*➸ Bio :* ${anu.result.biography}`
					nino.sendMessage(from, buffer7, image, {quoted: mek, caption: capt})
					await limitAdd(sender)
					break
				case 'infomobil':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Masukan nama mobil!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/infomobil?merk=${ige}&apikey=${vhtearkey}`, {method: 'get'})
					buffer0 = await getBuffer(anu.result.image)
					capt = `mobil Ditemukan!!\n\n*➸ title :* ${anu.result.title}\n*➸ harga :* ${anu.result.harga}\n*➸ kekurangan :* ${anu.result.kekurangan}\n*➸ kelebihan :* ${anu.result.kelebihan}`
					nino.sendMessage(from, buffer0, image, {quoted: mek, caption: capt})
					await limitAdd(sender)
					break
				case 'infomotor':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('Masukan nama motor!!')
					ft1 = body.slice(11)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/infomotor?merk=${ft1}&apikey=${vhtearkey}`, {method: 'get'})
					buffer11 = await getBuffer(anu.result.image)
					cptr = `motor Ditemukan!!\n\n*➸ title :* ${anu.result.title}\n*➸ harga :* ${anu.result.harga}\n*➸ spesifikasi :* ${anu.result.spesifikasi}\n*➸ kekurangan :* ${anu.result.kekurangan}\n*➸ kelebihan :* ${anu.result.kelebihan}`
					nino.sendMessage(from, buffer11, image, {quoted: mek, caption: cptr})
					await limitAdd(sender)
					break
		case 'grup':
		case 'gc':
		case 'group':
			           if (!isGroupAdmins) return reply(mess.only.admin)
					   if (!isGroup) return reply(mess.only.group)
				       if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				       if (args[0] === 'buka') {
				       reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
					   nino.groupSettingChange(from, GroupSettingChange.messageSend, false)
					   } else if (args[0] === 'tutup') {
					   reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
					   nino.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					   await limitAdd(sender) 
					   break
		    case 'notif':
                        if (!isGroup) return reply(mess.only.group)
                        teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
                        group = await nino.groupMetadata(from);
                        member = group['participants']
                        jids = [];
                        member.map(async adm => {
                        jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
                        options = {
                        text: teks,
                        contextInfo: {
                        mentionedJid: jids
        },
                        quoted: mek
    }
                        await nino.sendMessage(from, options, text)
                        await limitAdd(sender) 
                        break
				case 'alay':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				
                    if (!q) return reply(mess.wrongF)
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`, {method: 'get'})
					reply('nianjim\n\n'+anu.result)
					await limitAdd(sender)
					break
				case 'artinama':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
					break
			    case 'tagall':
			        if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `*#* @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					await limitAdd(sender) 
					break
			    case 'otagall':
			        if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
					teks += `╠➥ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions('╔══✪〘 Mention All 〙✪══'+teks+'╚═〘  Nino BOT 〙', members_id, true)
					await limitAdd(sender) 
					break
				case 'clearall':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply('Kamu siapa?')
					anu = await nino.chats.all()
					nino.setMaxListeners(25)
					for (let _ of anu) {
						nino.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					tod = await getBuffer(`https://i.ibb.co/ZfS1nPC/images-2020-12-28-T142415-021.jpg`)
					anu = await nino.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await nino.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							nino.sendMessage(_.jid, buffer, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*[ Nino Bot ]*\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					    break
				case 'add':
				        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
                        entah = arg.split("|")[0]
                        entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
                        entah = `${entah}@s.whatsapp.net`
                        nino.groupAdd(from, [entah])
                        } else {
                        entah = mek.message.extendedTextMessage.contextInfo.participant
                        nino.groupAdd(from, [entah])
              }
                        await limitAdd(sender) 
                        break
             case 'kick':
                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                        if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                        if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                        entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                        if (entah.length > 1) {
                        var mems_ids = []
                        for (let ids of entah) {
                        mems_ids.push(ids)
                                }
                        nino.groupRemove(from, mems_ids)
                            } else {
                        nino.groupRemove(from, [entah[0]])
                            }
                        } else {
                        entah = mek.message.extendedTextMessage.contextInfo.participant
                        nino.groupRemove(from, [entah])
                        }
                        await limitAdd(sender) 
                        break
        case 'promote':
                      if (!isUser) return reply(mess.only.userB)
                      if (!isGroup) return reply(mess.only.group)
                      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                      if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                      if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                      entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                      if (entah.length > 1) {
                      var mems_ids = []
                       for (let ids of entah) {
                       mems_ids.push(ids)
                    }
                       nino.groupMakeAdmin(from, mems_ids)
                       } else {
                       nino.groupMakeAdmin(from, [entah[0]])
                            }
                       } else {
                        entah = mek.message.extendedTextMessage.contextInfo.participant
                        nino.groupMakeAdmin(from, [entah])
                        }
                        await limitAdd(sender) 
                        break
         case 'demote':
                      if (!isUser) return reply(mess.only.userB)
                      if (!isGroup) return reply(mess.only.group)
                      if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                      if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
                      if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
                      entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
                      if (entah.length > 1) {
                      var mems_ids = []
                      for (let ids of entah) {
                      mems_ids.push(ids)
                               }
                      nino.groupDemoteAdmin(from, mems_ids)
                            } else {
                      nino.groupDemoteAdmin(from, [entah[0]])
               }
                       } else {
                       entah = mek.message.extendedTextMessage.contextInfo.participant
                       nino.groupDemoteAdmin(from, [entah])
               }
                       await limitAdd(sender) 
                       break
				case 'listadmin':
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					await limitAdd(sender) 
					break
				case 'toimg':
				case 'stickertoimg':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nino.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						nino.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break
				case 'simi':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`http://simsumi.herokuapp.com/api?text=${chat}&lang=id`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if ((args[0]) === 'off') {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
			    case 'nsfw':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isOwner) return reply('Khusus Owner!')
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('Mode nsfw sudah aktif')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Sukses mengaktifkan mode nsfw di group ini ✔️')
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('Sukses menonaktifkan mode nsfw di group ini ✔️')
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
					
					case 'antilink':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik ${prefix}antilink on untuk mengaktifkan')
					if ((args[0]) === 'on') {
						if (isAntiLink) return reply('anti link sudah on')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓“Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiLink) return reply('anti link sudah off')
						antilink.splice(from, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓“Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
					case 'antivirtex':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isOwner) return reply('Khusus Owner Ya!')
                    if (!isUser) return reply(mess.only.userB)                    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik on untuk mengaktifkan')
					if ((args[0]) === 'on') {
						if (isAntiVirtex) return reply('anti virtex group sudah aktif')
						antivirtex.push(from)
						fs.writeFileSync('./src/antivirtex.json', JSON.stringify(antivirtex))
						reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif')
						antivirtex.splice(from, 1)
						fs.writeFileSync('./src/antivirtex.json', JSON.stringify(antivirtex))
						reply(`\`\`\`✓“Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
				case 'welcome':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if ((args[0]) === 'off') {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
				case 'clone':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await nino.getProfilePicture(id)
						buffer = await getBuffer(pp)
						nino.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					await limitAdd(sender) 
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi :「*${prefix}*」`)
					await limitAdd(sender) 
					break
				case 'wait':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
			    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
				reply(mess.wait)
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			    media = await nino.downloadMediaMessage(encmedia)
				await wait(media).then(res => {
				nino.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
				}).catch(err => {
				reply(err)
			})
			   } else {
			   tutor = await getBuffer(`https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg`)
			   nino.sendMessage(from, tutor, image, {quoted: mek, caption: 'nih tutor tod'})
			   reply('foto aja')
		}
	          await limitAdd(sender) 
		      break
				default:
if (budy.includes('Pagi')) {
const pagimp3 = fs.readFileSync('./assets/pagi.mp3');
nino.sendMessage(from, pagimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Nyanpasu')) {
const nyanpasump3 = fs.readFileSync('./assets/nyanpasu.mp3');
nino.sendMessage(from, nyanpasump3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Florida')) {
const floridamp3 = fs.readFileSync('./assets/florida.mp3');
nino.sendMessage(from, floridamp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Arigato')) {
const arigatomp3 = fs.readFileSync('./assets/arigato.mp3');
nino.sendMessage(from, arigatomp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Beautifulgirl')) {
const beautifulgirlmp3 = fs.readFileSync('./assets/beautifulgirl.mp3');
nino.sendMessage(from, beautifulgirlmp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Barbiegirl')) {
const barbiegirlmp3 = fs.readFileSync('./assets/barbiegirl.mp3');
nino.sendMessage(from, barbiegirlmp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Dancin')) {
const dancinmp3 = fs.readFileSync('./assets/dancin.mp3');
nino.sendMessage(from, dancinmp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Floating')) {
const floatingmp3 = fs.readFileSync('./assets/floating.mp3');
nino.sendMessage(from, floatingmp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Kiminoudin')) {
const kiminoudinmp3 = fs.readFileSync('./assets/kiminoudin.mp3');
nino.sendMessage(from, kiminoudinmp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Ladaladi')) {
const ladaladimp3 = fs.readFileSync('./assets/ladaladi.mp3');
nino.sendMessage(from, ladaladimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Mybaby')) {
const mybabymp3 = fs.readFileSync('./assets/mybaby.mp3');
nino.sendMessage(from, mybabymp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Onichan')) {
const onichanmp3 = fs.readFileSync('./assets/onichan.mp3');
nino.sendMessage(from, onichanmp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Outside')) {
const outsidemp3 = fs.readFileSync('./assets/outside.mp3');
nino.sendMessage(from, outsidemp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Pota')) {
const potamp3 = fs.readFileSync('./assets/pota.mp3');
nino.sendMessage(from, potamp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Playforme')) {
const playformemp3 = fs.readFileSync('./assets/playforme.mp3');
nino.sendMessage(from, playformemp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Linked')) {
const linkedmp3 = fs.readFileSync('./assets/linked.mp3');
nino.sendMessage(from, linkedmp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Tapiboong')) {
const tapiboongmp3 = fs.readFileSync('./assets/tapiboong.mp3');
nino.sendMessage(from, tapiboongmp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.includes('Yametekudasai')) {
const yametekudasaimp3 = fs.readFileSync('./assets/yametekudasai.mp3');
nino.sendMessage(from, yametekudasaimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
if (budy.startsWith('>')){
	//if (!isOwner) return
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
}
			if (budy.includes('Cekprefix')){
				reply(`Prefix yg digunakan saat ini adalah : 「 ${prefix} 」`)
				}

   				if (isGroup && isSimi && budy != undefined && body.startsWith(`${prefix}`)) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ NO ]','blue'), 'from', color(pushname))
					}
                           }
		} catch (e) {
		e = String(e)
            if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
	// console.log(e)
	}
	}
})
}
starts()


/*
* Thanks To
* ITSMAZGH
* Arip
* Miku
*/

