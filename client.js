$(function(){
    // preload audio
    var toast = new Audio('toast.wav');
    
    $('.code').on('click', function(e) {
        e.preventDefault();
        var productName = $(this).closest('.card').find('h3').text();
        var discountCode = $(this).data('discount-code');
        
        toast.pause();
        toast.currentTime = 0;
        toast.play();
        
        $('#liveToast').find('.toast-header strong').text(productName);
        $('#liveToast').find('.toast-body #code').text(discountCode);
        
        $('#liveToast').toast({ autohide: false }).toast('show');
    });

    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $('.toast').toast('hide');
        }
    });
});
