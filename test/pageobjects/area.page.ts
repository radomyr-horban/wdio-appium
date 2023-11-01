import { browser } from '@wdio/globals'
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

    FROM_SQ_METRE_OPTION: '(//android.widget.RadioButton[@text="Sq Metre"])[1]',
    TO_SQ_CENTIMETRE_OPTION:
      '(//android.widget.RadioButton[@text="Sq Centimetre"])[2]',

    SWAP_BUTTON: '//android.widget.TextView[@text="SWAP"]',
    RESET_BUTTON: '//android.widget.TextView[@text="RESET"]',
  },
  IOS: {
    TITLE: '~ios',
    INPUT_FIELD: '~ios',
    ANSWER_FIELD: '~ios',

    FROM_TEXT: '~ios',
    TO_TEXT: '~ios',

    FROM_SQ_METRE_OPTION: '~ios',
    TO_SQ_METRE_OPTION: '~ios',
    FROM_SQ_CENTIMETRE_OPTION: '~ios',
    TO_SQ_CENTIMETRE_OPTION: '~ios',

    SWAP_BUTTON: '~ios',
    RESET_BUTTON: '~ios',
  },
}

class Area extends Page {
  public async isAreaTitleDisplayed(): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.TITLE)
      : await this.isElementDisplayed(SELECTORS.IOS.TITLE)
  }
  public async isFromTextDisplayed(): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.FROM_TEXT)
      : await this.isElementDisplayed(SELECTORS.IOS.FROM_TEXT)
  }
  public async isToTextDisplayed(): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.TO_TEXT)
      : await this.isElementDisplayed(SELECTORS.IOS.TO_TEXT)
  }

  // todo: refactor (pass option name as a parameter)
  public async selectFromOption(): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.FROM_SQ_METRE_OPTION)
      : await this.clickElement(SELECTORS.IOS.FROM_SQ_METRE_OPTION)
  }

  public async selectToOption(): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.TO_SQ_CENTIMETRE_OPTION)
      : await this.clickElement(SELECTORS.IOS.TO_SQ_CENTIMETRE_OPTION)
  }
  // todo

  public async tapOnInput(): Promise<void> {
    return browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.INPUT_FIELD)
      : await this.clickElement(SELECTORS.IOS.INPUT_FIELD)
  }

  public async tapOnSwapButton(): Promise<void> {
    return browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.SWAP_BUTTON)
      : await this.clickElement(SELECTORS.IOS.SWAP_BUTTON)
  }

  public async tapOnResetButton(): Promise<void> {
    return browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.RESET_BUTTON)
      : await this.clickElement(SELECTORS.IOS.RESET_BUTTON)
  }

  public async setInputFieldValue(value: number): Promise<void> {
    await this.tapOnInput()

    browser.isAndroid
      ? await this.setElementInputValue(SELECTORS.ANDROID.INPUT_FIELD, value)
      : await this.setElementInputValue(SELECTORS.IOS.INPUT_FIELD, value)
  }

  public async getInputFieldValue(): Promise<string> {
    return browser.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.INPUT_FIELD)
      : await this.getElementText(SELECTORS.IOS.INPUT_FIELD)
  }
  public async getAnswerFieldValue(): Promise<string> {
    return browser.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.ANSWER_FIELD)
      : await this.getElementText(SELECTORS.IOS.ANSWER_FIELD)
  }
}

export default new Area()
