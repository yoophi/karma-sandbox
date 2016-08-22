describe('MyApp', function() {
  'use strict'

  beforeEach(module('MyApp'));

  describe('MathService', function() {
    it('sum(2, 4) should be 6', inject(function(MathService) {
        expect(MathService.sum(2, 4)).be.equal(6);
    }));

    it('sum(3, 6) should be 9', inject(function(MathService) {
        expect(MathService.sum(3, 6)).be.equal(9);
    }));
  })
})
