import { config as sharedConfig } from './wdio.conf.js'
import { join } from 'path'
import dotenv from 'dotenv'
dotenv.config() // Load environment variables from .env file

export const config = {
  ...sharedConfig,
  port: 4723,
  services: ['appium'],
  appium: {
    // For options see
    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    args: ['--allow-insecure'],
  },
  capabilities: [
    {
      // capabilities for local Appium web tests on an Android Emulator or Real device
      platformName: 'Android',
      'appium:platformVersion': '11',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'VKHINVIFKZWWVW4L',
      'appium:app': join(process.cwd(), './apps/android/app-staging-debug.apk'),
      // appPackage: 'com.digitalindeed.converter',
      // appActivity: 'com.digitalindeed.converter.NewMainActivity',
    },
  ],
}
