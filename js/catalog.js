// ======================================================
// КЛАСС КАРТОЧКИ АВТОМОБИЛЯ
// ======================================================

class CarCard {
    constructor(car) {
        // Сохраняем объект автомобиля
        this.car = car;
    }
    // Метод создает HTML карточки
    createCard() {
        // Получаем избранные автомобили
        const favorites =
            getFavorites();

        // Проверяем: находится ли машина в избранном
        const isFavorite =
            favorites.some(function(favoriteCar) {
                return favoriteCar.id === this.car.id;
            }.bind(this));
        // Возвращаем HTML карточки
        return `
            <article class="carCard">
                <img
                    src="${this.car.image}"
                    alt="${this.car.brand} ${this.car.model}"
                >
                <div class="carContent">
                    <h3>
                        ${this.car.brand}
                        ${this.car.model}
                    </h3>
                    <p class="carDescription">
                        ${this.car.description}
                    </p>
                    <p class="carPrice">
                        ${this.car.price.toLocaleString()} ₽
                    </p>
                    <button
                        class="
                            cardButton
                            favoriteButton
                            ${isFavorite ? "addedButton" : ""}
                        "
                        data-id="${this.car.id}"
                    >
                        ${
                            isFavorite
                            ? "Добавлено"
                            : "В избранное"
                        }
                    </button>
                </div>
            </article>
        `;
    }
}

// ======================================================
// GRID КАТАЛОГА
// ======================================================

const carGrid =
    document.getElementById("carGrid");

// ======================================================
// ОТРИСОВКА АВТОМОБИЛЕЙ
// ======================================================

function renderCars(carList) {
    if (!carGrid) {
        return;
    }

    // Очищаем контейнер
    carGrid.innerHTML = "";

    // Перебираем массив автомобилей
    carList.forEach(function(car) {
        // Создаем объект класса
        const card =
            new CarCard(car);
        // Добавляем HTML карточки
        carGrid.innerHTML +=
            card.createCard();
    });
}

// ======================================================
// ПЕРВИЧНАЯ ЗАГРУЗКА КАТАЛОГА
// ======================================================

if (carGrid) {
    renderCars(cars);
}