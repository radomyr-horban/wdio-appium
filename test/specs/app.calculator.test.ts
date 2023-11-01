import { expect, driver } from '@wdio/globals'

import calculator from '../pageobjects/calculator.page.js'
import conversions from '../pageobjects/conversions.page.js'
import tools from '../pageobjects/tools.page.js'

describe('The "Scientific Calculator" page', () => {
  it('should allow adding', async () => {
    expect(await conversions.isConversionsButtonSelected()).toBeTruthy()
    await conversions.tapOnToolsButton()
    expect(await conversions.isToolsButtonSelected()).toBeTruthy()

    await tools.tapOnCalculatorBox()

    expect(await calculator.isTitleDisplayed()).toBeTruthy()
    expect(await calculator.isUpperInputFieldDisplayed()).toBeTruthy()
    expect(await calculator.isBottomInputFieldDisplayed()).toBeTruthy()

    expect(await calculator.getBottomInputFieldValue()).toBe('0')
    await calculator.tapOnButton('clear')
    expect(await calculator.getBottomInputFieldValue()).toBe('')

    await calculator.enterNumber(10)
    await calculator.tapOnButton('plus')
    expect(await calculator.getUpperInputFieldValue()).toBe('10+')

    await calculator.enterNumber(5)
    await calculator.tapOnButton('equal')
    expect(await calculator.getBottomInputFieldValue()).toBe('15.0')

    await driver.reloadSession()
  })

  it('should allow subtracting ', async () => {
    expect(await conversions.isConversionsButtonSelected()).toBeTruthy()
    await conversions.tapOnToolsButton()
    expect(await conversions.isToolsButtonSelected()).toBeTruthy()

    await tools.tapOnCalculatorBox()

    expect(await calculator.isTitleDisplayed()).toBeTruthy()
    expect(await calculator.isUpperInputFieldDisplayed()).toBeTruthy()
    expect(await calculator.isBottomInputFieldDisplayed()).toBeTruthy()

    expect(await calculator.getBottomInputFieldValue()).toBe('0')
    await calculator.tapOnButton('clear')
    expect(await calculator.getBottomInputFieldValue()).toBe('')

    await calculator.enterNumber(10)
    await calculator.tapOnButton('minus')
    expect(await calculator.getUpperInputFieldValue()).toBe('10-')

    await calculator.enterNumber(5)
    await calculator.tapOnButton('equal')
    expect(await calculator.getBottomInputFieldValue()).toBe('5.0')
  })
})
