import { driver, $, $$ } from '@wdio/globals'

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

// export default class Page {
export default class Page {
  public async getElement(element: string) {
    return $(element)
  }

  public async getAllElements(element: string) {
    return $$(element)
  }

  public async scrollElementIntoView(element: string): Promise<void> {
    const elem = await this.getElement(element)
    await elem.scrollIntoView()
  }

  public async getListSize(element: string): Promise<number> {
    const elements = await this.getAllElements(element)

    if (elements && elements.length > 0) {
      return elements.length
    } else {
      throw new Error('No elements found with the specified selector.')
    }
  }

  public async getPageHTML(element: string): Promise<string> {
    const outerHTML = await this.getElement(element)
    return outerHTML.getHTML()
  }

  public async getElementByIndex(element: string, index: number) {
    return this.getAllElements(element)[index]
  }

  public async isElementDisplayed(element: string): Promise<boolean> {
    const elem = await this.getElement(element)
    return elem.isDisplayed()
  }

  public async isElementClickable(element: string): Promise<boolean> {
    const elem = await this.getElement(element)
    return elem.isClickable()
  }

  public async isElementSelected(element: string): Promise<boolean> {
    const elem = await this.getElement(element)
    return elem.isSelected()
  }

  public async isElementByIndexDisplayed(
    element: string,
    index: number
  ): Promise<boolean> {
    const elem = await this.getElementByIndex(element, index)
    return elem.isDisplayed()
  }

  public async isElementByIndexClickable(
    element: string,
    index: number
  ): Promise<boolean> {
    const elem = await this.getElementByIndex(element, index)
    return elem.isClickable()
  }

  public async waitUntilElementDisplayed(element: string): Promise<void> {
    await driver.waitUntil(() => {
      return this.isElementDisplayed(element)
    })
  }

  public async waitUntilElementByIndexDisplayed(
    element: string,
    index: number
  ) {
    await driver.waitUntil(() => {
      return this.isElementByIndexDisplayed(element, index)
    })
  }

  public async getElementText(element: string): Promise<string> {
    await this.waitUntilElementDisplayed(element)
    const elem = await this.getElement(element)
    // return elem.getText()
    return elem.getAttribute('text')
  }

  public async getElementByIndexText(
    element: string,
    index: number
  ): Promise<string> {
    await this.waitUntilElementByIndexDisplayed(element, index)
    const elem = await this.getElementByIndex(element, index)
    return elem.getText()
  }

  public async setElementInputValue(
    element: string,
    value: number
  ): Promise<void> {
    await this.waitUntilElementDisplayed(element)
    const elem = await this.getElement(element)
    await elem.setValue(value)
  }

  public async setElementInputByIndexValue(
    element: string,
    index: number,
    value: string
  ): Promise<void> {
    await this.waitUntilElementByIndexDisplayed(element, index)
    const elem = await this.getElementByIndex(element, index)
    await elem.setValue(value)
  }

  public async clickElement(element: string): Promise<void> {
    await this.waitUntilElementDisplayed(element)
    // await this.scrollElementIntoView(element)

    const elem = await this.getElement(element)
    await elem.click()
  }

  public async clickElementByIndex(
    element: string,
    index: number
  ): Promise<void> {
    await this.waitUntilElementByIndexDisplayed(element, index)
    const elem = await this.getElementByIndex(element, index)
    await elem.click()
  }

  public async hideKeyboard(): Promise<void> {
    await driver.pressKeyCode(4)
  }

  public async waitForAlert(): Promise<void> {
    await driver.waitUntil(() => {
      return driver.getAlertText() !== null
    })
  }

  public async waitNoAlert(): Promise<void> {
    await driver.waitUntil(() => {
      return driver.getAlertText() == null
    })
  }

  public async getAlertText(): Promise<string | undefined> {
    if (driver.isMobile) {
      await this.waitForAlert()
      return driver.getAlertText()
    }
  }

  public async waitForAlertText(text: string): Promise<void> {
    await driver.waitUntil(async () => {
      const text = await driver.getAlertText()
      return text.includes(text)
    })
  }

  public async clickAcceptAlert(): Promise<void> {
    if (driver.isMobile) {
      if (driver.isAndroid) {
        await this.waitForAlert()
        await driver.acceptAlert()
      }
      if (driver.isIOS) {
        await this.waitForAlert()
        await driver.dismissAlert()
      }
    }
  }

  public async clickCancelAlert(): Promise<void> {
    if (driver.isMobile) {
      if (driver.isAndroid) {
        await this.waitForAlert()
        await driver.dismissAlert()
      }
      if (driver.isIOS) {
        await this.waitForAlert()
        await driver.acceptAlert()
      }
    }
  }

  async alertAction(text: string, action: string): Promise<void> {
    await this.waitForAlertText(text)
    if (action == 'accept') {
      await this.clickAcceptAlert()
    } else {
      await this.clickCancelAlert()
    }
  }

  public async clickAndroidBackBtn(): Promise<void> {
    await driver.pressKeyCode(4)
  }
}
