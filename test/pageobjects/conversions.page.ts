import { browser } from '@wdio/globals'
import Page from './page.js'

const SELECTORS = {
  ANDROID: {
    CONVERSIONS_BUTTON: '//android.widget.TextView[@text="CONVERSIONS"]',
    TOOLS_BUTTON: '//android.widget.TextView[@text="TOOLS"]',

    AREA_BOX:
      '//android.widget.ImageView[@resource-id="com.digitalindeed.converter:id/area_image"]',
    PERCENTAGE_BOX:
      '//android.widget.ImageView[@resource-id="com.digitalindeed.converter:id/img_percentage"]',
  },
  IOS: {
    CONVERSIONS_BUTTON: '~ios',
    TOOLS_BUTTON: '~ios',

    AREA_BOX: '~ios',
    PERCENTAGE_BOX: '~ios',
  },
}

class Conversions extends Page {
  public async tapOnToolsButton(): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.TOOLS_BUTTON)
      : await this.clickElement(SELECTORS.IOS.TOOLS_BUTTON)
  }

  public async tapOnPercentageBox(): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.PERCENTAGE_BOX)
      : await this.clickElement(SELECTORS.IOS.PERCENTAGE_BOX)
  }
  public async tapOnAreaBox(): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.AREA_BOX)
      : await this.clickElement(SELECTORS.IOS.AREA_BOX)
  }
}

export default new Conversions()
