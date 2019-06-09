var offer = [];
var declarationTitle = [
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
var declarationType = ["palace", "flat", "house", "bungalo"];
var declarationCheck = ["12:00", "13:00", "14:00"];
var declarationFeatures = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner"
];
var declarationFeaturesLength = declarationFeatures.length;
var arrayPhotos = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
];
var blendPhotos = arrayPhotos.sort(function() {
  return Math.random() - 0.5;
});
var map = document.querySelector(".map");
var mapCard = document
  .querySelector("template")
  .content.querySelector(".map__card");
var mapInner = document.querySelector(".map__pins");

var randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var randomNumberSize = function() {
  var mapSize = randomNumber(50, mapInner.offsetWidth - 50);
  return mapSize;
};

var randomNumberArray = function() {
  return randomNumber(1, declarationFeaturesLength + 1);
};

var randomString = function(param) {
  var randomParam = param[Math.floor(Math.random() * param.length)];
  return randomParam;
};
// взять из массива declarationFeatures и превратить в массив с рандомным количеством слов от 1 до 6
var randomArray = function() {
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
  randArr.length = randomNumberArray();
  return randArr;
};

var CreateObject = function(value) {
  for (var i = 1; i <= value; i++) {
    var declarationAround = {
      author: "img/avatars/user" + 0 + i + ".png",
      title: declarationTitle[i - 1],
      adress:
        randomNumber(300, 600).toString() +
        "," +
        randomNumber(300, 600).toString(),
      price: randomNumber(1000, 1000000),
      type: randomString(declarationType),
      rooms: randomNumber(1, 5),
      quests: randomNumber(2, 10),
      checkin: randomString(declarationCheck),
      checkout: randomString(declarationCheck),
      features: randomArray(),
      description: "",
      photos: blendPhotos,
      location: {
        x: randomNumberSize(),
        y: randomNumber(130, 630)
      }
    };
    offer.push(declarationAround);
  }
  return offer;
};
CreateObject(8);
console.log(offer);
var renderIcon = function() {
  var offerElement = document.querySelector("template").cloneNode(true).content;
  var pinElement = offerElement.querySelector(".map__pin");
  pinElement.style.left = offer[i].location.x + "px";
  pinElement.style.top = offer[i].location.y + "px";
  pinElement.querySelector("img").src = offer[i].author;
  pinElement.querySelector("img").alt = offer[i].title;
  return pinElement;
};

var renderPopup = function() {
  var offerElement = document.querySelector("template").cloneNode(true).content;
  var popupElement = offerElement.querySelector(".map__card");
  
  popupElement.querySelector(".popup__avatar").src = offer[i].author;
  popupElement.querySelector(".popup__title").textContent = offer[i].title;
  popupElement.querySelector(".popup__text--address").textContent = offer[i].adress;
  popupElement.querySelector(".popup__text--price").textContent = offer[i].price + "₽/ночь";
  if (offer[i].type === "flat") {
    popupElement.querySelector(".popup__type").textContent = "Квартира"
  }
  if (offer[i].type === "bungalo") {
    popupElement.querySelector(".popup__type").textContent = "Бунгало"
  }
  if (offer[i].type === "house") {
    popupElement.querySelector(".popup__type").textContent = "Дом"
  }
  if (offer[i].type === "palace") {
    popupElement.querySelector(".popup__type").textContent = "Дворец"
  }

  if (offer[i].rooms === 1) {
  popupElement.querySelector(".popup__text--capacity").textContent = offer[i].rooms + " комната для " + offer[i].quests + " гостей";
  }
  else if (offer[i].rooms > 1) {
  popupElement.querySelector(".popup__text--capacity").textContent = offer[i].rooms + " комнаты для " + offer[i].quests + " гостей";
  }
  popupElement.querySelector(".popup__text--time").textContent = "Время заезда " + offer[i].checkin + " , " + "время выезда " +  offer[i].checkout;
  while (popupElement.querySelector(".feature")) {
    popupElement.querySelector(".popup__features").removeChild(popupElement.querySelector(".popup__features").querySelector(".feature"));
  }
  if (offer[i].features === "wifi") {
    popupElement.querySelector(".popup__features").createElement();
  }
 
  
  return popupElement;
};
var fragmentIcon = document.createDocumentFragment();
var fragmentPopup = document.createDocumentFragment();

for (var i = 0; i < offer.length; i++) {
  fragmentIcon.appendChild(renderIcon());
  mapInner.appendChild(fragmentIcon);

  fragmentPopup.appendChild(renderPopup());
  map.appendChild(fragmentPopup);
}

map.classList.remove("map--faded");
