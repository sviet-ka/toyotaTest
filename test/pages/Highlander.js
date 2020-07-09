import BasePage from './BasePage';

class Highlander extends BasePage {

  get selectedColorLbl () {
    return $('[class="tcom-color-selector-name"]');
  }

  get colorBtns () {
    return $$('.tcom-color-swatch');
  }

  getActiveColorAttr () {
    const l = this.colorBtns.length;
    const n = Math.floor(Math.random() * l) + 1;
    $$('.tcom-color-swatch')[n].click();
    return $$('.tcom-color-swatch')[n].getAttribute('data-color-name').toUpperCase();
  }

  open() {
    super.open('/');
  }
}

export default new Highlander();