import { expect, browser } from '@wdio/globals'

import area from '../pageobjects/area.page.js'
import calculator from '../pageobjects/calculator.page.js'
import calender from '../pageobjects/calender.page.js'
import conversions from '../pageobjects/conversions.page.js'
import percentage from '../pageobjects/percentage.page.js'
import tools from '../pageobjects/tools.page.js'

// const signUpBtnIos = '~just-example'
// const percentageTitleIos = '~just-example-label'

describe('All units converter application', () => {
  it('should allow converting in the "Percentage" tool', async () => {
    await conversions.clickPercentageBox()

    expect(await percentage.isPercentageTitleDisplayed()).toBeTruthy()
    expect(await percentage.getCalculateButtonsListSize()).toEqual(3)

    await percentage.setInputValue(1, 10)
    await percentage.setInputValue(2, 100)
    await percentage.clickCalculateButton(1)
    // expect(await percentage.getResultFieldValue(1)).toHaveText('0') //! Why doesn't this line work???
    expect(await percentage.getResultFieldValue(1)).toBe('10.0')

    await percentage.setInputValue(3, 10)
    await percentage.setInputValue(4, 100)
    await percentage.clickCalculateButton(2)
    expect(await percentage.getResultFieldValue(2)).toBe('10.0')

    await percentage.hideKeyboard()
    await percentage.setInputValue(5, 10)
    await percentage.setInputValue(6, 100)
    await percentage.hideKeyboard()
    await percentage.clickCalculateButton(3)
    expect(await percentage.getResultFieldValue(3)).toBe('900.0')
  })

  // it('should allow converting in the “Area” tool', async () => {})

  // it('should display main elements in the “Calender” tool', async () => {
  //   await conversions.clickToolsButton(signUpBtnIos)
  // })

  // it('should allow adding in the “Scientific Calculator” tool', async () => {})

  // it('should allow subtracting in the “Scientific Calculator” tool', async () => {})
})
