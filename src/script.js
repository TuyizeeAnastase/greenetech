import $ from 'jquery';

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
          $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
       
    });
});

// const btn = document.querySelector("button.mobile-menu-button");
// const menu = document.querySelector(".mobile-menu");

// btn.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
// });

