(function ($) {    // here we go!    $.mod_search = function (element, options) {        // plugin's default options        var defaults = {            //main color scheme for mod_search            //be sure to be same as colors on main.css or custom-variables.less            module_id: 0,            style: "table",            params: {}        }        // current instance of the object        var plugin = this;        // this will hold the merged default, and user-provided options        plugin.settings = {}        var $element = $(element), // reference to the jQuery version of DOM element            element = element;    // reference to the actual DOM element        // the "constructor" method that gets called when the object is created        plugin.init = function () {            plugin.settings = $.extend({}, defaults, options);            var params = plugin.settings.params;            $element.find('.search').zozoTabs({                minWindowWidth: 840            });            var $search_by_group_product = $element.find('.wrapper-search .search-by-group-product');            $search_by_group_product.click(function (event) {                return;                var position = $search_by_group_product.offset();                var $dropdown_menu_list_group_product = $(document).find('.list-group-product');                $dropdown_menu_list_group_product.show().// In the right position (the mouse)                css({                    top: position.left + "px",                    left: position.top + "px"                });            });            var $dropdown_menu_list_group_product = $element.find('.wrapper-search .list-group-product');            $dropdown_menu_list_group_product.appendTo('body');        }        plugin.example_function = function () {        }        plugin.init();    }    // add the plugin to the jQuery.fn object    $.fn.mod_search = function (options) {        // iterate through the DOM elements we are attaching the plugin to        return this.each(function () {            // if plugin has not already been attached to the element            if (undefined == $(this).data('mod_search')) {                var plugin = new $.mod_search(this, options);                $(this).data('mod_search', plugin);            }        });    }})(jQuery);