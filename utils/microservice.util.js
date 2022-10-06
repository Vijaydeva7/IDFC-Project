const addContext = require("mochawesome/addContext");
const axios = require("axios");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
class MicroserviceUtil {
  mochaAddContext(test, response) {
    addContext(test, `Request Method Type : ${response.method}`);
    addContext(test, "Request URL");
    addContext(test, response.url);
    addContext(test, "Request Body");
    addContext(test, response.reqBody || "Not Available");
    addContext(test, "Response");
    addContext(test, JSON.stringify(response.data));
  }

  async getApiCall(url) {
    var returnFormat = {
      method: "",
      url: "",
      reqBody: "",
      data: "",
      status: "",
    };
    const token =
      "Bearer ccLFc6_K5KMx3sbn1zvtvu7K2zU4A12oxxS5g9afpO0.ARSXzsxehQVKZSmIBc0nLlE5Ox90JtlQOmSaYxBqEUg";
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `${token}`,
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
    //const token = tokenStorage.token;
    var returnFormat = {
      method: "",
      url: "",
      reqBody: "",
      data: "",
      status: "",
    };
    const token =
      "Bearer uSKfEIHgyb8783aqB2nEx5Gxha71IJITFVDcOQvnrC0.c5UcwuIOahA5-bkxZoFq9pQ6pju3KdK_3kYAcqkbSf8";
    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `${token}`,
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
