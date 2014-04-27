
function showPreorder(){
	$("#i-want-it").addClass('i-want-clicked');
	$("#waiting-for").hide();
	setTimeout(function(){
		$("#preorder-wrapper").show(500);
	},750);
}
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 
function checkEmail(){
	if(validateEmail(document.getElementById('emailInput').value))
	{

		$('.bitcard-button').show( 'slow');
	}
	else
	{
		$('.bitcard-button').hide('slow');
	}
}
$(document).ready(function(){
	
	setTimeout(function(){
		$('#f1_container').animate({'opacity':'1'},2000,'linear');
		$('#tagline').animate({'opacity':'1'}, 2000,'linear');
	},200);
    //** notice we are including jquery and the color plugin at 
    //** http://code.jquery.com/color/jquery.color-2.1.0.js
     var alpha = Math.min(0.4 * $(this).scrollTop() / 1, 0.9);
        $("#p1").css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
 $(document).scroll(function() {
        var alpha = 0.6 * $(this).scrollTop() / 150;
	    $("#p1").css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
	    $("#p2").css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
	    $('#p1 .theme-font').css('opacity', 1-alpha);

 		 var percentageVisible = $(window).scrollTop()/$(window).height()
 		 if(percentageVisible>=1)
 		 	percentageVisible=1;
 		 var offset = 100 - percentageVisible*100;
 		 $("#p2 *").css({'opacity':percentageVisible});
    });
 
});
