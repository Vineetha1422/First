function changeme(source , img_alt){
	document.getElementById('text_ch').innerHTML = 'Click to color it!!';
	document.getElementById('main_cont').style.display = "none";
	document.getElementById('result_cont').style.display = "block";
	document.getElementById('img_change').src = source;
	document.getElementById('img_change').alt = img_alt;
	
}

function colorIt(img_alt){
	temp = document.getElementById('img_change').src;
	check_point = temp.slice(-4);
	if(check_point == '.jpg'){
	    document.getElementById('img_change').src = './images/' + img_alt + '.jpeg';
    }
	else{
		document.getElementById('img_change').src = './images/' + img_alt + '.jpg';
    }
}

