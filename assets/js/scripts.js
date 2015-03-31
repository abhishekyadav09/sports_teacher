(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/js/themes/4/main.js":[function(require,module,exports){
require('../../common/main');
require('../../components/chat/main');
require('../../components/sidebar/main');
require('./_curriculum');
},{"../../common/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/main.js","../../components/chat/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/main.js","../../components/sidebar/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/main.js","./_curriculum":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/themes/4/_curriculum.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/_breakpoints.js":[function(require,module,exports){
(function ($) {

    $(window).setBreakpoints({
        distinct: true,
        breakpoints: [ 320, 480, 768, 1024 ]
    });

})(jQuery);
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/_gridalicious.js":[function(require,module,exports){
(function($){

    $('[data-toggle*="gridalicious"]').each(function () {
        $(this).gridalicious({
            gutter: $(this).data('gutter') || 15,
            width: $(this).data('width') || 370,
            selector: '> div'
        });
    });

})(jQuery);
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/_skins.js":[function(require,module,exports){
var asyncLoader = require('../lib/async');

(function ($) {

    var changeSkin = function () {
        var skin = $.cookie("skin");
        if (typeof skin != 'undefined') {
            asyncLoader([ 'css/' + skin + '.min.css' ], function () {
                $('[data-skin]').removeProp('disabled').parent().removeClass('loading');
            });
        }
    };

    $('[data-skin]').on('click', function () {

        if ($(this).prop('disabled')) return;

        $('[data-skin]').prop('disabled', true);

        $(this).parent().addClass('loading');

        $.cookie("skin", $(this).data('skin'));

        changeSkin();

    });

    var skin = $.cookie("skin");

    if (typeof skin != 'undefined' && skin != 'default') {
        changeSkin();
    }

})(jQuery);
},{"../lib/async":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/lib/async.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_skins');
require('./_gridalicious');
require('../components/forms/main');
require('../components/tables/main');
require('../components/other/_dropdown');
require('../components/other/_tooltip');
require('../components/other/_offcanvas');
require('../components/other/_ratings');
},{"../components/forms/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/main.js","../components/other/_dropdown":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_dropdown.js","../components/other/_offcanvas":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_offcanvas.js","../components/other/_ratings":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_ratings.js","../components/other/_tooltip":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_tooltip.js","../components/tables/main":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/tables/main.js","./_breakpoints":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/_breakpoints.js","./_gridalicious":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/_gridalicious.js","./_skins":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/common/_skins.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $(window).bind('enterBreakpoint480', function () {
        $('.chat-window-container .panel:not(:last)').remove();
        $('.chat-window-container .panel').attr('id', 'chat-0001');
    });

    $(window).bind('enterBreakpoint768', function () {
        $("body").removeClass('show-chat');

        if ($('.chat-window-container .panel').length == 3) {
            $('.chat-window-container .panel:first').remove();
            $('.chat-window-container .panel:first').attr('id', 'chat-0001');
            $('.chat-window-container .panel:last').attr('id', 'chat-0002');
        }
    });

    $(window).bind('exitBreakpoint768', function () {
        $("body").removeClass('show-chat');
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_check-chat.js":[function(require,module,exports){
module.exports = function () {
    if (!$('body').hasClass('show-chat')) {
        $('.chat-window-container .panel-body').addClass('display-none');
        $('.chat-window-container input').addClass('display-none');
        if ($('.sidebar.left').length && $(window).width() > 768) $('body').addClass('show-sidebar');
    } else {
        $('.chat-window-container .panel-body').removeClass('display-none');
        $('.chat-window-container input').removeClass('display-none');
        if ($('.sidebar.left').length) $('body').removeClass('show-sidebar');
    }
};

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_hide.js":[function(require,module,exports){
(function ($) {
    "use strict";

    function checkChat() {
        if (! $('body').hasClass('show-chat')) {
            $('.chat-window-container .panel-body').addClass('display-none');
            $('.chat-window-container input').addClass('display-none');
        } else {
            $('.chat-window-container .panel-body').removeClass('display-none');
            $('.chat-window-container input').removeClass('display-none');
        }
    }

    checkChat();

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_search.js":[function(require,module,exports){
(function ($) {

    // match anything
    $.expr[ ":" ].containsNoCase = function (el, i, m) {
        var search = m[ 3 ];
        if (! search) return false;
        return new RegExp(search, "i").test($(el).text());
    };

    // Search Filter
    function searchFilterCallBack($data, $opt) {
        var search = $data instanceof jQuery ? $data.val() : $(this).val(),
            opt = typeof $opt == 'undefined' ? $data.data.opt : $opt;

        var $target = $(opt.targetSelector);
        $target.show();

        if (search && search.length >= opt.charCount) {
            $target.not(":containsNoCase(" + search + ")").hide();
        }
    }

    // input filter
    $.fn.searchFilter = function (options) {
        var opt = $.extend({
            // target selector
            targetSelector: "",
            // number of characters before search is applied
            charCount: 1
        }, options);

        return this.each(function () {
            var $el = $(this);
            $el.off("keyup", searchFilterCallBack);
            $el.on("keyup", null, {opt: opt}, searchFilterCallBack);
        });

    };

    // Filter by All/Online/Offline
    $(".chat-filter a").on('click', function (e) {

        e.preventDefault();
        $('.chat-contacts li').hide();
        $('.chat-contacts').find($(this).data('target')).show();

        $(".chat-filter li").removeClass('active');
        $(this).parent().addClass('active');

        $(".chat-search input").searchFilter({targetSelector: ".chat-contacts " + $(this).data('target')});

        // Filter Contacts by Search and Tabs
        searchFilterCallBack($(".chat-search input"), {
            targetSelector: ".chat-contacts " + $(this).data('target'),
            charCount: 1
        });
    });

    // Trigger Search Filter
    $(".chat-search input").searchFilter({targetSelector: ".chat-contacts li"});

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_toggle.js":[function(require,module,exports){
(function ($) {

    $('[data-toggle="chat-box"]').on('click', function () {
        $(".chat-contacts li:first").trigger('click');
        if ($(this).data('hide')) $(this).hide();
    });

    (function () {
        var toggleBtn = $('[data-toggle="sidebar-chat"]');

        // If No Sidebar Exit
        if (!toggleBtn.length) return;

        toggleBtn.on('click', function () {

            $('body').toggleClass('show-chat');

            require('./_check-chat')();
        });
    })();

    require('./_check-chat')();
})(jQuery);
},{"./_check-chat":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_check-chat.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_windows.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var container = $('.chat-window-container');

    // Click User
    $(".chat-contacts li").on('click', function () {

        if ($('.chat-window-container [data-user-id="' + $(this).data('userId') + '"]').length) return;

        // If user is offline do nothing
        if ($(this).attr('class') === 'offline') return;

        var source = $("#chat-window-template").html();
        var template = Handlebars.compile(source);

        var context = {user_image: $(this).find('img').attr('src'), user: $(this).find('.contact-name').text()};
        var html = template(context);

        var clone = $(html);

        clone.attr("data-user-id", $(this).data("userId"));

        container.find('.panel:not([id^="chat"])').remove();

        var count = container.find('.panel').length;

        count ++;
        var limit = $(window).width() > 768 ? 3 : 1;
        if (count >= limit) {
            container.find('#chat-000'+ limit).remove();
            count = limit;
        }

        clone.attr('id', 'chat-000' + parseInt(count));
        container.append(clone).show();

        clone.show();
        clone.find('> .panel-body').removeClass('display-none');
        clone.find('> input').removeClass('display-none');
    });

    // Change ID by No. of Windows
    function chatLayout() {
        container.find('.panel').each(function (index, value) {
            $(this).attr('id', 'chat-000' + parseInt(index + 1));
        });
    }

    // remove window
    $("body").on('click', ".chat-window-container .close", function () {
        $(this).parent().parent().remove();
        chatLayout();
        if ($(window).width() < 768) $('.chat-window-container').hide();
    });

    // Chat heading collapse window
    $('body').on('click', '.chat-window-container .panel-heading', function (e) {
        e.preventDefault();
        $(this).parent().find('> .panel-body').toggleClass('display-none');
        $(this).parent().find('> input').toggleClass('display-none');
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_search');
require('./_windows');
require('./_toggle');
require('./_hide');
},{"./_breakpoints":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_breakpoints.js","./_hide":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_hide.js","./_search":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_search.js","./_toggle":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_toggle.js","./_windows":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_windows.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_datepicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Datepicker INIT
    $('.datepicker').datepicker();

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_minicolors.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Minicolors INIT
    $('.minicolors').each(function () {
        $(this).minicolors({
            control: $(this).attr('data-control') || 'hue',
            defaultValue: $(this).attr('data-defaultValue') || '',
            inline: $(this).attr('data-inline') === 'true',
            letterCase: $(this).attr('data-letterCase') || 'lowercase',
            opacity: $(this).attr('data-opacity'),
            position: $(this).attr('data-position') || 'bottom left',
            change: function (hex, opacity) {
                if (! hex) return;
                if (opacity) hex += ', ' + opacity;
                if (typeof console === 'object') {
                    console.log(hex);
                }
            },
            theme: 'bootstrap'
        });
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_progress-bars.js":[function(require,module,exports){
(function ($) {

    // Progress Bar Animation
    $('.progress-bar').each(function () {
        $(this).width($(this).attr('aria-valuenow') + '%');
    });

})(jQuery);
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_selectpicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('.selectpicker').each(function(){
        $(this).selectpicker({
            width: $(this).data('width') || '100%'
        });
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_slider.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('#ex1').slider({
        formatter: function (value) {
            return 'Current value: ' + value;
        }
    });

    $("#ex2").slider();

    $("#ex6").slider();

    $("#ex6").on("slide", function (slideEvt) {
        $("#ex6SliderVal").text(slideEvt.value);
    });

    $('.slider-handle').html('<i class="fa fa-bars fa-rotate-90"></i>');

})(jQuery);
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/main.js":[function(require,module,exports){
require('./_progress-bars');
require('./_slider');
require('./_selectpicker');
require('./_datepicker');
require('./_minicolors');
},{"./_datepicker":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_datepicker.js","./_minicolors":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_minicolors.js","./_progress-bars":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_progress-bars.js","./_selectpicker":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_selectpicker.js","./_slider":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/forms/_slider.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_dropdown.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Dropdown
    $('.dropdown-toggle').dropdown();

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_offcanvas.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // OffCanvas
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_ratings.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Ratings
    $('.rating span.star').on('click', function () {
        var total = $(this).parent().children().length;
        var clickedIndex = $(this).index();
        $('.rating span.star').removeClass('filled');
        for (var i = clickedIndex; i < total; i ++) {
            $('.rating span.star').eq(i).addClass('filled');
        }
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/other/_tooltip.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Tooltip
    $("body").tooltip({selector: '[data-toggle="tooltip"]', container: "body"});

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $(window).bind('enterBreakpoint768', function () {
        if (! $('.sidebar').length) return;
        $("body").addClass('show-sidebar');
    });

    $(window).bind('enterBreakpoint480', function () {
        if (! $('.sidebar').length) return;
        $("body").removeClass('show-sidebar');
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/_sidebar-menu.js":[function(require,module,exports){
(function ($) {
    // Scroll
    $('[data-scrollable]').niceScroll({cursorborder: 0, cursorcolor: "#25ad9f"});
    $('[data-scrollable]').getNiceScroll().resize();
    $('#menu ul.collapse').on('shown.bs.collapse', function (e) {
        $('#menu').getNiceScroll().resize();
    });

    // Collapse
    $('#menu ul.collapse').on('show.bs.collapse', function (e) {
        e.stopPropagation();
        var parents = $(this).parents('ul:first').find('> li.open [data-toggle="collapse"]');
        if (parents.length) {
            parents.trigger('click');
        }
        $(this).parent().addClass("open");
    });

    $('#menu ul.collapse').on('hidden.bs.collapse', function (e) {
        e.stopPropagation();
        $(this).parent().removeClass("open");
    });

}(jQuery));
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/_sidebar-toggle.js":[function(require,module,exports){
(function ($) {
    $('#subnav').collapse({'toggle': false});

    var toggleBtn = $('[data-toggle="sidebar-menu"]');

    // If No Sidebar Exit
    if (!toggleBtn.length) return;

    toggleBtn.on('click', function () {

        if ($('body').is('.show-chat')) $('body').removeClass('show-chat');

        $('body').toggleClass('show-sidebar');

        // Check chat windows
        require('../chat/_check-chat')();
    });

})(jQuery);
},{"../chat/_check-chat":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/chat/_check-chat.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_sidebar-menu');
require('./_sidebar-toggle');
},{"./_breakpoints":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/_breakpoints.js","./_sidebar-menu":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/_sidebar-menu.js","./_sidebar-toggle":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/sidebar/_sidebar-toggle.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/tables/_check-all.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Table Checkbox All
    $('#checkAll').on('click', function (e) {
        $(this).closest('table').find('td input:checkbox').prop('checked', this.checked);
    });

})(jQuery);

},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/tables/_datatables.js":[function(require,module,exports){
(function ($) {

    // Datatables
    $('#data-table').dataTable();

})(jQuery);
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/tables/main.js":[function(require,module,exports){
require('./_datatables');
require('./_check-all');
},{"./_check-all":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/tables/_check-all.js","./_datatables":"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/components/tables/_datatables.js"}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/lib/async.js":[function(require,module,exports){
function contentLoaded(win, fn) {

    var done = false, top = true,

        doc = win.document,
        root = doc.documentElement,
        modern = doc.addEventListener,

        add = modern ? 'addEventListener' : 'attachEvent',
        rem = modern ? 'removeEventListener' : 'detachEvent',
        pre = modern ? '' : 'on',

        init = function (e) {
            if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
            (e.type == 'load' ? win : doc)[ rem ](pre + e.type, init, false);
            if (! done && (done = true)) fn.call(win, e.type || e);
        },

        poll = function () {
            try {
                root.doScroll('left');
            } catch (e) {
                setTimeout(poll, 50);
                return;
            }
            init('poll');
        };

    if (doc.readyState == 'complete') fn.call(win, 'lazy');
    else {
        if (! modern && root.doScroll) {
            try {
                top = ! win.frameElement;
            } catch (e) {
            }
            if (top) poll();
        }
        doc[ add ](pre + 'DOMContentLoaded', init, false);
        doc[ add ](pre + 'readystatechange', init, false);
        win[ add ](pre + 'load', init, false);
    }
}

module.exports = function(urls, callback) {

    var asyncLoader = function (urls, callback) {

        urls.foreach(function (i, file) {
            loadCss(file);
        });

        // checking for a callback function
        if (typeof callback == 'function') {
            // calling the callback
            contentLoaded(window, callback);
        }
    };

    var loadCss = function (url) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        document.getElementsByTagName('head')[ 0 ].appendChild(link);
    };

    // simple foreach implementation
    Array.prototype.foreach = function (callback) {
        for (var i = 0; i < this.length; i ++) {
            callback(i, this[ i ]);
        }
    };

    asyncLoader(urls, callback);

};
},{}],"/Applications/MAMP/htdocs/social-2/dev/dev/app/js/themes/4/_curriculum.js":[function(require,module,exports){
(function ($) {
    "use strict";

    if (!$('.curriculum').length) return;

    $('.curriculum .list-group-item').on('click', function(){
        location.href = $(this).data('target');
    });

    $('.curriculum .collapse').on('show.bs.collapse', function(){
        $(this).closest('.curriculum').addClass('open');
    });

    $('.curriculum .collapse').on('hide.bs.collapse', function(){
        $(this).closest('.curriculum').removeClass('open');
    });

})(jQuery);

},{}]},{},["./app/js/themes/4/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvdGhlbWVzLzQvbWFpbi5qcyIsImFwcC9qcy9jb21tb24vX2JyZWFrcG9pbnRzLmpzIiwiYXBwL2pzL2NvbW1vbi9fZ3JpZGFsaWNpb3VzLmpzIiwiYXBwL2pzL2NvbW1vbi9fc2tpbnMuanMiLCJhcHAvanMvY29tbW9uL21haW4uanMiLCJhcHAvanMvY29tcG9uZW50cy9jaGF0L19icmVha3BvaW50cy5qcyIsImFwcC9qcy9jb21wb25lbnRzL2NoYXQvX2NoZWNrLWNoYXQuanMiLCJhcHAvanMvY29tcG9uZW50cy9jaGF0L19oaWRlLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvY2hhdC9fc2VhcmNoLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvY2hhdC9fdG9nZ2xlLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvY2hhdC9fd2luZG93cy5qcyIsImFwcC9qcy9jb21wb25lbnRzL2NoYXQvbWFpbi5qcyIsImFwcC9qcy9jb21wb25lbnRzL2Zvcm1zL19kYXRlcGlja2VyLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvZm9ybXMvX21pbmljb2xvcnMuanMiLCJhcHAvanMvY29tcG9uZW50cy9mb3Jtcy9fcHJvZ3Jlc3MtYmFycy5qcyIsImFwcC9qcy9jb21wb25lbnRzL2Zvcm1zL19zZWxlY3RwaWNrZXIuanMiLCJhcHAvanMvY29tcG9uZW50cy9mb3Jtcy9fc2xpZGVyLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvZm9ybXMvbWFpbi5qcyIsImFwcC9qcy9jb21wb25lbnRzL290aGVyL19kcm9wZG93bi5qcyIsImFwcC9qcy9jb21wb25lbnRzL290aGVyL19vZmZjYW52YXMuanMiLCJhcHAvanMvY29tcG9uZW50cy9vdGhlci9fcmF0aW5ncy5qcyIsImFwcC9qcy9jb21wb25lbnRzL290aGVyL190b29sdGlwLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvc2lkZWJhci9fYnJlYWtwb2ludHMuanMiLCJhcHAvanMvY29tcG9uZW50cy9zaWRlYmFyL19zaWRlYmFyLW1lbnUuanMiLCJhcHAvanMvY29tcG9uZW50cy9zaWRlYmFyL19zaWRlYmFyLXRvZ2dsZS5qcyIsImFwcC9qcy9jb21wb25lbnRzL3NpZGViYXIvbWFpbi5qcyIsImFwcC9qcy9jb21wb25lbnRzL3RhYmxlcy9fY2hlY2stYWxsLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFibGVzL19kYXRhdGFibGVzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFibGVzL21haW4uanMiLCJhcHAvanMvbGliL2FzeW5jLmpzIiwiYXBwL2pzL3RoZW1lcy80L19jdXJyaWN1bHVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwicmVxdWlyZSgnLi4vLi4vY29tbW9uL21haW4nKTtcbnJlcXVpcmUoJy4uLy4uL2NvbXBvbmVudHMvY2hhdC9tYWluJyk7XG5yZXF1aXJlKCcuLi8uLi9jb21wb25lbnRzL3NpZGViYXIvbWFpbicpO1xucmVxdWlyZSgnLi9fY3VycmljdWx1bScpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgJCh3aW5kb3cpLnNldEJyZWFrcG9pbnRzKHtcbiAgICAgICAgZGlzdGluY3Q6IHRydWUsXG4gICAgICAgIGJyZWFrcG9pbnRzOiBbIDMyMCwgNDgwLCA3NjgsIDEwMjQgXVxuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKXtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZSo9XCJncmlkYWxpY2lvdXNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5ncmlkYWxpY2lvdXMoe1xuICAgICAgICAgICAgZ3V0dGVyOiAkKHRoaXMpLmRhdGEoJ2d1dHRlcicpIHx8IDE1LFxuICAgICAgICAgICAgd2lkdGg6ICQodGhpcykuZGF0YSgnd2lkdGgnKSB8fCAzNzAsXG4gICAgICAgICAgICBzZWxlY3RvcjogJz4gZGl2J1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCJ2YXIgYXN5bmNMb2FkZXIgPSByZXF1aXJlKCcuLi9saWIvYXN5bmMnKTtcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgY2hhbmdlU2tpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNraW4gPSAkLmNvb2tpZShcInNraW5cIik7XG4gICAgICAgIGlmICh0eXBlb2Ygc2tpbiAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYXN5bmNMb2FkZXIoWyAnY3NzLycgKyBza2luICsgJy5taW4uY3NzJyBdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5yZW1vdmVQcm9wKCdkaXNhYmxlZCcpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkKCdbZGF0YS1za2luXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAkLmNvb2tpZShcInNraW5cIiwgJCh0aGlzKS5kYXRhKCdza2luJykpO1xuXG4gICAgICAgIGNoYW5nZVNraW4oKTtcblxuICAgIH0pO1xuXG4gICAgdmFyIHNraW4gPSAkLmNvb2tpZShcInNraW5cIik7XG5cbiAgICBpZiAodHlwZW9mIHNraW4gIT0gJ3VuZGVmaW5lZCcgJiYgc2tpbiAhPSAnZGVmYXVsdCcpIHtcbiAgICAgICAgY2hhbmdlU2tpbigpO1xuICAgIH1cblxufSkoalF1ZXJ5KTsiLCJyZXF1aXJlKCcuL19icmVha3BvaW50cycpO1xucmVxdWlyZSgnLi9fc2tpbnMnKTtcbnJlcXVpcmUoJy4vX2dyaWRhbGljaW91cycpO1xucmVxdWlyZSgnLi4vY29tcG9uZW50cy9mb3Jtcy9tYWluJyk7XG5yZXF1aXJlKCcuLi9jb21wb25lbnRzL3RhYmxlcy9tYWluJyk7XG5yZXF1aXJlKCcuLi9jb21wb25lbnRzL290aGVyL19kcm9wZG93bicpO1xucmVxdWlyZSgnLi4vY29tcG9uZW50cy9vdGhlci9fdG9vbHRpcCcpO1xucmVxdWlyZSgnLi4vY29tcG9uZW50cy9vdGhlci9fb2ZmY2FudmFzJyk7XG5yZXF1aXJlKCcuLi9jb21wb25lbnRzL290aGVyL19yYXRpbmdzJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NDgwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbDpub3QoOmxhc3QpJykucmVtb3ZlKCk7XG4gICAgICAgICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsJykuYXR0cignaWQnLCAnY2hhdC0wMDAxJyk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NzY4JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcygnc2hvdy1jaGF0Jyk7XG5cbiAgICAgICAgaWYgKCQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsJykubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsOmZpcnN0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbDpmaXJzdCcpLmF0dHIoJ2lkJywgJ2NoYXQtMDAwMScpO1xuICAgICAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWw6bGFzdCcpLmF0dHIoJ2lkJywgJ2NoYXQtMDAwMicpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZXhpdEJyZWFrcG9pbnQ3NjgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKCdzaG93LWNoYXQnKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghJCgnYm9keScpLmhhc0NsYXNzKCdzaG93LWNoYXQnKSkge1xuICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbC1ib2R5JykuYWRkQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIGlucHV0JykuYWRkQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICBpZiAoJCgnLnNpZGViYXIubGVmdCcpLmxlbmd0aCAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkgJCgnYm9keScpLmFkZENsYXNzKCdzaG93LXNpZGViYXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbC1ib2R5JykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIGlucHV0JykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICBpZiAoJCgnLnNpZGViYXIubGVmdCcpLmxlbmd0aCkgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdzaG93LXNpZGViYXInKTtcbiAgICB9XG59O1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBmdW5jdGlvbiBjaGVja0NoYXQoKSB7XG4gICAgICAgIGlmICghICQoJ2JvZHknKS5oYXNDbGFzcygnc2hvdy1jaGF0JykpIHtcbiAgICAgICAgICAgICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsLWJvZHknKS5hZGRDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIGlucHV0JykuYWRkQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWwtYm9keScpLnJlbW92ZUNsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgICAgICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgaW5wdXQnKS5yZW1vdmVDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NoYXQoKTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgLy8gbWF0Y2ggYW55dGhpbmdcbiAgICAkLmV4cHJbIFwiOlwiIF0uY29udGFpbnNOb0Nhc2UgPSBmdW5jdGlvbiAoZWwsIGksIG0pIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9IG1bIDMgXTtcbiAgICAgICAgaWYgKCEgc2VhcmNoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHNlYXJjaCwgXCJpXCIpLnRlc3QoJChlbCkudGV4dCgpKTtcbiAgICB9O1xuXG4gICAgLy8gU2VhcmNoIEZpbHRlclxuICAgIGZ1bmN0aW9uIHNlYXJjaEZpbHRlckNhbGxCYWNrKCRkYXRhLCAkb3B0KSB7XG4gICAgICAgIHZhciBzZWFyY2ggPSAkZGF0YSBpbnN0YW5jZW9mIGpRdWVyeSA/ICRkYXRhLnZhbCgpIDogJCh0aGlzKS52YWwoKSxcbiAgICAgICAgICAgIG9wdCA9IHR5cGVvZiAkb3B0ID09ICd1bmRlZmluZWQnID8gJGRhdGEuZGF0YS5vcHQgOiAkb3B0O1xuXG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChvcHQudGFyZ2V0U2VsZWN0b3IpO1xuICAgICAgICAkdGFyZ2V0LnNob3coKTtcblxuICAgICAgICBpZiAoc2VhcmNoICYmIHNlYXJjaC5sZW5ndGggPj0gb3B0LmNoYXJDb3VudCkge1xuICAgICAgICAgICAgJHRhcmdldC5ub3QoXCI6Y29udGFpbnNOb0Nhc2UoXCIgKyBzZWFyY2ggKyBcIilcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaW5wdXQgZmlsdGVyXG4gICAgJC5mbi5zZWFyY2hGaWx0ZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgb3B0ID0gJC5leHRlbmQoe1xuICAgICAgICAgICAgLy8gdGFyZ2V0IHNlbGVjdG9yXG4gICAgICAgICAgICB0YXJnZXRTZWxlY3RvcjogXCJcIixcbiAgICAgICAgICAgIC8vIG51bWJlciBvZiBjaGFyYWN0ZXJzIGJlZm9yZSBzZWFyY2ggaXMgYXBwbGllZFxuICAgICAgICAgICAgY2hhckNvdW50OiAxXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyICRlbCA9ICQodGhpcyk7XG4gICAgICAgICAgICAkZWwub2ZmKFwia2V5dXBcIiwgc2VhcmNoRmlsdGVyQ2FsbEJhY2spO1xuICAgICAgICAgICAgJGVsLm9uKFwia2V5dXBcIiwgbnVsbCwge29wdDogb3B0fSwgc2VhcmNoRmlsdGVyQ2FsbEJhY2spO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAvLyBGaWx0ZXIgYnkgQWxsL09ubGluZS9PZmZsaW5lXG4gICAgJChcIi5jaGF0LWZpbHRlciBhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcuY2hhdC1jb250YWN0cyBsaScpLmhpZGUoKTtcbiAgICAgICAgJCgnLmNoYXQtY29udGFjdHMnKS5maW5kKCQodGhpcykuZGF0YSgndGFyZ2V0JykpLnNob3coKTtcblxuICAgICAgICAkKFwiLmNoYXQtZmlsdGVyIGxpXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgJChcIi5jaGF0LXNlYXJjaCBpbnB1dFwiKS5zZWFyY2hGaWx0ZXIoe3RhcmdldFNlbGVjdG9yOiBcIi5jaGF0LWNvbnRhY3RzIFwiICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQnKX0pO1xuXG4gICAgICAgIC8vIEZpbHRlciBDb250YWN0cyBieSBTZWFyY2ggYW5kIFRhYnNcbiAgICAgICAgc2VhcmNoRmlsdGVyQ2FsbEJhY2soJChcIi5jaGF0LXNlYXJjaCBpbnB1dFwiKSwge1xuICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3I6IFwiLmNoYXQtY29udGFjdHMgXCIgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpLFxuICAgICAgICAgICAgY2hhckNvdW50OiAxXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gVHJpZ2dlciBTZWFyY2ggRmlsdGVyXG4gICAgJChcIi5jaGF0LXNlYXJjaCBpbnB1dFwiKS5zZWFyY2hGaWx0ZXIoe3RhcmdldFNlbGVjdG9yOiBcIi5jaGF0LWNvbnRhY3RzIGxpXCJ9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiY2hhdC1ib3hcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIuY2hhdC1jb250YWN0cyBsaTpmaXJzdFwiKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICBpZiAoJCh0aGlzKS5kYXRhKCdoaWRlJykpICQodGhpcykuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRvZ2dsZUJ0biA9ICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItY2hhdFwiXScpO1xuXG4gICAgICAgIC8vIElmIE5vIFNpZGViYXIgRXhpdFxuICAgICAgICBpZiAoIXRvZ2dsZUJ0bi5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0b2dnbGVCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3Nob3ctY2hhdCcpO1xuXG4gICAgICAgICAgICByZXF1aXJlKCcuL19jaGVjay1jaGF0JykoKTtcbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIHJlcXVpcmUoJy4vX2NoZWNrLWNoYXQnKSgpO1xufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBjb250YWluZXIgPSAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyJyk7XG5cbiAgICAvLyBDbGljayBVc2VyXG4gICAgJChcIi5jaGF0LWNvbnRhY3RzIGxpXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciBbZGF0YS11c2VyLWlkPVwiJyArICQodGhpcykuZGF0YSgndXNlcklkJykgKyAnXCJdJykubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgLy8gSWYgdXNlciBpcyBvZmZsaW5lIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKCQodGhpcykuYXR0cignY2xhc3MnKSA9PT0gJ29mZmxpbmUnKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHNvdXJjZSA9ICQoXCIjY2hhdC13aW5kb3ctdGVtcGxhdGVcIikuaHRtbCgpO1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoc291cmNlKTtcblxuICAgICAgICB2YXIgY29udGV4dCA9IHt1c2VyX2ltYWdlOiAkKHRoaXMpLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpLCB1c2VyOiAkKHRoaXMpLmZpbmQoJy5jb250YWN0LW5hbWUnKS50ZXh0KCl9O1xuICAgICAgICB2YXIgaHRtbCA9IHRlbXBsYXRlKGNvbnRleHQpO1xuXG4gICAgICAgIHZhciBjbG9uZSA9ICQoaHRtbCk7XG5cbiAgICAgICAgY2xvbmUuYXR0cihcImRhdGEtdXNlci1pZFwiLCAkKHRoaXMpLmRhdGEoXCJ1c2VySWRcIikpO1xuXG4gICAgICAgIGNvbnRhaW5lci5maW5kKCcucGFuZWw6bm90KFtpZF49XCJjaGF0XCJdKScpLnJlbW92ZSgpO1xuXG4gICAgICAgIHZhciBjb3VudCA9IGNvbnRhaW5lci5maW5kKCcucGFuZWwnKS5sZW5ndGg7XG5cbiAgICAgICAgY291bnQgKys7XG4gICAgICAgIHZhciBsaW1pdCA9ICQod2luZG93KS53aWR0aCgpID4gNzY4ID8gMyA6IDE7XG4gICAgICAgIGlmIChjb3VudCA+PSBsaW1pdCkge1xuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoJyNjaGF0LTAwMCcrIGxpbWl0KS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvdW50ID0gbGltaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBjbG9uZS5hdHRyKCdpZCcsICdjaGF0LTAwMCcgKyBwYXJzZUludChjb3VudCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGNsb25lKS5zaG93KCk7XG5cbiAgICAgICAgY2xvbmUuc2hvdygpO1xuICAgICAgICBjbG9uZS5maW5kKCc+IC5wYW5lbC1ib2R5JykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICBjbG9uZS5maW5kKCc+IGlucHV0JykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2hhbmdlIElEIGJ5IE5vLiBvZiBXaW5kb3dzXG4gICAgZnVuY3Rpb24gY2hhdExheW91dCgpIHtcbiAgICAgICAgY29udGFpbmVyLmZpbmQoJy5wYW5lbCcpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICdjaGF0LTAwMCcgKyBwYXJzZUludChpbmRleCArIDEpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIHdpbmRvd1xuICAgICQoXCJib2R5XCIpLm9uKCdjbGljaycsIFwiLmNoYXQtd2luZG93LWNvbnRhaW5lciAuY2xvc2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgICBjaGF0TGF5b3V0KCk7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lcicpLmhpZGUoKTtcbiAgICB9KTtcblxuICAgIC8vIENoYXQgaGVhZGluZyBjb2xsYXBzZSB3aW5kb3dcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsLWhlYWRpbmcnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgnPiAucGFuZWwtYm9keScpLnRvZ2dsZUNsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCc+IGlucHV0JykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwicmVxdWlyZSgnLi9fYnJlYWtwb2ludHMnKTtcbnJlcXVpcmUoJy4vX3NlYXJjaCcpO1xucmVxdWlyZSgnLi9fd2luZG93cycpO1xucmVxdWlyZSgnLi9fdG9nZ2xlJyk7XG5yZXF1aXJlKCcuL19oaWRlJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBEYXRlcGlja2VyIElOSVRcbiAgICAkKCcuZGF0ZXBpY2tlcicpLmRhdGVwaWNrZXIoKTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gTWluaWNvbG9ycyBJTklUXG4gICAgJCgnLm1pbmljb2xvcnMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5taW5pY29sb3JzKHtcbiAgICAgICAgICAgIGNvbnRyb2w6ICQodGhpcykuYXR0cignZGF0YS1jb250cm9sJykgfHwgJ2h1ZScsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6ICQodGhpcykuYXR0cignZGF0YS1kZWZhdWx0VmFsdWUnKSB8fCAnJyxcbiAgICAgICAgICAgIGlubGluZTogJCh0aGlzKS5hdHRyKCdkYXRhLWlubGluZScpID09PSAndHJ1ZScsXG4gICAgICAgICAgICBsZXR0ZXJDYXNlOiAkKHRoaXMpLmF0dHIoJ2RhdGEtbGV0dGVyQ2FzZScpIHx8ICdsb3dlcmNhc2UnLFxuICAgICAgICAgICAgb3BhY2l0eTogJCh0aGlzKS5hdHRyKCdkYXRhLW9wYWNpdHknKSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAkKHRoaXMpLmF0dHIoJ2RhdGEtcG9zaXRpb24nKSB8fCAnYm90dG9tIGxlZnQnLFxuICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoaGV4LCBvcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCEgaGV4KSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHkpIGhleCArPSAnLCAnICsgb3BhY2l0eTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGhleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoZW1lOiAnYm9vdHN0cmFwJ1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgLy8gUHJvZ3Jlc3MgQmFyIEFuaW1hdGlvblxuICAgICQoJy5wcm9ncmVzcy1iYXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS53aWR0aCgkKHRoaXMpLmF0dHIoJ2FyaWEtdmFsdWVub3cnKSArICclJyk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkKCcuc2VsZWN0cGlja2VyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICB3aWR0aDogJCh0aGlzKS5kYXRhKCd3aWR0aCcpIHx8ICcxMDAlJ1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJCgnI2V4MScpLnNsaWRlcih7XG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0N1cnJlbnQgdmFsdWU6ICcgKyB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIiNleDJcIikuc2xpZGVyKCk7XG5cbiAgICAkKFwiI2V4NlwiKS5zbGlkZXIoKTtcblxuICAgICQoXCIjZXg2XCIpLm9uKFwic2xpZGVcIiwgZnVuY3Rpb24gKHNsaWRlRXZ0KSB7XG4gICAgICAgICQoXCIjZXg2U2xpZGVyVmFsXCIpLnRleHQoc2xpZGVFdnQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgJCgnLnNsaWRlci1oYW5kbGUnKS5odG1sKCc8aSBjbGFzcz1cImZhIGZhLWJhcnMgZmEtcm90YXRlLTkwXCI+PC9pPicpO1xuXG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vX3Byb2dyZXNzLWJhcnMnKTtcbnJlcXVpcmUoJy4vX3NsaWRlcicpO1xucmVxdWlyZSgnLi9fc2VsZWN0cGlja2VyJyk7XG5yZXF1aXJlKCcuL19kYXRlcGlja2VyJyk7XG5yZXF1aXJlKCcuL19taW5pY29sb3JzJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBEcm9wZG93blxuICAgICQoJy5kcm9wZG93bi10b2dnbGUnKS5kcm9wZG93bigpO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBPZmZDYW52YXNcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJvZmZjYW52YXNcIl0nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5yb3ctb2ZmY2FudmFzJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBSYXRpbmdzXG4gICAgJCgnLnJhdGluZyBzcGFuLnN0YXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0b3RhbCA9ICQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oKS5sZW5ndGg7XG4gICAgICAgIHZhciBjbGlja2VkSW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XG4gICAgICAgICQoJy5yYXRpbmcgc3Bhbi5zdGFyJykucmVtb3ZlQ2xhc3MoJ2ZpbGxlZCcpO1xuICAgICAgICBmb3IgKHZhciBpID0gY2xpY2tlZEluZGV4OyBpIDwgdG90YWw7IGkgKyspIHtcbiAgICAgICAgICAgICQoJy5yYXRpbmcgc3Bhbi5zdGFyJykuZXEoaSkuYWRkQ2xhc3MoJ2ZpbGxlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIFRvb2x0aXBcbiAgICAkKFwiYm9keVwiKS50b29sdGlwKHtzZWxlY3RvcjogJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nLCBjb250YWluZXI6IFwiYm9keVwifSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQ3NjgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKCdzaG93LXNpZGViYXInKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQ0ODAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKCdzaG93LXNpZGViYXInKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIC8vIFNjcm9sbFxuICAgICQoJ1tkYXRhLXNjcm9sbGFibGVdJykubmljZVNjcm9sbCh7Y3Vyc29yYm9yZGVyOiAwLCBjdXJzb3Jjb2xvcjogXCIjMjVhZDlmXCJ9KTtcbiAgICAkKCdbZGF0YS1zY3JvbGxhYmxlXScpLmdldE5pY2VTY3JvbGwoKS5yZXNpemUoKTtcbiAgICAkKCcjbWVudSB1bC5jb2xsYXBzZScpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQoJyNtZW51JykuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ29sbGFwc2VcbiAgICAkKCcjbWVudSB1bC5jb2xsYXBzZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdmFyIHBhcmVudHMgPSAkKHRoaXMpLnBhcmVudHMoJ3VsOmZpcnN0JykuZmluZCgnPiBsaS5vcGVuIFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJyk7XG4gICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFyZW50cy50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgIH0pO1xuXG4gICAgJCgnI21lbnUgdWwuY29sbGFwc2UnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgfSk7XG5cbn0oalF1ZXJ5KSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgJCgnI3N1Ym5hdicpLmNvbGxhcHNlKHsndG9nZ2xlJzogZmFsc2V9KTtcblxuICAgIHZhciB0b2dnbGVCdG4gPSAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl0nKTtcblxuICAgIC8vIElmIE5vIFNpZGViYXIgRXhpdFxuICAgIGlmICghdG9nZ2xlQnRuLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgdG9nZ2xlQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCgnYm9keScpLmlzKCcuc2hvdy1jaGF0JykpICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnc2hvdy1jaGF0Jyk7XG5cbiAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaG93LXNpZGViYXInKTtcblxuICAgICAgICAvLyBDaGVjayBjaGF0IHdpbmRvd3NcbiAgICAgICAgcmVxdWlyZSgnLi4vY2hhdC9fY2hlY2stY2hhdCcpKCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fYnJlYWtwb2ludHMnKTtcbnJlcXVpcmUoJy4vX3NpZGViYXItbWVudScpO1xucmVxdWlyZSgnLi9fc2lkZWJhci10b2dnbGUnKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIFRhYmxlIENoZWNrYm94IEFsbFxuICAgICQoJyNjaGVja0FsbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndGFibGUnKS5maW5kKCd0ZCBpbnB1dDpjaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAvLyBEYXRhdGFibGVzXG4gICAgJCgnI2RhdGEtdGFibGUnKS5kYXRhVGFibGUoKTtcblxufSkoalF1ZXJ5KTsiLCJyZXF1aXJlKCcuL19kYXRhdGFibGVzJyk7XG5yZXF1aXJlKCcuL19jaGVjay1hbGwnKTsiLCJmdW5jdGlvbiBjb250ZW50TG9hZGVkKHdpbiwgZm4pIHtcblxuICAgIHZhciBkb25lID0gZmFsc2UsIHRvcCA9IHRydWUsXG5cbiAgICAgICAgZG9jID0gd2luLmRvY3VtZW50LFxuICAgICAgICByb290ID0gZG9jLmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgbW9kZXJuID0gZG9jLmFkZEV2ZW50TGlzdGVuZXIsXG5cbiAgICAgICAgYWRkID0gbW9kZXJuID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ2F0dGFjaEV2ZW50JyxcbiAgICAgICAgcmVtID0gbW9kZXJuID8gJ3JlbW92ZUV2ZW50TGlzdGVuZXInIDogJ2RldGFjaEV2ZW50JyxcbiAgICAgICAgcHJlID0gbW9kZXJuID8gJycgOiAnb24nLFxuXG4gICAgICAgIGluaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUudHlwZSA9PSAncmVhZHlzdGF0ZWNoYW5nZScgJiYgZG9jLnJlYWR5U3RhdGUgIT0gJ2NvbXBsZXRlJykgcmV0dXJuO1xuICAgICAgICAgICAgKGUudHlwZSA9PSAnbG9hZCcgPyB3aW4gOiBkb2MpWyByZW0gXShwcmUgKyBlLnR5cGUsIGluaXQsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICghIGRvbmUgJiYgKGRvbmUgPSB0cnVlKSkgZm4uY2FsbCh3aW4sIGUudHlwZSB8fCBlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByb290LmRvU2Nyb2xsKCdsZWZ0Jyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChwb2xsLCA1MCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5pdCgncG9sbCcpO1xuICAgICAgICB9O1xuXG4gICAgaWYgKGRvYy5yZWFkeVN0YXRlID09ICdjb21wbGV0ZScpIGZuLmNhbGwod2luLCAnbGF6eScpO1xuICAgIGVsc2Uge1xuICAgICAgICBpZiAoISBtb2Rlcm4gJiYgcm9vdC5kb1Njcm9sbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0b3AgPSAhIHdpbi5mcmFtZUVsZW1lbnQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG9wKSBwb2xsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jWyBhZGQgXShwcmUgKyAnRE9NQ29udGVudExvYWRlZCcsIGluaXQsIGZhbHNlKTtcbiAgICAgICAgZG9jWyBhZGQgXShwcmUgKyAncmVhZHlzdGF0ZWNoYW5nZScsIGluaXQsIGZhbHNlKTtcbiAgICAgICAgd2luWyBhZGQgXShwcmUgKyAnbG9hZCcsIGluaXQsIGZhbHNlKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJscywgY2FsbGJhY2spIHtcblxuICAgIHZhciBhc3luY0xvYWRlciA9IGZ1bmN0aW9uICh1cmxzLCBjYWxsYmFjaykge1xuXG4gICAgICAgIHVybHMuZm9yZWFjaChmdW5jdGlvbiAoaSwgZmlsZSkge1xuICAgICAgICAgICAgbG9hZENzcyhmaWxlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2hlY2tpbmcgZm9yIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBjYWxsaW5nIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgY29udGVudExvYWRlZCh3aW5kb3csIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbG9hZENzcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbIDAgXS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9O1xuXG4gICAgLy8gc2ltcGxlIGZvcmVhY2ggaW1wbGVtZW50YXRpb25cbiAgICBBcnJheS5wcm90b3R5cGUuZm9yZWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhpLCB0aGlzWyBpIF0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jTG9hZGVyKHVybHMsIGNhbGxiYWNrKTtcblxufTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmICghJCgnLmN1cnJpY3VsdW0nKS5sZW5ndGgpIHJldHVybjtcblxuICAgICQoJy5jdXJyaWN1bHVtIC5saXN0LWdyb3VwLWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcbiAgICB9KTtcblxuICAgICQoJy5jdXJyaWN1bHVtIC5jb2xsYXBzZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY3VycmljdWx1bScpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuY3VycmljdWx1bSAuY29sbGFwc2UnKS5vbignaGlkZS5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmN1cnJpY3VsdW0nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIl19
