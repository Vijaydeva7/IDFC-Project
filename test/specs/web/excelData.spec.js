class IdfcXlRead{
    readExcel = () => {
        var workbook = XLSX.readFile("");  
    }
modifyExcel = async (data) => {
    var Excel = require("exceljs");
    let workbook = new Excel.workbook();
    workbook = await workbook.xlsx.readFile("");
    let worksheet = workbook.getWorksheet("sheet1");

    worksheet.getRow(data.rowNum).getCell(data.colNum).value=data.data;
    workbook.xlsx.writeFile("");
}
}
module.exports = new IdfcXlRead();