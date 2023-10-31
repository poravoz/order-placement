document.addEventListener('DOMContentLoaded', function() {
    var addToCartButton = document.getElementById('add-to-cart');
    var go_to_cart = document.getElementById('go-to-cart');
    var cartMarker = document.getElementById('cart-marker');
    var productForm = document.getElementById('product-form');

    addToCartButton.addEventListener('click', function() {
        var productName = document.querySelector('.product-list h3').textContent;
        localStorage.setItem('cartProduct', productName);
        updateCartMarker();
        updateProductForm();
    });

    go_to_cart.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = './assets/basket/basket.html';
    });

    function updateCartMarker() {
        var cartProduct = localStorage.getItem('cartProduct');
        if (cartProduct) {
            cartMarker.style.display = 'inline-block';
        } else {
            cartMarker.style.display = 'none';
        }
    }

    function updateProductForm() {
        var cartProduct = localStorage.getItem('cartProduct');
        if (cartProduct) {
            addToCartButton.style.display = 'none';
            go_to_cart.style.display = 'inline-block';
            productForm.classList.add('product-in-cart');
        }
    }

    function updateCartClass() {
        var cartProduct = localStorage.getItem('cartProduct');
        var cartItemsDiv = document.getElementById('cart-items');

        if (cartProduct && cartItemsDiv) {
            cartItemsDiv.classList.remove('empty-cart');
        } else if (cartItemsDiv) {
            cartItemsDiv.classList.add('empty-cart');
        }
    }

    updateCartMarker();
    updateProductForm();
    updateCartClass(); 
});