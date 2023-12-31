import { driver } from '@wdio/globals'
import Page from './page.js'

const SELECTORS = {
  ANDROID: {
    CONVERSIONS_BUTTON: '//android.widget.TextView[@text="CONVERSIONS"]',
    TOOLS_BUTTON: '//android.widget.TextView[@text="TOOLS"]',

    CALENDAR_BOX:
      '//android.widget.FrameLayout[@resource-id="com.digitalindeed.converter:id/card_calender"]/android.widget.ImageView',
    CALCULATOR_BOX:
      '//android.widget.FrameLayout[@resource-id="com.digitalindeed.converter:id/card_scientific_calc"]/android.widget.ImageView',
  },
  IOS: {
    CONVERSIONS_BUTTON: '~ios',
    TOOLS_BUTTON: '~ios',

    CALENDAR_BOX: '~ios',
    CALCULATOR_BOX: '~ios',
  },
}

class Tools extends Page {
  public async isCalendarBoxDisplayed(): Promise<boolean> {
    return driver.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.CALENDAR_BOX)
      : await this.isElementDisplayed(SELECTORS.IOS.CALENDAR_BOX)
  }

  public async isCalculatorBoxDisplayed(): Promise<boolean> {
    return driver.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.CALCULATOR_BOX)
      : await this.isElementDisplayed(SELECTORS.IOS.CALCULATOR_BOX)
  }

  public async tapOnCalendarBox(): Promise<void> {
    driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.CALENDAR_BOX)
      : await this.clickElement(SELECTORS.IOS.CALENDAR_BOX)
  }

  public async tapOnCalculatorBox(): Promise<void> {
    driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.CALCULATOR_BOX)
      : await this.clickElement(SELECTORS.IOS.CALCULATOR_BOX)
  }
}

export default new Tools()
