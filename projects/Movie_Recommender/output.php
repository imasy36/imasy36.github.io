<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

	<?php
		$id = shell_exec("java -cp MovieRecommendation.jar addWebRater");
		$cmd = 'java -cp MovieRecommendation.jar printRecommendations '.$id;
		$output = shell_exec($cmd);
		echo "{$output}";
	?>

</body>
</html>