window.onload=function(){

	var lun1 = document.getElementById('lunbo1');
	var dian = document.getElementById('dian');
	var ull = document.getElementById('ull');
	var lsp = dian.getElementsByTagName('span');
	var res=0;
	var num;
	var lis = ull.getElementsByTagName('li');

	var timer = setInterval(func,3000);

    // 小圆点
	function func(){
		lsp[res].style.background = '#9b9b9b';
		run(lsp[res],{width:14});
		if(res<6){
			res++;
		}else{
			res=0;
		}
		run(ull,{left:-800*res});
		lsp[res].style.background = '#2fc3a2';

	}

	for(var i=0;i<lsp.length;i++){

		lsp[i].onmouseover = function(){
			console.log(i)
			clearInterval(timer);
			num = this.innerText-1;

			ull.style.left = -800 * num +　'px';

			ull.style.transition = 'all 0.05s';

			for(var j=0;j<lsp.length;j++){
				lsp[j].style.width = '14px'
				lsp[j].style.background = '#9b9b9b'
			}
			this.style.background = '#2fc3a2';

			timer = setInterval(function(){

				if(num>lsp.length-1){
					num = 0;
					ull.style.left = -800*num+'px';
					ull.style.transition = 'all 0.05s'
				}

				run(ull,{left:-800*num});

				for(var j=0;j<lsp.length;j++){
					if(j==num){
						lsp[num].style.background = '#2fc3a2';
					}else{
						lsp[j].style.width = '14px'
						lsp[j].style.background = '#9b9b9b'
					}
				}

				num++;

			},3000)
		}
	}

}