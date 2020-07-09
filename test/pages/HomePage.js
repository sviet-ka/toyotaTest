import BasePage from './BasePage';

class HomePage extends BasePage {
  get currentSlide() {
    return $('div .slick-track div .slick-active');
  }
  get nextSlideBtn() {
    return $$('button[aria-label="show next slide"]')[0];
  }
  get exploreBtn () {
    return $('a[data-di-id="#tfresh-btn-tfresh-btn-one-"]');
  }

  get carImage() {
    return $('.tcom-threesixty-image.active');
  }

  get selectVehicle(){
    return $('[data-service="selectVehicles"]');
  }

  get crossoverButton(){
    return $('li[data-model-category="crossovers-suvs"] button');
  }

  get highlanderImgTitle(){
    return $('//p[text()="2020 Highlander"]');
  }


  open() {
    super.open('/');
  }
}
export default new HomePage();