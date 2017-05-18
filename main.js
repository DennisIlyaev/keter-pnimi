$(document).ready(function() {
    if (prompt('אנא הקש סיסמה') === 'keter') {
        $('body').css('display', 'flex');
    } else {
        $('body').css('display', 'none');
    }


    document.onkeypress = function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
        }

    };



    $('#container3 div div:nth-child(2)', this).on('click', function() {
        if (confirm('להכניס שעת כניסה?')) {
            var date = new Date(),
                minute = date.getMinutes(),
                hour = date.getHours();

            if (hour < 10) {
                hour = '0' + hour;
            }

            if (minute < 10) {
                minute = '0' + minute;
            }


            $(this).html(hour + ':' + minute);
        } else {

            $(this).html('');

        }
    });

    $('#container3 div div:nth-child(3)', this).on('click', function() {
        if (confirm('להכניס שעת יציאה?')) {
            var date = new Date(),
                minute = date.getMinutes(),
                hour = date.getHours();

            if (hour < 10) {
                hour = '0' + hour;
            }

            if (minute < 10) {
                minute = '0' + minute;
            }


            $(this).html(hour + ':' + minute);
        } else {

            $(this).html('');

        }
    });


















});
