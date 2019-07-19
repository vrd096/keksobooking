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

  selectFilter.forEach(function(item) {
    item.addEventListener("change", function() {

    });
  });
})();
