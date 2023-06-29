/* Validation form */
validateForm('validation-newsletter');
if (CARTSITE == true) validateForm('validation-cart');
// validateForm('validation-user');
validateForm('validation-contact');

NN_FRAMEWORK.Random = function () {
	$('.menu ul.menu-main').slideUp(200);
	$(".menu_toggle").click(function() {
		if($(this).hasClass('act')) {
			$(this).removeClass('act');
			$('.menu ul.menu-main').slideUp(300);
		} else {
			$(this).addClass('act');
			$('.menu ul.menu-main').slideDown(300);
		}
	});
}

/* Danh mục quản lý user */
NN_FRAMEWORK.UserInfo = function () {
	$(".container_load_info").hide();
	$(".container_load_info.load1").show();

	$(document).on('click', '.sty_list', function (event) {
		var vitri = $(this).data('vitri');

		$(".container_load_info").hide();
		$(".load" + vitri).show();
		$(this).removeClass('act');
	});
};

/* Chi nhanh */
NN_FRAMEWORK.Map_ChiNhanh = function () {
	var id_item = '';

	$(".item-ht").click(function () {
		$('.item-ht').removeClass('act-item');
		id_item = $(this).data('id');
		$(this).addClass('act-item');

		$.ajax({
			url: 'api/ajax_bando.php',
			type: 'POST',
			dataType: 'html',
			data: { id_item: id_item },
			beforeSend: function () {
				$("#loading").fadeIn(600);
			},
			success: function (result) {
				$("#loading").fadeOut(600);
				$('.ht-left').html(result);
				return false;
			}
		})
	});
};
/* Slicks */
NN_FRAMEWORK.Slicks = function () {
	$('.chay-tintuc-vertical').slick({
		lazyLoad: 'progressive', infinite: true, accessibility: true, vertical: true, verticalSwiping: true,
		slidesToShow: 3, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, speed: 1000, arrows: false,
		centerMode: false, dots: false, draggable: true, responsive: [
			{ breakpoint: 800, settings: { slidesToShow: 3, } },
		]
	});

	$('.slick_more_product').slick({
		lazyLoad: 'progressive', infinite: true, accessibility: true, vertical: false, verticalSwiping: false,
		slidesToShow: 4, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, speed: 1000, arrows: false,
		centerMode: false, dots: false, draggable: true, responsive: [
			{ breakpoint: 871, settings: { slidesToShow: 3, } },
			{ breakpoint: 601, settings: { slidesToShow: 2, } },
		]
	});

	$('.slick_menu_name').slick({
		lazyLoad: 'progressive', infinite: true, accessibility: true, vertical: true, verticalSwiping: true,
		slidesToShow: 6, slidesToScroll: 1, autoplay: false, autoplaySpeed: 2000, speed: 1000, arrows: false,
		asNavFor: '.slick_menu_pic', focusOnSelect: true,
		centerMode: false, dots: false, draggable: true, responsive: [
		]
	});

	$('.slick_menu_pic').slick({
		lazyLoad: 'progressive', infinite: true, accessibility: true, vertical: false, verticalSwiping: false,
		slidesToShow: 1, slidesToScroll: 1, autoplay: false, autoplaySpeed: 2000, speed: 1000, arrows: false, 
		fade: true, asNavFor: '.slick_menu_name',
		centerMode: false, dots: false, draggable: true, responsive: [
		]
	});

	$('.slick_video').slick({
		lazyLoad: 'progressive', infinite: true, accessibility: true, vertical: false, verticalSwiping: false,
		slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000, speed: 1000, arrows: false, 
		centerMode: false, dots: false, draggable: true, responsive: [
		]
	});

	$('.slick_cauchuyen_name').slick({
		lazyLoad: 'progressive', infinite: true, accessibility: true, vertical: false, verticalSwiping: false,
		slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000, speed: 1000, arrows: false, 
		fade: true, asNavFor: '.slick_cauchuyen_pic',
		centerMode: false, dots: false, draggable: true, responsive: [
		]
	});

	$('.slick_cauchuyen_pic').slick({
		lazyLoad: 'progressive', infinite: true, accessibility: true, vertical: false, verticalSwiping: false,
		slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000, speed: 1000, arrows: false, 
		asNavFor: '.slick_cauchuyen_name',
		centerMode: false, dots: false, draggable: true, responsive: [
		]
	});

	$('.slick_media').slick({
		lazyLoad: 'progressive', infinite: true, accessibility: true, vertical: false, verticalSwiping: false,
		slidesToShow: 4, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000, speed: 1000, arrows: false, 
		centerMode: false, dots: false, draggable: true, responsive: [
			{ breakpoint: 441, settings: { slidesToShow: 3, } },
		]
	});

	$('.slick_banner').slick({
		lazyLoad: 'progressive', infinite: true, accessibility: true, vertical: false, verticalSwiping: false,
		slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000, speed: 1000, arrows: false, 
		centerMode: false, dots: false, draggable: true, responsive: [
		]
	});

	$('.slick_ykien').slick({
		lazyLoad: 'progressive', infinite: true, accessibility: true, vertical: false, verticalSwiping: false,
		slidesToShow: 2, slidesToScroll: 1, autoplay: true, autoplaySpeed: 2000, speed: 1000, arrows: false, 
		centerMode: false, dots: false, draggable: true, responsive: [
			{ breakpoint: 601, settings: { slidesToShow: 1, } },
		]
	});
};

