$(function(){
    $('.goTop').click(function(){
			$('body,html').stop().animate({scrollTop:0});
			return false;
	});
	//mobile menu
		$('.m_menu').find('a.main').click(function(){
			if(!$(this).parents('.m_menu').hasClass('active')){
				$(this).parents('.m_menu').addClass('active');
				$(this).find('i').addClass('fa-times').removeClass('fa-reorder');
				$('.m_menu').find('.mask').fadeIn(100);
				$('.m_menu').find('.hideBox').fadeIn(100);
				$('body').css('overflow','hidden');
				$('.m_menu').find('.mask').click(function(){/*點空白處收起menu*/
					$('.m_menu').removeClass('active');
					$('.m_menu').find('.hideBox').fadeOut();
					$('.m_menu').find('.mask').fadeOut();
				});
			}else{
				$(this).parents('.m_menu').removeClass('active');
				$(this).find('i').addClass('fa-reorder').removeClass('fa-times');
				$('.m_menu').find('.mask').fadeOut();
				$('.m_menu').find('.hideBox').fadeOut();
				$('body').css('overflow','auto');
			}//end if hasClass
						
			return false;
		});
		
});
