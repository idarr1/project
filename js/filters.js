const searchInput =
    document.getElementById("searchInput");

const brandSelect =
    document.getElementById("brandSelect");

const sortSelect =
    document.getElementById("sortSelect");

function filterCars() {

    const searchValue =
        searchInput.value.toLowerCase();

    const selectedBrand =
        brandSelect.value;

    const selectedSort =
        sortSelect.value;

    let filteredCars = cars.filter(function(car) {

        const fullName =
            `${car.brand} ${car.model}`.toLowerCase();

        const matchesSearch =
            fullName.includes(searchValue);

        let matchesBrand = false;

        if (selectedBrand === "Все марки") {

            matchesBrand = true;

        }

        else if (selectedBrand === "Другие") {

            matchesBrand =
                car.brand !== "LADA" &&
                car.brand !== "BMW" &&
                car.brand !== "Mercedes" &&
                car.brand !== "Toyota";

        }

        else {

            matchesBrand =
                car.brand === selectedBrand;

        }

        return matchesSearch && matchesBrand;

    });

    if (selectedSort === "cheap") {

        filteredCars.sort(function(a, b) {

            return a.price - b.price;

        });

    }

    else if (selectedSort === "expensive") {

        filteredCars.sort(function(a, b) {

            return b.price - a.price;

        });

    }

    else if (selectedSort === "name") {

        filteredCars.sort(function(a, b) {

            const firstName =
                `${a.brand} ${a.model}`;

            const secondName =
                `${b.brand} ${b.model}`;

            return firstName.localeCompare(secondName);

        });

    }

    renderCars(filteredCars);

}

searchInput.addEventListener(
    "input",
    filterCars
);

brandSelect.addEventListener(
    "change",
    filterCars
);

sortSelect.addEventListener(
    "change",
    filterCars
);