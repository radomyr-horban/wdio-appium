import { browser } from '@wdio/globals'
import Page from './page.js'

// const logo = "//*[contains(@resource-id, 'logo')]";
// const countryOfResidenceInputPicker = "//android.widget.EditText[@text='Enter country name']"
// const countryOptionSg = "//android.view.ViewGroup[@resource-id='country-selector-SG']"

const logo =
  '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[1]'
const entryTitle = "//android.view.View[@content-desc='More than a swipe..']"
const signUpBtn = "//android.widget.Button[@content-desc='Sign Up']"
const signInWithFacebookBtn = '~Sign in with Facebook'
const signInWithPhoneNumberBtn = '~Sign in with Phone number'

const compassBox =
  'android.widget.FrameLayout[@resource-id="com.digitalindeed.converter:id/card_compass"]/android.widget.ImageView'

class Tools extends Page {
  public async isCompassBoxDisplayed(entryTitleIos: string): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(compassBox)
      : await this.isElementDisplayed(entryTitleIos)
  }

  //! OLD
  public async isEntryTitleDisplayed(entryTitleIos: string): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(entryTitle)
      : await this.isElementDisplayed(entryTitleIos)
  }

  public async waitUntilEntryTitleDisplayed(element: string): Promise<void> {
    browser.isAndroid
      ? await this.waitUntilElementDisplayed(entryTitle)
      : await this.waitUntilElementDisplayed(element) //another locator is used due to original locator doesn't work
  }

  public async isSignUpButtonDisplayed(iosBtn: string): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementDisplayed(signUpBtn)
      : await this.isElementDisplayed(iosBtn)
  }

  public async waitUntilSignUpDisplayed(btnIos: string): Promise<void> {
    browser.isAndroid
      ? await this.waitUntilElementDisplayed(signUpBtn)
      : await this.waitUntilElementDisplayed(btnIos)
  }

  public async getSignUpButtonText(element: string): Promise<string> {
    return browser.isAndroid
      ? await this.getElementText(signUpBtn)
      : await this.getElementText(element)
  }

  public async clickSignUpButton(element: string): Promise<void> {
    browser.isAndroid
      ? await this.clickElement(signUpBtn)
      : await this.clickElement(element)
  }

  public async isSignUpBtnClickable(element: string): Promise<boolean> {
    return browser.isAndroid
      ? await this.isElementClickable(signUpBtn)
      : await this.isElementClickable(element)
  }

  public async isSignInWithFacebookBtnDisplayed(): Promise<boolean> {
    return this.isElementDisplayed(signInWithFacebookBtn)
  }

  public async waitUntilSignInWithFacebookBtnDisplayed(): Promise<void> {
    await this.waitUntilElementDisplayed(signInWithFacebookBtn)
  }

  public async getSignInWithFacebookBtnText(): Promise<string> {
    return this.getElementText(signInWithFacebookBtn)
  }

  public async clickSignInWithFacebookBtn(): Promise<void> {
    await this.clickElement(signInWithFacebookBtn)
  }
}

export default new Tools()
