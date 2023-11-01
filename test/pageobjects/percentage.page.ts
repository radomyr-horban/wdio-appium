import Page from './page.js'

const SELECTORS = {
  ANDROID: {
    TITLE: '//android.widget.TextView[@text="Percentage"]',
    CALCULATE_BUTTON_LIST: 'android.widget.Button',
    CALCULATE_BUTTON: {
      // calculateButtonOne:
      1: '//android.widget.Button[@resource-id="com.digitalindeed.converter:id/percentage_btn_calculate_one"]',
      // calculateButtonTwo:
      2: '//android.widget.Button[@resource-id="com.digitalindeed.converter:id/percentage_btn_calculate_two"]',
      // calculateButtonThree:
      3: '//android.widget.Button[@resource-id="com.digitalindeed.converter:id/percentage_btn_calculate_three"]',
    },
    INPUT_FIELD: {
      // blockOneInputOne:
      1: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_one_input_one"]',
      // blockOneInputTwo:
      2: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_one_input_two"]',
      // blockTwoInputOne:
      3: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_two_input_one"]',
      // blockTwoInputTwo:
      4: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_two_input_two"]',
      // blockThreeInputOne:
      5: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_three_input_one"]',
      // blockThreeInputTwo:
      6: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_three_input_two"]',
    },
    ANSWER_FIELD: {
      // answerFieldOne:
      1: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_one_answer"]',
      // answerFieldTwo:
      2: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_two_answer"]',
      // answerFieldThree:
      3: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_three_answer"]',
    },
  },
  IOS: {
    TITLE: '~ios',
    CALCULATE_BUTTON_LIST: '~ios',
    CALCULATE_BUTTON: {
      // calculateButtonOne:
      1: '~ios',
      // calculateButtonTwo:
      2: '~ios',
      // calculateButtonThree:
      3: '~ios',
    },
    INPUT_FIELD: {
      // blockOneInputOne:
      1: '~ios',
      // blockOneInputTwo:
      2: '~ios',
      // blockTwoInputOne:
      3: '~ios',
      // blockTwoInputTwo:
      4: '~ios',
      // blockThreeInputOne:
      5: '~ios',
      // blockThreeInputTwo:
      6: '~ios',
    },
    ANSWER_FIELD: {
      // answerFieldOne:
      1: '~ios',
      // answerFieldTwo:
      2: '~ios',
      // answerFieldThree:
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

  public async tapOnInput(element: string): Promise<void> {
    await this.clickElement(element)
  }

  public async tapOnCalculateButton(index: number): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.CALCULATE_BUTTON[index])
      : await this.clickElement(SELECTORS.IOS.CALCULATE_BUTTON[index])
  }

  public async setInputFieldValue(index: number, value: number): Promise<void> {
    await this.tapOnInput(SELECTORS.ANDROID.INPUT_FIELD[index])
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
