document.addEventListener('DOMContentLoaded', function() {
    var cartItemsDiv = document.getElementById('cart-items');
    var cartProduct = localStorage.getItem('cartProduct');
    var formContainer = document.querySelector('.form-container');
    var clearCartButton = document.getElementById('clear-cart');
    var submitButton = document.querySelector('button[type="submit"]');
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    var middleNameInput = document.getElementById('middle-name');
    var phoneInput = document.getElementById('phone');
    var emailInput = document.getElementById('email');

    if (cartProduct) {
        cartItemsDiv.innerHTML = '<h3>Товар у кошику:</h3><p>' + cartProduct + '</p>';
        formContainer.style.display = 'block'; 
    } else {
        cartItemsDiv.innerHTML = '<p>Кошик пустий</p>';
        formContainer.style.display = 'none'; 
    }

    clearCartButton.addEventListener('click', function() {
        localStorage.removeItem('cartProduct');
        cartItemsDiv.innerHTML = '<p>Кошик пустий</p>';
        parent.postMessage('clearCart', '*');
        formContainer.style.display = 'none'; 
    });

    submitButton.addEventListener('click', function(event) {
        // Перевірка імені
        var firstName = firstNameInput.value;
        if (!/^[а-яА-Яa-zA-Z]+$/.test(firstName) || firstName.length < 2) {
            alert('Ім\'я повинно складатися як мінімум з двох літер і не містити цифри');
            event.preventDefault();
            return;
        }

        // Перевірка прізвища
        var lastName = lastNameInput.value;
        if (!/^[а-яА-Яa-zA-Z]+$/.test(lastName) || lastName.length < 2) {
            alert('Прізвище повинно складатися як мінімум з двох літер і не містити цифри');
            event.preventDefault();
            return;
        }

        // Перевірка по батькові
        var middleName = middleNameInput.value;
        if (!/^[а-яА-Яa-zA-Z]+$/.test(middleName) || middleName.length < 2) {
            alert('По батькові повинно складатися як мінімум з двох літер і не містити цифри');
            event.preventDefault();
            return;
        }

        // Перевірка телефону
        var phone = phoneInput.value;
        if (!/^\d{10}$/.test(phone)) {
            alert('Телефон повинен містити 10 цифр');
            event.preventDefault();
            return;
        }

        // Перевірка електронної пошти
        var email = emailInput.value;
        if (!/^[\w-]+(\.[\w-]+)*@gmail\.com$/.test(email)) {
            alert('Електронна пошта повинна бути у форматі example@gmail.com');
            event.preventDefault();
            return;
        }
    });
});