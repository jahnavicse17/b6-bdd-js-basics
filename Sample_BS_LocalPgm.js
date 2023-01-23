//Local Testing Enabled using browser stack for testing private applications inside firewall

const webdriver = require('selenium-webdriver');
require('dotenv');
const userName = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
const capabilities = {
    'bstack:options': {
        "osVersion": "16",
        //"deviceName" : "iPhone 14",
        //"realMobile" : "true",
        "projectName": "BS1Project",
        "buildName": "BS1build",
        "sessionName": "BS1TestLocal",
        "appiumVersion": "1.22.0",
        "local": "true",
        "debug": "true",
        "networkLogs": "true",
        "networkProfile": "edge-good",
       // "userName": "jahnavi_uWxiU8",
        //"accessKey": "tqQpd3xhgjVsfCxo6CEx",
    },
    "browserName": "Chrome",
    "browserVersion": "103.0",
};
driver = new webdriver.Builder().
    // Change the Selenium hub URL to BrowserStack hub URL
    usingServer('http://' + userName + ':' + accessKey + '@hub.browserstack.com/wd/hub').
    withCapabilities(capabilities).build();
const browserstack = require('browserstack-local');
// Creates an instance of Local
const bs_local = new browserstack.Local();
// You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
const bs_local_args = { key: 'tqQpd3xhgjVsfCxo6CEx' };
// Starts the Local instance with the required arguments.
bs_local.start(bs_local_args, function () {
    console.log('Started BrowserStackLocal');
    // Checks if BrowserStack local instance is running.
    console.log('BrowserStackLocal running:', bs_local.isRunning());
    // Your test code goes here, from creating the driver instance till the end, i.e. driver.quit.
    // Stops the Local instance after your test run is completed, i.e after driver.quit.
    bs_local.stop(function () {
        console.log('Stopped BrowserStackLocal');
    });    
});

