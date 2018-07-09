$(document).ready(function() {

	//animation stopping error
	//zaboronutu scroll when cinema mode
	//code on w3

	var time_speed = 1;
	var time_interval = 60000;
	var animate_time_interval = 60; // '/ 1000'
	var time_now = 2018;

	var f_inc;
	var s_inc;

	var circle_close_active = false;
	var cinema_view_active = false;

	f_inc = setInterval(function() {
		time_now = time_now + 1;
		$('#year_nu').html(time_now);
	}, time_interval);

	function active_rows() {
		time_speed = $('#time_speed').val();
		clearInterval(f_inc);
		time_interval = 60000 / time_speed;
		if($('#smooth_checkbox').is(':checked', true) && $('#time_speed').val() != 1) {
			animate_time_interval = time_interval / 10;	
		} else {
			animate_time_interval = time_interval / 1000;	
		}

		// +year
		f_inc = setInterval(function() {
		time_now = time_now + 1;
		$('#year_nu').html(time_now);
		}, time_interval);

		// planet laps

		$('#sun').css('animation-duration', animate_time_interval + 's');
		$('#meteori').css('animation-duration', animate_time_interval + 's');

		$('#merkuriy_path').css('animation-duration', animate_time_interval + 's');
		$('#venera_path').css('animation-duration', animate_time_interval + 's');
		$('#earth_path').css('animation-duration', animate_time_interval + 's');
		$('#mars_path').css('animation-duration', animate_time_interval + 's');
		$('#yupiter_path').css('animation-duration', animate_time_interval + 's');
		$('#saturn_path').css('animation-duration', animate_time_interval + 's');
		$('#uran_path').css('animation-duration', animate_time_interval + 's');
		$('#neptun_path').css('animation-duration', animate_time_interval + 's');

		//	+if boom
		setInterval(function() {
		if(time_now >= 3000) {
			$('#merkuriy').css('opacity', '0.001');
		}

		if(time_now >= 5500) {
				
		}
		if(time_now >= 11000) {
			$('#meteori').css({"display" : "none"});
			$('#smooth_checkbox').prop('disabled', true);
			$('#time_speed').prop('disabled', true);
			$('#circle_close').prop('disabled', true);
			$('#close').prop('disabled', true);
			$('.obj').css({"transition" : "8s", "transform" : "scale(25)"});
			$('.planet').css({'opacity' : '0.0', "transition" : ".00001s"});
			setInterval(function() { $('#year_nu').html("WORLD DEAD").css({'font-size' : '15px', "color" : "red"}) },1);
			setTimeout(function() { $('#sun').css({"transition" : "5s", "background-color" : "#002F55"}) },7000);
			setTimeout(function() {$('#byoles').css({"z-index" : "999999999"});}, 7050);
			setTimeout(function() { $('#byoles').addClass("animated fadeInUp"); },7100);
		}
		},1);
	}

	$('#time_speed').on('input', function() {
		active_rows();
	});

	$('#smooth_checkbox').on('change', function() {
		active_rows();
	});

	$('#space_title').on('click', function() {
		alert("By Oles Odynets. @2018 :: ALL CODES CLOSED");
	});

	$('#close').on('click', function() {
		time_now = 11000;
		active_rows();
	});

	$('#circle_close').on('click', function() {
		if(circle_close_active == false) {
			$('.circle').css({'opacity' : '0.0', 'transition' : '2.5s'});
			circle_close_active = true;
		} else if (circle_close_active == true) {
			$('.circle').css({'opacity' : '0.5', 'transition' : '1.5s'});
			circle_close_active = false;

		}
	});

	$('#cinema_view').on('click', function() {
		if(cinema_view_active == false) {
			cinema_view_active = true;
		$('body').css({'transition' : '4.2s', 'background' : '#05061A'}); // background
		$('#space_title').css({"transition" : "2s", "opacity" : "0.0"});
		$('.inf_tx').css({"transition" : "4.5s", "color" : "#FFF8E7"});
		$('.start_input_gogogo').removeClass("animated fadeInUp");
		$('.control_fx').addClass("animated fadeOutDown");
		$('#year_nu').css('color', '#05061A');
		$('#cinema_view').html("⌫");
		$('#space_background').css({'transition' : '5.1s', 'overflow' : 'visible'}); // kosmos
		//setTimeout(function() {$('#space_background').css({'transition' : '2s', 'overflow' : 'visible'});},3100);
		} else if(cinema_view_active == true) {
				cinema_view_active = false;
			$('body').css({'transition' : '4.2s', 'background' : 'white'}); //
			$('#space_title').css({"transition" : "2s", "opacity" : "1.0"}); //
			$('.inf_tx').css({"transition" : "4.5s", "color" : "black"}); //
			$('#year_nu').css('color', 'black');
			$('.control_fx').removeClass("fadeOutDown"); // 
			$('.control_fx').addClass("animated fadeInUp"); //
			$('#cinema_view').html("🎬"); //
			$('#space_background').css({'transition' : '5.1s', 'overflow' : 'hidden'}); // -_-
			//setTimeout(function() {$('#space_background').css({'transition' : '5s', 'overflow' : 'hidden'});},3100); // ?
		}
	});
});