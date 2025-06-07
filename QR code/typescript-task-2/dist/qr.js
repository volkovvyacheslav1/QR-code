"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQRCode = generateQRCode;
const QRCode = require('qrcode');
async function generateQRCode(text, size) {
    try {
        const ascii = await QRCode.toString(text, {
            type: 'terminal',
            margin: 1,
            width: size || undefined,
        });
        return ascii;
    }
    catch (err) {
        throw new Error('Ошибка при генерации QR-кода: ' + (err instanceof Error ? err.message : String(err)));
    }
}
