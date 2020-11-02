var img1=null;
var img2=null;
var can1;
var can2;

function Iupload()
{
	var file=document.getElementById("f1");
	img1=new SimpleImage(file);
	can1=document.getElementById("cn1");
	img1.drawTo(can1);
	img2=new SimpleImage(file);
	can2=document.getElementById("cn2");
}

function unhide()
{
	for(var pix of img2.values())
	{
		pix.setGreen((pix.getGreen()%16)*16);
		pix.setRed((pix.getRed()%16)*16);
		pix.setBlue((pix.getBlue()%16)*16);
	}
	img2.drawTo(can2);
} 


function clearCanvas()
{
	clear(can1);
	clear(can2);
}

function clear(canvas)
{
	var con=canvas.getContext("2d");
	con.clearRect(0,0,canvas.width,canvas.height);
}
