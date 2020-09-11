// captures the first image
   var index = 1;
   
   function plusIndex(n){
          index = index + n;
		  showImage(index);
   }
   showImage(1);
   
   function showImage(n){
           var i;
		   var x= document.getElementsByClassName("slides");
		   if(n > x.length) { index = 1};
		   if(n < 1){index = x.length};
		   for(i = 0; i<x.length;i++)
		      {
			       x[i].style.display = "none";
			   }
			  x[index-1].style.display = "block";
			  }
			  
	//glides through the images collections
			  			  autoSlide();
			  function autoSlide(){
			   var i;
		       var x = document.getElementsByClassName("slides");
		   for(i = 0; i<x.length;i++)
		      {
			       x[i].style.display = "none";
			   }
			   if(index > x.length){index = 1}
			  x[index-1].style.display = "block";
			  index++;
			  setTimeout(autoSlide,5000);
			  }



// toggle the div

document.getElementById("abt").addEventListener("click",function(){
	var box1= document.getElementById("box1");
	if(box1.style.display =="none")
	{
		box1.style.display= "block";

	}
	else{
		box1.style.display= "none";
	}
});


document.getElementById("srv").addEventListener("click",function(){
	var box2= document.getElementById("box2");
	if(box2.style.display =="none")
	{
		box2.style.display= "block";

	}
	else{
		box2.style.display= "none";
	}
});


document.getElementById("prj").addEventListener("click",function(){
	var box3= document.getElementById("box3");
	if(box3.style.display =="none")
	{
		box3.style.display= "block";

	}
	else{
		box3.style.display= "none";
	}
});


window.smoothScroll= function(target)
{
	var scrollContainer = target;
	do {
		scrollContainer = scrollContainer.parentNode;
		if (!scrollContainer)return;
		scrollContainer.scrollTop 
		+=1;
		} while (scrollContainer.scrollTop==0);

		var targetY = 0;
		do{
		if ( target == scrollContainer)

		break;
		targetY += target.offsetTop;
		} while (target = target.offsetParent);

		scroll = function(c, a, b, i) {
			i++; if(i > 30) return;
		c.scrollTop = a + (b - a) / 30 * i;
		setTimeout(function(){ scroll(c, a, b, i); }, 20);
		}
		scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

