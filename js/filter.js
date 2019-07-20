/*
событие с изменением input в  .map__filters
при выборе типа в инпуте, должна происходить сортировка входящих данных с сервера по рейтингу :
типа жалья 3 очка
цена 2 очка
количество комнат 1
число гостей 1
показывать пины, которые подходят под критерии фильтров
метки которые были отрисованы до фильтров нужно убрать
все фильтры применяются вместе
на карте должно быть не более 5 пинов
при переключении фильтра был дебаунс 500мс

*/
"use strict";

(function() {
  var pinFilters = document.querySelector(".map__filters");
  var selectFilter = pinFilters.querySelectorAll(".map__filter");
  var selectValue;

  function filterChange(value) {
    selectValue = value;
    console.log(selectValue);
  }

  var getRank = function(pin) {
    var rank = 0;

    if (pin.offer.type === selectValue) {
      rank += 2;
    }

    if (pin.price === selectValue) {
      rank += 1;
    }

    return rank;
  };

  function namesComparator(leftType, rightType) {
    if (leftType > rightType) {
      return 1;
    } else if (leftType < rightType) {
      return -1;
    } else {
      return 0;
    }
  }

  function wizardsComparator(left, right) {
    var rankDiff = getRank(right) - getRank(left);
    return rankDiff === 0
      ? namesComparator(left.offer.type, right.offer.type)
      : rankDiff;
  }

  window.updateFilter = function updateFilter() {
    window.renderItems(
      window.loadPins.sort(wizardsComparator),
      window.createPinElement,
      ".map__pins"
    );
    window.renderItems(
      window.loadPins.sort(wizardsComparator),
      window.createPopupElement,
      ".map"
    );

    var pin = document.querySelectorAll(".map__pin");

    pin.forEach(function(item) {
      item.classList.remove("hidden");
    });
  };

  function clearPins() {
    var pins = document.querySelectorAll(".map__pin--filter");

    pins.forEach(function(item) {
      item.remove();
    });
  }

  selectFilter.forEach(function(item) {
    item.addEventListener("change", function(evt) {
      var currentValue = evt.target.value;
      filterChange(currentValue);
      clearPins();
      window.updateFilter();
    });
  });
})();
