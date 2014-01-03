var ogFSize, ogSmSize, ogLgSize; // for gallery
var Historian = {
	Init : function(){
		Historian.Blueberry();
		Historian.Maps();
		Historian.LogoPos();
		Historian.PageTransition();
		Historian.TopBar();
	},
	TopBar : function(){
		var a = $(document.body),I = $("header"),z = $("header ul.nav a"),J = $("header .about"),m = $("header .contact"),H = function (b) {b && b.preventDefault();z.removeClass("selected");a.removeClass("header");I.removeClass("expand");m.addClass("instant");J.addClass("instant");};z.on("click", function (b) {b && b.preventDefault();b = $(this).attr("href");"/" === b && a.hasClass("header") ? H() :"/" === b ? (history.pushState(null, null, "/"), K()) :"lab" === b ? (z.removeClass("selected"), $(this).addClass("selected"), L = b, "about" === b ? (J.removeClass("instant").removeClass("hide"), m.removeClass("instant").addClass("hide")) : (m.removeClass("instant").removeClass("hide"), J.removeClass("instant").addClass("hide"))) : a.hasClass("header") && b == L ? H() : (L = b, z.removeClass("selected"),$(this).addClass("selected"), a.addClass("header"), I.addClass("expand"), "about" === b ? (J.removeClass("hide"), m.addClass("hide")) : (m.removeClass("hide"), J.addClass("hide")))});
	},
	PageTransition : function(){
		$(".pageContainer").hide().fadeIn(600);
		
		$(document).on('click','.mainnav .nav li a',function(e){
			e.preventDefault();
			var thelink = $(this).attr('href');
			$(".pageContainer").fadeOut(300,function(){
				window.location = thelink;	
			});
		});
	},
	LogoPos : function(){
		$(window).scroll( function() {
			var value = $(this).scrollTop();
			if ( value > 120 ){
				s = $(".brand img").attr("src");
				s = s.replace("logo.png", "logo_med3.png");
				$(".brand img").attr("src", s);
				
				lc = $(".brand_sm1").attr("src");
				lc = lc.replace("logo-ctr.png", "logo-ctr_sm.png");
				$(".brand_sm1").attr("src", lc);
				
				mb = $(".brand_sm2").attr("src");
				mb = mb.replace("logo_mb.png", "logo_med3.png");
				$(".brand_sm2").attr("src", mb);
			}
			else {
				s = $(".brand img").attr("src");
				s = s.replace("logo_med3.png", "logo.png");
				$(".brand img").attr("src", s);
				
				lc = $(".brand_sm1").attr("src");
				lc = lc.replace("logo-ctr_sm.png", "logo-ctr.png");
				$(".brand_sm1").attr("src", lc);
				
				mb = $(".brand_sm2").attr("src");
				mb = mb.replace("logo_med3.png", "logo_mb.png");
				$(".brand_sm2").attr("src", mb);
			}

		});
	},
	Blueberry : function(){
		$(window).load(function() {
			$('.blueberry').blueberry();
		});
	},
	Maps : function(){
		 var  latlng = new google.maps.LatLng(39.717122,-104.987476);
		 var  settings = {
			 zoom: 16,
			 center: latlng,
			 mapTypeControl: true,
			 mapTypeControlOptions: {style:  google.maps.MapTypeControlStyle.DROPDOWN_MENU},
			 navigationControl: true,
			 navigationControlOptions: {style:  google.maps.NavigationControlStyle.SMALL},
			 mapTypeId: google.maps.MapTypeId.ROADMAP};
		 var  map = new google.maps.Map(document.getElementById("map_canvas"),  settings);
	
		 var  companyImage = new  google.maps.MarkerImage('img/logo_sm.png',
			 new google.maps.Size(100,100),
			 new google.maps.Point(0,0),
			 new google.maps.Point(10,50)
		 );


		 var  companyPos = new google.maps.LatLng(39.717122,-104.987476);

		 var  companyMarker = new google.maps.Marker({
			 position: companyPos,
			 map: map,
			 icon: companyImage,
			 title:"Historian's Ale House",
			 zIndex: 3});
	 
	   var infoWindow =  new google.maps.InfoWindow();
		var  company='<div id="content">'+
			 '<div id="siteNotice">'+
			 '</div>'+
			 '<h1 id="firstHeading" class="firstHeading">Historian</h1>'+
			 '<div id="gmapContent">'+
			 '<p>22 Broadway<br />Denver, CO 80203</p>'+
			 '</div>'+
			 '</div>';
		   google.maps.event.addListener(companyMarker,  'click',  function() {
		   infoWindow.setContent(company);
		   infoWindow.open(map,  companyMarker);
		   });	
	}
}
Historian.Init();

