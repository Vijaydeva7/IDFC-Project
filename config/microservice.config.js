"use strict";

module.exports = {
  timeout: 90000,
  spec: [
    // "./test/specs/microservices/Company_List/getAllCompanies.js", 
    // "./test/specs/microservices/experience-layer-service/aadhar_authentication.js",
    //"./test/specs/microservices/experience-layer-service/aadhar_otp_validation.js",
    // "./test/specs/microservices/user-management-service/valid_mobile_number.js",
    "./test/specs/microservices/user-management-service/pan_validation.js"
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
