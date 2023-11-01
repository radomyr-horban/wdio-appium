import { config as sharedConfig } from './wdio.conf.js'
import { join } from 'path'
import dotenv from 'dotenv'
dotenv.config()

export const config = {
  ...sharedConfig,
  port: 4723,
  services: ['appium'],
  appium: {
    args: ['--allow-insecure', '--debug-log-spacing'],
  },
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'VKHINVIFKZWWVW4L',
      'appium:app': join(
        process.cwd(),
        './apps/android/All_Unit_Converter_&_Tools_base.apk'
      ),
      'appium:platformVersion': '11.0',
      'appium:automationName': 'UiAutomator2',

      'appium:newCommandTimeout': 0,
    },
  ],
}
