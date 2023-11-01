import Page from './page.js'

const SELECTORS = {
  ANDROID: {
    TITLE: '//android.widget.TextView[@text="Percentage"]',
    CALCULATE_BUTTON_LIST: 'android.widget.Button',
    CALCULATE_BUTTON: {
      1: '//android.widget.Button[@resource-id="com.digitalindeed.converter:id/percentage_btn_calculate_one"]',
      2: '//android.widget.Button[@resource-id="com.digitalindeed.converter:id/percentage_btn_calculate_two"]',
      3: '//android.widget.Button[@resource-id="com.digitalindeed.converter:id/percentage_btn_calculate_three"]',
    },
    INPUT_FIELD: {
      1: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_one_input_one"]',
      2: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_one_input_two"]',
      3: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_two_input_one"]',
      4: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_two_input_two"]',
      5: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_three_input_one"]',
      6: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_three_input_two"]',
    },
    ANSWER_FIELD: {
      1: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_one_answer"]',
      2: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_two_answer"]',
      3: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_three_answer"]',
    },
  },
  IOS: {
    TITLE: '~ios',
    CALCULATE_BUTTON_LIST: '~ios',
    CALCULATE_BUTTON: {
      1: '~ios',
      2: '~ios',
      3: '~ios',
    },
    INPUT_FIELD: {
      1: '~ios',
      2: '~ios',
      3: '~ios',
      4: '~ios',
      5: '~ios',
      6: '~ios',
    },
    ANSWER_FIELD: {
      1: '~ios',
      2: '~ios',
      3: '~ios',
    },
  },
}

class Percentage extends Page {
  public async isPercentageTitleDisplayed(): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.TITLE)
      : await this.isElementDisplayed(SELECTORS.IOS.TITLE)
  }

  public async getCalculateButtonsListSize(): Promise<number> {
    return browser.isAndroid
      ? await this.getListSize(SELECTORS.ANDROID.CALCULATE_BUTTON_LIST)
      : await this.getListSize(SELECTORS.IOS.CALCULATE_BUTTON_LIST)
  }

  //! check
  public async tapOnInput(index: number): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.INPUT_FIELD[index])
      : await this.clickElement(SELECTORS.IOS.INPUT_FIELD[index])
  }

  public async tapOnCalculateButton(index: number): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.CALCULATE_BUTTON[index])
      : await this.clickElement(SELECTORS.IOS.CALCULATE_BUTTON[index])
  }

  public async setInputFieldValue(index: number, value: number): Promise<void> {
    await this.tapOnInput(index) //! check

    browser.isAndroid
      ? await this.setElementInputValue(
          SELECTORS.ANDROID.INPUT_FIELD[index],
          value
        )
      : await this.setElementInputValue(SELECTORS.IOS.INPUT_FIELD[index], value)
  }

  public async getAnswerFieldValue(index: number): Promise<string> {
    return browser.isAndroid
      ? await this.getElementText(SELECTORS.ANDROID.ANSWER_FIELD[index])
      : await this.getElementText(SELECTORS.IOS.ANSWER_FIELD[index])
  }
}

export default new Percentage()
