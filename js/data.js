"use strict";

(function() {
  window.offer = [];
  window.declarationTitle = [
    "Большая уютная квартира",
    "Маленькая неуютная квартира",
    "Огромный прекрасный дворец",
    "Маленький ужасный дворец",
    "Красивый гостевой домик",
    "Некрасивый негостеприимный домик",
    "Уютное бунгало далеко от моря",
    "Неуютное бунгало по колено в воде"
  ].sort(function() {
    return Math.random() - 0.5;
  });
  window.declarationType = ["palace", "flat", "house", "bungalo"];
  window.declarationCheck = ["12:00", "13:00", "14:00"];
  var declarationFeatures = [
    "wifi",
    "dishwasher",
    "parking",
    "washer",
    "elevator",
    "conditioner"
  ];
  window.declarationFeaturesLength = declarationFeatures.length;
  var arrayPhotos = [
    "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
  ];
  window.blendPhotos = arrayPhotos.sort(function() {
    return Math.random() - 0.5;
  });
  window.mapInner = document.querySelector(".map__pins");
})();
