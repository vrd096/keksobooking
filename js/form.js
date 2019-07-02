"use strict";

(function() {
  var numberRoom = document.querySelector("#room_number");
  var numberPeople = document.querySelector("#capacity");

  numberPeople.addEventListener("change", function() {
    for (var i = 0; i < numberRoom.value; i++) {
      if (numberRoom.value[i] * 2 < numberPeople.value[i]) {
        numberPeople.setCustomValidity("Не более двух людей на одну комнату");
      } else if (numberRoom.value[i] * 2 >= numberPeople.value[i]) {
        numberPeople.setCustomValidity("");
      }
    }
  });
})();
