const {Builder, By, Key, until} = require('selenium-webdriver');


  let driver = new Builder().forBrowser('chrome').build();
     driver.get('https://ngs.ru/');
     driver.quit();
