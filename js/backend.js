"use strict";
/*
создать глобальные функции
получать данные с помощью XMLHttpRequest
обрабатывать данные и передавать через коллбек
отправлять данные на сервер

Функция получения данных:
onLoad - callback при успешном выполнение запроса, в параметр набор полученных данных
onError - callback при неуспешном выполнении запроса, в параметр попадает сообщение о ошибке
отрисовку объектов брать с сервера , а не из рандомной отрисовки

Функция отправки данных:
data - объект FormData
onLoad - callback при успешном выполнении запроса
onError - callback при неуспешном выполнении запроса, при вызове сообщение о ошибке или объект с описанием ошибки полученный с сервера


*/

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
})();

// var successLoad = function(pins) {
 
//     console.log(pins);
  
// };
// var errorLoad = function(error) {
  
//     console.log(error);
 
// };


