import HomePage from '../pages/HomePage';
import Highlander from '../pages/Highlander';

describe ('Home Page testing', () => {
  before (() => {
    HomePage.open();
    browser.setWindowSize(1920, 1080)
  })

  it('should verify "Next Slide Btn" opens next slide', () => {
    HomePage.nextSlideBtn.moveTo();
    HomePage.nextSlideBtn.click();
    expect(HomePage.currentSlide.getAttribute('data-index')).eq('1');
    });

})

describe ('HIGHLANDER TESTING', () => {
  before(() => {
    Highlander.open();
  })

  it('should choose highlander', function() {
    HomePage.selectVehicle.click();
    HomePage.crossoverButton.click();
    HomePage.highlanderImgTitle.click();
    browser.pause(2000)
    expect(browser.getUrl()).includes('highlander');
  });

  it('should ', function() {
    expect(Highlander.getActiveColorAttr()).includes(Highlander.selectedColorLbl.getText());
  });

})
// describe('Example', () => {
//   before (() => {
//     browser.url('https://www.toyota.com/rav4prime/');
//     browser.setWindowSize(1920, 1080)
//
//   })
//
//   it('should save screenshot of a car being explored', () => {
//     // Save a screen
//     //browser.saveScreen('examplePaged', { /* some options */ });
//
//     // Save an element
//     browser.saveElement(HomePage.carImage, "carImageBefore", { /* some options */ });
//     HomePage.
//     // Save a full page screenshot
//    // browser.saveFullPageScreen('fullPage', { /* some options */ });
//
//     // Save a full page screenshot with all tab executions
//     //browser.saveTabbablePage('save-tabbable', { /* some options, use the same options as for saveFullPageScreen */ });
//   });
//
//   it('should compare successful with a baseline', () => {
//     // Check a screen
//     expect(browser.checkScreen('examplePaged', { /* some options */ })).eq(0);
//
//     // Check an element
//     expect(browser.checkElement($('#element-id'), 'firstButtonElement', { /* some options */ })).eq(0);
//
//     // Check a full page screenshot
//     expect(browser.checkFullPageScreen('fullPage', { /* some options */ })).eq(0);
//
//     // Check a full page screenshot with all tab executions
//     expect(browser.checkTabbablePage('check-tabbable', { /* some options, use the same options as for checkFullPageScreen */ })).eq(0);
//   });
//
// });