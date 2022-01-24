let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083834441926]
│ • Telkomsel [081285866502]
╰────

╭─「 Donasi • Non Pulsa 」
│ • DANA : [0812-8586-6502]
│ • GOPAY : [0895-2551-8325]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
