// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/13/random/random-string
// и получает ответ - строку случайных символов длиной 32
// Модуль должен возвращать строку

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function (r) {
     let res = await fetch ( URL + '/api/13/random/random-string',{
        'method': 'GET',
         'headers' : {
            'apikey': APIKEY,
         }
     });
     let data = await res.json();
     return data['random-string']
}
