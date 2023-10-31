document.addEventListener('DOMContentLoaded', function() {
    var cartMarker = localStorage.getItem('cartMarker');

    if (cartMarker) {
        document.getElementById('cart-marker').textContent = cartMarker;
        document.getElementById('cart-marker').style.display = 'inline-block';
    }
    
    document.getElementById('add-to-cart').addEventListener('click', function() {
        document.getElementById('cart-marker').textContent = '1';
        document.getElementById('cart-marker').style.display = 'inline-block';

        localStorage.setItem('cartMarker', '1');
    });
});