function preventDefault(a){a=a||window.event,a.preventDefault&&a.preventDefault(),a.returnValue=!1}

function keydown(a){for(var b=keys.length;b--;)if(a.keyCode===keys[b])
	return void preventDefault(a)}

function wheel(a){preventDefault(a)}

function disable_scroll(){
	window.addEventListener&&window.addEventListener("DOMMouseScroll",wheel,!1),
	window.onmousewheel=document.onmousewheel=wheel,
	document.onkeydown=keydown}

	function enable_scroll(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",wheel,!1),
	window.onmousewheel=document.onmousewheel=document.onkeydown=null}

	window.App={Models:{},Collections:{},Views:{},Routers:{},

	init:function(){"use strict";this.windowView=new App.Views.Window({el:$("body")}),this.headerView=new App.Views.Header({el:$("header.menus-wrap")}),
	this.mapView=new App.Views.Map({el:$(".map-wrap .map")}),
	this.galleryView=new App.Views.Gallery({el:$("#gallery")})}},

	$(document).ready(function(){"use strict";App.init()}),

	this.JST=this.JST||{},
	App.Views=App.Views||{},

	function(){"use strict";App.Views.Window=Backbone.View.extend({id:"",className:"",events:{"click header a":"clickLinkInMenu"},

		clickLinkInMenu:function(a){var b=this;b.$("header .active").removeClass("active"),
		b.$('a[href="'+$(a.target).attr("href")+'"]').addClass("active");return c.size()>0?(App.scrolling=!0,
			App.menus.removeClass("show-big").addClass("show-small"),
			this.$("header.header .logo img").animate({width:"125px","margin-top":"-20px"},"easeInOutBack"),
			this.$("#start-trial .wrap").fadeOut(400,function(){b.$("header .big-menu").hide()}),

			this.$(".fixed-bg").addClass("bigger"),$("html,body").animate({scrollTop:c.offset().top-80},"slow",function(){setTimeout(function(){App.scrolling=!1,
				App.onTop=!1},500)})):(b.$("header .big-menu").show(),$("header a.active").removeClass("active"),

		disable_scroll(),App.scrolling=!0,this.$(".fixed-bg").removeClass("bigger"),
		App.menus.removeClass("show-small").addClass("show-big"),
		this.$("header.header .logo img").animate({width:"190px","margin-top":"0px"},800,"easeInOutBack"),
		this.$("#start-trial .wrap").delay(200).fadeIn(400),App.body.animate({scrollTop:"0px"},800,
			function(){App.onTop=!0,setTimeout(function(){enable_scroll(),App.scrolling=!1},500),
			App.windowView.hideTooltips()})),!1},
				initialize:function(){$(window).on("scroll",this.onScroll),$(window).on("resize",this.resize),this.resize(),
				App.body=$("html, body"),App.menus=this.$("header.header"),App.onTop=!0},
				resize:function(){App.windowHeight=$(window).height(),App.windowWidth=$(window).width();var a=this;this.offsets=[],
					$(".content-block").each(function(){a.offsets.push({title:$(this).attr("id"),y:$(this).offset().top-40,height:$(this).outerHeight()})})},
					showTooltips:function(){this.$("#tooltips-container").fadeIn(800)},
					hideTooltips:function(){this.$("#tooltips-container").hide()},
					onScroll:function(a){var b=this;return App.scrolling||Modernizr.touch?(a.preventDefault(),!1):App.onTop?(disable_scroll(),App.scrolling=!0,
						App.menus.removeClass("show-big").addClass("show-small"),
						this.$("header.header .logo img").animate({width:"150px","margin-top":"-150px", "margin-left":"-30px", "margin-bottom":"65px"},800,
							"easeInOutBack"),
						this.$("#start-trial .wrap").fadeOut(400),
						this.$(".fixed-bg").addClass("bigger"),
						App.body.animate({scrollTop:App.windowHeight-330},800,
							function(){App.onTop=!1,App.scrolling=!1,
								App.windowView.showTooltips(),enable_scroll(),
								b.$("header .big-menu").hide(),
								$('header a[href="#gallery"]').addClass("active")}),
						a.preventDefault(),!1):(App.scrollTop=$(window).scrollTop(),
						App.windowView.offsets.forEach(function(a){App.scrollTop>a.y&&App.scrollTop<a.y+a.height&&App.currentTitle!==a.title&&($("header a.active").removeClass("active"),
							$('header a[href="#'+a.title+'"]').addClass("active"),
							App.currentTitle=a.title)}),
						!App.onTop&&App.scrollTop<App.windowHeight-400?(b.$("header .big-menu").show(),
							$("header a.active").removeClass("active"),
							disable_scroll(),
							App.scrolling=!0,this.$(".fixed-bg").removeClass("bigger"),
							App.menus.removeClass("show-small").addClass("show-big"),
							this.$("header.header .logo img").animate({width:"250px","margin-top":"-20px", "margin-left":"-80px", "margin-bottom":"0px"},800,"easeInOutBack"),
							this.$("#start-trial .wrap").delay(200).fadeIn(400),
							App.body.animate({scrollTop:"0px"},800,function(){App.onTop=!0,
								setTimeout(function(){enable_scroll(),
									App.scrolling=!1},500),
								App.windowView.hideTooltips()}),a.preventDefault(),!1):void 0)}})}();
	var keys=[37,38,39,40];App.Views=App.Views||{},function(){"use strict";
	App.Views.Header=Backbone.View.extend({showSmallMenu:function(){this.$(".small-main-menu").show().animate({top:"0px"},500),
	this.$(".big-main-menu").animate({opacity:0,"margin-top":"65px"},500,
		function(){$(this).hide()}),
	this.$("a.logo img").stop(!0,!0).animate({width:"125px","margin-top":"-8px", "margin-left":""},900,"easeInOutBack")},
	showBigMenu:function(){this.$(".small-main-menu").animate({top:"-80px"},500,
		function(){$(this).hide()}),this.$(".big-main-menu").show().animate({opacity:1,"margin-top":""},500),
	this.$("a.logo img").stop(!0,!0).animate({width:"190px","margin-top":"65px"},900,"easeInOutBack")}})}();

