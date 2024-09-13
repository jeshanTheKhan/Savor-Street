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