document.addEventListener('DOMContentLoaded', function() {
    const cardholderNameInput = document.getElementById('cardholderName');
    const cardNumberInput = document.getElementById('cardNumber');
    const expirationMonthInput = document.getElementById('expirationMonth');
    const expirationYearInput = document.getElementById('expirationYear');
    const cvcInput = document.getElementById('cvc');
    const errorMessageCardNumber = document.getElementById('error-message-cardNumber');
    const errorMessageMonth = document.querySelector('.error-message-month');
    const errorMessageCvc = document.querySelector('.error-message-cvc');
    const form = document.querySelector('form');
    const thanksDiv = document.querySelector('.thanks-div');
    const confirmButton = document.getElementById('confirmButton');
    const cardNumberDisplay = document.querySelector('.card h1');
    const writerNameDisplay = document.querySelector('.card .writer-name');
    const dateDisplay = document.querySelector('.card .date');
    const cvcDisplay = document.querySelector('.CVC .cvc-p');

    // Ajouter des écouteurs d'événements pour les champs du formulaire
    cardholderNameInput.addEventListener('input', updateCardholderName);
    cardNumberInput.addEventListener('input', updateCardNumber);
    expirationMonthInput.addEventListener('input', updateDate);
    expirationYearInput.addEventListener('input', updateDate);
    cvcInput.addEventListener('input', updateCVC);

    function updateCardholderName() {
        writerNameDisplay.textContent = cardholderNameInput.value;
    }

    function updateCardNumber() {
        cardNumberDisplay.textContent = cardNumberInput.value;
    }

    function updateDate() {
        dateDisplay.textContent = `${expirationMonthInput.value}/${expirationYearInput.value}`;
    }

    function updateCVC() {
        cvcDisplay.textContent = cvcInput.value;
    }
    // Ajoutez un gestionnaire d'événements pour le clic du bouton "Confirm"
    confirmButton.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le formulaire d'être soumis normalement

        // Vérifiez les champs et affichez les messages d'erreur si nécessaire
        validateAndShowErrors();

        // Si tous les champs sont valides, masquez le formulaire et affichez la "thanks div"
        if (allFieldsValid()) {
            form.style.display = 'none';
            thanksDiv.style.display = 'block';
        }
    });

    // Fonction pour valider et afficher les messages d'erreur
    function validateAndShowErrors() {
        if (!/^\d+$/.test(cardNumberInput.value)) {
            errorMessageCardNumber.style.display = 'block';
        } else {
            errorMessageCardNumber.style.display = 'none';
        }

        if (expirationMonthInput.value === '') {
            errorMessageMonth.style.display = 'block';
        } else {
            errorMessageMonth.style.display = 'none';
        }

        if (expirationYearInput.value === '') {
            errorMessageMonth.style.display = 'block';
        } else {
            errorMessageMonth.style.display = 'none';
        }

        if (cvcInput.value === '') {
            errorMessageCvc.style.display = 'block';
        } else {
            errorMessageCvc.style.display = 'none';
        }
    }

    // Fonction pour vérifier si tous les champs sont valides
    function allFieldsValid() {
        return /^\d+$/.test(cardNumberInput.value) &&
               expirationMonthInput.value !== '' &&
               expirationYearInput.value !== '' &&
               cvcInput.value !== '';
    }

    // Ajoutez les écouteurs d'événements pour chaque champ d'entrée
    cardholderNameInput.addEventListener('input', function() {
        cardholderNameInput.classList.add('input-active');
    });

    cardholderNameInput.addEventListener('blur', function() {
        cardholderNameInput.classList.remove('input-active');
    });

    cardNumberInput.addEventListener('input', function() {
        cardNumberInput.classList.add('input-active');
    });

    cardNumberInput.addEventListener('blur', function() {
        cardNumberInput.classList.remove('input-active');
    });

    expirationMonthInput.addEventListener('input', function() {
        expirationMonthInput.classList.add('input-active');
    });

    expirationMonthInput.addEventListener('blur', function() {
        expirationMonthInput.classList.remove('input-active');
    });

    expirationYearInput.addEventListener('input', function() {
        expirationYearInput.classList.add('input-active');
    });

    expirationYearInput.addEventListener('blur', function() {
        expirationYearInput.classList.remove('input-active');
    });

    cvcInput.addEventListener('input', function() {
        cvcInput.classList.add('input-active');
    });

    cvcInput.addEventListener('blur', function() {
        cvcInput.classList.remove('input-active');
    });
});
