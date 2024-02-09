$(function(){
    // Initialize pickadate
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // Randomize attention seeker animation
    var attentionSeekers = ['animate__bounce', 'animate__flash', 'animate__pulse', 'animate__rubberBand'];
    var randomSeeker = attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];
    $('h1').addClass('animate__animated ' + randomSeeker);

    // Event listener for check/uncheck all balloons
    $('#checkAllBalloons').on('click', function() {
        var isChecked = $(this).prop('checked');
        $('.form-check-input').prop('checked', isChecked).change();
    });

    // Event listener for checkbox labels
    $('.form-check-label').hover(
        function() {
            var balloonColor = $(this).attr('for');
            $('h1').css('color', balloonColor);
            $('h1').removeClass().addClass('animate__animated animate__heartBeat animate__slower ' + balloonColor);
        },
        function() {
            $('h1').css('color', 'slategray');
            $('h1').removeClass().addClass('animate__animated animate__heartBeat animate__slower');
        }
    );

    // Event listener for checkbox inputs
    $('.form-check-input').on('change', function () {
        var balloonColor = $(this).attr('id');
        var $balloonImg = $('#' + balloonColor + 'Img');
        $balloonImg.css('visibility', $(this).is(':checked') ? 'visible' : 'hidden');
        if ($(this).is(':checked')) {
            $balloonImg.removeClass().addClass('ball animate__animated animate__bounceInDown');
        } else {
            $balloonImg.addClass('animate__animated animate__bounceOutUp');
        }
    });

    // Event listener for submit button
    $('#submit').on('click', function() {
        var anyChecked = $('.form-check-input:checked').length > 0;
        if (!anyChecked) {
            // Display toast if no balloons are selected
            showToast('Please select at least one balloon!');
        }
    });

    // Function to display toast
    function showToast(message) {
        var toast = $('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="3000">' +
            '<div class="toast-header">' +
            '<strong class="mr-auto">Attention</strong>' +
            '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span>' +
            '</button>' +
            '</div>' +
            '<div class="toast-body">' + message + '</div>' +
            '</div>');

        $('.container').append(toast);
        toast.toast('show');

        toast.on('hidden.bs.toast', function () {
            $(this).remove();
        });
    }
});
