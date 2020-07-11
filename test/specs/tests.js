import HomePage from '../pages/HomePage';
import Highlander from '../pages/Highlander';

describe('Home Page testing', () => {
  before(() => {
    HomePage.open();
    browser.setWindowSize(1920, 1080);
  });

  it('should verify "Next Slide Btn" opens next slide', () => {
    HomePage.nextSlideBtn.moveTo();
    HomePage.nextSlideBtn.click();
    expect(HomePage.currentSlide.getAttribute('data-index')).eq('1');
  });
});

describe('HIGHLANDER TESTING', () => {
  before(() => {
    Highlander.open();
  });

  it('should choose highlander', function () {
    HomePage.selectVehicle.click();
    HomePage.crossoverButton.click();
    HomePage.highlanderImgTitle.click();
    expect(browser.getUrl()).includes('highlander');
  });

  it('should ', function () {
    for (let i = 0; i < 10; i++) {
    expect(Highlander.getActiveColorAttr()).eq(Highlander.selectedColorLbl.getText().split(' ')[0]);
  };
  });

  it('should verify the Toyota Financial Services link opens a new tab', function () {
    browser.refresh();
    HomePage.financialServicesAnchor.click();
    expect(browser.getWindowHandles().length).eq(2)
  });

  it('should verify the tab opened with the Toyota Financial Services link is right one ', function() {
    browser.refresh();
    HomePage.financialServicesAnchor.click();
    browser.switchWindow('Financial')
    expect(browser.getTitle()).includes('Toyota Financial');
  });
});
