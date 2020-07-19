<!DOCTYPE html>
<html>
<head>
	<title>Take input ratings</title>
	<script type="text/javascript">
		function temp()
		{
			var a = document.getElementsByTagName('a');
			for (var i=0; i<a.length; i++)
			{
				a[i].setAttribute('target','_blank');
			}
		}
	</script>
	<style type="text/css">
		body
		{
			background-image: url("images/b_1.jpg");
			background-size: cover;
			color: black;
			font-size: 20px;
			font-weight: bolder; 
		}
		td
		{
			padding: 5px 20px 5px 10px;
			color:black;
			background-color: #5fd4c4;
		}
		td img{
			height:60px; 
			width: 40px;
		}
		#submit_button
		{
			padding: 5px;
			font-size: 20px;
		}
	</style>
</head>
<body onload="javascript:temp()">
	<center>
	<form action="process.php" method="post">
		<fieldset>
		<legend><mark>&nbsp;&nbsp;Rate the following movies to create a recommendation  profile&nbsp;&nbsp;</mark></legend>
		<table>
			<?php
				$out = shell_exec('java -cp MovieRecommendation.jar inputRatings');
				echo "{$out}";
			?>
		</table>
		</fieldset>
		<input type="submit" value="Submit ratings" id="submit_button">
	</form>
	</center>
</body>
</html>