var getPrimes = require('../main/main.js').getPrimes;

describe("Case for positive integers", function() {
  describe("Case for small numbers", function() {

    it("should return '[1]' for 1", function() {
      expect(getPrimes(1)).toEqual([]);
    });
    it("should return '[2]' for 2", function() {
      expect(getPrimes(2)).toEqual([2]);
    });
    it("should return '[2,3,5,7, 11]' for 11", function() {
      expect(getPrimes(11)).toEqual([2,3,5,7, 11]);
    });
  });
  
  describe("Case for medium numbers", function(){
    it("should return '[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149]' for 149", function() {
      expect(getPrimes(149)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149]);
    });
    it("should return '168' for 1000", function() {
      expect(getPrimes(1000).length).toEqual(168);
    });
  });

  describe("Case for large numbers", function(){
    it("should return '1229' for 10000", function() {
      expect(getPrimes(10000).length).toEqual(1229);
    });
  });

});

describe("Case for negative integers", function() {
  describe("Case for negative numbers", function(){
    it("should return '-12' for No Primes", function() {
      expect(getPrimes(-12)).toEqual(false);
    });
    it("should return '-12' for No Primes", function() {
      expect(getPrimes(-1202)).toEqual(false);
    });
  });
});

describe("Case for float", function() {
  describe("Case for positive float", function(){
    it("should return '100.92' for No Primes", function() {
      expect(getPrimes(100.92).length).toEqual(25);
    });
    it("should return '-12' for No Primes", function() {
      expect(getPrimes(-1202)).toEqual(false);
    });
  });
});

describe("Case for datatypes and edge cases", function() {
  describe("Case for Integers or float", function(){
    it("should return '1000.322' for No Primes", function() {
      expect(getPrimes(1000.322).length).toEqual(168);
    });
  });
  describe("Case for Strings", function(){
    it("should return 'false' for 'prime nums'", function() {
      expect(getPrimes('prime nums')).toEqual(false);
    });
  });
  describe("Case for Arrays", function(){
    it("should return 'false' for '[3,3,2,13,3]'", function() {
      expect(getPrimes([3,3,2,13,3])).toEqual(false);
    });
  });
  describe("Case for Objects", function(){
    it("should return 'false' for '{age:10}'", function() {
      expect(getPrimes({age:10})).toEqual(false);
    });
  });
  describe("Case for edge cases", function(){
    it("should return false for empy arguments", function() {
      expect(getPrimes()).toEqual(false);
    });
    it("should return false for false", function() {
      expect(getPrimes(false)).toEqual(false);
    });
    it("should return false for false", function() {
      expect(getPrimes(null)).toEqual(false);
    });
  });
});