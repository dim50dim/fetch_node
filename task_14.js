// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/13/gow/random-world

// и получает ответ - объект со случайным миром игры GoW
// Модуль должен возвращать имя мира (world)

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function () {
        let res = await fetch(URL + '/api/13/gow/random-world',{
            'method' : 'POST',
            'headers' : {
                'apikey': APIKEY,
            }
        });
        let data = await res.json();
        return data.world;
}
