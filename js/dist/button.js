/*!
  * CoreUI button.js v4.3.0-beta.1 (https://coreui.io)
  * Copyright 2022 The CoreUI Team (https://github.com/orgs/coreui/people)
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./util/index'), require('./dom/event-handler'), require('./base-component')) :
  typeof define === 'function' && define.amd ? define(['./util/index', './dom/event-handler', './base-component'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Button = factory(global.Index, global.EventHandler, global.BaseComponent));
})(this, (function (index, EventHandler, BaseComponent) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v4.3.0-beta.1): alert.js
   * Licensed under MIT (https://coreui.io/license)
   *
   * This component is a modified version of the Bootstrap's button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'button';
  const DATA_KEY = 'coreui.button';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const CLASS_NAME_ACTIVE = 'active';
  const SELECTOR_DATA_TOGGLE = '[data-coreui-toggle="button"]';
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  /**
   * Class definition
   */

  class Button extends BaseComponent__default.default {
    // Getters
    static get NAME() {
      return NAME;
    } // Public


    toggle() {
      // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
      this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE));
    } // Static


    static jQueryInterface(config) {
      return this.each(function () {
        const data = Button.getOrCreateInstance(this);

        if (config === 'toggle') {
          data[config]();
        }
      });
    }

  }
  /**
   * Data API implementation
   */


  EventHandler__default.default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Button);

  return Button;

}));
//# sourceMappingURL=button.js.map
