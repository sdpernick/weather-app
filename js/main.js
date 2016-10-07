var a;
var convert;

document.getElementById("temp").onclick = function() {
	a = parseInt(document.getElementById("a").value);
	convert = a*1.8+32;
	document.getElementById("results").innerHTML = convert;
	compare()
}


function compare () {

if( (a > 10) && (a < 19) ) {
        document.body.style.backgroundImage ="url('fall.jpeg')";
    }
    else if (a < 11) {
    	document.body.style.backgroundImage ="url('winter.jpeg')";
    }
    else if ( (a > 18) && (a < 24) ) {
    	document.body.style.backgroundImage ="url('spring.jpeg')";
    }

    else if (a > 23) {
    	document.body.style.backgroundImage ="url('summer.jpg')";
    }

}
