export default class BasePage{

  selectColorBtn(colorName) {
    return $('//button[@data-color-name*="${colorName}"]');
  }

  open(path){
    browser.url(path);
  }
}
