var img1=null;
var img2=null;
var can1;
var can2;
function I1upload()
{
	var file=document.getElementById("f1");
	img1=new SimpleImage(file);
	can1=document.getElementById("cn1");
	img1.drawTo(can1);
}

function I2upload()
{
	var file=document.getElementById("f2");
	img2=new SimpleImage(file);
	can2=document.getElementById("cn2");
	img2.drawTo(can2);
}

function I1setp()
{
	for(var pixel of img1.values())
	{
		pixel.setGreen(pixel.getGreen()-pixel.getGreen()%16);
		pixel.setRed(pixel.getRed()-pixel.getRed()%16);
		pixel.setBlue(pixel.getBlue()-pixel.getBlue()%16);
	}
}

function hide()
{
	I1setp();
	clearCanvas();
	for(var pix of img1.values())
	{
		var x=pix.getX();
		var y=pix.getY();
		var pi=img2.getPixel(x,y);
		pix.setGreen(pix.getGreen()+Math.floor(pi.getGreen()/16));
		pix.setRed(pix.getRed()+Math.floor(pi.getRed()/16));
		pix.setBlue(pix.getBlue()+Math.floor(pi.getBlue()/16));
	}
	img1.drawTo(can1);
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