/* Lazys */
NN_FRAMEWORK.Lazys = function () {
	if (isExist($('.lazy'))) {
		var lazyLoadInstance = new LazyLoad({
			elements_selector: '.lazy'
		});
	}
};
NN_FRAMEWORK.Filter = function () {
	/* rangeSlider */
	if (isExist($('.price_slider'))) {
		var price_min = $('.price_slider').data('min');
		var price_max = $('.price_slider').data('max');

		var result_min = 0;
		var result_max = 0;

		$('.price_slider input').ionRangeSlider({
			skin: 'flat',
			min: price_min,
			max: price_max,
			from: price_min,
			to: price_max,
			type: 'integer',
			step: 1,
			// prefix  : 'đ ',
			postfix: ' đ',
			prettify: true,
			hasGrid: true,
			onChange: function (data) {
				result_min = data.from;
				result_max = data.to;
			},
		});

		/* $(document).on('click', '.submit_price', function (event) {
			event.preventDefault();
			alert(result_min);
			alert(result_max);
			return false;
		}); */
	};

	function filterProduct() {
		HoldOn.open({
			theme: "sk-bounce",
			message: 'Vui lòng chờ tí ...'
		});
		var link = '?filter=1';
		const filter1 = [];
		const filter2 = [];
		const filter3 = [];
		if ($('#filter_sort_choose li a.checked').data('id') != undefined) {
			link = link + '&sort=' + $('#filter_sort_choose li a.checked').data('id');
		}
		$('#filter_os_choose a').each(function (index, el) {
			if ($(this).hasClass('checked')) {
				filter1.push($(this).data('id'));
			}
		});
		$('#filter_size_choose a').each(function (index, el) {
			if ($(this).hasClass('checked')) {
				filter2.push($(this).data('id'));
			}
		});
		$('#filter_color_choose a').each(function (index, el) {
			if ($(this).hasClass('checked')) {
				filter3.push($(this).data('id'));
			}
		});

		if (filter1.length > 0)
			link += '&brand=' + filter1.join();
		if (filter2.length > 0)
			link += '&size=' + filter2.join();
		if (filter3.length > 0)
			link += '&color=' + filter3.join();
		if (result_min > 0 && result_max > 0) {
			link += '&min_price=' + result_min + '&max_price=' + result_max;
		}

		var current_link = window.location.href.split("?");
		setTimeout(() => {
			HoldOn.close();
			window.location.href = current_link[0] + link;
		}, 1000)
	}
	$(document).on('click', '#filter_sort_choose li a', function (event) {
		event.preventDefault();
		if ($(this).hasClass('checked')) {
			$(this).parents('ul').find('a').removeClass('checked');
		}
		else {
			$(this).parents('ul').find('a').removeClass('checked');
			$(this).addClass('checked');
		}
		filterProduct();
		return false;
	});
	$(document).on('click', '#filter_os_choose li a, #filter_size_choose li a, #filter_color_choose li a', function (event) {
		event.preventDefault();
		$(this).toggleClass('checked');
		filterProduct();
		return false;
	});
	$(document).on('click', '.filter_block .filter_title', function (event) {
		event.preventDefault();
		$(this).parents('.filter_block').find('ul').toggle(300);
		return false;
	});
};
NN_FRAMEWORK.AutocompleteSeach = function () {
	$(document).on('keyup', '#keyword', function (event) {
		event.preventDefault();
		if ($(this).val().length > 0) {
			$.ajax({
				url: 'api/autocomplete.php',
				type: 'post',
				data: { keyword: $(this).val() },
			})
				.done(function (rs) {
					$('.keyword-autocomplete').html(rs);
					$('.keyword-autocomplete').show();
				});
		}
		else {
			$('.keyword-autocomplete').hide();
		}
	});
};
/* Load name input file */
NN_FRAMEWORK.loadNameInputFile = function () {
	if (isExist($('.custom-file input[type=file]'))) {
		$('body').on('change', '.custom-file input[type=file]', function () {
			var fileName = $(this).val();
			fileName = fileName.substr(fileName.lastIndexOf('\\') + 1, fileName.length);
			$(this).siblings('label').html(fileName);
		});
	}
};
/* Back to top */
NN_FRAMEWORK.GoTop = function () {
	$(window).scroll(function () {
		if (!$('.scrollToTop').length)
			$('body').append('<div class="scrollToTop"><img src="' + GOTOP + '" alt="Go Top"/></div>');
		if ($(this).scrollTop() > 100) $('.scrollToTop').fadeIn();
		else $('.scrollToTop').fadeOut();
	});
	$('body').on('click', '.scrollToTop', function () {
		$('html, body').animate({ scrollTop: 0 }, 800);
		return false;
	});
};
/* Alt images */
NN_FRAMEWORK.AltImg = function () {
	$('img').each(function (index, element) {
		if (!$(this).attr('alt') || $(this).attr('alt') == '') {
			$(this).attr('alt', WEBSITE_NAME);
		}
	});
};
/* Menu */
NN_FRAMEWORK.Menu = function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() >= $(".header").height())
			$(".menu").addClass('menu-fix');
		else
			$(".menu").removeClass('menu-fix');
	});

	/* Menu remove empty ul */
	if (isExist($('.menu'))) {
		$('.menu ul li a').each(function () {
			$this = $(this);
			if (!isExist($this.next('ul').find('li'))) {
				$this.next('ul').remove();
				$this.removeClass('has-child');
			}
		});
	}

	/* click danh muc ben trai */
	$(".danhmuc ul li span").addClass('active');
	$(".danhmuc ul li").find('ul:first').show(300);

	$(".danhmuc ul li span").click(function () {
		if ($(this).parent('li').children('ul').find('li').length > 0) {
			if ($(this).hasClass('active')) {
				$(this).parent('li').find('ul:first').hide(300);
				$(this).removeClass('active');
			} else {
				$(this).parent('li').find('ul:first').show(300);
				$(this).addClass('active');
			} return false;
		}
	});

	/* Menu mobile */
	var menu_mobi = $('ul.menu_desktop').html();
	$('.load-menu').append('<span class="close_menu">X</span><ul>' + menu_mobi + '</ul>');
	$(".menu_mobi_add ul li").each(function (index, element) {
		if ($(this).children('ul').children('li').length > 0) {
			$(this).children('a').append('<i class="fas fa-chevron-right"></i>');
		}
	});
	$(".menu_mobi_add ul li a i").click(function () {
		if ($(this).parent('a').hasClass('active2')) {
			$(this).parent('a').removeClass('active2');
			if ($(this).parent('a').parent('li').children('ul').children('li').length > 0) {
				$(this).parent('a').parent('li').children('ul').hide(300);
				return false;
			}
		}
		else {
			$(this).parent('a').addClass('active2');
			if ($(this).parents('li').children('ul').children('li').length > 0) {
				$(".menu_m ul li ul").hide(0);
				$(this).parents('li').children('ul').show(300);
				return false;
			}
		}
	});

	$('.icon_menu_mobi,.close_menu,.menu_baophu').click(function () {
		if ($('.menu_mobi_add').hasClass('menu_mobi_active')) {
			$('.menu_mobi_add').removeClass('menu_mobi_active');
			$('.menu_baophu').fadeOut(300);
		}
		else {
			$('.menu_mobi_add').addClass('menu_mobi_active');
			$('.menu_baophu').fadeIn(300);
		}
		return false;
	});
};
/* Tools */
NN_FRAMEWORK.Tools = function () {
	if (isExist($('.toolbar'))) {
		$('.footer').css({ marginBottom: $('.toolbar').innerHeight() });
	}
};
/* Popup */
NN_FRAMEWORK.Popup = function () {
	if (isExist($('#popup'))) {
		$('#popup').modal('show');
	}
	$("body").on("click", ".icon-map", function () {
		$('#popup-map').modal('show');
	});
	$("body").on("click", ".icon-baogia", function () {
		$('#popup-baogia').modal('show');
	});
};
/* Wow */
NN_FRAMEWORK.Wows = function () {
	new WOW().init();
};
/* Pagings */
NN_FRAMEWORK.Pagings = function () {
	/* Products */
	if (isExist($('.paging-product'))) {
		loadPaging('api/product.php?perpage=8', '.paging-product');
	}
	/* Categories */
	if (isExist($('.paging-product-category'))) {
		$('.paging-product-category').each(function () {
			var list = $(this).data('list');
			loadPaging('api/product.php?perpage=8&idList=' + list, '.paging-product-category-' + list);
		});
	}
};
/* Photobox */
NN_FRAMEWORK.Photobox = function () {
	if (isExist($('.album-gallery'))) {
		$('.album-gallery').photobox('a', { thumbs: true, loop: false });
	}
};
/* Comment */
NN_FRAMEWORK.Comment = function () {
	if (isExist($('.comment-page'))) {
		$('.comment-page').comments({
			url: 'api/comment.php'
		});
	}
};
/* DatePicker */
NN_FRAMEWORK.DatePicker = function () {
	if (isExist($('#birthday'))) {
		$('#birthday').datetimepicker({
			timepicker: false,
			format: 'd/m/Y',
			formatDate: 'd/m/Y',
			minDate: '01/01/1950',
			maxDate: TIMENOW
		});
	}
};
/* Search */
NN_FRAMEWORK.Search = function () {
	if (isExist($('.icon-search'))) {
		$('.icon-search').click(function () {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('.search-grid').stop(true, true).animate({ opacity: '0', width: '0px' }, 200);
			} else {
				$(this).addClass('active');
				$('.search-grid').stop(true, true).animate({ opacity: '1', width: '230px' }, 200);
			}
			document.getElementById($(this).next().find('input').attr('id')).focus();
			$('.icon-search i').toggleClass('fa fa-search fa fa-times');
		});
	}
};
/* Videos */
NN_FRAMEWORK.Videos = function () {
	if (isExist($('[data-fancybox="video"]'))) {
		$('[data-fancybox="video"]').fancybox({
			transitionEffect: 'fade',
			transitionDuration: 800,
			animationEffect: 'fade',
			animationDuration: 800,
			arrows: true,
			infobar: false,
			toolbar: true,
			hash: false
		});
	}
};
/* Owl Data */
NN_FRAMEWORK.OwlData = function (obj) {
	if (!isExist(obj)) return false;
	var items = obj.attr('data-items');
	var rewind = Number(obj.attr('data-rewind')) ? true : false;
	var autoplay = Number(obj.attr('data-autoplay')) ? true : false;
	var loop = Number(obj.attr('data-loop')) ? true : false;
	var lazyLoad = Number(obj.attr('data-lazyload')) ? true : false;
	var mouseDrag = Number(obj.attr('data-mousedrag')) ? true : false;
	var touchDrag = Number(obj.attr('data-touchdrag')) ? true : false;
	var animations = obj.attr('data-animations') || false;
	var smartSpeed = Number(obj.attr('data-smartspeed')) || 800;
	var autoplaySpeed = Number(obj.attr('data-autoplayspeed')) || 800;
	var autoplayTimeout = Number(obj.attr('data-autoplaytimeout')) || 5000;
	var dots = Number(obj.attr('data-dots')) ? true : false;
	var responsive = {};
	var responsiveClass = true;
	var responsiveRefreshRate = 200;
	var nav = Number(obj.attr('data-nav')) ? true : false;
	var navContainer = obj.attr('data-navcontainer') || false;
	var navTextTemp =
		"<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-narrow-left' width='50' height='37' viewBox='0 0 24 24' stroke-width='1' stroke='#ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><line x1='5' y1='12' x2='19' y2='12' /><line x1='5' y1='12' x2='9' y2='16' /><line x1='5' y1='12' x2='9' y2='8' /></svg>|<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-narrow-right' width='50' height='37' viewBox='0 0 24 24' stroke-width='1' stroke='#ffffff' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><line x1='5' y1='12' x2='19' y2='12' /><line x1='15' y1='16' x2='19' y2='12' /><line x1='15' y1='8' x2='19' y2='12' /></svg>";
	var navText = obj.attr('data-navtext');
	navText =
		nav &&
		navContainer &&
		(((navText === undefined || Number(navText)) && navTextTemp) ||
			(isNaN(Number(navText)) && navText) ||
			(Number(navText) === 0 && false));
	if (items) {
		items = items.split(',');
		if (items.length) {
			var itemsCount = items.length;
			for (var i = 0; i < itemsCount; i++) {
				var options = items[i].split('|'),
					optionsCount = options.length,
					responsiveKey;
				for (var j = 0; j < optionsCount; j++) {
					const attr = options[j].indexOf(':') ? options[j].split(':') : options[j];
					if (attr[0] === 'screen') {
						responsiveKey = Number(attr[1]);
					} else if (Number(responsiveKey) >= 0) {
						responsive[responsiveKey] = {
							...responsive[responsiveKey],
							[attr[0]]: (isNumeric(attr[1]) && Number(attr[1])) ?? attr[1]
						};
					}
				}
			}
		}
	}
	if (nav && navText) {
		navText = navText.indexOf('|') > 0 ? navText.split('|') : navText.split(':');
		navText = [navText[0], navText[1]];
	}
	obj.owlCarousel({
		rewind,
		autoplay,
		loop,
		lazyLoad,
		mouseDrag,
		touchDrag,
		smartSpeed,
		autoplaySpeed,
		autoplayTimeout,
		dots,
		nav,
		navText,
		navContainer: nav && navText && navContainer,
		responsiveClass,
		responsiveRefreshRate,
		responsive
	});
	if (autoplay) {
		obj.on('translate.owl.carousel', function (event) {
			obj.trigger('stop.owl.autoplay');
		});
		obj.on('translated.owl.carousel', function (event) {
			obj.trigger('play.owl.autoplay', [autoplayTimeout]);
		});
	}
	if (animations && isExist(obj.find('[owl-item-animation]'))) {
		var animation_now = '';
		var animation_count = 0;
		var animations_excuted = [];
		var animations_list = animations.indexOf(',') ? animations.split(',') : animations;
		obj.on('changed.owl.carousel', function (event) {
			$(this).find('.owl-item.active').find('[owl-item-animation]').removeClass(animation_now);
		});
		obj.on('translate.owl.carousel', function (event) {
			var item = event.item.index;
			if (Array.isArray(animations_list)) {
				var animation_trim = animations_list[animation_count].trim();
				if (!animations_excuted.includes(animation_trim)) {
					animation_now = 'animate__animated ' + animation_trim;
					animations_excuted.push(animation_trim);
					animation_count++;
				}
				if (animations_excuted.length == animations_list.length) {
					animation_count = 0;
					animations_excuted = [];
				}
			} else {
				animation_now = 'animate__animated ' + animations_list.trim();
			}
			$(this).find('.owl-item').eq(item).find('[owl-item-animation]').addClass(animation_now);
		});
	}
};
/* Owl Page */
NN_FRAMEWORK.OwlPage = function () {
	if (isExist($('.owl-page'))) {
		$('.owl-page').each(function () {
			NN_FRAMEWORK.OwlData($(this));
		});
	}
};
/* Dom Change */
NN_FRAMEWORK.DomChange = function () {
	/* Video Fotorama */
	$('#video-fotorama').one('DOMSubtreeModified', function () {
		$('#fotorama-videos').fotorama();
	});
	/* Video Select */
	$('#video-select').one('DOMSubtreeModified', function () {
		$('.listvideos').change(function () {
			var id = $(this).val();
			$.ajax({
				url: 'api/video.php',
				type: 'POST',
				dataType: 'html',
				data: {
					id: id
				},
				beforeSend: function () {
					HoldOn.open({
						theme: "sk-bounce",
						message: 'Vui lòng chờ tí ...'
					});
				},
				success: function (result) {
					$('.video-main').html(result);
					holdonClose();
				}
			});
		});
	});
	/* Chat Facebook */
	$('#messages-facebook').one('DOMSubtreeModified', function () {
		$('.js-facebook-messenger-box').on('click', function () {
			$('.js-facebook-messenger-box, .js-facebook-messenger-container').toggleClass('open'),
				$('.js-facebook-messenger-tooltip').length && $('.js-facebook-messenger-tooltip').toggle();
		}),
			$('.js-facebook-messenger-box').hasClass('cfm') &&
			setTimeout(function () {
				$('.js-facebook-messenger-box').addClass('rubberBand animated');
			}, 3500),
			$('.js-facebook-messenger-tooltip').length &&
			($('.js-facebook-messenger-tooltip').hasClass('fixed')
				? $('.js-facebook-messenger-tooltip').show()
				: $('.js-facebook-messenger-box').on('hover', function () {
					$('.js-facebook-messenger-tooltip').show();
				}),
				$('.js-facebook-messenger-close-tooltip').on('click', function () {
					$('.js-facebook-messenger-tooltip').addClass('closed');
				}));
		$('.search_open').click(function () {
			$('.search_box_hide').toggleClass('opening');
		});
	});
};
/* Cart */
NN_FRAMEWORK.QuickView = function () {
	/* Quick View */
	$('body').on('click', '.quickview', function () {
		var id = $(this).data('id');

		$.ajax({
			url: 'api/ajax_xemnhanh.php',
			type: 'POST',
			dataType: 'html',
			data: {
				id: id
			},
			beforeSend: function () {
				holdonOpen();
			},
			success: function (result) {
				$('#popup-quickview .modal-body').html(result);
				$('#popup-quickview').modal('show');
				$('#popup-cart').modal('hide');
				$('#fotorama-pro-detail').fotorama();
				NN_FRAMEWORK.Lazys();
				holdonClose();

				/* Colors */
				if (isExist($('.color-pro-detail'))) {
					$('.color-pro-detail input').click(function () {
						$this = $(this).parents('label.color-pro-detail');
						$parents = $this.parents('.attr-pro-detail');
						$parents_detail = $this.parents('.grid-pro-detail');
						$parents.find('.color-block-pro-detail').find('.color-pro-detail').removeClass('active');
						$parents.find('.color-block-pro-detail').find('.color-pro-detail input').prop('checked', false);
						$this.addClass('active');
						$this.find('input').prop('checked', true);
						var id_color = $parents.find('.color-block-pro-detail').find('.color-pro-detail input:checked').val();
						var id_pro = $this.data('idproduct');
						$.ajax({
							url: 'api/color.php',
							type: 'POST',
							dataType: 'html',
							data: {
								id_color: id_color,
								id_pro: id_pro
							},
							beforeSend: function () {
								HoldOn.open({
									theme: "sk-bounce",
									message: 'Vui lòng chờ tí ...'
								});
							},
							success: function (result) {
								if (result) {
									$parents_detail.find('.left-pro-detail').html(result);
									MagicZoom.refresh('Zoom-1');
									NN_FRAMEWORK.OwlData($('.owl-pro-detail'));
									NN_FRAMEWORK.Lazys();
								}
								holdonClose();
							}
						});
					});
				}
				/* Sizes */
				if (isExist($('.size-pro-detail'))) {
					$('.size-pro-detail input').click(function () {
						$this = $(this).parents('label.size-pro-detail');
						$parents = $this.parents('.attr-pro-detail');
						$parents.find('.size-block-pro-detail').find('.size-pro-detail').removeClass('active');
						$parents.find('.size-block-pro-detail').find('.size-pro-detail input').prop('checked', false);
						$this.addClass('active');
						$this.find('input').prop('checked', true);

						var min_price = $(this).data('min_price');
						if (typeof min_price !== 'undefined') {
							fill_price(min_price);
						}
					});
				}
				/* Change Color - Size - Price */
				if (isExist($('.proprice_item_size'))) {
					$(document).on('click', '.proprice_item_size', function (event) {
						event.preventDefault();
						$(this).addClass('active').siblings('.proprice_item_size').removeClass('active');

						var min_price = $(this).data('min_price');
						if (typeof min_price !== 'undefined') {
							fill_price(min_price);
						}

						var vitri = $(this).data('tab');
						$('.tab_thu_' + vitri).show().siblings('.tab_thu').hide();
						$('.proprice_item_loai').removeClass('active');
					});
				}
				if (isExist($('.proprice_item_loai'))) {
					$(document).on('click', '.proprice_item_loai', function (event) {
						event.preventDefault();
						$(this).addClass('active').siblings('.proprice_item_loai').removeClass('active');

						var min_price = $(this).data('min_price');
						if (typeof min_price !== 'undefined') {
							fill_price(min_price);
						}

						$.ajax({
							url: 'api/ajax_pic.php',
							type: 'post',
							data: {
								id_product: $(this).data('id_product'),
								photo: $(this).data('photo')
							},
						}).done(function (kq) {
							$('.left-pro-detail').html(kq);
							NN_FRAMEWORK.OwlPage();
							MagicZoom.refresh('Zoom-1');
						});
					});
				}
			}
		});
	});
};

