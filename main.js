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

    window.onbeforeunload = confirmExit;

    function confirmExit() {
        return "You have attempted to leave this page.  If you have made any changes to the fields without clicking the Save button, your changes will be lost.  Are you sure you want to exit this page?";
    }



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



    $('#container2 div div:nth-child(odd)').on('keyup', function() {

        if ($(this).html() == 'אייסה' || $(this).html() == 'עלאא' || $(this).html() == 'עאהד') {
            $(this).next().html('7242967');

        } else if ($(this).html() == 'באדר' || $(this).html() == 'בדר') {
            $(this).next().html('6080557');

        } else if ($(this).html() == 'אמיר') {
            $(this).next().html('3693300');

        } else if ($(this).html() == 'עזם' || $(this).html() == 'חזאם') {
            $(this).next().html('6429515');

        } else if ($(this).html() == 'גוהאד') {
            $(this).next().html('5262856');

        } else if ($(this).html() == 'סלימאן' || $(this).html() == 'סולימאן') {
            $(this).next().html('2137450');

        } else {
            $(this).next().html('');
        }
    });














});
