
$(".legend input[type=checkbox]").change(function () {
    let el = $(this);
    let type = el.val();

    if (!el.is(':checked')) {
        $('[data-' + type + ']').fadeOut('fast', function () {
            AOS.refresh();
        });
    } else {
        $('[data-' + type + ']').fadeIn('fast', function () {
            AOS.refresh();
        });
    }
});