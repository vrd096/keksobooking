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
при выборе значения в фильтре, нужно использовать метом filter чтобы создавать новый массив с помощью метода map и содзавать новый массив,
 с нужными значениями, потом уже его сортировать по рангу

*/
"use strict";

(function() {
  var pinFilters = document.querySelector(".map__filters");
  var selectFilter = pinFilters.querySelectorAll(".map__filter");
  var currentValue;
  var selectValue;
  var selectTypeValue;
  var selectPriceValue;

  // function filterChangeValue(value) {
  //   // selectValue = value;
  //   // console.log(selectValue);
  //   console.log(currentValue);
  // }

  // function filterfilter() {
  //   selectTypeValue = window.loadPins.filter(function(item) {
  //     return item.offer.type === selectValue;
  //   });
  //   // console.log(selectTypeValue);
  // }

  function filterOnChange() {
    var filterTypeHouses = selectFilter[0].value;
    var filterPrice = selectFilter[1].value;
    var filterRooms = selectFilter[2].value;
    var filterQuests = selectFilter[3].value;
    var offerPrice;

    selectTypeValue = window.loadPins.filter(function(item) {
      if (filterTypeHouses !== "any") {
        return item.offer.type === filterTypeHouses;
      }

      if (filterPrice !== "any") {
        if (item.offer.price < 10000) {
          offerPrice = "low";
        }
        if (item.offer.price >= 10000 && item.offer.price < 50000) {
          offerPrice = "middle";
        }
        if (item.offer.price >= 50000) {
          offerPrice = "high";
        }
        return offerPrice === filterPrice;
      }

      if (filterRooms !== "any") {
        return item.offer.rooms == filterRooms;
      }

      if (filterQuests !== "any") {
        return item.offer.guests == filterQuests;
      }
    });
    console.log(selectTypeValue);
  }

  var getRank = function(pin) {
    var rank = 0;

    if (pin.offer.type === selectValue) {
      rank += 3;
    }

    if (pin.offer.price === selectValue) {
      rank += 2;
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
      selectTypeValue.sort(wizardsComparator),
      window.createPinElement,
      ".map__pins"
    );
    window.renderItems(
      selectTypeValue.sort(wizardsComparator),
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
    var cards = document.querySelectorAll(".map__card");

    pins.forEach(function(item) {
      item.remove();
    });
    cards.forEach(function(item) {
      item.remove();
    });
  }

  selectFilter.forEach(function(item) {
    item.addEventListener("change", function(evt) {
      currentValue = evt.target.value;
      // console.log(currentValue);
      // filterChangeValue(currentValue);
      // filterfilter();
      // filterPrice();
      filterOnChange();
      clearPins();
      window.updateFilter();
    });
  });
})();
