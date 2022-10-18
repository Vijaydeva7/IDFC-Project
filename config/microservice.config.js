"use strict";

module.exports = {
  timeout: 90000,
  spec: [
    // "./test/specs/microservices/Company_List/getAllCompanies.js", 
    // "./test/specs/microservices/experience-layer-service/aadhar_authentication.js"

  "./test/specs/microservices/experience-layer-service/fraudcheck.js"
  "./test/specs/microservices/customer-service/connect_now.js"

  "./test/specs/microservices/customer-service/shedule_later.js"
  
  "./test/specs/microservices/customer-service/in_person_verify.js"

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
