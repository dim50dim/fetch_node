// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/13/random/random-string?length=16
// где 16 число получаемо как аргумент модуля
// и получает ответ - строку случайных символов длиной 16
// Модуль должен возвращать строку

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function (n) {
      let res = await fetch(URL + '/api/13/random/random-string?length=' + n,{
         'method' : 'GET',
         'headers' : {
            'apikey' : APIKEY,
         }
      });
      let data = await res.json();
      return data['random-string']
}
