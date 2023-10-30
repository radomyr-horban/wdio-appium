import { browser } from '@wdio/globals'
import Page from './page.js'

//! ios
const conversionsButtonIos = ''
const toolsButtonIos = ''
const areaBoxIos = ''
const percentageBoxIos = ''

//! android
const conversionsButton = '//android.widget.TextView[@text="CONVERSIONS"]'
const toolsButton = '//android.widget.TextView[@text="TOOLS"]'

const areaBox =
  '//android.widget.ImageView[@resource-id="com.digitalindeed.converter:id/area_image"]'
const percentageBox =
  '//android.widget.ImageView[@resource-id="com.digitalindeed.converter:id/img_percentage"]'

class Conversions extends Page {
  // public async clickToolsButton(element: string): Promise<void> {
  public async clickToolsButton(): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(toolsButton)
      : await this.clickElement(toolsButtonIos)
  }
  // public async clickPercentageBox(element: string): Promise<void> {
  public async clickPercentageBox(): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(percentageBox)
      : await this.clickElement(percentageBoxIos)
  }

  //! OLD
  // public async isEntryTitleDisplayed(entryTitleIos: string): Promise<boolean> {
  //   return browser.isAndroid
  //     ? await this.isElementDisplayed(entryTitle)
  //     : await this.isElementDisplayed(entryTitleIos)
  // }

  // public async waitUntilEntryTitleDisplayed(element: string): Promise<void> {
  //   browser.isAndroid
  //     ? await this.waitUntilElementDisplayed(entryTitle)
  //     : await this.waitUntilElementDisplayed(element) //another locator is used due to original locator doesn't work
  // }

  // public async isSignUpButtonDisplayed(iosBtn: string): Promise<boolean> {
  //   return browser.isAndroid
  //     ? await this.isElementDisplayed(signUpBtn)
  //     : await this.isElementDisplayed(iosBtn)
  // }

  // public async waitUntilSignUpDisplayed(btnIos: string): Promise<void> {
  //   browser.isAndroid
  //     ? await this.waitUntilElementDisplayed(signUpBtn)
  //     : await this.waitUntilElementDisplayed(btnIos)
  // }

  // public async getSignUpButtonText(element: string): Promise<string> {
  //   return browser.isAndroid
  //     ? await this.getElementText(signUpBtn)
  //     : await this.getElementText(element)
  // }

  // public async isSignUpBtnClickable(element: string): Promise<boolean> {
  //   return browser.isAndroid
  //     ? await this.isElementClickable(signUpBtn)
  //     : await this.isElementClickable(element)
  // }

  // public async isSignInWithFacebookBtnDisplayed(): Promise<boolean> {
  //   return this.isElementDisplayed(signInWithFacebookBtn)
  // }

  // public async waitUntilSignInWithFacebookBtnDisplayed(): Promise<void> {
  //   await this.waitUntilElementDisplayed(signInWithFacebookBtn)
  // }

  // public async getSignInWithFacebookBtnText(): Promise<string> {
  //   return this.getElementText(signInWithFacebookBtn)
  // }
}

export default new Conversions()
