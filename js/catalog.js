class CarCard {

    constructor(car) {

        this.car = car;

    }

    createCard() {

        return `
            <article class="carCard">

                <img
                    src="${this.car.image}"
                    alt="${this.car.brand}"
                >

                <div class="carContent">

                    <h3>
                        ${this.car.brand}
                        ${this.car.model}
                    </h3>

                    <p class="carPrice">
                        ${this.car.price.toLocaleString()} ₽
                    </p>

                </div>

            </article>
        `;

    }

}


const carGrid =
    document.getElementById("carGrid");

function createCarCard(car) {

    const favorites =
        getFavorites();

    const isFavorite =
        favorites.some(function(favoriteCar) {

            return favoriteCar.id === car.id;

        });

    return `
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
                class="cardButton favoriteButton
                ${isFavorite ? "addedButton" : ""}"
                data-id="${car.id}"
            >
                ${isFavorite ? "Добавлено" : "В избранное"}
            </button>

        </div>
    `;

}

/* ===== Catalog ===== */

function renderCars(carList) {

    if (!carGrid) {

        return;

    }

    carGrid.innerHTML = "";

    carList.forEach(function(car) {

        const carCard =
            document.createElement("article");

        carCard.classList.add("carCard");

        carCard.innerHTML =
            createCarCard(car);

        carGrid.appendChild(carCard);

    });

}

if (carGrid) {

    renderCars(cars);

}