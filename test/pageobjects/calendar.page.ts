import { browser } from '@wdio/globals'
import Page from './page.js'

const SELECTORS = {
  ANDROID: {
    TITLE: '//android.widget.TextView[@text="Calender"]',
    PREVIOUS_MONTH_BUTTON: '~Previous month',
    NEXT_MONTH_BUTTON: '~Next month',
    MONTH_VIEW_BOX: 'id=android:id/month_view',
  },
  IOS: {
    TITLE: '~ios',
    PREVIOUS_MONTH_BUTTON: '~ios',
    NEXT_MONTH_BUTTON: '~ios',
    MONTH_VIEW_BOX: '~ios',
  },
}

class Calender extends Page {
  public async isTitleDisplayed(): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.TITLE)
      : await this.isElementDisplayed(SELECTORS.IOS.TITLE)
  }
  public async isMonthViewBoxDisplayed(): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.MONTH_VIEW_BOX)
      : await this.isElementDisplayed(SELECTORS.IOS.MONTH_VIEW_BOX)
  }

  public async isPreviousMonthButtonDisplayed(): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.PREVIOUS_MONTH_BUTTON)
      : await this.isElementDisplayed(SELECTORS.IOS.PREVIOUS_MONTH_BUTTON)
  }
  public async isNextMonthButtonDisplayed(): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(SELECTORS.ANDROID.NEXT_MONTH_BUTTON)
      : await this.isElementDisplayed(SELECTORS.IOS.NEXT_MONTH_BUTTON)
  }

  public async tapOnPreviousMonthButton(): Promise<void> {
    return browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.PREVIOUS_MONTH_BUTTON)
      : await this.clickElement(SELECTORS.IOS.PREVIOUS_MONTH_BUTTON)
  }

  public async tapOnNextMonthButton(): Promise<void> {
    return browser.isAndroid
      ? await this.clickElement(SELECTORS.ANDROID.NEXT_MONTH_BUTTON)
      : await this.clickElement(SELECTORS.IOS.NEXT_MONTH_BUTTON)
  }

  public async getCurrentDateFormatted(): Promise<string> {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const today = new Date()
    const day = String(today.getDate()).padStart(2, '0')
    const month = months[today.getMonth()]
    const year = today.getFullYear()
    const formattedDate = `${day} ${month} ${year}`

    return formattedDate
  }

  public async isCurrentDateSelected(): Promise<boolean> {
    const currenteDate = await this.getCurrentDateFormatted()
    return this.isElementSelected(`~${currenteDate}`)
  }
}

export default new Calender()
