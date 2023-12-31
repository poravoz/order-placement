window.onload = function() {
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

    clearCartButton.onclick = function() {
        localStorage.removeItem('cartProduct');
        cartItemsDiv.innerHTML = '<p>Кошик пустий</p>';
        parent.postMessage('clearCart', '*');
        formContainer.style.display = 'none';
    };

    submitButton.onclick = function(event) {
        event.preventDefault();

        // Перевірка імені
        var firstName = firstNameInput.value;
        if (!/^[а-яА-Яa-zA-Z]+$/.test(firstName) || firstName.length < 2) {
            alert('Ім\'я повинно складатися як мінімум з двох літер і не містити цифри');
            return;
        }

        // Перевірка прізвища
        var lastName = lastNameInput.value;
        if (!/^[а-яА-Яa-zA-Z]+$/.test(lastName) || lastName.length < 2) {
            alert('Прізвище повинно складатися як мінімум з двох літер і не містити цифри');
            return;
        }

        // Перевірка по батькові
        var middleName = middleNameInput.value;
        if (!/^[а-яА-Яa-zA-Z]+$/.test(middleName) || middleName.length < 2) {
            alert('По батькові повинно складатися як мінімум з двох літер і не містити цифри');
            return;
        }

        // Перевірка телефону
        var phone = phoneInput.value;
        if (!/^\d{10}$/.test(phone)) {
            alert('Телефон повинен містити 10 цифр');
            return;
        }

        // Перевірка електронної пошти
        var email = emailInput.value;
        if (!/^[\w-]+(\.[\w-]+)*@gmail\.com$/.test(email)) {
            alert('Електронна пошта повинна бути у форматі example@gmail.com');
            return;
        }

       var city = document.getElementById('city').value;
       var delivery = document.getElementById('delivery').value;
       localStorage.setItem('cartProduct', 'Значение продукта');

       var data = {
           name_product: cartProduct,
           name: firstNameInput.value,
           surname: lastNameInput.value,
           middleName: middleNameInput.value,
           phone: phoneInput.value,
           email: emailInput.value,
           city: city,
           delivery: delivery
       };

       fetch('http://localhost:3000/order-placement/', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
       .then(response => response.json())
       .then(data => {
           console.log('Успішно надіслано:', data);

           localStorage.removeItem('cartProduct');
           cartItemsDiv.innerHTML = '<p>Кошик пустий</p>';
           formContainer.style.display = 'none';

           firstNameInput.value = '';
           lastNameInput.value = '';
           middleNameInput.value = '';
           phoneInput.value = '';
           emailInput.value = '';
           document.getElementById('city').value = '';
           document.getElementById('delivery').value = '';

           window.location.href = '../../index.html';
       })
       .catch(error => {
           console.error('Помилка:', error);
       });
   };
};
