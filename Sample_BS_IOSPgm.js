//Cross Browser Testing Parallelley (Mobile Application Pgm - IOS)

var wd = require('wd');
var assert = require('assert');
var asserters = wd.asserters;
var sleep = require('await-sleep');
var Q = wd.Q;

desiredCaps = {
  // Set your BrowserStack access credentials
  'browserstack.user' : 'jahnavi_uWxiU8',
  'browserstack.key' : 'tqQpd3xhgjVsfCxo6CEx',
    // Set app_url of the application under test
  'app' : 'bs://444bd0308813ae0dc236f8cd461c02d3afa7901d',
  // Specify device and os_version for testing
  'device' : 'iPhone XS',
  'os_version' : '12',
  // Set other BrowserStack capabilities
  'project' : 'First NodeJS project',
  'build' : 'browserstack-build-1',
  'name': 'first_test1'
};
// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");
// Test case for the BrowserStack sample iOS app. 
// If you have uploaded your app, update the test case here.
driver.init(desiredCaps)
  .then(function () {
    return driver.waitForElementById('Text Button', asserters.isDisplayed 
    && asserters.isEnabled, 30000);
  })
  .then(function (textButton) {
    return textButton.click();
  })
  .then(function () {
    return driver.waitForElementById('Text Input', asserters.isDisplayed 
    && asserters.isEnabled, 30000);
  })
  .then(function (textInput) {
    return textInput.sendKeys("hello@browserstack.com"+"\n");
  })
  .then(function () {
    return driver.waitForElementById('Text Output', asserters.isDisplayed 
    && asserters.isEnabled, 30000);
  })
  .then(function (textOutput) {
    return textOutput.text().then(function(value) {
      /*if (value === "hello@browserstack.com")
        assert(true);
      else
        assert(false); */
       assert.equal("hello@browserstack.com",value);
    });  
  })
  .fin(function() { 
    // Invoke driver.quit() after the test is done to indicate that the test is completed.
    return driver.quit(); 
  })
  .done();