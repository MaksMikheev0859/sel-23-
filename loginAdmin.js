var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until,
	test = require('selenium-webdriver/testing');

  test.describe = ('admin login', function() {
	  var driver;
	  
	test.before(function() {
		driver = new webdriver.Builder()
		.forBrowser('chrome')	
	    .build();
	});

	test.it('login', function() {
     driver.get('http://localhost/litecart/admin/login');
	 driver.findElement(By.name('username')).sendKeys('admin');
	 driver.findElement(By.name('password')).sendKeys('admin');
    });
	
	test.after(function() {
	  driver.quit();
	});
  });	