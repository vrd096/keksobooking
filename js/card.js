"use strict";

(function() {
  var typeNames = {
    flat: "Квартира",
    bungalo: "Бунгало",
    house: "Дом",
    palace: "Дворец"
  };

  window.createPopupElement = function createPopupElement(pin) {
    var popupElement = document
      .querySelector("template")
      .cloneNode(true)
      .content.querySelector(".map__card");

    popupElement.classList.add("hidden");

    popupElement.querySelector(".popup__description").textContent =
      pin.offer.description;
    popupElement.querySelector(".popup__avatar").src = pin.author.avatar;
    popupElement.querySelector(".popup__title").textContent = pin.offer.title;
    popupElement.querySelector(".popup__text--address").textContent =
      pin.offer.adress;
    popupElement.querySelector(".popup__text--price").textContent =
      pin.offer.price + "₽/ночь";

    var typeName = typeNames[pin.offer.type];
    popupElement.querySelector(".popup__type").textContent = typeName;

    var roomOrRooms = pin.offer.rooms === 1 ? "комната" : "комнаты";
    popupElement.querySelector(".popup__text--capacity").textContent =
      pin.offer.rooms +
      " " +
      roomOrRooms +
      " для " +
      pin.offer.guests +
      " гостей";

    popupElement.querySelector(".popup__text--time").textContent =
      "Время заезда " +
      pin.offer.checkin +
      " , " +
      "время выезда " +
      pin.offer.checkout;

    var featuresEl = popupElement.querySelector(".popup__features");
    featuresEl.innerHTML = "";

    pin.offer.features.forEach(function(feature) {
      var className = "feature feature--" + feature;
      var featureEl = window.makeElement("li", className);
      featuresEl.appendChild(featureEl);
    });

    var picturesEl = popupElement.querySelector(".popup__pictures");
    picturesEl.innerHTML = "";

    pin.offer.photos.forEach(function(photo) {
      var popupPhotoEl = window.makeElement("img", "popup__photos");
      popupPhotoEl.src = photo;
      popupPhotoEl.setAttribute("width", "60");
      popupPhotoEl.setAttribute("height", "60");
      popupPhotoEl.style.margin = "5px";

      var popupPhotoItemEl = window.makeElement("li", "popup__pictures-item");
      popupPhotoItemEl.appendChild(popupPhotoEl);
      picturesEl.appendChild(popupPhotoItemEl);
    });

    return popupElement;
  };
})();
