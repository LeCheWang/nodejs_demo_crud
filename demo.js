const ExcelJS = require('exceljs');
const fs = require('fs')

async function generateExcelFile(req, res) {
  const workbook = new ExcelJS.Workbook();

  const sheet_list_accounts = workbook.addWorksheet('My Sheet');

  const row1 = sheet_list_accounts.getRow(1);

  row1.getCell(1).value = 'STT';
  row1.getCell(1).fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFFF0000' }, // Mã màu đỏ
  };
  row1.getCell(2).value = 'Username';
  row1.getCell(3).value = 'Password';

  await workbook.xlsx.writeFile('data.xlsx');
  let account = 'tuong_123'

  res.writeHeader(200, {
    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'Content-Disposition': `attachment; filename="${account}.xlsx"`
  })  

  const fileStream = fs.createReadStream("./data.xlsx");
  fileStream.pipe(res)
}

module.exports = generateExcelFile;