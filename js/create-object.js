"use strict";

(function() {
  var CreateObject = function(value) {
    for (var i = 1; i <= value; i++) {
      var declarationAround = {
        author: "img/avatars/user" + 0 + i + ".png",
        title: window.declarationTitle[i - 1],
        adress:
          window.randoms.randomNumber(300, 600).toString() +
          "," +
          window.randoms.randomNumber(300, 600).toString(),
        price: window.randoms.randomNumber(1000, 1000000),
        type: window.randoms.randomString(window.declarationType),
        rooms: window.randoms.randomNumber(1, 5),
        quests: window.randoms.randomNumber(2, 10),
        checkin: window.randoms.randomString(window.declarationCheck),
        checkout: window.randoms.randomString(window.declarationCheck),
        features: window.randoms.randomArray(),
        description: "",
        photos: window.blendPhotos,
        location: {
          x: window.randoms.randomNumberSize(),
          y: window.randoms.randomNumber(130, 630)
        }
      };
      window.offer.push(declarationAround);
    }
    return window.offer;
  };
  CreateObject(8);
})();
