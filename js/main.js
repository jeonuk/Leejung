$(document).ready(function(){   
let width=$('.fade ul li').width();       
    setInterval(fn, 3000);           
function fn(){     
    $('.fade ul').animate({
        left:-width},500, function(){
            $('.fade ul li:first').appendTo('.fade ul');
            $('.fade ul').css('left',0);
        });        
    };
});