module.exports = async (context) => {
        const { client, m } = context;



if (!m.quoted) return m.reply("quote a viewonce message eh")

if (m.quoted.message) {
            let type = Object.keys(m.quoted.message)[0]
            let q = m.quoted.message[type]
            let media = await client.downloadMediaMessage(q)
            if (/video/.test(type)) {


               await client.sendMessage(m.chat, { video: media, caption:` Retrieved by Vortex-X\nOriginal caption: ${q.caption}`}, { quoted: m})

            } else if (/image/.test(type)) {

await client.sendMessage(m.chat, { image: media, caption: `Retrieved by MX-GΔMΞCØDΞR\nOriginal caption: ${q.caption}`}, { quoted: m})

            }
         } else m.reply("That is not a viewonce media. . .")

   }
