document.addEventListener('DOMContentLoaded', function() {
    var addToCartButton = document.getElementById('add-to-cart');
    var clearCartButton = document.getElementById('clear-cart');

    addToCartButton.addEventListener('click', function() {
        var productName = document.querySelector('.product-list h3').textContent;
        localStorage.setItem('cartProduct', productName);
        updateCartMarker();
    });

    clearCartButton.addEventListener('click', function() {
        localStorage.removeItem('cartProduct');
        updateCartMarker();
    });

    function updateCartMarker() {
        var cartMarker = localStorage.getItem('cartProduct');
        if (cartMarker) {
            document.getElementById('cart-marker').style.display = 'inline-block';
        } else {
            document.getElementById('cart-marker').style.display = 'none';
        }
    }

    updateCartMarker();
});