<?php
	$res = "movie_id,rating\n";
	$name = filter_input_array(INPUT_POST);
	foreach ($name as $key => $value) {
		if($value>=0)
		{
		 	$res.=$key.",".$value."\n";
		}
	}
	$myfile = fopen("data/webRater.csv","w")or die("Unable to create file");
	fwrite($myfile, $res);
	fclose($myfile);
	header("Location: output.php");
	exit();
?>
