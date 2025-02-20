// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/13/employee/read?id=n
// и получает ответ - описание сотрудника с номером n. Номер n передается как аргумент модуля
// Модуль должен возвращать designation выбранного сотрудника

// Все модули спринта реализуют запросы с помощью await fetch


const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function (n) {
    let res = await fetch(URL + '/api/13/employee/read?id=' + n, {
                                                           'method' : 'GET',
                                                           'headers': {
                                                            'apikey': APIKEY,
                                                           }
    });
    let data = await res.json();
    return data.result.designation;
}
