$(function(){
	//头部的中间移动触发事件开始
	$('.header_menu li').eq(0).mouseover(function(){
		$('.header_menu li').eq(2).css({display:'block',zIndex:5});


		$('.header_menu>a').eq(0).css({zIndex:5});

		$('.header_menu li').eq(1).css({zIndex:5});
		$('.header_menu li').eq(4).css({zIndex:5});

	}).mouseout(function(){
		$('.header_menu li').eq(2).css({display:'none',zIndex:5});

		$('.header_menu>a').eq(0).css({zIndex:5});

		$('.header_menu li').eq(1).css({zIndex:5});
		
		$('.header_menu li').eq(4).css({zIndex:5});
	});

	$('.header_menu li').eq(2).mouseover(function(){

		$(this).css({display:'block',zIndex:2});

	}).mouseout(function(){

		$(this).css({display:'none',zIndex:2});

	})

	//头部的中间移动触发事件结束

	//头部的右边移动触发事件开始
	$('.hide').mouseover(function(){

		$('.reveal').css({display:'block',zIndex:5});
		$('.ddd').css({background:'background:url(./images/ost-bg.png) no-repeat -169px -119px'})

	}).mouseout(function(){

		$('.reveal').css({display:'none'});
		$('.ddd').css({background:'background:url(./images/ost-bg.png) no-repeat -149px -119px'})

	})

	$('.reveal').mouseover(function(){

		$(this).css({display:'block'});
		$('.hide a').css({color:'#ff4e00'});
		$('.ddd').css({background:'background:url(./images/ost-bg.png) no-repeat -169px -119px'})

	}).mouseout(function(){

		$(this).css({display:'none'});
		$('.hide a').css({color:'#464646'});
		$('.ddd').css({background:'background:url(./images/ost-bg.png) no-repeat -149px -119px'})
	})

	var u1 = document.getElementById('u1');
	var lis1 = u1.getElementsByTagName('li');
	var sp1 = u1.getElementsByTagName('span');

	var u2 = document.getElementById('u2');
	var lis2 = u2.getElementsByTagName('li');
	var sp2 = u2.getElementsByTagName('span');

	var u3 = document.getElementById('u3');
	var lis3 = u3.getElementsByTagName('li');
	var sp3 = u3.getElementsByTagName('span');
	for(var i = 0 ; i < lis1.length;i++){
			lis1[i].onmouseover = function(){

				for(var i = 0;i<lis1.length;i++){
					lis1[i].children[0].style.display = 'block';
					lis1[i].children[1].style.display = 'none';
				}

				this.children[0].style.display = 'none';
				this.children[1].style.display = 'block';
			}
	}

	for(var i = 0 ; i < lis1.length;i++){
			lis2[i].onmouseover = function(){

				for(var i = 0;i<lis1.length;i++){
					lis2[i].children[0].style.display = 'block';
					lis2[i].children[1].style.display = 'none';
				}

				this.children[0].style.display = 'none';
				this.children[1].style.display = 'block';
			}
	}

	for(var i = 0 ; i < lis1.length;i++){
			lis3[i].onmouseover = function(){

				for(var i = 0;i<lis1.length;i++){
					lis3[i].children[0].style.display = 'block';
					lis3[i].children[1].style.display = 'none';
				}

				this.children[0].style.display = 'none';
				this.children[1].style.display = 'block';
			}
	}

	//头部的右边移动触发事件结束

	//第一个选项卡开始

	$('#xuan1 a').click(function(){
		var index = $('#xuan1 a').index($(this));

		$(this).addClass('li').siblings().removeClass('li');

		$('#dong').css({left:50*index+'px',transition:'all 0.5s'})

		$('#xuan1 a').css({color:'#414242'})

		$('#xuan1 a').eq(5).css({color:'#B9C1C1'})

		$(this).css({color:'#2FC3A2'})

		$('#xx1').css({left:(-498*index)+'px',transition:'all 0.5s'})

	})
	//第一个选项卡结束



	//第二个选项卡开始

	$('#dong2 a').eq(0).click(function(){

		$('#xuan2 ol').css({left:'0px',transition:'all 0.5s'})

		$('#ka2 li').css({left:'0px',transition:'all 0.5s'})

		$('#dong2 a span').css({outline:'1px solid #b9c1c1'})

		$('#dong2 a').css({color:'#b9c1c1'})

		$('#dong2 a').eq(0).css({color:'#2FC3A2'})

		$('#dong2 a span').eq(0).css({outline:'1px solid #2FC3A2'})

		$('#xuan2 ol').eq(0).css({left:'195px',transition:'all 0.5s'})

		$('#ka2 li').eq(0).css({left:'-182px',transition:'all 0.5s'})

	})

	$('#dong2 a').eq(1).click(function(){

		$('#xuan2 ol').css({left:'0px',transition:'all 0.5s'})

		$('#ka2 li').css({left:'0px',transition:'all 0.5s'})

		$('#dong2 a span').css({outline:'1px solid #b9c1c1'})

		$('#dong2 a').css({color:'#b9c1c1'})

		$('#dong2 a').eq(1).css({color:'#2FC3A2'})

		$('#dong2 a span').eq(1).css({outline:'1px solid #2FC3A2'})

		$('#xuan2 ol').eq(1).css({left:'195px',transition:'all 0.5s'})

		$('#ka2 li').eq(1).css({left:'-182px',transition:'all 0.5s'})
	})

	$('#dong2 a').eq(2).click(function(){

		$('#xuan2 ol').css({left:'0px',transition:'all 0.5s'})

		$('#ka2 li').css({left:'0px',transition:'all 0.5s'})

		$('#dong2 a span').css({outline:'1px solid #b9c1c1'})

		$('#dong2 a').css({color:'#b9c1c1'})

		$('#dong2 a').eq(2).css({color:'#2FC3A2'})

		$('#dong2 a span').eq(2).css({outline:'1px solid #2FC3A2'})

		$('#xuan2 ol').eq(2).css({left:'195px',transition:'all 0.5s'})

		$('#ka2 li').eq(2).css({left:'-182px',transition:'all 0.5s'})

	})

	$('#dong2 a').eq(3).click(function(){

		$('#xuan2 ol').css({left:'0px',transition:'all 0.5s'})

		$('#ka2 li').css({left:'0px',transition:'all 0.5s'})

		$('#dong2 a span').css({outline:'1px solid #b9c1c1'})

		$('#dong2 a').css({color:'#b9c1c1'})

		$('#dong2 a').eq(3).css({color:'#2FC3A2'})

		$('#dong2 a span').eq().css({outline:'1px solid #2FC3A2'})

		$('#xuan2 ol').eq(3).css({left:'195px',transition:'all 0.5s'})

		$('#ka2 li').eq(3).css({left:'-182px',transition:'all 0.5s'})

	})

	$('#dong2 a').eq(4).click(function(){

		$('#xuan2 ol').css({left:'0px',transition:'all 0.5s'})

		$('#ka2 li').css({left:'0px',transition:'all 0.5s'})

		$('#dong2 a span').css({outline:'1px solid #b9c1c1'})

		$('#dong2 a').css({color:'#b9c1c1'})

		$('#dong2 a').eq(4).css({color:'#2FC3A2'})

		$('#dong2 a span').eq(4).css({outline:'1px solid #2FC3A2'})

		$('#xuan2 ol').eq(4).css({left:'195px',transition:'all 0.5s'})

		$('#ka2 li').eq(4).css({left:'-182px',transition:'all 0.5s'})

	})

	$('#dong2 a').eq(5).click(function(){

		$('#xuan2 ol').css({left:'0px',transition:'all 0.5s'})

		$('#ka2 li').css({left:'0px',transition:'all 0.5s'})

		$('#dong2 a span').css({outline:'1px solid #b9c1c1'})

		$('#dong2 a').css({color:'#b9c1c1'})

		$('#dong2 a').eq(5).css({color:'#2FC3A2'})

		$('#dong2 a span').eq(5).css({outline:'1px solid #2FC3A2'})

		$('#xuan2 ol').eq(5).css({left:'195px',transition:'all 0.5s'})

		$('#ka2 li').eq(5).css({left:'-182px',transition:'all 0.5s'})

	})

	$('#dong2 a').eq(6).click(function(){

		$('#xuan2 ol').css({left:'0px',transition:'all 0.5s'})

		$('#ka2 li').css({left:'0px',transition:'all 0.5s'})

		$('#dong2 a span').css({outline:'1px solid #b9c1c1'})

		$('#dong2 a').css({color:'#b9c1c1'})

		$('#dong2 a').eq(6).css({color:'#2FC3A2'})

		$('#dong2 a span').eq(6).css({outline:'1px solid #2FC3A2'})

		$('#xuan2 ol').eq(6).css({left:'195px',transition:'all 0.5s'})

		$('#ka2 li').eq(6).css({left:'-182px',transition:'all 0.5s'})

	})

	$('#dong2 a').eq(7).click(function(){

		$('#xuan2 ol').css({left:'0px',transition:'all 0.5s'})

		$('#ka2 li').css({left:'0px',transition:'all 0.5s'})

		$('#dong2 a span').css({outline:'1px solid #b9c1c1'})

		$('#dong2 a').css({color:'#b9c1c1'})

		$('#dong2 a').eq(7).css({color:'#2FC3A2'})

		$('#dong2 a span').eq(7).css({outline:'1px solid #2FC3A2'})

		$('#xuan2 ol').eq(7).css({left:'195px',transition:'all 0.5s'})

		$('#ka2 li').eq(7).css({left:'-182px',transition:'all 0.5s'})

	})


	//第二个选项卡结束

	// 第三个选项卡开始

	$('#xuan3 a').click(function(){
		var index = $('#xuan3 a').index($(this));

		if(index==0 || index==5){

		}else{
			$('#dong3').css({left:50*index+'px',transition:'all 0.5s'})

			$('#xuan3 a').css({color:'#414242'})

			$('#xuan3 a').eq(5).css({color:'#B9C1C1'})

			$('#xuan3 a').eq(0).css({color:'#2fc3a2'})

			$(this).css({color:'#ff8f17'})

			$('#xx3').css({left:-370*(index-1)+'px',transition:'all 0.5s'})
		}

	})


	//第三个选项卡结束


	// 第4个选项卡开始

		$('#xuan4 a').click(function(){
		var index = $('#xuan4 a').index($(this))

		if(index==0 || index==5){

		}else{
			$('#dong4').css({left:50*index+'px',transition:'all 0.5s'})

			$('#xuan4 a').css({color:'#414242'})

			$('#xuan4 a').eq(5).css({color:'#B9C1C1'})

			$('#xuan4 a').eq(0).css({color:'#2fc3a2'})

			$(this).css({color:'#ff8f17'})

			$('#xx4').css({left:-370*(index-1)+'px',transition:'all 0.5s'})
		}

	})
	//第4个选项卡结束


	//四个小特效触发时向上的效果开始

	$('.gundong li').mouseover(function(){
		var index = $('.gundong li').index($(this))
		$('#gd4-'+(index+1)+' span').eq(1).css({
			top:'55px',
			transitionProperty: 'all, padding, height',
			transitionDuration: '0.2s, 0.2s, 0.2s',
			transitionTimingFunction: 'ease-out, ease-out, ease-out',
			transitionDdelay: '0s, 0.05s, 0.05s',
			transform:'rotateY(360deg)'
		})

		$('#gd4-'+(index+1)+' span').eq(0).css({opacity:'0',top:'-40px',transition:'all 0.5s'})
	}).mouseout(function(){
		var index = $('.gundong li').index($(this))
		$('#gd4-'+(index+1)+' span').eq(1).css({
			top:'95px',
			transitionProperty: 'all, padding, height',
			transitionDuration: '0.2s, 0.2s, 0.2s',
			transitionTimingFunction: 'ease-out, ease-out, ease-out',
			transitionDdelay: '0s, 0.05s, 0.05s',
			transform:'rotateY(0deg)'
		})
		$('#gd4-'+(index+1)+' span').eq(0).css({opacity:'1',top:'25px',transition:'all 0.5s'})

	})

	//四个小特效触发时向上的效果结束



	//上边六个小特效的触发时的效果开始

	$('#fudong li').mouseover(function(){

		var index = $('#fudong li').index($(this))

		$('#gd3-'+(index+1)+' span').eq(0).css({opacity:0,transition:'all 0.2s',top:'-20px'})

		$('#gd3-'+(index+1)+' span').eq(1).css({top:'-5px',transition:'all 0.5s'})

		$('#gd3-'+(index+1)).css({backgroundColor:'#C9A966',transition:'all 0.6s'})

	}).mouseout(function(){

		var index = $('#fudong li').index($(this))

		$('#gd3-'+(index+1)+' span').eq(0).css({opacity:1,transition:'all 0.8s',top:'10px'})

		$('#gd3-'+(index+1)+' span').eq(1).css({top:'10px',transition:'all 0.5s',})

		$('#gd3-'+(index+1)).css({backgroundColor:'transparent',transition:'all 0.4s'})
	})


	//上边六个小特效的触发时的效果结束


	//滑动门开始

	$('#hd-1>li').eq(1).click(function(){
		$('#hd-1').css({left:'-391px',transition:'all 0.5s'})
		$('#hd-1>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -407px 0px'})
		$('#hd-2').css({left:'69px',transition:'all 0.5s'})
		$('#hd-2>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -339px 0px'})
		$('#hd-3').css({left:'138px',transition:'all 0.5s'})
		$('#hd-3>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -136px 0px'})
		$('#hd-4').css({left:'207px',transition:'all 0.5s'})
		$('#hd-4>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -203px 0px'})
		$('#hd-5').css({left:'276px',transition:'all 0.5s'})
		$('#hd-5>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -67px 0px'})
		$('#hd-6').css({left:'345px',transition:'all 0.5s'})
		$('#hd-6>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -271px 0px'})
	})

	$('#hd-2>li').eq(1).click(function(){
		$('#hd-1').css({left:'-391px',transition:'all 0.5s'})
		$('#hd-2').css({left:'-322px',transition:'all 0.5s'})
		$('#hd-3').css({left:'138px',transition:'all 0.5s'})
		$('#hd-4').css({left:'207px',transition:'all 0.5s'})
		$('#hd-5').css({left:'276px',transition:'all 0.5s'})
		$('#hd-6').css({left:'345px',transition:'all 0.5s'})
		$('#hd-1>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat 0px 0px'})
		$('#hd-2>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -748px 0px'})
		$('#hd-3>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -136px 0px'})
		$('#hd-4>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -203px 0px'})
		$('#hd-5>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -67px 0px'})
		$('#hd-6>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -271px 0px'})
	})

	$('#hd-3>li').eq(1).click(function(){
		$('#hd-1').css({left:'-391px',transition:'all 0.5s'})
		$('#hd-2').css({left:'-322px',transition:'all 0.5s'})
		$('#hd-3').css({left:'-253px',transition:'all 0.5s'})
		$('#hd-4').css({left:'207px',transition:'all 0.5s'})
		$('#hd-5').css({left:'276px',transition:'all 0.5s'})
		$('#hd-6').css({left:'345px',transition:'all 0.5s'})
		$('#hd-1>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat 0px 0px'})
		$('#hd-2>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -339px 0px'})
		$('#hd-3>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -544px 0px'})
		$('#hd-4>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -203px 0px'})
		$('#hd-5>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -67px 0px'})
		$('#hd-6>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -271px 0px'})
	})

	$('#hd-4>li').eq(1).click(function(){
		$('#hd-1').css({left:'-391px',transition:'all 0.5s'})
		$('#hd-2').css({left:'-322px',transition:'all 0.5s'})
		$('#hd-3').css({left:'-253px',transition:'all 0.5s'})
		$('#hd-4').css({left:'-184px',transition:'all 0.5s'})
		$('#hd-5').css({left:'276px',transition:'all 0.5s'})
		$('#hd-6').css({left:'345px',transition:'all 0.5s'})
		$('#hd-1>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat 0px 0px'})
		$('#hd-2>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -339px 0px'})
		$('#hd-3>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -136px 0px'})
		$('#hd-4>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -612px 0px'})
		$('#hd-5>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -67px 0px'})
		$('#hd-6>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -271px 0px'})
	})

	$('#hd-5>li').eq(1).click(function(){
		$('#hd-1').css({left:'-391px',transition:'all 0.5s'})
		$('#hd-2').css({left:'-322px',transition:'all 0.5s'})
		$('#hd-3').css({left:'-253px',transition:'all 0.5s'})
		$('#hd-4').css({left:'-184px',transition:'all 0.5s'})
		$('#hd-5').css({left:'-115px',transition:'all 0.5s'})
		$('#hd-6').css({left:'345px',transition:'all 0.5s'})
		$('#hd-1>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat 0px 0px'})
		$('#hd-2>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -339px 0px'})
		$('#hd-3>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -136px 0px'})
		$('#hd-4>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -203px 0px'})
		$('#hd-5>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -475px 0px'})
		$('#hd-6>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -271px 0px'})
	})
	$('#hd-6>li').eq(1).click(function(){
		$('#hd-1').css({left:'-391px',transition:'all 0.5s'})
		$('#hd-2').css({left:'-322px',transition:'all 0.5s'})
		$('#hd-3').css({left:'-253px',transition:'all 0.5s'})
		$('#hd-4').css({left:'-184px',transition:'all 0.5s'})
		$('#hd-5').css({left:'-115px',transition:'all 0.5s'})
		$('#hd-6').css({left:'-49px',transition:'all 0.5s'})
		$('#hd-1>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat 0px 0px'})
		$('#hd-2>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -339px 0px'})
		$('#hd-3>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -136px 0px'})
		$('#hd-4>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -203px 0px'})
		$('#hd-5>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -67px 0px'})
		$('#hd-6>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -679px 0px'})
	})

	$('.ctmr-middle-middle>ul>li').click(function(){

		var index = $('#xuan4 a').index($(this));

	})

	$('.ctmr-middle-middle>ul>li').eq(1).dblclick(function(){
		$('#hd-1').css({left:'0px',transition:'all 0.5s'})
		$('#hd-2').css({left:'69px',transition:'all 0.5s'})
		$('#hd-3').css({left:'138px',transition:'all 0.5s'})
		$('#hd-4').css({left:'207px',transition:'all 0.5s'})
		$('#hd-5').css({left:'276px',transition:'all 0.5s'})
		$('#hd-6').css({left:'345px',transition:'all 0.5s'})
		$('#hd-1>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat 0px 0px'})
		$('#hd-2>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -339px 0px'})
		$('#hd-3>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -136px 0px'})
		$('#hd-4>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -203px 0px'})
		$('#hd-5>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -67px 0px'})
		$('#hd-6>li').eq(1).css({background:'url(./picture/fanstab.jpg) no-repeat -271px 0px'})
	})

	//滑动门结束



})