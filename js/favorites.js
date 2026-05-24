let favorites = getFavorites();

/* ===== Добавление в избранное ===== */

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "favoriteButton"
            )
        ) {

            const carId =
                Number(
                    event.target.dataset.id
                );

            const selectedCar =
                cars.find(function(car) {

                    return car.id === carId;

                });

            const alreadyAdded =
                favorites.some(function(car) {

                    return car.id === carId;

                });

            if (!alreadyAdded) {

    favorites.push(selectedCar);

    saveFavorites(favorites);

    event.target.textContent =
        "Добавлено";

    event.target.classList.add(
        "addedButton"
    );

}

        }

    }
);

/* ===== Страница избранного ===== */

const favoritesGrid =
    document.getElementById(
        "favoritesGrid"
    );

function renderFavorites() {

    if (!favoritesGrid) {

        return;

    }

    favoritesGrid.innerHTML = "";

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

    favorites.forEach(function(car) {

        const carCard =
            document.createElement("article");

        carCard.classList.add("carCard");

        carCard.innerHTML = `
            <img
                src="${car.image}"
                alt="${car.brand} ${car.model}"
            >

            <div class="carContent">

                <h3>
                    ${car.brand} ${car.model}
                </h3>

                <p class="carDescription">
                    ${car.description}
                </p>

                <p class="carPrice">
                    ${car.price.toLocaleString()} ₽
                </p>

                <button
                    class="cardButton removeButton"
                    data-id="${car.id}"
                >
                    Удалить
                </button>

            </div>
        `;

        favoritesGrid.appendChild(carCard);

    });

}

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.classList.contains(
                "removeButton"
            )
        ) {

            const carId =
                Number(
                    event.target.dataset.id
                );

            favorites = favorites.filter(function(car) {

                return car.id !== carId;

            });

            saveFavorites(favorites);

            renderFavorites();

        }

    }
);

renderFavorites();