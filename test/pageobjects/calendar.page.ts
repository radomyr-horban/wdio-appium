import { browser } from '@wdio/globals'
import Page from './page.js'

const SELECTORS = {
  ANDROID: {
    TITLE: '',
    BUTTON: '',
  },
  IOS: {},
}

class Calender extends Page {}

export default new Calender()