NN_FRAMEWORK.Cart = function () {
	/* Popup */
	$('body').on('click', '.popup_cart', function () {
		$.ajax({
			url: 'api/cart.php',
			type: 'POST',
			dataType: 'html',
			async: false,
			data: {
				cmd: 'popup-cart'
			},
			success: function (result) {
				$('#popup-cart .modal-body').html(result);
				$('#popup-cart').modal('show');
				NN_FRAMEWORK.Lazys();
				holdonClose();
			}
		});
	});
	/* Add */
	$('body').on('click', '.addcart', function () {
		$this = $(this);
		$parents = $this.parents('.right-pro-detail');
		var id = $this.data('id');
		var action = $this.data('action');
		var quantity = $parents.find('.quantity-pro-detail').find('.qty-pro').val();
		quantity = quantity ? quantity : 1;


		/* size màu cơ bản*/
		var color = $parents.find('.color-block-pro-detail').find('.color-pro-detail input:checked').val();
		color = color ? color : 0;
		var size = $parents.find('.size-block-pro-detail').find('.size-pro-detail input:checked').val();

		/* size màu nâng cao 1*/
		/* if ($('.size-pro-detail.active').length > 0) {
			var size = $('.size-pro-detail.active input').data('id');
			var gia = $('.size-pro-detail.active input').data('min_price');
		}
		else {
			var size = 0;
			var gia = 0;
		} */

		if ($('.color-pro-detail.active').length > 0) {
			var color = $('.color-pro-detail.active input').data('id');
			var photo = $('.color-pro-detail.active input').data('photo');
		}
		else {
			var color = 0;
			var photo = 0;
		}

		/* size màu nâng cao */
		if (isExist($('.proprice_item_size'))) {
			if ($('.proprice_item_size.active').length > 0) {
				var size = $('.proprice_item_size.active').data('id_size');
				var photo = $('.proprice_item_size.active').data('photo');
				var gia = $('.proprice_item_size.active').data('min_price');
			}
			else {
				var size = 0;
				var photo = 0;
				var gia = 0;
			}
		}

		if (isExist($('.proprice_item_loai'))) {
			if ($('.proprice_item_loai.active').length > 0) {
				var loai = $('.proprice_item_loai.active').data('id_loai');
				var photo = $('.proprice_item_loai.active').data('photo');
				var gia = $('.proprice_item_loai.active').data('min_price');
			}
			else {
				var loai = 0;
				var photo = 0;
				var gia = 0;
			}
		}

		if (id) {
			$.ajax({
				url: 'api/cart.php',
				type: 'POST',
				dataType: 'json',
				async: false,
				data: {
					cmd: 'add-cart',
					id: id,
					loai: loai,
					color: color,
					size: size,
					quantity: quantity,
					gia: gia,
					photo: photo,
				},
				beforeSend: function () {
					holdonOpen();
				},
				success: function (result) {
					if (action == 'addnow') {
						$('.count-cart').html(result.max);
						$.ajax({
							url: 'api/cart.php',
							type: 'POST',
							dataType: 'html',
							async: false,
							data: {
								cmd: 'popup-cart'
							},
							beforeSend: function () {
								HoldOn.open({
									theme: "sk-bounce",
									message: 'Vui lòng chờ tí ...'
								});
							},
							success: function (result) {
								$('#popup-cart .modal-body').html(result);
								$('#popup-cart').modal('show');
								$('#popup-quickview').modal('hide');
								NN_FRAMEWORK.Lazys();
								holdonClose();
							}
						});
					} else if (action == 'buynow') {
						window.location = CONFIG_BASE + 'gio-hang';
					}
				}
			});
		}
	});
	/* Delete */
	$('body').on('click', '.del-procart', function () {
		confirmDialog('delete-procart', LANG['delete_product_from_cart'], $(this));
	});
	/* Counter */
	$('body').on('click', '.counter-procart', function () {
		var $button = $(this);
		var quantity = 1;
		var input = $button.parent().find('input');
		var id = input.data('pid');
		var code = input.data('code');
		var oldValue = $button.parent().find('input').val();
		if ($button.text() == '+') quantity = parseFloat(oldValue) + 1;
		else if (oldValue > 1) quantity = parseFloat(oldValue) - 1;
		$button.parent().find('input').val(quantity);
		updateCart(id, code, quantity);
	});
	/* Quantity */
	$('body').on('change', 'input.quantity-procart', function () {
		var quantity = $(this).val() < 1 ? 1 : $(this).val();
		$(this).val(quantity);
		var id = $(this).data('pid');
		var code = $(this).data('code');
		updateCart(id, code, quantity);
	});
	/* City */
	if (isExist($('.select-city-cart'))) {
		$('.select-city-cart').change(function () {
			var id = $(this).val();
			loadDistrict(id);
			loadShip();
		});
	}
	/* District */
	if (isExist($('.select-district-cart'))) {
		$('.select-district-cart').change(function () {
			var id = $(this).val();
			loadWard(id);
			loadShip();
		});
	}
	/* Ward */
	if (isExist($('.select-ward-cart'))) {
		$('.select-ward-cart').change(function () {
			var id = $(this).val();
			loadShip(id);
		});
	}
	/* Payments */
	if (isExist($('.payments-label'))) {
		$('.payments-label').click(function () {
			var payments = $(this).data('payments');
			$('.payments-cart .payments-label, .payments-info').removeClass('active');
			$(this).addClass('active');
			$('.payments-info-' + payments).addClass('active');
		});
	}
	/* Colors */
	if (isExist($('.color-pro-detail'))) {
		$('.color-pro-detail input').click(function () {
			$this = $(this).parents('label.color-pro-detail');
			$parents = $this.parents('.attr-pro-detail');
			$parents_detail = $this.parents('.grid-pro-detail');
			$parents.find('.color-block-pro-detail').find('.color-pro-detail').removeClass('active');
			$parents.find('.color-block-pro-detail').find('.color-pro-detail input').prop('checked', false);
			$this.addClass('active');
			$this.find('input').prop('checked', true);
			var id_color = $parents.find('.color-block-pro-detail').find('.color-pro-detail input:checked').val();
			var id_pro = $this.data('idproduct');
			$.ajax({
				url: 'api/color.php',
				type: 'POST',
				dataType: 'html',
				data: {
					id_color: id_color,
					id_pro: id_pro
				},
				beforeSend: function () {
					HoldOn.open({
						theme: "sk-bounce",
						message: 'Vui lòng chờ tí ...'
					});
				},
				success: function (result) {
					if (result) {
						$parents_detail.find('.left-pro-detail').html(result);
						MagicZoom.refresh('Zoom-1');
						NN_FRAMEWORK.OwlData($('.owl-pro-detail'));
						NN_FRAMEWORK.Lazys();
					}
					holdonClose();
				}
			});
		});
	}
	/* Sizes */
	if (isExist($('.size-pro-detail'))) {
		$('.size-pro-detail input').click(function () {
			$this = $(this).parents('label.size-pro-detail');
			$parents = $this.parents('.attr-pro-detail');
			$parents.find('.size-block-pro-detail').find('.size-pro-detail').removeClass('active');
			$parents.find('.size-block-pro-detail').find('.size-pro-detail input').prop('checked', false);
			$this.addClass('active');
			$this.find('input').prop('checked', true);

			var min_price = $(this).data('min_price');
			if (typeof min_price !== 'undefined') {
				fill_price(min_price);
			}
		});
	}
	/* Change Color - Size - Price */
	if (isExist($('.proprice_item_size'))) {
		$(document).on('click', '.proprice_item_size', function (event) {
			event.preventDefault();
			$(this).addClass('active').siblings('.proprice_item_size').removeClass('active');

			var min_price = $(this).data('min_price');
			if (typeof min_price !== 'undefined') {
				fill_price(min_price);
			}

			var vitri = $(this).data('tab');
			$('.tab_thu_' + vitri).show().siblings('.tab_thu').hide();
			$('.proprice_item_loai').removeClass('active');

			$.ajax({
				url: 'api/ajax_pic.php',
				type: 'post',
				data: {
					id_product: $(this).data('id_product'),
					photo: $(this).data('photo')
				},
			}).done(function (kq) {
				$('.left-pro-detail').html(kq);
				NN_FRAMEWORK.OwlPage();
				MagicZoom.refresh('Zoom-1');
			});
		});
	}
	if (isExist($('.proprice_item_loai'))) {
		$(document).on('click', '.proprice_item_loai', function (event) {
			event.preventDefault();
			$(this).addClass('active').siblings('.proprice_item_loai').removeClass('active');

			var min_price = $(this).data('min_price');
			if (typeof min_price !== 'undefined') {
				fill_price(min_price);
			}

			$.ajax({
				url: 'api/ajax_pic.php',
				type: 'post',
				data: {
					id_product: $(this).data('id_product'),
					photo: $(this).data('photo')
				},
			}).done(function (kq) {
				$('.left-pro-detail').html(kq);
				NN_FRAMEWORK.OwlPage();
				MagicZoom.refresh('Zoom-1');
			});
		});
	}
	/* Quantity detail page */
	if (isExist($('.quantity-pro-detail span'))) {
		$('.quantity-pro-detail span').click(function () {
			var $button = $(this);
			var oldValue = $button.parent().find('input').val();
			if ($button.text() == '+') {
				var newVal = parseFloat(oldValue) + 1;
			} else {
				if (oldValue > 1) var newVal = parseFloat(oldValue) - 1;
				else var newVal = 1;
			}
			$button.parent().find('input').val(newVal);
		});
	}
};
NN_FRAMEWORK.AutoHeight = function () {
	var src_w = $(window).width();
	if (src_w < 992) {
		$('.autoHeight').find('iframe, video, embed, object').addClass('embed-responsive-item');
		$('.autoHeight').find('iframe, video, embed, object').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		$('.autoHeight').find('iframe, video, embed, object').removeAttr('width');
		$('.autoHeight').find('iframe, video, embed, object').removeAttr('height');
		$('.autoHeight').find('iframe, video, embed, object').removeAttr('style');
		$('.autoHeight').find('img').addClass('img-fluid');
	}
	else {
		$('.autoHeight').find('iframe, video, embed, object, img').addClass('border-0 outline-0');
	}
};
NN_FRAMEWORK.LikeProduct = function () {
	$(document).on('click', '.save-listing', function (event) {
		event.preventDefault();
		var id = $(this).data('id');
		var ele = $('.save-listing[data-id=' + id + ']');
		if (id) {
			$.ajax({
				url: 'api/ajax_save-listing.php',
				type: 'post',
				data: { id: id },
			})
				.done(function (kq) {
					ele.addClass('save-listing-already').removeClass('save-listing');
					$('.count-like').html(kq);
				});
			return false;
		}
	});
	$(document).on('click', '.save-listing-already', function (event) {
		event.preventDefault();
		var id = $(this).data('id');
		var ele = $('.save-listing-already[data-id=' + id + ']');
		if (id) {
			$.ajax({
				url: 'api/ajax_remove-listing.php',
				type: 'post',
				data: { id: id },
			})
				.done(function (kq) {
					ele.addClass('save-listing').removeClass('save-listing-already');
					$('.count-like').html(kq);
				});
			return false;
		}
	});
};

