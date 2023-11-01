import { expect } from '@wdio/globals'

import conversions from '../pageobjects/conversions.page.js'
import percentage from '../pageobjects/percentage.page.js'

describe('The "Percentage" page', () => {
  it('should allow converting', async () => {
    expect(await conversions.isConversionsButtonSelected()).toBeTruthy()
    await conversions.tapOnPercentageBox()

    expect(await percentage.isPercentageTitleDisplayed()).toBeTruthy()
    expect(await percentage.getCalculateButtonsListSize()).toEqual(3)

    await percentage.setInputFieldValue(1, 10)
    await percentage.setInputFieldValue(2, 100)
    await percentage.tapOnCalculateButton(1)
    expect(await percentage.getAnswerFieldValue(1)).toBe('10.0')

    await percentage.setInputFieldValue(3, 10)
    await percentage.setInputFieldValue(4, 100)
    await percentage.tapOnCalculateButton(2)
    expect(await percentage.getAnswerFieldValue(2)).toBe('10.0')

    await percentage.hideKeyboard()
    await percentage.setInputFieldValue(5, 10)
    await percentage.setInputFieldValue(6, 100)
    await percentage.hideKeyboard()
    await percentage.tapOnCalculateButton(3)
    expect(await percentage.getAnswerFieldValue(3)).toBe('900.0')
  })
})
