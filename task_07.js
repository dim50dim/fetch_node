// itgid.info - курс Node.js

// Создайте анонимный модуль в данном файле, который отсылает запрос на https://api.itgid.info со следующими параметрами:
// Метод - POST
// URL - /api/13/sr/read/human
// где значение human берется из аргумента переданного в модуль
// и получает ответ - описание расы human игры космические рейнджеры
// Модуль должен возвращать относительную ссылку на изображение расы (image)

// Все модули спринта реализуют запросы с помощью await fetch

const APIKEY = require('./apikey');
const URL = 'https://api.itgid.info';

module.exports = async function (r) {

}
