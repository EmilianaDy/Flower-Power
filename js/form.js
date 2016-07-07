$(function() {

    var form = $('#ajax-contact');

    var formMessages = $('#form-messages');

    $(form).submit(function(e) {
        e.preventDefault();

        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })

        .done(function(response) {
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');
            $(formMessages).text(response);

            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })

        .fail(function(response) {
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            if (response.responseText !== '') {
                $(formMessages).text(response.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });

    });

});