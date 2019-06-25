"use strict";

(function() {
  window.randoms = {
    randomNumber: function(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    randomNumberSize: function() {
      var mapSize = this.randomNumber(50, window.mapInner.offsetWidth - 50);
      return mapSize;
    },
    randomString: function(param) {
      var randomParam = param[Math.floor(Math.random() * param.length)];
      return randomParam;
    },
    randomNumberArray: function() {
      return this.randomNumber(1, window.declarationFeaturesLength + 1);
    },
    randomArray: function() {
      var randArr = [];
      randArr.push(
        "wifi",
        "dishwasher",
        "parking",
        "washer",
        "elevator",
        "conditioner"
      );
      randArr.sort(function() {
        return Math.random() - 0.5;
      });
      randArr.length = this.randomNumberArray();
      return randArr;
    },
    randomString: function(param) {
      var randomParam = param[Math.floor(Math.random() * param.length)];
      return randomParam;
    }
  };
})();
