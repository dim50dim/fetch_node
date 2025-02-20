// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - GET
// URL - /api/13/employee/read
// и получает ответ - массив сотрудников
// Модуль должен возвращать массив email сотрудников

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function () {
       let res = await fetch(URL + '/api/13/employee/read',{
                                             'method' : 'GET',
                                             'headers' : {
                                                'apikey' : APIKEY,
                                             }
       });
       let data = await res.json();
      let emails = [];
     return emails =  data.result.map(item => item.email); 
}
