"use strict";

module.exports = {
  timeout: 90000,
  spec: [
    // "./test/specs/microservices/product-management-service/apply_crosssell.js",
    // "./test/specs/microservices/master-data-service/nearest_branch.js"
       // "./test/specs/microservices/product-management-service/apply_hospicash.js"
      // "./test/specs/microservices/product-management-service/apply_creditcard.js"
     "./test/specs/microservices/master-data-service/state_master.js"
     
     
     // "./test/specs/microservices/customer-service/cheque_pickup.js"
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
