@import url('https://fonts.googleapis.com/css?family=Rubik'); 
body { 
	font-family: 'Rubik', sans-serif; 
} 
* { 
	box-sizing: content-box; 
} 
article { 
	background: #CCC; 
	width: 180px; 
	padding: 10px; 
	margin: 10px; 
	display: inline-block; 
	vertical-align: top; 
} 
article>header { 
	background: #5F5F5F;
	color: white;
	margin: 0px 0px 10px 0px; 
	padding: 4px 6px; 
}
article>header>h1 { 
	margin: 0px; 
} 
article>select {
	width: 178px; 
} 
article>input { 
	width: 176px; 
} 
article>button {
	display: block; 
	margin: 10px auto 0px auto; 
	border: none; 
	border-radius: 3px; 
	padding: 5px 15px; 
	background: green; 
	color: white; 
	font-weight: bold; 
} 
article>button:hover { 
	box-shadow: 0px 0px 10px white; 
	cursor: pointer; 
} 
button#btnDelete { 
	background: red; 
} 
#result { 
	display: none; 
	width: 50%; 
	margin: 10px auto; 
	padding: 10px 15px; 
	background: #DDD; 
	border-radius: 5px; 
	border: 1px solid #777; 
}
function deleteTown() {
    let townName = $('#townName').val();
    $('#townName').val('');
    let removed = false; 
    for (let option of $('#towns option')) {
        if (option.textContent == townName) {
            removed = true; 
	    option.remove();
	}
    } 
    if (removed) 
	showMessage(townName + " deleted.");
    else 
	showMessage(townName + " not found.");
}

function showMessage(msg) { 
    $('#result').text(msg).css("display", "block"); 
    setTimeout(function () {
        $('#result').hide('blind', {}, 500); 
    }, 3000); 
}
