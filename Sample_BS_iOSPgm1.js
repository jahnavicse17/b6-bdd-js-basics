//Cross Browser Testing Parallelley (Mobile Application Pgm - IOS)

var wd = require('wd');
var assert = require('assert');
var asserters = wd.asserters;

desiredCaps = {
    'browserstack.user': 'jahnavi_uWxiU8',
    'browserstack.key': 'tqQpd3xhgjVsfCxo6CEx',
    //'project' : 'Second NodeJS-ios project',
    'build': 'browserstack-ios-build-3',
    'name': 'first_ios_test1',
    //'device': 'iPad Air 5',
    //'os_version': '15',
    'device': 'iPhone 12',
    'os_version': '14',
    'app': 'bs://6faee8f86977996982c9f0f5ea910a6b02fcce1b',
    //'app' : 'bs://49adc34f70f58e352ffe648e40fdb315c7aa5742',
    //'app' : 'bs://444bd0308813ae0dc236f8cd461c02d3afa7901d',
    'visual': 'true',
    'video': 'true',
    'isRealMobile': 'true',
    'platFormName': 'iOS',
    'browserstack.debug': "true",
    "browserstack.networkLogs": "true",
};
//driver = wd.promiseRemote("https://jahnavi_uWxiU8:tqQpd3xhgjVsfCxo6CEx@hub-cloud.browserstack.com/wd/hub");
driver = wd.promiseRemote("http://hub-cloud.browserstack.com/wd/hub");
/*driver.init(desiredCaps)
    .then(function () {
        return driver.elementsByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[1]');
    })
    .then(function () {
        return driver.elementsByXPath('/XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[29]/XCUIElementTypeStaticText[1]');
    })
    .then(function () {
        return driver.elementsByXPath('//XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable/XCUIElementTypeCell[2]');
    })
    .then(function () {
        return driver.elementById('Text Button');
    })
    .then(function (textButton) {
        return textButton.click();
    }) 
    .then(function () {
        return driver.elementById('Text Input');
    })
    .then(function (textInput) {
        return textInput.sendKeys("Janu@browserstack.com" + "\n");
    })
    /*.then(function () {
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
    .done();  */

async function iOStest() {
    try {
        driver
            .init(desiredCaps)
            .then(function () {
                return driver.waitForElementById("color", 10000);
            })
            .then(function (color) {
                return color.click();
            })
            .then(function () {
                return driver.waitForElementById("Text", 10000);
            })
            .then(function (text) {
                text.click();
                return driver.waitForElementById("toast", 10000);
            })
            .then(function (toast) {
                toast.click();
                return driver.waitForElementById("notification", 10000);
            })
            .then(function (notification) {
                notification.click();
                return driver.waitForElementById("geoLocation", 10000);
            })
            .then(function (geoLocation) {
                return geoLocation.click();
            })
            .then(async function () {
                return driver.waitForElementById("Back", 10000);
            })
            .then(function (Back) {
                Back.click();
                return driver.waitForElementById("speedTest", 10000);
            })
            .then(async function (speedTest) {
                speedTest.click();
                return driver.waitForElementById("Back", 10000);
            })
            .then(function (back) {
                back.click();
                return driver.waitForElementById("Browser", 10000);
            })
            .then(function (Browser) {
                Browser.click();
                return driver.waitForElementById("url", 10000);
            })
            .then(function (url) {
                url.type("https://www.lambdatest.com");
                return driver.waitForElementById("find", 10000);
            })
            .then(function (find) {
                find.click();
                driver.quit();
            });
    } catch (e) {
        driver.quit();
    }
}

iOStest();
