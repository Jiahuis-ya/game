$(function(){

	$('#u11>li').each(function(){
		$('#u11>li').mouseover(function(){
			$(this.lastChild).css({opacity:'0.9',transform:'rotateY(360deg)',transition:'all 0.5s'})
			$(this.firstChild).css({opacity:'1',transition:'all 1s'})
		}).mouseout(function(){
			$(this.lastChild).css({opacity:'0',transform:'rotateY(90deg)',transition:'all 0.5s'})
			$(this.firstChild).css({opacity:'1',transition:'all 1s'})
		})
	})

	$('.section-2_menu-top li').eq(0).click(function(){
		$('#shipin').css({display:'block'})
		$('#vd')[0].currentTime=0;
		$('#vd')[0].play();

	})

	$('#dd11').click(function(){
		$('#shipin').css({display:'none'})
		$('#vd')[0].pause();
	})
})