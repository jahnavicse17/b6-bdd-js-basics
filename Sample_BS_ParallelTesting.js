//Cross Browser Testing Parallelley (Web Application Pgm)

const webdriver = require('selenium-webdriver');
async function runTestWithCaps(capabilities) {
  let driver = new webdriver.Builder()
    .usingServer('http://jahnavi_uWxiU8:tqQpd3xhgjVsfCxo6CEx@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser'] }  // Because NodeJS language binding requires browserName to be defined
    }).build();
  try {
    await driver.get("https://bstackdemo.com/");
    await driver.wait(webdriver.until.titleMatches(/StackDemo/i), 10000);
    // locating product on webpage and getting name of the product
    let productText = await driver
      .findElement(webdriver.By.xpath('//*[@id="1"]/p'))
      .getText();
    // clicking the 'Add to cart' button
    await driver.findElement(webdriver.By.xpath('//*[@id="1"]/div[4]')).click();
    // waiting until the Cart pane has been displayed on the webpage
    driver.findElement(webdriver.By.className("float-cart__content"));
    // locating product in cart and getting name of the product in cart
    let productCartText = await driver.findElement(
      webdriver.By.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]')).getText();
    // checking whether product has been added to cart by comparing product name
    if (productCartText !== productText)
      throw new Error("");
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Product has been successfully added to the cart!"}}'
    );
  }
  catch (e) {
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Some elements failed to load!"}}'
    );
  }
  await driver.quit();
}
const capabilities1 = {
  'bstack:options': {
    "os": "Windows",
    "osVersion": "11",
    //"deviceName" : "iPhone 14",
    //"realMobile" : "true",
    "projectName": "BS1Project",
    "buildName": "browserstack-build-1",
    "sessionName": "Parallel test 1",
    //"appiumVersion" : "1.22.0",
    "local": "false",
    "debug": "true",
    "networkLogs": "true",
    "networkProfile": "edge-good",
    //"userName" : "jahnavi_uWxiU8",
    //"accessKey" : "tqQpd3xhgjVsfCxo6CEx",
  },
  "browserName": "Chrome",
  "browserVersion": "103.0",
}
const capabilities2 = {  //Shift+Alt+F = Proper Alignment
  'bstack:options': {
    "os": "Windows",
    "osVersion": "10",
    "projectName": "BS1Project",
    "buildName": "browserstack-build-1",
    "sessionName": "Parallel test 2",
    "local": "false",
    "debug": "true",
    "networkLogs": "true",
  },
  "browserName": "Firefox",
  "browserVersion": "102.0",
}
const capabilities3 = {
  'bstack:options': {
    "os": "OS X",
    "osVersion": "Big Sur",
    "projectName": "BS1Project",
    "buildName": "browserstack-build-1",
    "sessionName": "Parallel test 3",
    "local": "false",
    "debug": "true",
    "networkLogs": "true",
  },
  "browserName": "Safari",
  "browserVersion": "14.1",
}

runTestWithCaps(capabilities1);
runTestWithCaps(capabilities2);
runTestWithCaps(capabilities3);