$("body").on("click", ".apply-coupon", function () {
	var coupon = $(".code-coupon").val();
	var ship = $(".price-ship").val();

	if ($(".price-endowID").val() != '') {
		notifyDialog('Có mã ưu đãi đang được sử dụng');
		return false;
	}

	if (coupon == '') {
		notifyDialog(LANG['no_coupon']);
		return false;
	}

	$.ajax({
		type: "POST",
		url: 'api/ajax_coupon_cart.php',
		dataType: 'json',
		data: { coupon: coupon, ship: ship },
		success: function (result) {
			$('.price-total').val(result.total);
			$('.load-price-total').html(result.totalText);
			$('.price-endowType').val(result.endowType);
			$('.price-endowID').val(result.endowID);
			$('.price-endow').val(result.endow);
			$('.load-price-endow').html(result.endowText);

			if (result.error != '') {
				$(".code-coupon").val("");
				/* notifyDialog(result.error); */
			}
		}
	});
});

/* Simply scroll */
NN_FRAMEWORK.SimplyScroll = function () {
	if (isExist($(".newshome-scroll ul"))) {
		$(".newshome-scroll ul").simplyScroll({
			customClass: 'vert',
			orientation: 'vertical',
			// orientation: 'horizontal',
			auto: true,
			manualMode: 'auto',
			pauseOnHover: 1,
			speed: 1,
			loop: 1
		});
	};
};

