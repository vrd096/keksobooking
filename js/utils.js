"use strict";

(function() {
  var ESC_KEYCODE = 27;

  function handleCardEsc({ keyCode }) {
    if (keyCode === ESC_KEYCODE) {
      closeAllCards();
    }
  }

  function openCard(pinId) {
    const cardEl = [...document.querySelectorAll(".map__card")].find(
      el => el.dataset.pinId === pinId
    );

    if (cardEl) {
      cardEl.classList.remove("hidden");
      document.addEventListener("keyup", handleCardEsc);
    }
  }

  function closeAllCards() {
    document
      .querySelectorAll(".map__card")
      .forEach(cardEl => cardEl.classList.add("hidden"));
    document.removeEventListener("keyup", handleCardEsc);
  }

  function handleMapClick({ target }) {
    const isOpenCard = target.classList.contains("js-open-card");
    const isCloseCard = target.classList.contains("js-close-card");

    if (isOpenCard) {
      closeAllCards();
      openCard(target.dataset.pinId);
    }

    if (isCloseCard) {
      closeAllCards();
    }
  }

  document.querySelector(".map").addEventListener("click", handleMapClick);
})();
