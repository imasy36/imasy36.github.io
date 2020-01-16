var img=null;
var imgcpy1=null;
var imgcpy2=null;
var imgcpy3=null;
var can=null;
function upload()
{
	var fname=document.getElementById("f1");
    img=new SimpleImage(fname);
	imgcpy1=new SimpleImage(fname);
	imgcpy2=new SimpleImage(fname);
	imgcpy3=new SimpleImage(fname);
	can=document.getElementById("cn1");
	img.drawTo(can);
}
function doGrey()
{
	if(!imgcpy1.complete()||imgcpy1==null)
	{
		alert("Image Not Loaded");
		return;
	}
	else
	{
	for(var pix of imgcpy1.values())
	{
		var avg;
		avg=(pix.getRed()+pix.getGreen()+pix.getBlue())/3;
		pix.setRed(avg);
		pix.setBlue(avg);
		pix.setGreen(avg);
	}
	clearCanvas();
	imgcpy1.drawTo(can);
	}
}
function doRed()
{
	if(!imgcpy3.complete()||imgcpy3==null)
		alert("Image Not Loaded");
	else
	{
	for(var pix of imgcpy3.values())
	{
		var avg;
		avg=(pix.getRed()+pix.getGreen()+pix.getBlue())/3;
		if(avg<128)
		{
			pix.setRed(2*avg);
			pix.setGreen(0);
			pix.setBlue(0);
		}
		else
		{
			pix.setRed(255);
			pix.setGreen(2*avg-255);
			pix.setBlue(2*avg-255);
		}
	}
	clearCanvas();
	imgcpy3.drawTo(can);
	}
}
function clearCanvas()
{
	
	doclear(can);
}


function doclear(canvas)
{
	var con=canvas.getContext("2d");
	con.clearRect(0,0,canvas.width,canvas.height);
}