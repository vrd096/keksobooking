"use strict";

(function() {
  window.loadData = function(onLoad, onError) {
    var URL = "https://js.dump.academy/keksobooking/data";
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function() {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError("Статус ошибки: " + xhr.status);
      }
    });

    xhr.addEventListener("error", function() {
      onError("Произошла ошибка соеденения");
    });

    xhr.addEventListener("timeout", function() {
      onError("Запрос не успел выполниться за " + xhr.timeout + "мс");
    });

    xhr.timeout = 10000;

    xhr.open("GET", URL);

    xhr.send();
  };

  window.saveForm = function(data, onLoad, onError) {
    var URL = "https://js.dump.academy/keksobooking";
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        onLoad(xhr.response);
      } else {
        var error = new Error("Ошибка " + xhr.status);
        error.response = xhr.response;
        error.status = xhr.status;
        onError(error);
      }
    });

    xhr.addEventListener("error", function() {
      onError(new Error("Произошла ошибка соеденения"));
    });

    xhr.addEventListener("timeout", function() {
      onError(new Error("Долго ожидание от сервера"));
    });

    xhr.timeout = 10000;

    xhr.open("POST", URL);
    xhr.send(data);
  };
})();
