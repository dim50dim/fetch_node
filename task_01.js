// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/13/get-time 
// и получает ответ - время сервера
// Модуль должен возвращать время в формате часы:минуты (тип данных строка)

// Все модули спринта реализуют запросы с помощью await fetch


const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function () {
    let res = await fetch(URL + '/api/13/get-time',{
                                          'method' : 'POST',
                                          'headers' : {
                                            'apikey' : APIKEY
                                          }
    });
            let data = await res.json();
            return data.time.h + ':' + data.time.m;
 }
