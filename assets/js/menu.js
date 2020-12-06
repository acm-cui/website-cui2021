
var showClassName = 'show';
var showClass = '.' + showClassName;
var notShownClass = ':not(' + showClass +')';
var dropdownClass = '.dropdown';
var dropdownMenuClass = '.dropdown-menu';
var dropdownMenuShownClass = dropdownMenuClass + showClass;

var $dropdown = $(dropdownClass);
var $dropdownToggle = $(".dropdown-toggle");
var $dropdownMenu = $(dropdownMenuClass);
var $dropdownMenuVisible = $(dropdownClass + showClass);

$(window).on('load', function() {
    $('nav .dropdown-menu').on('shown.bs.collapse', function () {
        if (window.innerWidth >= 768) {
            $(dropdownMenuShownClass).parent(notShownClass).find(dropdownMenuClass).each(function() {$(this).collapse('hide')});
        }
    });

    // based on https://webdesign.tutsplus.com/tutorials/how-to-make-the-bootstrap-navbar-dropdown-work-on-hover--cms-33840
    $dropdown.hover(
        function() {
            if (window.innerWidth >= 768) {
                const $this = $(this);
                $this.addClass(showClassName);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenuVisible).collapse('hide');
                $this.find($dropdownMenu).collapse('show');
            }
        },
        function() {
            if (window.innerWidth >= 768) {
                const $this = $(this);
                $this.removeClass(showClassName);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).collapse('hide');
            }
        });
});