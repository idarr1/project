const storageKey = "autosalonData";

/* ===== Cars ===== */

const cars = [
    {
        id: 1,
        brand: "LADA",
        model: "Vesta",
        price: 1650000,
        image: "images/cars/lada-vesta.jpg",
        description: "Современный российский седан."
    },

    {
        id: 2,
        brand: "BMW",
        model: "X5",
        price: 7500000,
        image: "images/cars/bmw-x5.webp",
        description: "Премиальный немецкий кроссовер."
    },

    {
        id: 3,
        brand: "Mercedes",
        model: "C-Class",
        price: 6200000,
        image: "images/cars/mercedesC.jpg",
        description: "Комфортный бизнес-седан."
    },

    {
        id: 4,
        brand: "Toyota",
        model: "Camry",
        price: 2800000,
        image: "images/cars/camry.webp",
        description: "Надёжный городской автомобиль."
    },

    {
        id: 5,
        brand: "LADA",
        model: "Granta",
        price: 1250000,
        image: "images/cars/lada-granta.jpg",
        description: "Практичный городской автомобиль."
    },

    {
        id: 6,
        brand: "Mercedes",
        model: "E-Class",
        price: 2600000,
        image: "images/cars/mercedesE.webp",
        description: "Элегантный премиальный седан."
    },

    {
        id: 7,
        brand: "BMW",
        model: "5 Series",
        price: 5500000,
        image: "images/cars/bmw5.jpg",
        description: "Спортивный бизнес-седан."
    },

    {
        id: 8,
        brand: "Toyota",
        model: "RAV4",
        price: 4600000,
        image: "images/cars/rav4.webp",
        description: "Семейный современный кроссовер."
    },

    {
        id: 9,
        brand: "Hyundai",
        model: "Sonata",
        price: 2800000,
        image: "images/cars/sonata.jpg",
        description: "Комфортный седан."
    },

    {
        id: 10,
        brand: "Kia",
        model: "Sportage",
        price: 4650000,
        image: "images/cars/kia.webp",
        description: "Стильный городской кроссовер."
    },

    {
        id: 11,
        brand: "Audi",
        model: "A6",
        price: 6400000,
        image: "images/cars/audiA6.webp",
        description: "Бизнес-седан с современными технологиями."
    },

    {
        id: 12,
        brand: "LADA",
        model: "Niva",
        price: 1650000,
        image: "images/cars/lada-niva.webp",
        description: "Легендарный внедорожник."
    }
];

/* ===== Storage ===== */

function getStorageData() {

    const storageData =
        localStorage.getItem(storageKey);

    if (storageData) {

        return JSON.parse(storageData);

    }

    return {

        favorites: [],
        application: null

    };

}

function saveStorageData(data) {

    localStorage.setItem(
        storageKey,
        JSON.stringify(data)
    );

}

/* ===== Favorites ===== */

function getFavorites() {

    const data =
        getStorageData();

    return data.favorites;

}

function saveFavorites(favorites) {

    const data =
        getStorageData();

    data.favorites = favorites;

    saveStorageData(data);

}

/* ===== Application ===== */

function getApplication() {

    const data =
        getStorageData();

    return data.application;

}

function saveApplication(application) {

    const data =
        getStorageData();

    data.application = application;

    saveStorageData(data);

}

function removeApplication() {

    const data =
        getStorageData();

    data.application = null;

    saveStorageData(data);

}