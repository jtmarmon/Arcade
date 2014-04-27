/*
rCade
r - #ff7cf4
C - #FFD700
a - #ff616f
d - #6ed0ff
e - #06ff81

*/
var ticket;
function animateMoney()
{
	var holder = $("#ticket-holder");
	holder.hide();
	holder.stop();
	var money = new Array();
	var rightVals = new Array();
		rightVals[0] = 15;
		rightVals[1] = 20;
		rightVals[2] = 10;
	var initBottom = 30;
	for(var i=0; i<3;i++)
	{
		money[i] = document.createElement("p");	
		money[i]= $(money[i]);
		money[i].append("$");
		money[i].css({
			"color":'#0AFF64',
			'display':'inline-block',
			'text-shadow':'none',
			'position':'absolute',
			'right':rightVals[i] + '%',
			'bottom':initBottom + '%',
			'z-index':'60'
		});
		initBottom +=10;
	$("#money-animation-holder").append(money[i]);
	}
	money[0].animate({'bottom':'+=100','opacity':'0'},2000,"linear");
	money[1].animate({'bottom':'+=100','opacity':'0'},2000,"linear");
	money[2].animate({'bottom':'+=100','opacity':'0'},2000,"linear", redirect);

	//$("#reset-button").css({'background-color':'red'});
}
function redirect()
{
	window.location.replace("log-in.html");
}
function getCircleOffset(circle)
{
	return circle.children().offset().left - (circle.width() - circle.width()/5);
}
function scrollTicket()
{
	var circle = $(this);
	var holder = $("#ticket-holder");

	console.log(getCircleOffset(circle));
	holder.animate({"left":getCircleOffset(circle)},200, "linear");}
function stopTicket()
{
	var circle = $(this);
	circle.children().each(function(){$(this).css({"border":"5px solid rgba(255,255,255,0)", "box-shadow":"0 20px 20px rgba(255,255,255,0), inset 0 -20px 20px rgba(255,255,255,0)"},200, "linear")});
}
var logoColorIndex = 0;
var borderColorIndex = 0;
var ticketLoc = "10";
var timeoutHolder;
$(document).ready(function() {
	//animateElements();
	$(".circle-wrapper").tooltip({'':''});
	ticket = document.createElement("img");
	ticket.setAttribute("src", "img/ticket.png");
	ticket.setAttribute("height","100%");
	ticket.setAttribute("z-index","20");
	ticket.setAttribute("opacity","1");
	document.getElementById("ticket-holder").appendChild(ticket);
		
	$('#circles .circle-wrapper').hover(scrollTicket,stopTicket);

	$('#coin').animate({
	    'opacity':'1'},2000);
	$('#coin').css({'color':'gold'});
});
function resetAnimations()
{
	$("#ticket-holder").show();	
	$("#ticket-holder").css({'opacity':'1', 'visibility':'visbile',"left":"10%"});
	$("#reset-button").css({'background-color':'grey'});
}
