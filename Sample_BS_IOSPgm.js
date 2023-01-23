//Cross Browser Testing Parallelley (Mobile Application Pgm - IOS)

var wd = require('wd');
var assert = require('assert');
var asserters = wd.asserters;
var sleep = require('await-sleep');
var Q = wd.Q;

desiredCaps = {
  'browserstack.user': 'jahnavi_uWxiU8',
  'browserstack.key': 'tqQpd3xhgjVsfCxo6CEx',
  'project': 'Second NodeJS-ios project',
  'build': 'browserstack-ios-build-2',
  'name': 'first_ios_test',
  'device': 'iPad Air 5',
  'os_version': '15',
  //'device' : 'iPhone 11 Pro',
  //'os_version' : '15',
  'app': 'bs://6faee8f86977996982c9f0f5ea910a6b02fcce1b',
  //'app' : 'bs://49adc34f70f58e352ffe648e40fdb315c7aa5742',
  //'app' : 'bs://444bd0308813ae0dc236f8cd461c02d3afa7901d',
  'browserstack.debug': true
};
driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");

driver.init(desiredCaps)
  .then(function () {
    return driver.waitForElementById('Text Button', asserters.isDisplayed && asserters.isEnabled, 30000);
  })
  .then(function (textButton) {
    return textButton.click();
  })
  .then(function () {
    return driver.waitForElementById('Text Input', asserters.isDisplayed && asserters.isEnabled, 30000);
  })
  .then(function (textInput) {
    return textInput.sendKeys("hello@browserstack.com" + "\n");
  })
  .then(function () {
    return driver.waitForElementById('Text Output', asserters.isDisplayed && asserters.isEnabled, 30000);
  })
  .then(function (textOutput) {
    return textOutput.text().then(function (value) {
      if (value === "hello@browserstack.com")
        assert(true);
      else
        assert(false);
    });
  })
  .fin(function () { return driver.quit(); })
  .done();
