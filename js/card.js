"use strict";

(function() {
  window.renderPopup = function() {
    var map = document.querySelector(".map");
    var fragmentPopup = document.createDocumentFragment();

    for (var i = 0; i < window.offer.length; i++) {
      var popupElement = document
        .querySelector("template")
        .cloneNode(true)
        .content.querySelector(".map__card");

      popupElement.querySelector(".popup__description").textContent =
        window.offer[i].description;
      popupElement.querySelector(".popup__avatar").src = window.offer[i].author;
      popupElement.querySelector(".popup__title").textContent =
        window.offer[i].title;
      popupElement.querySelector(".popup__text--address").textContent =
        window.offer[i].adress;
      popupElement.querySelector(".popup__text--price").textContent =
        window.offer[i].price + "₽/ночь";
      if (window.offer[i].type === "flat") {
        popupElement.querySelector(".popup__type").textContent = "Квартира";
      }
      if (window.offer[i].type === "bungalo") {
        popupElement.querySelector(".popup__type").textContent = "Бунгало";
      }
      if (window.offer[i].type === "house") {
        popupElement.querySelector(".popup__type").textContent = "Дом";
      }
      if (window.offer[i].type === "palace") {
        popupElement.querySelector(".popup__type").textContent = "Дворец";
      }

      if (window.offer[i].rooms === 1) {
        popupElement.querySelector(".popup__text--capacity").textContent =
          window.offer[i].rooms +
          " комната для " +
          window.offer[i].quests +
          " гостей";
      } else if (window.offer[i].rooms > 1) {
        popupElement.querySelector(".popup__text--capacity").textContent =
          window.offer[i].rooms +
          " комнаты для " +
          window.offer[i].quests +
          " гостей";
      }
      popupElement.querySelector(".popup__text--time").textContent =
        "Время заезда " +
        window.offer[i].checkin +
        " , " +
        "время выезда " +
        window.offer[i].checkout;

      popupElement.classList.add("hidden");

      while (popupElement.querySelector(".feature")) {
        popupElement
          .querySelector(".popup__features")
          .removeChild(
            popupElement
              .querySelector(".popup__features")
              .querySelector(".feature")
          );
      }

      var featureLength = window.offer[i].features.length;

      for (var j = 0; j < featureLength; j++) {
        var makeFeature = window.makeElement("li", "feature");
        makeFeature.classList.add(
          "feature" + "--" + window.offer[i].features[j]
        );
        popupElement.querySelector(".popup__features").appendChild(makeFeature);
      }

      while (
        popupElement.querySelector(".popup__pictures").querySelector("li")
      ) {
        popupElement
          .querySelector(".popup__pictures")
          .removeChild(
            popupElement.querySelector(".popup__pictures").querySelector("li")
          );
      }

      var popupPhotosItemOne = window.makeElement("li", "popup__pictures-item");
      var popupPhotosOne = window.makeElement("img", "popup__photos-one");
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
      popupPhotoOne.src = window.offer[i].photos[0];
      popupPhotoOne.setAttribute("width", "60");
      popupPhotoOne.setAttribute("height", "60");
      popupPhotoOne.style.margin = "5px";

      var popupPhotosItemTwo = window.makeElement("li", "popup__pictures-item");
      var popupPhotosTwo = window.makeElement("img", "popup__photos-two");
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
      popupPhotoTwo.src = window.offer[i].photos[1];
      popupPhotoTwo.setAttribute("width", "60");
      popupPhotoTwo.setAttribute("height", "60");
      popupPhotoTwo.style.margin = "5px";

      var popupPhotosItemThree = window.makeElement(
        "li",
        "popup__pictures-item"
      );
      var popupPhotosThree = window.makeElement("img", "popup__photos-three");
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
      popupPhotoThree.src = window.offer[i].photos[2];
      popupPhotoThree.setAttribute("width", "60");
      popupPhotoThree.setAttribute("height", "60");
      popupPhotoThree.style.margin = "5px";

      fragmentPopup.appendChild(popupElement);
      map.appendChild(fragmentPopup);
    }
  };
})();
