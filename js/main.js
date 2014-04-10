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
	var money = new Array();
	var rightVals = new Array();
		rightVals[0] = 17.5;
		rightVals[1] = 22.5;
		rightVals[2] = 12.5;
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
function checkTicketLoc()
{
	var holder = $("#ticket-holder");
	if(holder.offset().left> $("#circle3").offset().left + 60)
	{
		holder.hide();
		holder.stop();
		animateMoney();
	}
	setTimeout(checkTicketLoc);
}
function scrollTicket()
{
	var holder = $("#ticket-holder");
	ticketLoc = holder.offset().left;
	holder.animate({"left":ticketLoc+=95 + "%"},20000, "linear");
	$("#circles img").animate({"top":"-=10",'left':'+=5'},300);
	checkTicketLoc();
	holder.queue(function()
	{
		$(this).dequeue();
	});
}
function stopTicket()
{
	$("#ticket-holder").clearQueue();
	$("#ticket-holder").stop();
	$("#circles img").animate({"top":"+=10","left":"-=5"},300);
}
var colors = new Array();
/*colors[0] = "#ff7cf4";
colors[1] = "#ff616f";
colors[2] = "#6ed0ff";
colors[3] = "#06ff81";*/
colors[0] = "#FF00FF";
colors[1] = "red";
colors[2] = "#00FF00";
colors[3] = "#00FFFF";
colors[4] = "#FFFF00";
var borderColors = new Array();
/*
borderColors[0] = "#ff7cf4";
borderColors[1] = "#ff616f";
borderColors[2] = "#FFD700";
borderColors[3] = "#06ff81";
borderColors[4] = "#6ed0ff"s;
*/
borderColors[0] = "#FFD700";
borderColors[1] = "#C0C0C0";
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
	
	$('#circles img').hover(scrollTicket,stopTicket);

	$('#coin').animate({
        'opacity':'1'
    },2000);
    $('#coin').css({
    	'color':'gold'
    })
});

function animateElements()
{
	$("#animated-logo li").each(colorLogo);
	logoColorIndex+=4;
	logoColorIndex%=colors.length;

	setTimeout(animateElements, 300);
}
function colorLogo(index, ele)
{
	ele = $(ele);		
	if(!(ele.attr("id")==="coin"))
	{
		ele.css({"color":colors[logoColorIndex]});
		logoColorIndex++;
		logoColorIndex%=5;
	}


}
function resetAnimations()
{
	ticketLoc=10;
	$("#ticket-holder").css({'opacity':'1', 'visibility':'visbile'});
}
