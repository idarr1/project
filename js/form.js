class FormValidator {

    static validate(inputs) {

        for (let input of inputs) {

            if (
                input.value.trim() === ""
            ) {

                return false;

            }

        }

        return true;

    }

}

const contactForm =
    document.getElementById("contactForm");

const applicationList =
    document.getElementById("applicationList");

function renderApplication(data) {

    applicationList.innerHTML = "";

    if (!data) {

        return;

    }

    const applicationCard =
        document.createElement("div");

    applicationCard.classList.add(
        "applicationCard"
    );

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

    applicationList.append(
        applicationCard
    );

    const deleteButton =
        document.querySelector(
            ".deleteApplicationButton"
        );

    deleteButton.addEventListener(
        "click",
        function() {

            removeApplication();

            applicationCard.remove();

        }
    );

}

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const nameInput =
                document.getElementById("nameInput");

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

            const isValid =
    FormValidator.validate([
        nameInput,
        lastNameInput,
        phoneInput,
        emailInput
    ]);

if (!isValid) {

    alert(
        "Заполните все поля"
    );

    return;

}

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

            saveApplication(
                applicationData
            );

            renderApplication(
                applicationData
            );

            contactForm.reset();

        }
    );

}

const savedApplication =
    getApplication();

renderApplication(
    savedApplication
);