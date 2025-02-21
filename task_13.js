// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/13/gow/rune

// и получает ответ - объект с описанием рун мира GoW
// Модуль должен возвращать массив (обычный) со ссылками на изображения

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function () {
 let res = await fetch ( URL + '/api/13/gow/rune',{
    'method': 'POST',
    'headers' : {
        'apikey': APIKEY,
    }
 });
   let data = await res.json();
   return data.rune;
}
