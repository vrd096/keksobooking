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

  function handleEsq({ keyCode }) {
    if (keyCode === ESC_KEYCODE) {
      closeError();
    }
  }

  function closeError() {
    popupError.classList.add("hidden");

    popupError
      .querySelector(".popup-error__close")
      .removeEventListener("click", closeError);
    document.removeEventListener("keyup", handleEsq);
  }

  function openError() {
    popupError.classList.remove("hidden");

    popupError
      .querySelector(".popup-error__close")
      .addEventListener("click", closeError);
    document.addEventListener("keyup", handleEsq);
  }

  var translations = {
    capacity: "Количество мест",
    title: "Заголовок",
    "is not correct": "Неверное значение",
    "should be in range 30..100": "допустимо от 30 до 100 символов"
  };

  function translate(text) {
    return translations[text] || text;
  }

  function errorHandler(error) {
    popupErrorText.textContent = error.message;

    if (error.status === 400) {
      error.response.forEach(function(field) {
        var fieldEl = document.getElementById(field.fieldName);
        fieldEl.style = "border: 1px solid red";
      });

      var messages = error.response
        .map(
          ({ fieldName, errorMessage }) =>
            `${translate(fieldName)}: ${translate(errorMessage)}`
        )
        .join("\n");

      alert(messages);
    }

    throw error;

    openError();
  }

  formUpload.addEventListener("submit", function onFormSubmit(evt) {
    window.saveForm(new FormData(formUpload), resetForm, errorHandler);
    evt.preventDefault();
  });
})();
