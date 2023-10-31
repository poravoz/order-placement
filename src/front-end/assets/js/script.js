document.addEventListener('DOMContentLoaded', function() {
    var addToCartButton = document.getElementById('add-to-cart');
    var cartMarker = document.getElementById('cart-marker');

    addToCartButton.addEventListener('click', function() {
        var productName = document.querySelector('.product-list h3').textContent;
        localStorage.setItem('cartProduct', productName);
        updateCartMarker();
    });

    function updateCartMarker() {
        var cartProduct = localStorage.getItem('cartProduct');
        if (cartProduct) {
            cartMarker.style.display = 'inline-block';
        } else {
            cartMarker.style.display = 'none';
        }
    }

    updateCartMarker();
});