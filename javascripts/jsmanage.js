$(function(){
    $('.goTop').click(function(){
			$('body,html').stop().animate({scrollTop:0});
			return false;
		});
});