"use strict";

(function() {
  var map = document.querySelector(".map");
  var pinMain = document.querySelector(".map__pin--main");
  var pinMain = document.querySelector(".map__pin--main");
  var noticeForm = document.querySelector(".notice__form");
  var noticeAddress = noticeForm.querySelector("#address");
  var mapForm = document.querySelectorAll(".map__filter");
  var pinElement = document.querySelectorAll(".map__pin");

  pinMain.addEventListener("mousedown", function(evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function(moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      pinMain.style.top = pinMain.offsetTop - shift.y + "px";
      pinMain.style.left = pinMain.offsetLeft - shift.x + "px";
    };

    var onMouseUp = function(upEvt) {
      upEvt.preventDefault();

      map.removeEventListener("mousemove", onMouseMove);
      map.removeEventListener("mouseup", onMouseUp);
    };

    map.addEventListener("mousemove", onMouseMove);
    map.addEventListener("mouseup", onMouseUp);
  });
  var axesPin = function() {
    var pinX = Math.round(pinMain.offsetLeft);
    var pinY = Math.round(pinMain.offsetTop + 50);
    return (noticeAddress.value = pinX + "," + pinY);
  };
  axesPin();

  pinMain.addEventListener("mouseup", function() {
    for (var i = 0; i < pinElement.length; i++) {
      pinElement[i].classList.remove("hidden");
    }
    for (var i = 0; i < mapForm.length; i++) {
      mapForm[i].removeAttribute("disabled");
    }
    map.classList.remove("map--faded");
    noticeForm.classList.remove("notice__form--disabled");
    axesPin();
  });
})();
