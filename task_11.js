// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/13/gow/world
// и получает ответ - объект с описанием миров игры GoW
// Модуль должен возвращать массив c именами правителей миров (governor)

// Все модули спринта реализуют запросы с помощью await fetch


const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function () {
let res = await fetch(URL  + '/api/13/gow/world',{
    'method' : 'GET',
     'headers' : {
        'apikey' : APIKEY,
     }
});
    let data = await res.json();
    return data.worlds.map(item => item.population);
}
