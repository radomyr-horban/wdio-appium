import { expect } from '@wdio/globals'

import calculator from '../pageobjects/calculator.page.js'
import tools from '../pageobjects/tools.page.js'

describe.skip('The "Scientific Calculator" page', () => {
  it('should allow adding', async () => {
    // await tools.clickPercentageBox()

    expect(true).toBeTruthy()
  })
  // it('should allow subtracting ', async () => {})
})
