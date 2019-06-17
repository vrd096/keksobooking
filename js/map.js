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
var makeElement = function(tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

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
  // randArr.sort(function() {
  //   return Math.random() - 0.5;
  // });
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

var renderIcon = function() {
  var offerElement = document.querySelector("template").cloneNode(true).content;
  var pinElement = offerElement.querySelector(".map__pin");
  pinElement.classList.add("hidden");
  pinElement.style.left = offer[i].location.x + "px";
  pinElement.style.top = offer[i].location.y + "px";
  pinElement.querySelector("img").src = offer[i].author;
  pinElement.querySelector("img").alt = offer[i].title;
  return pinElement;
};

var renderPopup = function() {
  var offerElement = document.querySelector("template").cloneNode(true).content;
  var popupElement = offerElement.querySelector(".map__card");
  popupElement.classList.add("hidden");
  popupElement.querySelector(".popup__avatar").src = offer[i].author;
  popupElement.querySelector(".popup__title").textContent = offer[i].title;
  popupElement.querySelector(".popup__text--address").textContent =
    offer[i].adress;
  popupElement.querySelector(".popup__text--price").textContent =
    offer[i].price + "₽/ночь";
  if (offer[i].type === "flat") {
    popupElement.querySelector(".popup__type").textContent = "Квартира";
  }
  if (offer[i].type === "bungalo") {
    popupElement.querySelector(".popup__type").textContent = "Бунгало";
  }
  if (offer[i].type === "house") {
    popupElement.querySelector(".popup__type").textContent = "Дом";
  }
  if (offer[i].type === "palace") {
    popupElement.querySelector(".popup__type").textContent = "Дворец";
  }

  if (offer[i].rooms === 1) {
    popupElement.querySelector(".popup__text--capacity").textContent =
      offer[i].rooms + " комната для " + offer[i].quests + " гостей";
  } else if (offer[i].rooms > 1) {
    popupElement.querySelector(".popup__text--capacity").textContent =
      offer[i].rooms + " комнаты для " + offer[i].quests + " гостей";
  }
  popupElement.querySelector(".popup__text--time").textContent =
    "Время заезда " +
    offer[i].checkin +
    " , " +
    "время выезда " +
    offer[i].checkout;
  while (popupElement.querySelector(".feature")) {
    popupElement
      .querySelector(".popup__features")
      .removeChild(
        popupElement.querySelector(".popup__features").querySelector(".feature")
      );
  }

  if (offer[i].features.length === 1) {
    var wifi = makeElement("li", "feature");
    wifi.classList.add("feature--wifi");
    popupElement.querySelector(".popup__features").appendChild(wifi);
  }
  if (offer[i].features.length === 2) {
    var wifi = makeElement("li", "feature");
    wifi.classList.add("feature--wifi");
    popupElement.querySelector(".popup__features").appendChild(wifi);
    var dishwasher = makeElement("li", "feature");
    dishwasher.classList.add("feature--dishwasher");
    popupElement.querySelector(".popup__features").appendChild(dishwasher);
  }
  if (offer[i].features.length === 3) {
    var wifi = makeElement("li", "feature");
    wifi.classList.add("feature--wifi");
    popupElement.querySelector(".popup__features").appendChild(wifi);
    var dishwasher = makeElement("li", "feature");
    dishwasher.classList.add("feature--dishwasher");
    popupElement.querySelector(".popup__features").appendChild(dishwasher);
    var parking = makeElement("li", "feature");
    parking.classList.add("feature--parking");
    popupElement.querySelector(".popup__features").appendChild(parking);
  }
  if (offer[i].features.length === 4) {
    var wifi = makeElement("li", "feature");
    wifi.classList.add("feature--wifi");
    popupElement.querySelector(".popup__features").appendChild(wifi);
    var dishwasher = makeElement("li", "feature");
    dishwasher.classList.add("feature--dishwasher");
    popupElement.querySelector(".popup__features").appendChild(dishwasher);
    var parking = makeElement("li", "feature");
    parking.classList.add("feature--parking");
    popupElement.querySelector(".popup__features").appendChild(parking);
    var washer = makeElement("li", "feature");
    washer.classList.add("feature--washer");
    popupElement.querySelector(".popup__features").appendChild(washer);
  }
  if (offer[i].features.length === 5) {
    var wifi = makeElement("li", "feature");
    wifi.classList.add("feature--wifi");
    popupElement.querySelector(".popup__features").appendChild(wifi);
    var dishwasher = makeElement("li", "feature");
    dishwasher.classList.add("feature--dishwasher");
    popupElement.querySelector(".popup__features").appendChild(dishwasher);
    var parking = makeElement("li", "feature");
    parking.classList.add("feature--parking");
    popupElement.querySelector(".popup__features").appendChild(parking);
    var washer = makeElement("li", "feature");
    washer.classList.add("feature--washer");
    popupElement.querySelector(".popup__features").appendChild(washer);
    var elevator = makeElement("li", "feature");
    elevator.classList.add("feature--elevator");
    popupElement.querySelector(".popup__features").appendChild(elevator);
  }
  if (offer[i].features.length === 6) {
    var wifi = makeElement("li", "feature");
    wifi.classList.add("feature--wifi");
    popupElement.querySelector(".popup__features").appendChild(wifi);
    var dishwasher = makeElement("li", "feature");
    dishwasher.classList.add("feature--dishwasher");
    popupElement.querySelector(".popup__features").appendChild(dishwasher);
    var parking = makeElement("li", "feature");
    parking.classList.add("feature--parking");
    popupElement.querySelector(".popup__features").appendChild(parking);
    var washer = makeElement("li", "feature");
    washer.classList.add("feature--washer");
    popupElement.querySelector(".popup__features").appendChild(washer);
    var elevator = makeElement("li", "feature");
    elevator.classList.add("feature--elevator");
    popupElement.querySelector(".popup__features").appendChild(elevator);
    var conditioner = makeElement("li", "feature");
    conditioner.classList.add("feature--conditioner");
    popupElement.querySelector(".popup__features").appendChild(conditioner);
  }
  popupElement.querySelector(".popup__description").textContent =
    offer[i].description;
  // popupElement.querySelector(".popup__photos").src = offer[i].photos;
  while (popupElement.querySelector(".popup__pictures").querySelector("li")) {
    popupElement
      .querySelector(".popup__pictures")
      .removeChild(
        popupElement.querySelector(".popup__pictures").querySelector("li")
      );
  }
  var popupPhotosItemOne = makeElement("li", "popup__pictures-item");
  var popupPhotosOne = makeElement("img", "popup__photos-one");
  popupElement
    .querySelector(".popup__pictures")
    .appendChild(popupPhotosItemOne);
  popupElement
    .querySelector(".popup__pictures")
    .querySelector("li")
    .appendChild(popupPhotosOne);
  var popupPhotoOne = popupElement
    .querySelector(".popup__pictures")
    .querySelector(".popup__photos-one");
  popupPhotoOne.src = offer[i].photos[0];
  popupPhotoOne.setAttribute("width", "60");
  popupPhotoOne.setAttribute("height", "60");
  popupPhotoOne.style.margin = "5px";

  var popupPhotosItemTwo = makeElement("li", "popup__pictures-item");
  var popupPhotosTwo = makeElement("img", "popup__photos-two");
  popupElement
    .querySelector(".popup__pictures")
    .appendChild(popupPhotosItemTwo);
  popupElement
    .querySelector(".popup__pictures")
    .querySelector("li")
    .appendChild(popupPhotosTwo);
  var popupPhotoTwo = popupElement
    .querySelector(".popup__pictures")
    .querySelector(".popup__photos-two");
  popupPhotoTwo.src = offer[i].photos[1];
  popupPhotoTwo.setAttribute("width", "60");
  popupPhotoTwo.setAttribute("height", "60");
  popupPhotoTwo.style.margin = "5px";

  var popupPhotosItemThree = makeElement("li", "popup__pictures-item");
  var popupPhotosThree = makeElement("img", "popup__photos-three");
  popupElement
    .querySelector(".popup__pictures")
    .appendChild(popupPhotosItemThree);
  popupElement
    .querySelector(".popup__pictures")
    .querySelector("li")
    .appendChild(popupPhotosThree);
  var popupPhotoThree = popupElement
    .querySelector(".popup__pictures")
    .querySelector(".popup__photos-three");
  popupPhotoThree.src = offer[i].photos[2];
  popupPhotoThree.setAttribute("width", "60");
  popupPhotoThree.setAttribute("height", "60");
  popupPhotoThree.style.margin = "5px";

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
var mapForm = document.querySelectorAll(".map__filter");
var pinElement = document.querySelectorAll(".map__pin");
var pinMain = document.querySelector(".map__pin--main");
var popupElement = document.querySelectorAll(".map__card");
var popupClose = document.querySelector(".popup__close");


pinMain.addEventListener("mouseup", function() {
  for (var i = 0; i < pinElement.length; i++) {
    pinElement[i].classList.remove("hidden");
  }
  for (var i = 0; i < mapForm.length; i++) {
    mapForm[i].removeAttribute("disabled");
  }
  map.classList.remove("map--faded");
});
console.log(popupElement[0]);
for (var i = 0; i < pinElement.length; i++) {
  pinElement[i].addEventListener("click", function() {
    // popupElement[2].classList.remove("hidden");
    if (pinElement[1].querySelector("img").src === popupElement[0].querySelector("img").src) {
      popupElement[0].classList.remove("hidden");
    }
  });
};
popupClose.addEventListener("click", function (){
  for (var i = 0; i < popupElement.length; i++) {
    popupElement[i].classList.add("hidden");
  }
});
// console.log(map);
