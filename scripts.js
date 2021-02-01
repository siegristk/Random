/*
Basic script file for Random
Copyright (c) 1997-2019, Kyle Siegrist
See http://www.randomservices.org/random/Copyright.html for more information about rights and permissions
*/

var comment, biography, search, app, data, art, copyright, contents;
var expand = false;
var reference = [];

function openApp(appName){
	app = window.open(baseURL + "apps/" + appName + ".html","app","toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=0,width=750,height=600,top=20,left=20");
	app.focus();
}

function openComment(){
	comment = window.open(baseURL + "Comment.html","comment","toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=0,width=600,height=600,top=20,left=20");
	comment.focus();
}

function openSearch(){
	search = window.open(baseURL + "Search.html","search","toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=0,width=600,height=600,top=20,left=20");
	search.focus();
}

function openCopyright(){
	copyright = window.open(baseURL + "Copyright.html","copyright","toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=0,width=600,height=400,top=20,left=20");
	copyright.focus();
}

function openBiography(bioName){
	biography = window.open(baseURL + "biographies/" + bioName + ".html","biography","toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=0,width=600,height=400,top=20,left=20");
	biography.focus();
}

function openData(dataName){
	data = window.open(baseURL + "data/" + dataName + ".html","data","toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1,width=600,height=400,top=20,left=20");
	data.focus();
}

function openArt(artName){
	art = window.open(baseURL + "art/" + artName + ".html","art","toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1,width=700,height=600,top=20,left=20");
	art.focus();
}

function openContents(){
	contents = window.open(baseURL + "Contents.html","contents","toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=0,width=600,height=400,top=20,left=20");
	contents.focus();
}

function expandProofs(){
	var proofs = document.getElementsByTagName("details");
	var expandButton = document.getElementById("expandButton");
	expand = !expand;
	if (expand){
		expandButton.src = "../Contract.png";
		expandButton.title = "Contract details";
	}
	else{
		expandButton.src = "../Expand.png";
		expandButton.title = "Expand details";
	}
	for (var i = 0; i < proofs.length; i++) proofs[i].open = expand;
}

function expandDetails(b){
	var proofs = document.getElementsByTagName("details");
	for (var i = 0; i < proofs.length; i++) proofs[i].open = b;
}

//Google analytics

//www.randomservices.org
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-65822159-1', 'auto');
  ga('send', 'pageview');



