/*
rCade
r - #ff7cf4
C - #FFD700
a - #ff616f
d - #6ed0ff
e - #06ff81

*/
var colors = new Array();
colors[0] = "#ff7cf4";
colors[1] = "#ff616f";
colors[2] = "#6ed0ff";
colors[3] = "#06ff81";
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

$(document).ready(function() {
	//animateElements();
	$('#coin').animate({
        'opacity':'1',
        'top':'5px'
    },1500);
    $('#coin').css({
    	'color':'gold'
    })
});
function spectrum(){
		borderColorIndex++;
		borderColorIndex%=borderColors.length;
		/*$('#middle-section').css({'backgroundColor': borderColors[borderColorIndex]}).animate({},function()
			{
				setTimeout(spectrum, 2200);
			});
	*/
	 }
function animateElements()
{
	$("#animated-logo li").each(colorLogo);
	logoColorIndex+=4;
	logoColorIndex%=colors.length;

	setTimeout(animateElements, 700);
}
function colorLogo(index, ele)
{
	ele = $(ele);		
	if(!(ele.attr("id")==="coin"))
	{
		ele.css({"color":colors[logoColorIndex]});
		logoColorIndex++;
		logoColorIndex%=4;
	}


}
