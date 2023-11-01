import { driver } from '@wdio/globals'
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
    driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.TOOLS_BUTTON)
      : await this.clickElement(SELECTORS.IOS.TOOLS_BUTTON)
  }

  public async tapOnPercentageBox(): Promise<void> {
    driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.PERCENTAGE_BOX)
      : await this.clickElement(SELECTORS.IOS.PERCENTAGE_BOX)
  }
  public async tapOnAreaBox(): Promise<void> {
    driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.AREA_BOX)
      : await this.clickElement(SELECTORS.IOS.AREA_BOX)
  }

  public async isConversionsButtonSelected(): Promise<boolean> {
    return driver.isAndroid
      ? await this.isElementSelected(SELECTORS.ANDROID.CONVERSIONS_BUTTON)
      : await this.isElementSelected(SELECTORS.IOS.CONVERSIONS_BUTTON)
  }
  public async isToolsButtonSelected(): Promise<boolean> {
    return driver.isAndroid
      ? await this.isElementSelected(SELECTORS.ANDROID.TOOLS_BUTTON)
      : await this.isElementSelected(SELECTORS.IOS.TOOLS_BUTTON)
  }
}

export default new Conversions()
