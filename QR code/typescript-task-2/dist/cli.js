"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const qr_1 = require("./qr");
const program = new commander_1.Command();
program
    .name('qr-cli')
    .description('Генератор QR-кодов для терминала')
    .version('1.0.0');
program
    .command('generate <text>')
    .description('Генерирует QR-код из текста или ссылки')
    .option('--size <number>', 'Размер QR-кода', '8')
    .action(async (text, options) => {
    const size = parseInt(options.size, 10);
    if (!text) {
        console.error('Ошибка: Укажите текст или ссылку.');
        process.exit(1);
    }
    try {
        const ascii = await (0, qr_1.generateQRCode)(text, size);
        console.log(ascii);
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
});
program.parse(process.argv);
