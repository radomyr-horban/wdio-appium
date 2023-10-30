import { config as sharedConfig } from './wdio.conf.js'
import { join } from 'path'
import dotenv from 'dotenv'
dotenv.config() // Load environment variables from .env file

export const config = {
  ...sharedConfig,
  port: 4723,
  // port: 4724, //! changed (not helping)
  services: ['appium'],
  appium: {
    // For options see
    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    args: ['--allow-insecure', '--debug-log-spacing'], //! new
    // args: {debugLogSpacing: true},
  },
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'VKHINVIFKZWWVW4L',
      // 'appium:deviceName': 'realme 8i',
      'appium:app': join(
        process.cwd(),
        './apps/android/All_Unit_Converter_&_Tools_base.apk'
      ),
      'appium:platformVersion': '11.0',
      'appium:automationName': 'UiAutomator2',

      'appium:newCommandTimeout': 0,

      //! prevents opening the app before each test
      // 'appium:noReset': false,
      // 'appium:fullReset': true,
      // appPackage: 'com.digitalindeed.converter',
      // appActivity: 'com.digitalindeed.converter.NewMainActivity',
      // uninstallOtherPackages: '*',
      // 'appium:skipServerInstallation': true,
    },
  ],
}
