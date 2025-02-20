// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/13/employee/email?email=liliane_hirt@gmail.com
// где liliane_hirt@gmail.com берется из аргумента email модуля
// и получает ответ - описание сотрудника
// Модуль должен возвращать name

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function (email) {
    let res = await fetch(URL + '/api/13/employee/email?email=' + email,{
        'method' : 'GET',
        'headers': {
          'apikey': APIKEY,
        }
});
let data = await res.json();


return data.result.designation;
}
