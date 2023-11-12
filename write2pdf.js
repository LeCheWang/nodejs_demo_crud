const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);

async function write2pdf(imagePath) {
  const imageByte = await readFileAsync(imagePath);

  const pdfBytes = await readFileAsync('./contract.pdf');
  const pdfDoc = await PDFDocument.load(pdfBytes);

  const page0 = pdfDoc.getPages()[0];

  page0.drawText('Ha Van Duong', {
    x: 150,
    y: 535,
    size: 12,
    color: rgb(0, 0, 0),
  });

  const page4 = pdfDoc.getPages()[4];

  const image = await pdfDoc.embedPng(imageByte);
  const { width, height } = image.scale(0.5);

  page4.drawImage(image, {
    x: 100,
    y: 250,
    width,
    height,
  });

  const pdfBytesSave = await pdfDoc.save();
  fs.writeFileSync('contract1.pdf', pdfBytesSave);
}

module.exports = write2pdf;
// write2pdf()
