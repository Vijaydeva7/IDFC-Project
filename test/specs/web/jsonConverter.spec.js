//Importing required packages here
const fs = require('fs');
const XLSX = require('xlsx');

// Giving The Excel file path here ( Load the Excel file )
const workbook = XLSX.readFile('C:/Users/vijay_kumar5/Documents/jsonData.xlsx');

// Here we Select the first sheet in the Excel file
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Here we Convert the worksheet to JSON format
var jsonData = XLSX.utils.sheet_to_json(worksheet);

// Here we convert the number format into string ( if we don't want to convert number into string we can just comment this peace of code) 
for(var n in jsonData){
    let len = Object.keys(jsonData[n]).length
    for(let j=1; j<len;j++){
        if(typeof(jsonData[n][`Value${j}`]) == "number"){
            jsonData[n][`Value${j}`]= (jsonData[n][`Value${j}`]).toString()
        }  
    }

}


let newJsonData = {};
for(let i in jsonData){
    let a = jsonData[i].variable
    let len = Object.keys(jsonData[i]).length
    let b = {}
    for(let j=1; j<len;j++){
        b[`Value${j}`] = jsonData[i][`Value${j}`]    
    }
    newJsonData[a] = b;

}
var jsonString = JSON.stringify(newJsonData);
console.log(newJsonData)
// Here we are Storing the JSON string data to a file.
fs.writeFileSync('test-data/web/excel_data.json', jsonString);

//console.log(jsonString)



