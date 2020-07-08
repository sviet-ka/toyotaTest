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

  selectColorBtn(colorName) {
    return $('//button[@data-color-name*="${colorName}"]');
  }

  open() {
    super.open('https://www.toyota.com/');
  }
}
export default new HomePage();