(function($){
	$.fn.extend({
		blueberry: function(options) {

			//default values for plugin options
			var defaults = {
				interval: 5000,
				duration: 800,
				lineheight: 1,
				height: 'auto', //reserved
				hoverpause: false,
				pager: true,
				nav: true, //reserved
				keynav: true
			}
			var options =  $.extend(defaults, options);
 
			return this.each(function() {
				var o = options;
				var obj = $(this);

				//store the slide and pager li
				var slides = $('.slides li', obj);
				var pager = $('.pager li', obj);

				//set initial current and next slide index values
				var current = 0;
				var next = current+1;

				//get height and width of initial slide image and calculate size ratio
				var imgHeight = slides.eq(current).find('img').height();
				var imgWidth = slides.eq(current).find('img').width();
				var imgRatio = imgWidth/imgHeight;

				//define vars for setsize function
				var sliderWidth = 0;
				var cropHeight = 0;

				//hide all slides, fade in the first, add active class to first slide
				slides.hide().eq(current).fadeIn(o.duration).addClass('active');
				

				//build pager if it doesn't already exist and if enabled
				if(pager.length) {
					pager.eq(current).addClass('active');
				} else if(o.pager){
					obj.append('<ul class="pager hidden-phone"></ul>');
					slides.each(function(index) {
						$('.pager', obj).append('<li><a href="#"><span>'+index+'</span></a></li>')
					});
					pager = $('.pager li', obj);
					pager.eq(current).addClass('active');
				}

				//rotate to selected slide on pager click
				if(pager){
					$('a', pager).click(function() {
						//stop the timer
						clearTimeout(obj.play);
						//set the slide index based on pager index
						next = $(this).parent().index();
						//rotate the slides
						rotate();
						return false;
					});
				}

				//primary function to change slides
				var rotate = function(){
					//fade out current slide and remove active class,
					//fade in next slide and add active class
					slides.eq(current).fadeOut(o.duration).removeClass('active')
						.end().eq(next).fadeIn(o.duration).addClass('active').queue(function(){
							//add rotateTimer function to end of animation queue
							//this prevents animation buildup caused by requestAnimationFrame
							//rotateTimer starts a timer for the next rotate
							rotateTimer();
							$(this).dequeue()
					});

					//update pager to reflect slide change
					if(pager){
						pager.eq(current).removeClass('active')
							.end().eq(next).addClass('active');
					}

					//update current and next vars to reflect slide change
					//set next as first slide if current is the last
					current = next;
					next = current >= slides.length-1 ? 0 : current+1;
				};
				//create a timer to control slide rotation interval
				var rotateTimer = function(){
					obj.play = setTimeout(function(){
						//trigger slide rotate function at end of timer
						rotate();
					}, o.interval);
				};
				//start the timer for the first time
				rotateTimer();

				//pause the slider on hover
				//disabled by default due to bug
				if(o.hoverpause){
					slides.hover(function(){
						//stop the timer in mousein
						clearTimeout(obj.play);
					}, function(){
						//start the timer on mouseout
						rotateTimer();
					});
				}

				//calculate and set height based on image width/height ratio and specified line height
				var setsize = function(){
					sliderWidth = $('.slides', obj).width();
					cropHeight = Math.floor(((sliderWidth/imgRatio)/o.lineheight))*o.lineheight;

					$('.slides', obj).css({height: cropHeight});
				};
				setsize();

				//bind setsize function to window resize event
				$(window).resize(function(){
					setsize();
				});

				//Add keyboard navigation

				if(o.keynav){
					$(document).keyup(function(e){
						switch (e.which) {
							case 39: case 32: //right arrow & space
								clearTimeout(obj.play);
								rotate();
								break;

							case 37: // left arrow
								clearTimeout(obj.play);
								next = current - 1;
								rotate();
								break;
						}
					});
				}
			});
		}
	});
})(jQuery);