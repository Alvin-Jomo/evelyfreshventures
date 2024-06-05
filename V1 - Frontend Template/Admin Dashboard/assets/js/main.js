(function($) {
    "use strict";

    // Toggle submenu on click
    $(".menu-item.has-submenu .menu-link").on("click", function(event) {
        event.preventDefault();
        if ($(this).next(".submenu").is(":hidden")) {
            $(this).parent(".has-submenu").siblings().find(".submenu").slideUp(200);
        }
        $(this).next(".submenu").slideToggle(200);
    });

    // Trigger custom data attributes
    $("[data-trigger]").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        var target = $(this).attr("data-trigger");
        $(target).toggleClass("show");
        $("body").toggleClass("offcanvas-active");
        $(".screen-overlay").toggleClass("show");
    });

    // Close overlay and mobile offcanvas
    $(".screen-overlay, .btn-close").click(function() {
        $(".screen-overlay").removeClass("show");
        $(".mobile-offcanvas, .show").removeClass("show");
        $("body").removeClass("offcanvas-active");
    });

    // Minimize sidebar on click
    $(".btn-aside-minimize").on("click", function() {
        if (window.innerWidth < 768) {
            $("body").removeClass("aside-mini");
            $(".screen-overlay").removeClass("show");
            $(".navbar-aside").removeClass("show");
            $("body").removeClass("offcanvas-active");
        } else {
            $("body").toggleClass("aside-mini");
        }
    });

    // Initialize select2 for select elements with class .select-nice
    if ($(".select-nice").length) {
        $(".select-nice").select2();
    }

    // Initialize PerfectScrollbar for offcanvas aside
    if ($("#offcanvas_aside").length) {
        const offcanvasAside = document.querySelector("#offcanvas_aside");
        new PerfectScrollbar(offcanvasAside);
    }

    // Toggle dark mode on click
    $(".darkmode").on("click", function() {
        $("body").toggleClass("dark");
    });
})(jQuery);
