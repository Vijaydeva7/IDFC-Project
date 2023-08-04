"use strict";

module.exports = {
  timeout: 90000,
  spec: [

    //  "./test/specs/microservices/experience-layer-service/aadhar_authentication.js"       //6 1passing
    // "./test/specs/microservices/experience-layer-service/aadhar_otp_validation.js"        //6 passing
    //  "./test/specs/microservices/experience-layer-service/fraudcheck.js"                  //4 passing

    // "./test/specs/microservices/Account-services/create_account.js",                      //4 Passing

    // "./test/specs/microservices/customer-service/connect_now.js"                          //3
    //  "./test/specs/microservices/customer-service/shedule_later.js",                      //6
    // "./test/specs/microservices/customer-service/in_person_verify.js"                     //3 Passing
    // "./test/specs/microservices/customer-service/cheque_pickup.js"                        //3 

    // "./test/specs/microservices/product-management-service/apply_crosssell.js"            //5 4passing
    // "./test/specs/microservices/product-management-service/apply_hospicash.js"            //5
    // "./test/specs/microservices/product-management-service/apply_creditcard.js"           //5 3Passing

    // "./test/specs/microservices/master-data-service/nearest_branch.js"                    //3 2Passing
    // "./test/specs/microservices/master-data-service/state_master.js"                      //1 Passing
    // "./test/specs/microservices/master-data-service/city_master.js"                       //4 Passing

    // "./test/specs/microservices/Company_List/getAllCompanies.js"                             //2 Passing

    // "./test/specs/microservices/user-management-service/user_info.js"
    // "./test/specs/microservices/user-management-service/resume_mobile.js"                       //7 4passing
    // "./test/specs/microservices/user-management-service/mobile_dedupe.js"
    // "./test/specs/microservices/user-management-service/pan_validation.js"              

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
