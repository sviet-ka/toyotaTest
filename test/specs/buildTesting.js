import Highlander from '../pages/Highlander';

describe ('BUILD TESTING',() => {
  it('should generate correct car build', function() {
    Highlander.open();
    const models = Highlander.modelOptions.map((el) => el.getText());
    console.log(models);
    Highlander.generateRandomCarBuild();
  });
});