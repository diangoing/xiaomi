
window.onload=function(){
	var lbt  = document.getElementById('lb');
	var bo  = document.getElementById('lunbodu');
 	var bos = bo.children;
 	var len = bos.length;

 	var bt = document.getElementById('bt');
 	var bts = bt.children;
 	
 	var count = 0;

 	function start(time){
 		inter = setInterval(function(){
 		for(var i = 0;i<len;i++){
 			if(count === i){
 				
 				bos[count].firstElementChild.style.opacity = '1';
 				bts[count].style.backgroundColor='#6E707B';
 			}else{
 				
 				bos[i].firstElementChild.style.opacity = '0';
 				bts[i].style.backgroundColor='transparent';
 			}
 		}
 		if(count<len-1){
 			count++
 		}else{
 			count=0;
 		}
 		
 	},time)
 	}
 	
 	start(3000);
	var btlft = document.getElementById('lft');
	var rilft = document.getElementById('rit');
	btlft.addEventListener('click',function(ev){
		if(count>0){
	 			count--;
	 		}else{
	 			count=len-1;
	 		}
			for(var i = 0;i<len;i++){
	 			if(count === i){
	 				
	 				bos[count].firstElementChild.style.opacity = '1';
	 				bts[count].style.backgroundColor='#6E707B';
	 			}else{
	 				
	 				bos[i].firstElementChild.style.opacity = '0';
	 				bts[i].style.backgroundColor='transparent';
	 			}
	 		}
	 		
		})
	rilft.addEventListener('click',function(ev){
		if(count<len-1){
	 			count++;
	 		}else{
	 			count=0;
	 		}
			for(var i = 0;i<len;i++){
	 			if(count === i){
	 				
	 				bos[count].firstElementChild.style.opacity = '1';
	 				bts[count].style.backgroundColor='#6E707B';
	 			}else{
	 				;
	 				bos[i].firstElementChild.style.opacity = '0';
	 				bts[i].style.backgroundColor='transparent';
	 			}
	 		}
	 		
		})
	bt.addEventListener('click',function(ev){
		var target = ev.target;
		var current = ev.currentTarget;
		var tars = current.children;
		if(target === current)return;
		for(var i=0;i<len;i++){
			if(tars[i] === target){
				bos[i].firstElementChild.style.opacity = '1';
	 			tars[i].style.backgroundColor='#6E707B';
	 			count=i;
	 			console.log(current);
			}else{
				bos[i].firstElementChild.style.opacity = '0';
	 			tars[i].style.backgroundColor='transparent';
			}
		}
	})

	lbt.addEventListener('mouseenter',function(ev){
		clearInterval(inter);
			count--;

			

	})
	lbt.addEventListener('mouseleave',function(){
		start(3000);
		if(count<len-1){
			count++;

			}else{count=0;}
		})


}
