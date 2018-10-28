
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Login Admin', function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('firefox').build();
    });

    it ('login', async function() {
        driver.get('http://localhost/litecart/admin/login.php?redirect_url=%2Flitecart%2Fadmin%2F');
        driver.findElement(By.name('username')).sendKeys('admin');
        driver.findElement(By.name('password')).sendKeys('admin');
        driver.findElement(By.name('login')).click();
    });
    after(async function() {driver.quit();});
});