var a;
var convert;

document.getElementById("temp").onclick = function() {
	a = parseInt(document.getElementById("a").value);
	convert = a*1.8+32;
	document.getElementById("results").innerHTML = convert;
	compare();
}


function compare () {

if( (a >= 11) && (a < 18) ) {
        document.body.style.backgroundImage ="url('images/fall.jpeg')";
    }
    else if (a < 11) {
    	document.body.style.backgroundImage ="url('images/winter.jpeg')";
    }
    else if ( (a >= 18) && (a <= 23) ) {
    	document.body.style.backgroundImage ="url('images/spring.jpeg')";
    }

    else if (a > 23) {
    	document.body.style.backgroundImage ="url('images/summer.jpg')";
    }

}
