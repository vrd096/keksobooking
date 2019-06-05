var declarations = [];
var declarationTitle = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var declarationType = ['palace', 'flat', 'house', 'bungalo'];
var declarationCheck = ['12:00', '13:00', '14:00'];
var declarationFeatures = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];

var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

var randomString = function (param) {
    var randomParam =  param[Math.floor(Math.random() * param.length)];
    return randomParam;
 };
// взять из массива declarationFeatures и превратить в массив с рандомным количеством слов от 1 до 6
 var randomArray = function (array) {
    var randomArray = [];
    for (var i = 0; i < array.length; i++) {

    }  
 };
 
var CreateObject = function (value) {
    for (var i = 1; i <= value; i++) {
        var declarationAround = {
            "author": 'img/avatars/user' + 0 + i + '.png',
            "offer": declarationTitle[i-1],
            "adress": randomNumber(300, 600).toString() + ',' + randomNumber(300, 600).toString(),
            "price": randomNumber(1000, 1000000),
            "type": randomString(declarationType),
            "rooms": randomNumber(1, 5),
            "quests": randomNumber(1, 5),
            "checkin": randomString(declarationCheck),
            "checkout": randomString(declarationCheck),
            "features": 
        };  
        declarations.push(declarationAround);
    }
    return declarations;
};
console.log(CreateObject(8));