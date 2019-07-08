"use strict";

(function() {
  var numberRoom = document.querySelector("#room_number");
  var numberPeople = document.querySelector("#capacity");
  var formUpload = document.querySelector(".notice__form");
  var popupError = document.querySelector(".popup-error");
  var popupErrorText = document.querySelector(".popup-error__text");

  numberPeople.addEventListener("change", function() {
    for (var i = 0; i < numberRoom.value; i++) {
      if (numberRoom.value[i] * 2 < numberPeople.value[i]) {
        numberPeople.setCustomValidity("Не более двух людей на одну комнату");
      } else if (numberRoom.value[i] * 2 >= numberPeople.value[i]) {
        numberPeople.setCustomValidity("");
      }
    }
  });

  function resetForm() {
    formUpload.reset();
  }

  function popupErrorOpen() {
    popupError.classList.remove("hidden");
  }

  function errorHandler(error) {
    popupErrorText.textContent = error;
    popupErrorOpen();
  }

  formUpload.addEventListener("submit", function(evt) {
    window.saveForm(new FormData(formUpload), resetForm, errorHandler);
    evt.preventDefault();
  });
})();
