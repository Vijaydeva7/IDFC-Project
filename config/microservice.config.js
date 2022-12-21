"use strict";

module.exports = {
  timeout: 90000,
  spec: [
<<<<<<< HEAD

    // "./test/specs/microservices/user-management-service/pan_validation.js",
    // "./test/specs/microservices/experience-layer-service/aadhar_authentication.js",
    // "./test/specs/microservices/Account-services/create_account.js",
    // "./test/specs/microservices/master-data-service/city_master.js",
    // "./test/specs/microservices/master-data-service/state_master.js",
    // "./test/specs/microservices/master-data-service/nearest_branch.js",
    "./test/specs/microservices/user-management-service/mobile_dedupe.js",


    // "./test/specs/microservices/customer-service/shedule_later.js",
    // "./test/specs/microservices/master-data-service/nearest_branch.js",
    // "./test/specs/microservices/master-data-service/nearest_branch.js",
    // "./test/specs/microservices/user-management-service/user_info.js",
    // "./test/specs/microservices/product-management-service/apply_hospicash.js"
=======
    //"./test/specs/microservices/product-management-service/apply_hospicash.js"
    //"./test/specs/microservices/experience-layer-service/aadhar_authentication.js"
   // "./test/specs/microservices/customer-service/shedule_later.js",
   // "./test/specs/microservices/Account-services/create_account.js",
    //"./test/specs/microservices/master-data-service/nearest_branch.js"
    // "./test/specs/microservices/user-management-service/user_info.js"
    "./test/specs/microservices/experience-layer-service/fraudcheck.js"
>>>>>>> vijay_changes
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
