// import { browser } from '@wdio/globals'
import Page from './page.js'

//! ios
const signUpBtnIos = '~just-example'
const percentageTitleIos = '~just-example-label'
const calculateButtonListIos = '~just-example-label'

//! android
const percentageTitle = '//android.widget.TextView[@text="Percentage"]'
const calculateButtonList = 'android.widget.Button'

// const calculateButtonOne =
//   '//android.widget.Button[@resource-id="com.digitalindeed.converter:id/percentage_btn_calculate_one"]'
// const calculateButtonTwo =
//   '//android.widget.Button[@resource-id="com.digitalindeed.converter:id/percentage_btn_calculate_two"]'
// const calculateButtonThree =
//   '//android.widget.Button[@resource-id="com.digitalindeed.converter:id/percentage_btn_calculate_three"]'

//!inputs
// const converterBlockOneInputOne =
//   '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_one_input_one"]'
// const converterBlockOneInputTwo =
//   '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_one_input_two"]'

// const converterBlockTwoInputOne =
//   '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_two_input_one"]'
// const converterBlockTwoInputTwo =
//   '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_two_input_two"]'

// const converterBlockThreeInputOne =
//   '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_three_input_one"]'
// const converterBlockThreeiIputTwo =
//   '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_three_input_two"]'

const inputFields = {
  1: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_one_input_one"]',
  2: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_one_input_two"]',
  3: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_two_input_one"]',
  4: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_two_input_two"]',
  5: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_three_input_one"]',
  6: '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_three_input_two"]',
}

const calculateButtons = {
  1: '//android.widget.Button[@resource-id="com.digitalindeed.converter:id/percentage_btn_calculate_one"]',
  2: '//android.widget.Button[@resource-id="com.digitalindeed.converter:id/percentage_btn_calculate_two"]',
  3: '//android.widget.Button[@resource-id="com.digitalindeed.converter:id/percentage_btn_calculate_three"]',
}

const resultFields = {
  1: browser.isAndroid
    ? '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_one_answer"]'
    : '~ios',
  2: browser.isAndroid
    ? '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_two_answer"]'
    : '~ios',
  3: browser.isAndroid
    ? '//android.widget.EditText[@resource-id="com.digitalindeed.converter:id/percentage_edt_three_answer"]'
    : '~ios',
}

class Percentage extends Page {
  public async isPercentageTitleDisplayed(): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(percentageTitle)
      : await this.isElementDisplayed(percentageTitleIos)
  }

  public async getCalculateButtonsListSize(): Promise<number> {
    return browser.isAndroid
      ? await this.getListSize(calculateButtonList)
      : await this.getListSize(calculateButtonListIos)
  }

  //! buttons
  // public async clickCalculateButtonOne(element: string): Promise<void> {
  //   browser.isAndroid
  //     ? await this.clickElement(calculateButtonOne)
  //     : await this.clickElement(element)
  // }

  // public async clickCalculateButtonTwo(element: string): Promise<void> {
  //   browser.isAndroid
  //     ? await this.clickElement(calculateButtonTwo)
  //     : await this.clickElement(element)
  // }

  // public async clickCalculateButtonThree(element: string): Promise<void> {
  //   browser.isAndroid
  //     ? await this.clickElement(calculateButtonThree)
  //     : await this.clickElement(element)
  // }

  public async clickInput(element: string): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(element)
      : await this.clickElement('element') //!
  }

  public async clickCalculateButton(index: number): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(calculateButtons[index])
      : await this.clickElement(calculateButtons[index]) //!
  }

  public async setInputValue(index: number, value: number): Promise<void> {
    await this.clickInput(inputFields[index])
    browser.isAndroid
      ? await this.setElementInputValue(inputFields[index], value)
      : await this.setElementInputValue(inputFields[index], value) //!
  }

  public async getResultFieldValue(index: number): Promise<string> {
    return browser.isAndroid
      ? await this.getElementText(resultFields[index])
      : await this.getElementText(resultFields[index]) //!
  }
}

export default new Percentage()
