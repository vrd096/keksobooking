"use strict";

(function() {
  window.pinMain.addEventListener("mousedown", function(evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function(moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

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

      //   if (dragged) {
      //     var onClickPreventDefault = function(evt) {
      //       evt.preventDefault();
      //       dialogHandler.removeEventListener("click", onClickPreventDefault);
      //     };
      //     dialogHandler.addEventListener("click", onClickPreventDefault);
      //   }
    };

    window.map.addEventListener("mousemove", onMouseMove);
    window.map.addEventListener("mouseup", onMouseUp);
  });
})();
