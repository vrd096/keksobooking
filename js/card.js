"use strict";

(function() {
  var typeNames = {
    flat: "Квартира",
    bungalo: "Бунгало",
    house: "Дом",
    palace: "Дворец"
  };

  window.createPopupElement = function createPopupElement(offer) {
    var popupElement = document
      .querySelector("template")
      .cloneNode(true)
      .content.querySelector(".map__card");

    popupElement.classList.add("hidden");

    popupElement.querySelector(".popup__description").textContent =
      offer.description;
    popupElement.querySelector(".popup__avatar").src = offer.author.avatar;
    popupElement.querySelector(".popup__title").textContent = offer.title;
    popupElement.querySelector(".popup__text--address").textContent =
      offer.adress;
    popupElement.querySelector(".popup__text--price").textContent =
      offer.price + "₽/ночь";

    var typeName = typeNames[offer.type];
    popupElement.querySelector(".popup__type").textContent = typeName;

    var roomOrRooms = offer.rooms === 1 ? "комната" : "комнаты";
    popupElement.querySelector(".popup__text--capacity").textContent =
      offer.rooms + " " + roomOrRooms + " для " + offer.quests + " гостей";

    popupElement.querySelector(".popup__text--time").textContent =
      "Время заезда " +
      offer.checkin +
      " , " +
      "время выезда " +
      offer.checkout;

    var featuresEl = popupElement.querySelector(".popup__features");
    featuresEl.innerHTML = "";

    offer.features.forEach(function(feature) {
      var className = "feature feature--" + feature;
      var featureEl = window.makeElement("li", className);
      featuresEl.appendChild(featureEl);
    });

    // Photos
    var picturesEl = popupElement.querySelector(".popup__pictures");
    picturesEl.innerHTML = "";

    offer.photos.forEach(function(photo) {
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
