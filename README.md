# CA-Automation

Starter framework for automation of mobile and web app ui using WebdriverIO, Appium, Browserstack

Our project has multiple scopes-

- Automation of Mobile App UI
  - Using android emulator
  - Using physical android device
- Automation of Web UI (Salesforce)
- Cross platform testing with Browserstack
- Testing microservice api

## Setup

### Requirements

Following softwares are need to be installed

- Nodejs
- Android Emulator

### Install the dependencies

Execute the below command on command promt in the project folder for installing all the dependencies required for the project.

`npm install` or `npm i`

## Getting Started

- Go to `/config/android.emulator.config.js` file and inside **capabilities** block update **deviceName**, **avd**,**platformVersion**

- Go to `/config/android.physical-device.config.js` file and inside **capabilities** block update **deviceName**, **avd**, **platformVersion**

- Go to `.env` file and update **BROWSERSTACK_USERNAME**,**BROWSERSTACK_ACCESS_KE**,**SF_USERNAME**,**SF_PASSWORD**

### Running Test

- Automation of Mobile App UI
  - Using android emulator
    `npm run test-ui`
  - Using physical android device
    `npm run test-mobile-app-physical-device`
- Automation of Web UI (Salesforce)
  `npm run test-sfdc`

- Cross platform testing with Browserstack
  `npm run test-browserstack`

- Testing microservice api
  `npm run test-microservice`
