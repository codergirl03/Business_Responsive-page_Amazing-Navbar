// -----------NAVBAR-----------------

var hamburger = document.querySelector(".hamburger");
var ul = document.querySelector(".navbar-nav");
var li = document.querySelectorAll(".nav-item");
var line1 = document.querySelector("#line1");
var line2 = document.querySelector("#line2");
var line3 = document.querySelector("#line3");

hamburger.addEventListener("click" , function(){
    ul.classList.toggle("open-nav");

    li.forEach(link => {
        link.classList.toggle("fade");
    });

    line1.classList.toggle("hover");
    line2.classList.toggle("hover");
    line3.classList.toggle("hover");
});

// ------------VIDEO--------------

var myVideo = document.querySelector('#video1');
var playButton = document.querySelector('#playVideo');
var removeh1 =  document.querySelector("#text");
var removeSloy = document.querySelector("#sloy");

playButton.addEventListener('click' , function(i){
    if(myVideo.paused){
         for(i=0 ; i<1000 ; i++){
        myVideo.play();
        removeh1.style.display="none";
        removeSloy.style.opacity= "0";
         }
    }else{
        myVideo.pause();
        if(myVideo.played){
            myVideo.pause();
             removeh1.style.display="block";
             removeSloy.style.opacity= "0.9";
        }else{
            myVideo.play();
        }
    }
});



// ------------------DROPDOWN------------------

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

  function dropdownFunction(){
      $("#myDropdown").slideToggle();
      document.querySelector("#myDropdown").classList.toggle("show");
  }

  function dropdownFunction1(){
    $("#myDropdown1").slideToggle();
      document.querySelector("#myDropdown1").classList.toggle("show"); 
  }
   
  function dropdownFunction2(){
    $("#myDropdown2").slideToggle();
      document.querySelector("#myDropdown2").classList.toggle("show"); 
  }

  function dropdownFunction3(){
    $("#myDropdown3").slideToggle();
      document.querySelector("#myDropdown3").classList.toggle("show"); 
  }

  function dropdownFunction4(){
    $("#myDropdown4").slideToggle();
      document.querySelector("#myDropdown4").classList.toggle("show"); 
  }


   $(document).ready(function(){
   $('#vertical').slick({
       autoplay:true,
		vertical: true,
		infinite: true,
		verticalSwiping: true,
		slidesPerRow: 2,
		slidesToShow: 2,
		focusOnSelect: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-up"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-down"></i></button>',


    responsive: [
            {
              breakpoint: 768,
              settings: {
               
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 620,
              settings: {
               
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
               
                slidesToShow: 2
              }
            }
          ]
	});
       
    });
  
