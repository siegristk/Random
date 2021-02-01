<!doctype html>
<html lang="en">

<head>
<meta charset="utf-8" />
<title>Confirmation</title>
<meta name="Author" content="Kyle Siegrist" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="Keywords" content="probability, statistics, feedback" />
<link rel="icon" href="icons/Icon.png" type="image/png" />
<link href="ScreenStyles.css" rel="stylesheet" type="text/css" />
<link rel="copyright" href="Copyright.html" />
<link rel="contents" href="index.html" />
<link rel="help" href="Introduction.html" />
<script>var baseURL = "./"; window.name = "comments"</script>
<script src="scripts.js"></script>
<style>
	label.response{margin-left: 10px;}
</style>
</head>

<body class="ancillary">

<div class="header">
<h2>Confirmation</h2>
</div>

<?php
$Name = $_POST['Name'];
$EMail = $_POST['EMail'];
$Affiliation = $_POST['Affiliation'];
$Category = $_POST['Category'];
$Location = $_POST['Location'];
$Comments = $_POST['Comments'];
$message = "Name: " . $Name . "\n\nE-Mail: " . $EMail . "\n\nAffiliation: " . $Affiliation . "\n\nCategory: " . $Category . "\n\nLocation: " . $Location . "\n\nComments: " . $Comments;?>

<p>Thank you for very much for submitting the following information:</p>

<fieldset>
<legend>Background Information</legend>
<div>
	<label>Name:</label> <br />
	<label class="response"><?php echo $Name; ?></label>
</div>

<div>
	<label>E-mail address:</label> <br />
	<label class="response"><?php echo $EMail; ?></label>
</div>

<div>
	<label>School or company affiliation:</label> <br />
	<label class="response"><?php echo $Affiliation; ?></label>
</div>

<div>
	<label>Status:</label> <br />
	<label class="response"><?php echo $Status; ?></label>
</div>
		
<div>
	<label>Location (city, state, country):</label> <br />
	<label class="response"><?php echo $Location; ?></label>
</div>
</fieldset>

<fieldset>
<legend>Comments</legend>

<p><?php echo $Comments; ?>
</fieldset>

<?php
	$to = "kyle@randomservices.org";
	$subject = "Virtual Labs Comment Form";
	$from = "Form";
	$headers = "From: $from";
	mail($to,$subject,$message,$headers);
?>

<footer>
<ol class="map">
	<li class="parent"><a href="index.html" class="main" target="main">Random</a></li>
	<li class="child">Confirmation</li>
</ol>
</footer>

</body>
</html>
