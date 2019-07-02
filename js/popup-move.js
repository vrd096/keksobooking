"use strict";

(function() {
  window.pinMain.addEventListener("mousedown", function(evt) {
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

      window.pinMain.style.top = window.pinMain.offsetTop - shift.y + "px";
      window.pinMain.style.left = window.pinMain.offsetLeft - shift.x + "px";
    };

    var onMouseUp = function(upEvt) {
      upEvt.preventDefault();

      window.map.removeEventListener("mousemove", onMouseMove);
      window.map.removeEventListener("mouseup", onMouseUp);
    };

    window.map.addEventListener("mousemove", onMouseMove);
    window.map.addEventListener("mouseup", onMouseUp);
  });
})();
