//huong dan su dung/* $('.homeverticalmenutag').homeverticalmenutag(); homeverticalmenutag=$('.homeverticalmenutag').data('homeverticalmenutag'); console.log(homeverticalmenutag); */// jQuery Plugin for SprFlat admin homeverticalmenutag// Control options and basic function of homeverticalmenutag// version 1.0, 28.02.2013// by SuggeElson www.suggeelson.com(function ($) {    // here we go!    $.homeverticalmenutag = function (element, options) {        // plugin's default options        var defaults = {            //main color scheme for homeverticalmenutag            //be sure to be same as colors on main.css or custom-variables.less            module_id: 0,            second: 200        }        // current instance of the object        var plugin = this;        // this will hold the merged default, and user-provided options        plugin.settings = {}        var $element = $(element), // reference to the jQuery version of DOM element            element = element;    // reference to the actual DOM element        // the "constructor" method that gets called when the object is created        plugin.init = function () {            plugin.settings = $.extend({}, defaults, options);            var second = plugin.settings.second;            $element.hover(function () {                $('body').addClass('header_bar_hover');                $('#sp-top-wrapper.nav-container-fix').hide();            }, function () {                $('body').removeClass('header_bar_hover');                $('#sp-top-wrapper.nav-container-fix').show();            });            $element.find('.container-home-page .container-content').mCustomScrollbar({                axis: "y"            });            $element.find('ul.level-0 .menu-iem.level-1').hover(function () {                var li_top= $(this).offset().top;                var $first_li_element= $element.find('ul.level-0 .menu-iem.level-1:first');                console.log($first_li_element.is(":visible"));                if(!$first_li_element.is(":visible"))                {                }                $element.find(".container-home-page .container-content").offset({                    //top: li_top                });                $(this).addClass('hover');                var menu_id=$(this).data('menu_id');                var color=$(this).data('color');                $(this).css({                    background: color                });            }, function () {                $(this).removeClass('hover');                $(this).css({                    background: "none"                });            });            /*             var timeout;             $element.find('ul.level-0 .menu-iem.level-1').hover(             function () {             console.log('hello123');             $(this).addClass('hover');             var menu_id=$(this).data('menu_id');             var color=$(this).data('color');             $(this).css({             background: color             });             $element.find('.container-home-page').show();             $element.find('.container-content').hide();             $element.find('#container-'+menu_id+'.container-content').show();             $('body').addClass('header_bar_hover');             var load_image_ok=$(this).data('load_image_ok');             if(load_image_ok!="done") {             $(this).data('load_image_ok', "done");             var y = $(window).scrollTop();  //your current y position on the page             $(window).scrollTop(y + 1);             }             clearTimeout(timeout);             },             function () {             $(this).removeClass('hover');             $(this).css({             background: "none"             });             timeout = setTimeout(function() {             $element.find('.container-home-page').hide();             $('body').removeClass('header_bar_hover');             }, second);             }             );             var timeout;             $element.find('.container-home-page').hover(             function () {             clearTimeout(timeout);             $(this).addClass('hover');             $('body').addClass('header_bar_hover');             var group_menu_item_id=$(this).find('.container-content:visible').data('group_menu_item_id');             var $li=$element.find('.level-0 .menu-iem.menu-iem-'+group_menu_item_id);             var color=$li.data('color');             $li.css({             background: color             });             },             function () {             $(this).removeClass('hover');             var group_menu_item_id=$(this).find('.container-content:visible').data('group_menu_item_id');             var $li=$element.find('.level-0 .menu-iem.menu-iem-'+group_menu_item_id);             $li.css({             background: "none"             });             timeout = setTimeout(function() {             $element.find('.container-home-page').hide();             $('body').removeClass('header_bar_hover');             }, second);             }             );             var timeout1;             var background_color='#7cb342';             $element.find('.list_menu_level_2_3 li').hover(             function () {             clearTimeout(timeout1);             $(this).addClass('hover');             var group_menu_id=$(this).data('group_menu_id');             var $element_group=$element.find('.list_menu_level_2_3 li[data-group_menu_id="'+group_menu_id+'"]');             $element_group.css({             background: background_color             });             },             function () {             $(this).removeClass('hover');             var group_menu_id=$(this).data('group_menu_id');             var $element_group=$element.find('.list_menu_level_2_3 li[data-group_menu_id="'+group_menu_id+'"]');             $element_group.css({             background: "none"             });             timeout1 = setTimeout(function() {             }, second);             }             );*/        }        plugin.example_function = function () {        }        plugin.init();    }    // add the plugin to the jQuery.fn object    $.fn.homeverticalmenutag = function (options) {        // iterate through the DOM elements we are attaching the plugin to        return this.each(function () {            // if plugin has not already been attached to the element            if (undefined == $(this).data('homeverticalmenutag')) {                var plugin = new $.homeverticalmenutag(this, options);                $(this).data('homeverticalmenutag', plugin);            }        });    }})(jQuery);