import initAlpine from './initAlpine'
import initCss from './initCss'
export default class OSCW {
  constructor(alpineSelector) {
    initAlpine(alpineSelector)
    initCss()
  }
}