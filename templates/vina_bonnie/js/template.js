/** * @package sample data Jshopping * @author VinaGecko.com http://VinaGecko.com * @copyright Copyright (C) 2014 www.VinaGecko.com * @license http://www.gnu.org/licenseses/gpl-3.0.html GNU/GPL */var $jq=jQuery.noConflict();var str_danh_muc_sp="Danh mục sản phẩm";$jq(window).scroll(function () {	var scroll_top=$jq(this).scrollTop();	if ($jq(this).scrollTop() > 0) {		$jq('#sp-top-wrapper').addClass("nav-container-fix");		if(scroll_top>912)		{			if($jq('#danh_muc_sp').length==0){				var $danh_muc_sp_content_top=$jq('<div id="danh_muc_sp_content_top"></div>');				$danh_muc_sp_content_top.prependTo($jq('#sp-top_menu_left'));				if($jq('#temp_mod_menu').length==0){					var $temp_mod_menu=$jq('<div id="temp_mod_menu"></div>');					$temp_mod_menu.insertAfter($jq('.mod_menu.homeverticalmenutag'));				}				var $danh_muc_sp=$jq('<div id="danh_muc_sp">'+str_danh_muc_sp+'</div></div>');				$danh_muc_sp.prependTo($jq('#sp-top_menu_left'));				var second=100;				var timeout;				$danh_muc_sp.hover(					function () {						clearTimeout(timeout);						$jq(this).addClass('hover');						$jq('body').addClass('header_bar_hover');						$danh_muc_sp_content_top.show();					},					function () {						$jq(this).removeClass('hover');						timeout = setTimeout(function() {							$jq('body').removeClass('header_bar_hover');							$danh_muc_sp_content_top.hide();						}, second);					}				);				$danh_muc_sp_content_top.hover(function() {					clearTimeout(timeout);					$jq('body').addClass('header_bar_hover');					$danh_muc_sp.addClass('hover');				}, function() {					timeout = setTimeout(function() {						$danh_muc_sp_content_top.hide();						$danh_muc_sp.removeClass('hover');						$jq('body').removeClass('header_bar_hover');					}, second);				});			}			if($jq('#danh_muc_sp_content_top .mod_menu.homeverticalmenutag').length==0) {				$jq('.mod_menu.homeverticalmenutag').appendTo($jq('#danh_muc_sp_content_top'));			}			/*$jq('#sp-top_menu_left').removeClass('span6').addClass('span7');			$jq('#sp-top_right_menu').removeClass('span6').addClass('span5');*/			$jq('#danh_muc_sp').show();		}	} else {		$jq('#sp-top-wrapper').removeClass("nav-container-fix");	}	if(scroll_top<=912)	{		$jq('#danh_muc_sp').hide();		$jq('#danh_muc_sp_content_top').hide();		$jq('.mod_menu.homeverticalmenutag').insertBefore($jq('#temp_mod_menu'));		/*$jq('#sp-top_menu_left').removeClass('span7').addClass('span6');		$jq('#sp-top_right_menu').removeClass('span5').addClass('span6');*/	}});/* FC - Mini Cart Effect */function slideEffectMiniCart() {	$jq('.block-mini-cart').mouseenter(function() {		$jq(this).find(".mini-cart-content").stop(true, true).slideDown();	});	//hide submenus on exit	$jq('.block-mini-cart').mouseleave(function() {		$jq(this).find(".mini-cart-content").stop(true, true).slideUp();	});}$jq(document).ready(function($){	var galleryBlock = $("ul.gallery");	/* Off-Canvas Menu Block */	$sidebaroffcanvas = $(".sidebar-offcanvas");	$sidebaroffcanvas.height($(window).height());	galleryBlock.parents('.row-fluid').addClass('visiable-gallery');	$sidebaroffcanvas = $(".sidebar-offcanvas");	$sidebaroffcanvas.height($(window).height());	/*if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {	 $('body').swipe({	 swipeLeft: function(event, phase, direction, distance) {	 $('.row-offcanvas').removeClass('active');	 },	 swipeRight: function(event, phase, direction, distance) {	 $('.row-offcanvas').addClass('active');	 }	 });	 }*/	$('#product-details-tab a').click(function (e) {		e.preventDefault();		$(this).tab('show');	})	$('[data-toggle=offcanvas]').click(function () {		$('.row-offcanvas').toggleClass('active');	});	/* Multi Language Effect */	$('.mod-languages').hover(function() {		$('.mod-languages .btn-group').addClass("open").parent().addClass("nav-hover");	}, function(){		$('.mod-languages .btn-group').removeClass("open").parent().removeClass("nav-hover");	});	/* Mini Cart Effect */	slideEffectMiniCart();	/* Tooltip */	$('.tooltip, [rel="tooltip"], .vm-product-details-inner .icons a').tooltip();	/* Goto Top */	$(window).scroll(function(event) {		if ($(this).scrollTop() > 300) {			$('.sp-totop').fadeIn();			$('.sp-totop').css({"visibility": "visible"});		} else {			$('.sp-totop').fadeOut();		}	});	$('.sp-totop').click(function(){		$('html').animate({			scrollTop: 0		}, 500);	});	$('.sp-totop').parents('.row-fluid').addClass('visiable-gallery');	$(window).resize(function(){		$(this).load();	});}); 