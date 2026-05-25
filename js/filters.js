// ======================================================
// ЭЛЕМЕНТЫ ФИЛЬТРОВ
// ======================================================

// Поле поиска автомобилей.
const searchInput =
    document.getElementById(
        "searchInput"
    );

// Select выбора марки.
const brandSelect =
    document.getElementById(
        "brandSelect"
    );

// Select сортировки.
const sortSelect =
    document.getElementById(
        "sortSelect"
    );

// ======================================================
// ФИЛЬТРАЦИЯ АВТОМОБИЛЕЙ
// ======================================================

function filterCars() {
    // Получаем текст поиска и переводим в нижний регистр.
    const searchValue =
        searchInput.value.toLowerCase();

    // Получаем выбранную марку.
    const selectedBrand =
        brandSelect.value;

    // Получаем выбранную сортировку.
    const selectedSort =
        sortSelect.value;

    // Создаем новый массив
    // отфильтрованных автомобилей.
    let filteredCars =
        cars.filter(function(car) {
            // Создаем полное название авто.
            const fullName =
                `
                    ${car.brand}
                    ${car.model}
                `.toLowerCase();

            // Проверяем: подходит ли поиск.
            const matchesSearch =
                fullName.includes(
                    searchValue
                );

            // Переменная проверки марки.
            let matchesBrand = false;

            // Если выбраны все марки.
            if (
                selectedBrand ===
                "Все марки"
            ) {
                matchesBrand = true;
            }

            // Если выбрана категория "Другие".
            else if (
                selectedBrand ===
                "Другие"
            ) {
                matchesBrand =
                    car.brand !== "LADA" &&
                    car.brand !== "BMW" &&
                    car.brand !== "Mercedes" &&
                    car.brand !== "Toyota";
            }

            // Если выбрана конкретная марка.
            else {
                matchesBrand =
                    car.brand ===
                    selectedBrand;
            }

            return (
                matchesSearch &&
                matchesBrand
            );
        });

    // ======================================================
    // СОРТИРОВКА
    // ======================================================

    // Сначала дешевые.
    if (selectedSort === "cheap") {
        filteredCars.sort(
            function(a, b) {

                return a.price - b.price;
            }
        );
    }

    // Сначала дорогие.
    else if (
        selectedSort ===
        "expensive"
    ) {
        filteredCars.sort(
            function(a, b) {

                return b.price - a.price;
            }
        );
    }

    // Сортировка по названию.
    else if (
        selectedSort ===
        "name"
    ) {
        filteredCars.sort(
            function(a, b) {
                const firstName =
                    `${a.brand} ${a.model}`;
                const secondName =
                    `${b.brand} ${b.model}`;
                return firstName.localeCompare(
                    secondName
                );
            }
        );
    }

    // Выводим автомобили на страницу.
    renderCars(
        filteredCars
    );
}


// ======================================================
// СОБЫТИЯ ФИЛЬТРОВ
// ======================================================

// Поиск при вводе текста.
searchInput.addEventListener(
    "input",
    filterCars
);

// Фильтрация по марке.
brandSelect.addEventListener(
    "change",
    filterCars
);

// Сортировка автомобилей.
sortSelect.addEventListener(
    "change",
    filterCars
);