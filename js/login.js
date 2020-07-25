window.onload = function(){

	var inp1 = document.getElementById('inp1');
	var inp2 = document.getElementById('inp2');
	var r = document.getElementById('r');
	var btn1 = document.getElementById('btn1');
	var btn2 = document.getElementById('btn2');

	var flag = false;

	var fun1 =function(){

		this.style.background='rgba(255,255,255,0.6)';
	}


	inp1.onblur = function(){

		if(this.value == ''){

			flag = false;
		}else{

			var pattern = /^[\u4e00-\u9fa5\w]{5,16}$/;

			if(pattern.test(this.value)){

				flag = true;

			}else{

				flag = false;
			}

		}

	}

	inp1.onfocus =fun1;

	inp2.onblur = function(){

		if(this.value == ''){

			flag = false;
		}else{

			var pattern = /^\w{5,16}$/;

			if(pattern.test(this.value)){

				flag = true;

			}else{

				flag = false;
			}

		}

	}

	inp2.onfocus =fun1;

	btn1.onclick = function(){

		if(inp1.value != '' && inp2.value != '' && flag){

			alert('欢迎'+inp1.value+'登录成功!');

			window.location.href='./index.html';

		}else{

			alert('请输入正确的用户昵称和密码');

		}

	}

	btn2.onclick = function(){

		window.location.href='./register.html';

	}

	$('.section-main').css({width:'450px',height:'300px',transition:'all 2s'})

}