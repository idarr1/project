// ======================================================
// ВАЛИДАЦИЯ ФОРМЫ
// ======================================================

// Класс для проверки формы.
// Используем ООП-подход.
class FormValidator {
    // static позволяет вызывать метод без создания объекта класса.
    static validate(inputs) {
        for (let input of inputs) {
            // trim() удаляет пробелы.
            // Проверяем: пустое ли поле.
            if (
                input.value.trim() === ""
            ) {
                return false;
            }
        }

        // Если все поля заполнены.
        return true;
    }
}

// ======================================================
// ЭЛЕМЕНТЫ СТРАНИЦЫ
// ======================================================

// Форма заявки.
const contactForm =
    document.getElementById(
        "contactForm"
    );

// Контейнер заявок.
const applicationList =
    document.getElementById(
        "applicationList"
    );

// ======================================================
// ОТРИСОВКА ЗАЯВКИ
// ======================================================

function renderApplication(data) {
    // Очищаем контейнер.
    applicationList.innerHTML = "";

    // Если данных нет —
    // останавливаем функцию.
    if (!data) {
        return;
    }

    // Создаем карточку заявки.
    const applicationCard =
        document.createElement(
            "div"
        );

    // Добавляем CSS-класс.
    applicationCard.classList.add(
        "applicationCard"
    );

    // Вставляем HTML карточки.
    applicationCard.innerHTML = `
        <div class="applicationHeader">
            <h3>
                Новая заявка
            </h3>
            <button
                class="deleteApplicationButton"
            >
                Удалить
            </button>
        </div>
        <p>
            <strong>Имя:</strong>
            ${data.name}
        </p>
        <p>
            <strong>Фамилия:</strong>
            ${data.lastName}
        </p>
        <p>
            <strong>Телефон:</strong>
            ${data.phone}
        </p>
        <p>
            <strong>Email:</strong>
            ${data.email}
        </p>
        <p>
            <strong>Автомобиль:</strong>
            ${data.car}
        </p>
        <p>
            <strong>Комментарий:</strong>
            ${data.comment}
        </p>
    `;

    // Добавляем карточку на страницу.
    applicationList.append(
        applicationCard
    );

    // ======================================================
    // УДАЛЕНИЕ ЗАЯВКИ
    // ======================================================

    // Находим кнопку удаления.
    const deleteButton =
        applicationCard.querySelector(
            ".deleteApplicationButton"
        );

    // Добавляем событие клика.
    deleteButton.addEventListener(
        "click",
        function() {
            // Удаляем заявку
            // из localStorage.
            removeApplication();
            // Удаляем карточку со страницы.
            applicationCard.remove();
        }
    );
}

// ======================================================
// ОТПРАВКА ФОРМЫ
// ======================================================

// Проверяем: существует ли форма.
if (contactForm) {
    // Отслеживаем отправку формы.
    contactForm.addEventListener(
        "submit",
        function(event) {
            // Отключаем перезагрузку страницы.
            event.preventDefault();

            // ======================================================
            // INPUT ЭЛЕМЕНТЫ
            // ======================================================

            const nameInput =
                document.getElementById(
                    "nameInput"
                );

            const lastNameInput =
                document.getElementById(
                    "lastNameInput"
                );

            const phoneInput =
                document.getElementById(
                    "phoneInput"
                );

            const emailInput =
                document.getElementById(
                    "emailInput"
                );

            const carSelect =
                document.getElementById(
                    "carSelect"
                );

            const commentInput =
                document.getElementById(
                    "commentInput"
                );

            // ======================================================
            // ПРОВЕРКА ФОРМЫ
            // ======================================================

            const isValid =
                FormValidator.validate([
                    nameInput,
                    lastNameInput,
                    phoneInput,
                    emailInput
                ]);

            // Если поля пустые.
            if (!isValid) {
                alert(
                    "Заполните все поля"
                );
                return;
            }

            // ======================================================
            // ОБЪЕКТ ЗАЯВКИ
            // ======================================================

            const applicationData = {

                name:
                    nameInput.value,

                lastName:
                    lastNameInput.value,

                phone:
                    phoneInput.value,

                email:
                    emailInput.value,

                car:
                    carSelect.value,

                comment:
                    commentInput.value

            };

            // ======================================================
            // СОХРАНЕНИЕ И ОТРИСОВКА
            // ======================================================

            // Сохраняем заявку.
            saveApplication(
                applicationData
            );

            // Выводим заявку.
            renderApplication(
                applicationData
            );

            // Очищаем форму.
            contactForm.reset();

        }
    );

}

// ======================================================
// ЗАГРУЗКА СОХРАНЕННОЙ ЗАЯВКИ
// ======================================================

// Получаем заявку из localStorage.
const savedApplication =
    getApplication();

// Выводим заявку на страницу.
renderApplication(
    savedApplication
);