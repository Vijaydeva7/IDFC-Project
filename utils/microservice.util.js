const addContext = require("mochawesome/addContext");
const axios = require("axios");
const dynamicData = require("../test-data/microservice-data/dynamic_data.json");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
class MicroserviceUtil {
  mochaAddContext(test, response) {
    addContext(test, `Request Method Type : ${response.method || "Not Available"}`);
    addContext(test, "Request URL");
    addContext(test, response.url || "Not Available");
    addContext(test, "Request Body");
    addContext(test, response.reqBody || "Not Available");
    addContext(test, "Response");
    addContext(test, JSON.stringify(response.data) || "Not Available");
  }

  async getApiCall(url) {
    const clientId = dynamicData.clientId;
    var returnFormat = {
      method: "",
      url: "",
      reqBody: "",
      data: "",
      status: "",
    };
    const clientId = dynamicData.clientId;
    const token = dynamicData.authToken;
    
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `${token}`,
          clientId: clientId
        },
      });
      returnFormat.data = response.data;
      returnFormat.status = response.status;
      returnFormat.method = response.config.method.toUpperCase();
      returnFormat.url = response.config.url;
      returnFormat.reqBody = null;

      return returnFormat;
    } catch (error) {
      returnFormat.data = error.response.data.errors;
      returnFormat.status = error.response.status;
      returnFormat.method = error.response.config.method.toUpperCase();
      returnFormat.url = error.response.config.url;
      returnFormat.reqBody = null;

      return returnFormat;
    }
  }
  async postApiCall(url, data) {
    const token = dynamicData.authToken;
    const clientId = dynamicData.clientId;

    var returnFormat = {
      method: "",
      url: "",
      reqBody: "",
      data: "",
      status: "",
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `${token}`,
          clientId: clientId
        },
      });
      returnFormat.data = response.data;
      returnFormat.status = response.status;
      returnFormat.method = response.config.method.toUpperCase();
      returnFormat.url = response.config.url;
      returnFormat.reqBody = response.config.data;

      return returnFormat;
    } catch (error) {
      returnFormat.data = error.response.data.errors;
      returnFormat.status = error.response.status;
      returnFormat.method = error.response.config.method.toUpperCase();
      returnFormat.url = error.response.config.url;
      returnFormat.reqBody = error.response.config.data;

      return returnFormat;
    }
  }
}
module.exports = new MicroserviceUtil();
