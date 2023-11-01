import { browser } from '@wdio/globals'
import Page from './page.js'

const SELECTORS = {
  ANDROID: {
    TITLE: '//android.widget.TextView[@text="Scientific Calculator"]',
    UPPER_INPUT_FIELD: 'id=com.digitalindeed.converter:id/editText',
    BOTTOM_INPUT_FIELD: 'id=com.digitalindeed.converter:id/editText2',
    SIGN_BUTTON: 'id=com.digitalindeed.converter:id/',
    DIGIT_BUTTON: 'id=com.digitalindeed.converter:id/num',
  },
  IOS: {
    TITLE: '~ios',
    UPPER_INPUT_FIELD: '~ios',
    BOTTOM_INPUT_FIELD: '~ios',
    SIGN_BUTTON: '~ios',
    DIGIT_BUTTON: '~ios',
  },
}

class Calculator extends Page {
  public async isTitleDisplayed(): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.TITLE)
      : await this.isElementDisplayed(SELECTORS.IOS.TITLE)
  }
  public async isUpperInputFieldDisplayed(): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.UPPER_INPUT_FIELD)
      : await this.isElementDisplayed(SELECTORS.IOS.UPPER_INPUT_FIELD)
  }
  public async isBottomInputFieldDisplayed(): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.BOTTOM_INPUT_FIELD)
      : await this.isElementDisplayed(SELECTORS.IOS.BOTTOM_INPUT_FIELD)
  }

  public async tapOnDigit(digit: number): Promise<void> {
    return browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.DIGIT_BUTTON + digit)
      : await this.clickElement(SELECTORS.IOS.DIGIT_BUTTON + digit)
  }
  public async enterNumber(number: number): Promise<void> {
    const numberDigitsArray = number.toString().split('').map(Number)

    for (const digit of numberDigitsArray) {
      await this.tapOnDigit(digit)
    }
  }

  public async tapOnButton(button: string): Promise<void> {
    return browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.SIGN_BUTTON + button)
      : await this.clickElement(SELECTORS.IOS.SIGN_BUTTON + button)
  }

  public async getBottomInputFieldValue(): Promise<string> {
    return browser.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.BOTTOM_INPUT_FIELD)
      : await this.getElementText(SELECTORS.IOS.BOTTOM_INPUT_FIELD)
  }
  public async getUpperInputFieldValue(): Promise<string> {
    return browser.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.UPPER_INPUT_FIELD)
      : await this.getElementText(SELECTORS.IOS.UPPER_INPUT_FIELD)
  }
}

export default new Calculator()
