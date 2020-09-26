
 //waypoint (Sticky Menu)
 $(document).ready(function(){
 	$(".js--services-section").waypoint(function(direction){
    		if(direction == "down" ){
    			$("nav").addClass("sticky");
		}else{
    			$("nav").removeClass("sticky");

    		}
 	});
  
 });



 //Smooth scroll for IE/ EDGE/SAFARI


 


  $("a").on('click', function(event){
 	
 	if (this.hash !== "") {
 		event.preventDefault();

 		var hash = this.hash;

 		$('html,body').animate({
 				srcollTop:$(hash).offset().top
 			}, 800 , function(){
 			window.location.hash = hash;
 		});
 	}

 });

  


 //mixitup (portfolio section)
var config = document.querySelector(".container");
 var mixer = mixitup(config);




//Ressponsive Navbar

 function openNav(){
 	document.getElementById("myNav").style.width="100%";

}
 function closeNav(){
	document.getElementById("myNav").style.width="0%";
 	
}









  

 