/* Toc */
NN_FRAMEWORK.Toc = function () {
	$(".toc-list").toc({
		content: "div#toc-content",
		headings: "h2,h3,h4"
	});
	if (!$(".toc-list li").length) {
		$(".meta-toc").hide();
	}
	$('.toc-list').find('a').click(function () {
		var x = $(this).attr('data-rel');

		$('html, body').animate({
			scrollTop: $(x).offset().top
		}, 800, function () {
			window.location.hash = x;
		});
	});


	$('.toc-title').addClass('active');
	$('.toc-title').click(function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).parent('.box-readmore').find('.toc-list').slideUp(400);
		} else {
			$(this).addClass('active');
			$(this).parent('.box-readmore').find('.toc-list').slideDown(400);
		}
	});
};

/* Ready */
$(document).ready(function () {
	NN_FRAMEWORK.Lazys();
	NN_FRAMEWORK.Tools();
	NN_FRAMEWORK.Popup();
	NN_FRAMEWORK.Wows();
	NN_FRAMEWORK.AltImg();
	NN_FRAMEWORK.GoTop();
	NN_FRAMEWORK.Menu();
	NN_FRAMEWORK.OwlPage();
	NN_FRAMEWORK.Pagings();
	NN_FRAMEWORK.Cart();
	NN_FRAMEWORK.QuickView();
	NN_FRAMEWORK.Videos();
	NN_FRAMEWORK.Photobox();
	NN_FRAMEWORK.Comment();
	NN_FRAMEWORK.Search();
	NN_FRAMEWORK.DomChange();
	NN_FRAMEWORK.DatePicker();
	NN_FRAMEWORK.loadNameInputFile();

	if (AUTOCOMPLETE == true) {
		NN_FRAMEWORK.AutocompleteSeach();
	}

	NN_FRAMEWORK.Filter();
	NN_FRAMEWORK.AutoHeight();
	NN_FRAMEWORK.LikeProduct();
	NN_FRAMEWORK.Slicks();
	NN_FRAMEWORK.Map_ChiNhanh();
	NN_FRAMEWORK.SimplyScroll();
	NN_FRAMEWORK.Toc();
	NN_FRAMEWORK.UserInfo();
	NN_FRAMEWORK.Random();
});