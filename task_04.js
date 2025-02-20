// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/13/employee/random-email
// и получает ответ - случайный емейл сотрудника
// Модуль должен возвращать случайный емейл сотрудника

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function () {
    let res = await fetch (URL + '/api/13/employee/random-email',{
                                                  'method' : 'GET',
                                                  'headers': {
                                                    'apikey' : APIKEY,
                                                  }
    });
    let data = await res.json();
    return data.email;
}
