document.addEventListener('DOMContentLoaded', function() {
    var cartItemsDiv = document.getElementById('cart-items');
    var cartProduct = localStorage.getItem('cartProduct');
    var formContainer = document.querySelector('.form-container');
    var clearCartButton = document.getElementById('clear-cart');

    if (cartProduct) {
        cartItemsDiv.innerHTML = '<h3>Товар в кошику:</h3><p>' + cartProduct + '</p>';
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
});


