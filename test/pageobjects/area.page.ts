import { driver } from '@wdio/globals'
import Page from './page.js'

const SELECTORS = {
  ANDROID: {
    TITLE: '//android.widget.TextView[@text="Area"]',
    INPUT_FIELD:
      '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/header_value_from"]',
    ANSWER_FIELD:
      '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/header_value_to"]',

    FROM_TEXT:
      '//android.widget.TextView[@resource-id="com.digitalindeed.converter:id/header_text_from"]',
    TO_TEXT:
      '//android.widget.TextView[@resource-id="com.digitalindeed.converter:id/header_text_to"]',

    SWAP_BUTTON: '//android.widget.TextView[@text="SWAP"]',
    RESET_BUTTON: '//android.widget.TextView[@text="RESET"]',
  },
  IOS: {
    TITLE: '~ios',
    INPUT_FIELD: '~ios',
    ANSWER_FIELD: '~ios',

    FROM_TEXT: '~ios',
    TO_TEXT: '~ios',

    SWAP_BUTTON: '~ios',
    RESET_BUTTON: '~ios',
  },
}

class Area extends Page {
  public async isAreaTitleDisplayed(): Promise<boolean> {
    return driver.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.TITLE)
      : await this.isElementDisplayed(SELECTORS.IOS.TITLE)
  }
  public async isFromTextDisplayed(): Promise<boolean> {
    return driver.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.FROM_TEXT)
      : await this.isElementDisplayed(SELECTORS.IOS.FROM_TEXT)
  }
  public async isToTextDisplayed(): Promise<boolean> {
    return driver.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.TO_TEXT)
      : await this.isElementDisplayed(SELECTORS.IOS.TO_TEXT)
  }

  public async selectFromOption(option: string): Promise<void> {
    driver.isAndroid
      ? await this.clickElement(
          `(//android.widget.RadioButton[@text="${option}"])[1]`
        )
      : await this.clickElement(`~ios`)
  }

  public async selectToOption(option: string): Promise<void> {
    driver.isAndroid
      ? await this.clickElement(
          `(//android.widget.RadioButton[@text="${option}"])[2]`
        )
      : await this.clickElement(`~ios`)
  }

  public async tapOnInput(): Promise<void> {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.INPUT_FIELD)
      : await this.clickElement(SELECTORS.IOS.INPUT_FIELD)
  }

  public async tapOnSwapButton(): Promise<void> {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.SWAP_BUTTON)
      : await this.clickElement(SELECTORS.IOS.SWAP_BUTTON)
  }

  public async tapOnResetButton(): Promise<void> {
    return driver.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.RESET_BUTTON)
      : await this.clickElement(SELECTORS.IOS.RESET_BUTTON)
  }

  public async setInputFieldValue(value: number): Promise<void> {
    await this.tapOnInput()

    driver.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.INPUT_FIELD, value)
      : await this.setElementInputValue(SELECTORS.IOS.INPUT_FIELD, value)
  }

  public async getInputFieldValue(): Promise<string> {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.INPUT_FIELD)
      : await this.getElementText(SELECTORS.IOS.INPUT_FIELD)
  }
  public async getAnswerFieldValue(): Promise<string> {
    return driver.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.ANSWER_FIELD)
      : await this.getElementText(SELECTORS.IOS.ANSWER_FIELD)
  }
}

export default new Area()
