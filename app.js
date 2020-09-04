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
