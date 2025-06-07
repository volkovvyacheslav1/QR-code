import { Command } from 'commander';
import { generateQRCode } from './qr';

const program = new Command();

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
      const ascii = await generateQRCode(text, size);
      console.log(ascii);
    } catch (err) {
      console.error((err as Error).message);
      process.exit(1);
    }
  });

program.parse(process.argv);
