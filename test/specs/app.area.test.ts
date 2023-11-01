import { expect } from '@wdio/globals'

import area from '../pageobjects/area.page.js'
import conversions from '../pageobjects/conversions.page.js'

describe.skip('The "Area" page', () => {
  it('should allow converting', async () => {
    await conversions.tapOnAreaBox()
    expect(await area.isAreaTitleDisplayed()).toBeTruthy()
    expect(await area.isFromTextDisplayed()).toBeTruthy()
    expect(await area.isToTextDisplayed()).toBeTruthy()

    await area.selectFromOption()
    await area.selectToOption()
    await area.setInputFieldValue(10)
    expect(await area.getAnswerFieldValue()).toBe('100000')

    await area.hideKeyboard()
    await area.tapOnSwapButton()
    expect(await area.getInputFieldValue()).toBe('10')
    expect(await area.getAnswerFieldValue()).toBe('0.001')

    await area.tapOnResetButton()
    expect(await area.getInputFieldValue()).toBe('')
    expect(await area.getAnswerFieldValue()).toBe('0')
  })
})