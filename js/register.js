window.onload=function(){

	//表单验证开始

	var one = document.getElementById('one');

	var two = document.getElementById('two');

	var three = document.getElementById('three');

	var four = document.getElementById('four');

	var agree = document.getElementById('agree');

	var btn1 = document.getElementById('btn1');

	var tab = document.getElementById('tab');

	var flag = false;

	var fun = function(){

		if(one.value != '' && two.value != '' && three.value != '' && four.value != '' && flag){

			btn1.style.backgroundColor = 'rgba(255,0,0,1)';

			btn1.removeAttribute('disabled');

		}else{

			btn1.setAttribute('disabled','disabled');

			btn1.style.backgroundColor = 'rgba(255,0,0,0.6)';

		}

	}

	var fun1 =function(){

		this.style.background='rgba(255,255,255,0.6)';
	}
	one.onfocus = fun1;

	one.onblur = function(){

		if(this.value == ''){

			this.nextSibling.innerHTML="邮箱不能为空";

			this.nextSibling.style.color="#f00"

			flag = false;
		}else{

			var pattern = /^\w{6,}(@qq\.com|@163\.com|@126\.com|@gmail.com|@0355.net|@163.com|@163.net|@263.net|@3721.net|@yeah.net|@googlemail.com|@mail.com){1}$/;

			if(pattern.test(this.value)){

				flag = true;

				this.nextSibling.innerHTML="";

			}else{

				this.nextSibling.innerHTML="请输入正确的邮箱";

				this.nextSibling.style.color="#f00";

				flag = false;
			}

		}

		fun();

	}

	two.onfocus =fun1;

	two.onblur = function(){

		if(this.value == ''){

			this.nextSibling.innerHTML="昵称不能为空";

			this.nextSibling.style.color="#f00"

		}else{

			var pattern = /^[\u4e00-\u9fa5\w]{5,16}$/;

			if(pattern.test(this.value)){

				this.nextSibling.innerHTML="";

				flag = true;

			}else{

				this.nextSibling.innerHTML="输入正确的昵称";

				this.nextSibling.style.color="#f00";

				flag = false;
			}

		}

		fun();

	}

	three.onfocus =fun1;

	three.onblur = function(){

		if(this.value == ''){
			this.nextSibling.innerHTML="密码不能为空";

			this.nextSibling.style.color="#f00"

		}else{

			var pattern = /^\w{5,16}$/;

			if(pattern.test(this.value)){

				var pattern = /^[0-9]{5,16}$/;

				if(pattern.test(this.value)){

					this.nextSibling.innerHTML="密码强度为弱";

					this.nextSibling.style.color="orange"

				}else{

					var pattern = /^[a-zA-Z]{5,16}$/;

					if(pattern.test(this.value)){

						this.nextSibling.innerHTML="密码强度为中";

						this.nextSibling.style.color="pink"

					}

					else{
						this.nextSibling.innerHTML="密码强度为强";

						this.nextSibling.style.color="#0f0"

					}

				}

			flag = true;

			}else{

				this.nextSibling.innerHTML="长度为6-16";

				this.nextSibling.style.color="#f00";

				flag = false;
			}

		}

		if(four.value==this.value){

		}else{

			four.nextSibling.innerHTML="密码不一致"

			four.nextSibling.style.color="#f00"

			flag = false;
		}
		fun();
	}

	four.onfocus = fun1;

	four.onblur = function(){


		if(this.value == ''){

			this.nextSibling.innerHTML="";

			// this.nextSibling.style.color="#f00"
		}else{
			var pattern = /[\u4e00-\u9fa5\w]{5,16}/;

			if(this.value == three.value){

			this.nextSibling.style.color="#0f0"

			this.nextSibling.innerHTML="";

			flag = true;

			}else{
				this.nextSibling.innerHTML="密码不一致";

				this.nextSibling.style.color="#f00";

			    flag = false;
			}
		}
		fun();
	}

	agree.onclick = function(){

		if(agree.checked==true){

			flag = true;

			this.nextSibling.nextSibling.nextSibling.innerHTML="";

		}else{

			flag = false;


			this.nextSibling.nextSibling.nextSibling.innerHTML="必须同意以上条款后，才能提交注册";
		}

		fun();
	}

	tab.onsubmit = function() {

		alert(two.value+'  恭喜你！ 注册成功！')
		window.location.href='./login.html';
		return false;

	}
	btn1.onclick = function(){

		window.location.href='./login.html';
	}

	//表单验证结束



	// 表单淡出的效果开始
	$(function(){
				$('.section-tab-1').css({left:'30px',background:'rgba(255,255,255,.6)',transition:'all 2s'})

		$('#tab').css({opacity:'1',transition:'all 5s'})

	})

	// 表单淡出的效果开始



	// 底部内容的效果开始

	$('.section-content-1>ul>li').each(function(){

		$(this).mouseover(function(){

			$(this.lastChild).css({background:'#000'});
			$(this.firstChild.nextSibling).css({width:'300px',height:'300px',left:'-50px',top:'-90px',transition:'all 0.2s'});

		}).mouseout(function(){

			$(this.lastChild).css({background:'#3ed2b2'});
			$(this.firstChild.nextSibling).css({width:'0',height:'0',left:'90px',top:'70px',transition:'all 0.2s'});

		})
	})

	// 底部内容的效果结束

}