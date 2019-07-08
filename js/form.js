"use strict";

(function() {
  var numberRoom = document.querySelector("#room_number");
  var numberPeople = document.querySelector("#capacity");
  var formUpload = document.querySelector(".notice__form");

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

  function errorHandler(error) {
    console.log(error);
  }

  formUpload.addEventListener("submit", function(evt) {
    window.saveForm(new FormData(formUpload), resetForm, errorHandler);
    evt.preventDefault();
  });
})();
