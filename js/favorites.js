// Получаем массив избранных автомобилей из localStorage.
let favorites =
    getFavorites();

// ======================================================
// ДОБАВЛЕНИЕ В ИЗБРАННОЕ
// ======================================================

// Отслеживаем клики по странице.
document.addEventListener(
    "click",
    function(event) {
        // Проверяем: нажата ли кнопка избранного.
        if (
            !event.target.classList.contains(
                "favoriteButton"
            )
        ) {
            return;
        }

        // Получаем id автомобиля.
        const carId =
            Number(
                event.target.dataset.id
            );

        // Ищем автомобиль в массиве cars.
        const selectedCar =
            cars.find(function(car) {

                return car.id === carId;

            });

        // Проверяем: есть ли автомобиль в избранном.
        const alreadyAdded =
            favorites.some(function(car) {

                return car.id === carId;

            });

        // Если автомобиля нет — добавляем.
        if (!alreadyAdded) {

            // Добавляем автомобиль в массив favorites.
            favorites.push(
                selectedCar
            );

            // Сохраняем изменения.
            saveFavorites(
                favorites
            );

            // Меняем текст кнопки.
            event.target.textContent =
                "Добавлено";

            // Добавляем зеленый стиль.
            event.target.classList.add(
                "addedButton"
            );
        }
    }
);

// ======================================================
// GRID ИЗБРАННОГО
// ======================================================

// Контейнер карточек избранного.
const favoritesGrid =
    document.getElementById(
        "favoritesGrid"
    );

function renderFavorites() {
    if (!favoritesGrid) {
        return;
    }

    // Очищаем контейнер.
    favoritesGrid.innerHTML = "";

    // Если избранного нет — выводим сообщение.
    if (favorites.length === 0) {
        favoritesGrid.innerHTML = `
            <div class="emptyFavorites">
                <h2>
                    Пока нет избранных автомобилей
                </h2>
                <p>
                    Добавьте автомобили из каталога
                </p>
            </div>
        `;
        return;
    }

    // Перебираем массив избранного.
    favorites.forEach(function(car) {

        // Создаем элемент article.
        const carCard =
            document.createElement(
                "article"
            );

        // Добавляем CSS-класс.
        carCard.classList.add(
            "carCard"
        );

        // Вставляем HTML карточки.
        carCard.innerHTML = `
            <img
                src="${car.image}"
                alt="${car.brand} ${car.model}"
            >
            <div class="carContent">
                <h3>
                    ${car.brand}
                    ${car.model}
                </h3>
                <p class="carDescription">
                    ${car.description}
                </p>
                <p class="carPrice">
                    ${car.price.toLocaleString()} ₽
                </p>
                <button
                    class="
                        cardButton
                        removeButton
                    "
                    data-id="${car.id}"
                >
                    Удалить
                </button>
            </div>
        `;

        // Добавляем карточку в grid.
        favoritesGrid.appendChild(
            carCard
        );
    });
}

// ======================================================
// УДАЛЕНИЕ ИЗ ИЗБРАННОГО
// ======================================================

document.addEventListener(
    "click",
    function(event) {
        // Проверяем: нажата ли кнопка удаления.
        if (
            !event.target.classList.contains(
                "removeButton"
            )
        ) {
            return;
        }

        // Получаем id автомобиля.
        const carId =
            Number(
                event.target.dataset.id
            );

        // Удаляем автомобиль из массива.
        favorites =
            favorites.filter(function(car) {
                return car.id !== carId;
            });

        // Сохраняем изменения.
        saveFavorites(
            favorites
        );

        // Перерисовываем избранное.
        renderFavorites();
    }
);

renderFavorites();