import { expect } from '@wdio/globals'

import conversions from '../pageobjects/conversions.page.js'
import calendar from '../pageobjects/calendar.page.js'
import tools from '../pageobjects/tools.page.js'

describe('The "Calendar" page', () => {
  it('should display main elements', async () => {
    await conversions.tapOnToolsButton()
    expect(await conversions.isToolsButtonSelected()).toBeTruthy()
    await tools.tapOnCalendarBox()

    expect(await calendar.isTitleDisplayed()).toBeTruthy()

    expect(await calendar.isPreviousMonthButtonDisplayed()).toBeTruthy()
    expect(await calendar.isNextMonthButtonDisplayed()).toBeTruthy()
    expect(await calendar.isMonthViewBoxDisplayed()).toBeTruthy()

    expect(await calendar.isCurrentDateSelected()).toBeTruthy()

    await calendar.tapOnPreviousMonthButton()
    expect(await calendar.isMonthViewBoxDisplayed()).toBeTruthy()

    await calendar.tapOnNextMonthButton()
    await calendar.tapOnNextMonthButton()
    expect(await calendar.isMonthViewBoxDisplayed()).toBeTruthy()
  })
})
