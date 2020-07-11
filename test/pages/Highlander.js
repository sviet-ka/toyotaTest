import BasePage from './BasePage';

class Highlander extends BasePage {

  get selectedColorLbl () {
    return $('[class="tcom-color-selector-name"]');
  }

  get colorBtns () {
    return $$('.tcom-color-swatch');
  }
  get enterZIPModalWindow () {
    return $('#ensModalWrapper');
  }

  get submitBtn() {
    return $('button[type="submit"]');
  }
  get buildBtn () {
    return $('[data-di-id="#tfresh-btn-tfresh-btn-one"]');
  }
  get nextstepBtn () {
    return $('[data-di-id="#tcom-step-button-next-tfresh-btn-tfresh-btn-one-2"]');
  }

  get modelOptions () {
  return $$('.tcom-cards-container .tcom-card-title');
   // return $$('.pick.tcom-model-card');
  }


  getActiveColorAttr () {
    const l = this.colorBtns.length;
    const n = Math.floor(Math.random() * l);
    $$('.tcom-color-swatch')[n].click();
    return $$('.tcom-color-swatch')[n].getAttribute('data-color-name').split(' ')[0].toUpperCase();
  }
  selectRandomModel() {
    const l = this.modelOptions.length;
    const n = Math.floor(Math.random() * l);
    browser.pause(2000)
    this.modelOptions[n].click();
    // ужно кликнуть не на тайтл, а на Select кнопку

  }
  generateRandomCarBuild () {
    this.buildBtn.click();
    //this.enterZIPModalWindow.waitForDisplayed();
    this.submitBtn.click();
    this.selectRandomModel();
    this.nextstepBtn.click();

  }



  open() {
    super.open('/highlander');
  }
}

export default new Highlander();