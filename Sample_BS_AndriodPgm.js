//Cross Browser Testing Parallelley (Mobile Application Pgm - Andriod)

let wd = require('wd');
let assert = require('assert');
let asserters = wd.asserters;
desiredCaps = {
  // Set your BrowserStack access credentials
  'browserstack.user': 'jahnavi_uWxiU8',
  'browserstack.key': 'tqQpd3xhgjVsfCxo6CEx',
  // Set app_url of the application under test 
  /* (It is the unique id genarates for uploaded app build i.e .apk or .aab or .ipa file which uses in git bash or -
  -uploaded in REST API of browser stack servers for andriod and ios) */
  //'app': 'bs://090d0f02f5632051b182816f49e2d040420fde34',
  'app' : 'bs://c700ce60cf13ae8ed97705a55b8e022f13c5827c', 
  // Specify device and os_version for testing
  //'device' : 'iPhone 12',
  'device': 'Samsung Galaxy S22 Ultra',
  'os_version': '14',
  // Set other BrowserStack capabilities
  'project': 'First NodeJS-Andriod project',
  'build': 'browserstack-android-build-1',
  'name': 'first_andriod_test1',
};
// Initialize the remote Webdriver using BrowserStack remote URL
// and desired capabilities defined above
//driver = wd.promiseRemote("https://jahnavi_uWxiU8:tqQpd3xhgjVsfCxo6CEx@hub-cloud.browserstack.com/wd/hub");
driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");
// Test case for the BrowserStack sample Android app. 
// If you have uploaded your app, update the test case here. 

driver.init(desiredCaps)
  .then(function () {
    return driver.waitForElementByAccessibilityId('Search Wikipedia', asserters.isDisplayed && asserters.isEnabled, 30000);
  })
  .then(function (searchElement) {
    return searchElement.click();
  })
  .then(function () {
    return driver.waitForElementById('org.wikipedia.alpha:id/search_src_text', asserters.isDisplayed && asserters.isEnabled, 30000);
  })
  .then(function (searchInput) {
    return searchInput.sendKeys("BrowserStack");
  })
  .then(function () {
    return driver.elementsByClassName('android.widget.TextView');
  })
  .then(function (search_results) {
    assert(search_results.length > 0);
  })
  .fin(function () {
    // Invoke driver.quit() after the test is done to indicate that the test is completed.
    return driver.quit();
  })
  .done(); 