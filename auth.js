function login(form)
{
	if(form.username.value=="imasy36"&&form.pass.value=="_Imasy36")
	{
		alert("succesfully logged in ");
		window.open("main.html","_self");
	}
	else
	{
		alert("wrong credentials !!!!");
	}
}