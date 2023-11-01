import { config as sharedConfig } from './wdio.conf.js'
import { join } from 'path'
import dotenv from 'dotenv'
dotenv.config()

export const config = {
  ...sharedConfig,
  port: 4723,
  services: ['appium'],
  appium: {
    args: ['--allow-insecure'],
  },
  capabilities: [
    {
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 13',
      'appium:app': join(process.cwd(), './apps/ios/Spiderdoor.ipa'),
      'appium:platformVersion': '15.4',
      'appium:automationName': 'XCUITest',
      'appium:newCommandTimeout': 240,
      'appium:noReset': true,
      'appium:autoWebview': true,
    },
  ],
}
