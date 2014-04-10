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
		rightVals[2] = 10
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
	for(var i=0; i<3; i++)
	{
		money[i].animate({'bottom':'+=100','opacity':'0'},1000,"linear");
	}
}
function scrollTicket()
{
	var circle = $(this);
	var holder = $("#ticket-holder");
	holder.animate({"left":circle.offset().left-140},200, "linear");

	circle.children().css({"border":"5px solid rgba(255,255,255,.8)", "box-shadow":"0 20px 20px rgba(255,255,255,.3), inset 0 -20px 20px rgba(255,255,255,.3)"},200, "linear");
	circle.children().append(tooltip);
	$("#circles img").stop();
	//$("#circles img").animate({"top":"-=10",'left':'+=5'},300);
	holder.queue(function()
	{
		$(this).dequeue();
	});
}
function stopTicket()
{
	var circle = $(this);
	circle.children().each(function(){$(this).css({"border":"5px solid rgba(255,255,255,0)", "box-shadow":"0 20px 20px rgba(255,255,255,0), inset 0 -20px 20px rgba(255,255,255,0)"},200, "linear")});
	$("#ticket-holder").clearQueue();
	$("#ticket-holder").stop();
	$("#circles img").stop();
	//$("#circles img").animate({"top":"+=10","left":"-=5"},300);
}
var logoColorIndex = 0;
var borderColorIndex = 0;
var ticketLoc = "10";
var timeoutHolder;
$(document).ready(function() {
	//animateElements();
	
ticket = document.createElement("img");
ticket.setAttribute("src", "img/ticket.png");
ticket.setAttribute("height","100%");
ticket.setAttribute("z-index","20");
ticket.setAttribute("opacity","1");
document.getElementById("ticket-holder").appendChild(ticket);
	
	$('#circles .circle-wrapper').hover(scrollTicket,stopTicket);

	$('#coin').animate({
        'opacity':'1'
    },2000);
    $('#coin').css({
    	'color':'gold'
    })
});
function resetAnimations()
{
	$("#ticket-holder").show();	
	$("#ticket-holder").css({'opacity':'1', 'visibility':'visbile',"left":"10%"});
}
