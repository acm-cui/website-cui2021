$(function() {
    $('nav .dropdown-menu').on('show.bs.collapse', function () {
        $('nav .dropdown-menu.show').collapse('hide');
    });
});