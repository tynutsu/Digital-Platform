'use strict';

describe('Researches E2E Tests:', function () {
  describe('Test Researches page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3001/researches');
      expect(element.all(by.repeater('research in researches')).count()).toEqual(0);
    });
  });
});
