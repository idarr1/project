// ======================================================
// LOCAL STORAGE
// ======================================================

const storageKey =
    "autosalonData";

// ======================================================
// МАССИВ АВТОМОБИЛЕЙ
// ======================================================

const cars = [
    {
        id: 1,
        brand: "LADA",
        model: "Vesta",
        price: 1650000,
        image: "images/cars/lada-vesta.jpg",
        description:
            "Современный российский седан."
    },

    {
        id: 2,
        brand: "BMW",
        model: "X5",
        price: 7500000,
        image: "images/cars/bmw-x5.webp",
        description:
            "Премиальный немецкий кроссовер."
    },

    {
        id: 3,
        brand: "Mercedes",
        model: "C-Class",
        price: 6200000,
        image: "images/cars/mercedesC.jpg",
        description:
            "Комфортный бизнес-седан."
    },

    {
        id: 4,
        brand: "Toyota",
        model: "Camry",
        price: 2800000,
        image: "images/cars/camry.webp",
        description:
            "Надёжный городской автомобиль."
    },

    {
        id: 5,
        brand: "LADA",
        model: "Granta",
        price: 1250000,
        image: "images/cars/lada-granta.jpg",
        description:
            "Практичный городской автомобиль."
    },

    {
        id: 6,
        brand: "Mercedes",
        model: "E-Class",
        price: 2600000,
        image: "images/cars/mercedesE.webp",
        description:
            "Элегантный премиальный седан."
    },

    {
        id: 7,
        brand: "BMW",
        model: "5 Series",
        price: 5500000,
        image: "images/cars/bmw5.jpg",
        description:
            "Спортивный бизнес-седан."
    },

    {
        id: 8,
        brand: "Toyota",
        model: "RAV4",
        price: 4600000,
        image: "images/cars/rav4.webp",
        description:
            "Семейный современный кроссовер."
    },

    {
        id: 9,
        brand: "Hyundai",
        model: "Sonata",
        price: 2800000,
        image: "images/cars/sonata.jpg",
        description:
            "Комфортный седан."
    },

    {
        id: 10,
        brand: "Kia",
        model: "Sportage",
        price: 4650000,
        image: "images/cars/kia.webp",
        description:
            "Стильный городской кроссовер."
    },

    {
        id: 11,
        brand: "Audi",
        model: "A6",
        price: 6400000,
        image: "images/cars/audiA6.webp",
        description:
            "Бизнес-седан с современными технологиями."
    },

    {
        id: 12,
        brand: "LADA",
        model: "Niva",
        price: 1650000,
        image: "images/cars/lada-niva.webp",
        description:
            "Легендарный внедорожник."
    }

];

// ======================================================
// ПОЛУЧЕНИЕ ДАННЫХ ИЗ LOCAL STORAGE
// ======================================================

// Функция получает все данные сайта
// из localStorage.
function getStorageData() {
    // Получаем данные по ключу.
    const storageData =
        localStorage.getItem(
            storageKey
        );

    // Если данные существуют.
    if (storageData) {
        // Преобразуем JSON-строку
        // обратно в объект.
        return JSON.parse(
            storageData
        );
    }

    // Если данных нет —
    // создаем объект по умолчанию.
    return {
        favorites: [],
        application: null
    };

}

// ======================================================
// СОХРАНЕНИЕ ДАННЫХ В LOCAL STORAGE
// ======================================================

// Функция сохраняет объект
// в localStorage.
function saveStorageData(data) {
    // JSON.stringify() превращает объект в строку.
    localStorage.setItem(
        storageKey,
        JSON.stringify(data)
    );

}

// ======================================================
// ИЗБРАННЫЕ АВТОМОБИЛИ
// ======================================================

// Получаем избранное.
function getFavorites() {

    // Получаем все данные сайта.
    const data =
        getStorageData();

    // Возвращаем только favorites.
    return data.favorites;

}

// Сохраняем избранное.
function saveFavorites(favorites) {

    // Получаем объект данных.
    const data =
        getStorageData();

    // Перезаписываем favorites.
    data.favorites =
        favorites;

    // Сохраняем обновленный объект.
    saveStorageData(
        data
    );

}

// ======================================================
// ЗАЯВКИ
// ======================================================

// Получаем заявку.
function getApplication() {
    // Получаем объект данных.
    const data =
        getStorageData();

    // Возвращаем заявку.
    return data.application;
}

// Сохраняем заявку.
function saveApplication(application) {

    // Получаем данные сайта.
    const data =
        getStorageData();

    // Обновляем заявку.
    data.application =
        application;

    // Сохраняем изменения.
    saveStorageData(
        data
    );

}

// Удаляем заявку.
function removeApplication() {

    // Получаем данные сайта.
    const data =
        getStorageData();

    // Очищаем заявку.
    data.application = null;

    // Сохраняем изменения.
    saveStorageData(
        data
    );

}