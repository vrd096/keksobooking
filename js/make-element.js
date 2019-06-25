"use strict";

(function(){
 window.makeElement = function(tagName, className, text) {
  var element = document.createElement(tagName);
  element.className = className;
  if (text) {
    element.textContent = text;
  }
  return element;
};   
}());

