const QRCode = require('qrcode');


export async function generateQRCode(text: string, size: number): Promise<string> {
  try {
    const ascii = await QRCode.toString(text, {
      type: 'terminal',
      margin: 1,
      width: size || undefined,
    });
    return ascii;
  } catch (err) {
    throw new Error('Ошибка при генерации QR-кода: ' + (err instanceof Error ? err.message : String(err)));
  }
}
