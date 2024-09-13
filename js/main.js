document.getElementById('delivery').addEventListener('click', function() {
    this.style.color = '#ff8c00';
    document.getElementById('pickup').style.color = 'black';
});

document.getElementById('pickup').addEventListener('click', function() {
    this.style.color = '#ff8c00';
    document.getElementById('delivery').style.color = 'black';
});
$(document).ready(function(){
    $(".owl-men-item").owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});
document.getElementById('redirectButton').addEventListener('click', function() {
    window.location.href = 'products/products.html'; // Replace with the desired URL
});
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    var plusButtons = document.querySelectorAll('.plus');
    var minusButtons = document.querySelectorAll('.minus');

    plusButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var input = this.previousElementSibling;
            var currentValue = parseInt(input.value);
            input.value = currentValue + 1;
        });
    });

    minusButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var input = this.nextElementSibling;
            var currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        });
    });
});

// Update product quantity
function updateQuantity(button, change) {
    const quantityElement = button.parentElement.querySelector('.quantity-number');
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity += change;
    
    if (currentQuantity < 1) {
        currentQuantity = 1; // Ensure quantity doesn't go below 1
    }
    
    quantityElement.textContent = currentQuantity;
}

// Delete product from cart
function deleteProduct(button) {
    const row = button.parentElement.parentElement;
    const cartBody = document.getElementById('cart-body');
    cartBody.removeChild(row);
}
function calculateOrder() {
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const shipping = parseFloat(document.getElementById('shipping').value);
    const taxRate = 0.05; // 5%

    if (isNaN(price) || isNaN(quantity) || isNaN(shipping) || price <= 0 || quantity <= 0 || shipping < 0) {
        alert('Please enter valid values.');
        return;
    }

    const productPrice = price * quantity;
    const tax = productPrice * taxRate;
    const subtotal = productPrice + tax + shipping;
    const totalPrice = subtotal;

    document.getElementById('invoiceNumber').textContent = `#${Math.floor(Math.random() * 10000)}`;
    document.getElementById('productPrice').textContent = `$${productPrice.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('shippingCharge').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`;
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic form validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('responseMessage').textContent = 'Please fill out all fields.';
        document.getElementById('responseMessage').style.color = 'red';
        return;
    }

    // Normally you would send the form data to a server here
    // For this example, we'll just show a success message
    document.getElementById('responseMessage').textContent = 'Thank you for your message!';
    document.getElementById('responseMessage').style.color = 'green';
});
