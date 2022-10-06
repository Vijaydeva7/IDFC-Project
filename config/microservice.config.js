"use strict";

module.exports = {
  timeout: 90000,
  spec: [
   "./test/specs/microservices/Company_List/getAllCompanies.js"
  ],
  reporter: "node_modules/mochawesome",
  "reporter-option": [
    "code=false",
    "inline=true",
    "overwrite=true",
    "reportTitle=NTB SA Automation Test Report",
    "reportDir=test-execution_report/microservice, --require mochawesome/register test/specs/microservices/**/*.js",
  ],
};
