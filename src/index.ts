import { Handler } from 'aws-lambda';
import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

export const handler: Handler = async (event, context) => {
    const options = new chrome.Options();
    options.addArguments('--headless=new');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');
    options.addArguments('--disable-gpu');
    options.addArguments('--disable-dev-tools');
    options.addArguments('--no-zygote');
    options.addArguments('--single-process');
    options.addArguments('--remote-debugging-pipe');
    options.addArguments('--window-size=1920,1080');

    options.setBinaryPath('/opt/chrome/chrome-linux64/chrome');

    const serviceBuilder = new chrome.ServiceBuilder('/opt/chrome-driver/chromedriver-linux64/chromedriver');

    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .setChromeService(serviceBuilder)
        .build();

    try {
        console.log('Navigating to Website...');
        await driver.get("https://www.google.com/")
    
        const title = await driver.getTitle();

        return {
            statusCode: 200,
            body: JSON.stringify(`Page title is: ${title}`),
        }
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Quitting the driver...');
        await driver.quit();
        console.log('Driver quit successfully.');
    }
};

