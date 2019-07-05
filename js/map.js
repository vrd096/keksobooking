"use strict";
(function() {
  function renderItems(items, createElement, targetSelector) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < items.length; i++) {
      fragment.appendChild(createElement(items[i]));
    }

    document.querySelector(targetSelector).appendChild(fragment);
  }

  function handleLoadSuccess(pins) {
    renderItems(pins, window.createPinElement, ".map__pins");
    renderItems(
      pins.map(({ author, offer }) => Object.assign({ author }, offer)),
      window.createPopupElement,
      ".map"
    );
    console.log(
      pins.map(({ author, offer }) => Object.assign({ author }, offer))
    );
  }

  function handleLoadError(error) {
    console.log(error);
  }

  window.loadData(handleLoadSuccess, handleLoadError);

  // var map = document.querySelector(".map");
  // var pinMain = document.querySelector(".map__pin--main");
  // var noticeForm = document.querySelector(".notice__form");
  // var noticeAddress = noticeForm.querySelector("#address");
  // var mapForm = document.querySelectorAll(".map__filter");
  // var pinElement = document.querySelectorAll(".map__pin");

  // var axesPin = function() {
  //   var pinX = Math.round(pinMain.offsetLeft);
  //   var pinY = Math.round(pinMain.offsetTop + 50);
  //   return (noticeAddress.value = pinX + "," + pinY);
  // };
  // axesPin();

  // pinMain.addEventListener("mouseup", function() {
  //   for (var i = 0; i < pinElement.length; i++) {
  //     pinElement[i].classList.remove("hidden");
  //   }
  //   for (var i = 0; i < mapForm.length; i++) {
  //     mapForm[i].removeAttribute("disabled");
  //   }
  //   map.classList.remove("map--faded");
  //   noticeForm.classList.remove("notice__form--disabled");
  //   axesPin();
  // });
})();
