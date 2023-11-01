import { browser, $, $$ } from '@wdio/globals'

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

// export default class Page {
export default class Page {
  public async getElement(element: string) {
    return $(element)
  }
  //! error
  // public async getElement(element: string) {
  //   const elem = await $(element)

  //   return elem
  //     ? elem
  //     : new Error('No element found with the specified selector.')
  // }

  //! error
  public async getAllElements(element: string) {
    console.log('elements.length = ' + (await $$(element).length))
    return $$(element)
  }

  public async scrollElementIntoView(element: string): Promise<void> {
    const elem = await this.getElement(element)
    await elem.scrollIntoView()
  }

  // public async isListSizeValid(
  //   elements: string,
  //   listSize: number
  // ): Promise<void> {
  //   const elementsList = await this.getAllElements(elements)
  //   return expect(elements).toBeElementsArrayOfSize(3)
  // }

  public async getListSize(element: string): Promise<number> {
    const elements = await this.getAllElements(element)

    if (elements && elements.length > 0) {
      console.log('elements.length = ' + elements.length)
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
  //! new
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
    await browser.waitUntil(() => {
      return this.isElementDisplayed(element)
    })
  }

  public async waitUntilElementByIndexDisplayed(
    element: string,
    index: number
  ) {
    await browser.waitUntil(() => {
      return this.isElementByIndexDisplayed(element, index)
    })
  }

  public async getElementText(element: string): Promise<string> {
    await this.waitUntilElementDisplayed(element)
    // await this.scrollElementIntoView(element)

    const elem = await this.getElement(element)
    console.log('text = ' + (await elem.getAttribute('text')))

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

  // public async scrollElementIntoViewByIndex(
  //   element: string,
  //   index: number
  // ): Promise<void> {
  //   const elem = await this.getElementByIndex(element, index)
  //   await elem.scrollIntoView()
  // }

  public async hideKeyboard(): Promise<void> {
    await browser.pressKeyCode(4)
  }

  public async waitForAlert(): Promise<void> {
    await browser.waitUntil(() => {
      return browser.getAlertText() !== null
    })
  }

  public async waitNoAlert(): Promise<void> {
    await browser.waitUntil(() => {
      return browser.getAlertText() == null
    })
  }

  public async getAlertText(): Promise<string | undefined> {
    if (browser.isMobile) {
      await this.waitForAlert()
      return browser.getAlertText()
    }
  }

  public async waitForAlertText(text: string): Promise<void> {
    await browser.waitUntil(async () => {
      const text = await browser.getAlertText()
      return text.includes(text)
    })
  }

  public async clickAcceptAlert(): Promise<void> {
    if (browser.isMobile) {
      if (browser.isAndroid) {
        await this.waitForAlert()
        await browser.acceptAlert()
      }
      if (browser.isIOS) {
        await this.waitForAlert()
        await browser.dismissAlert()
      }
    }
  }

  public async clickCancelAlert(): Promise<void> {
    if (browser.isMobile) {
      if (browser.isAndroid) {
        await this.waitForAlert()
        await browser.dismissAlert()
      }
      if (browser.isIOS) {
        await this.waitForAlert()
        await browser.acceptAlert()
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
    await browser.pressKeyCode(4)
  }
}
