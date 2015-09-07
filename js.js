var spin = function(){
	/*Get Text from Article*/
	var article = document.getElementById("unspun").value;
	/*Split article into a list named split*/
	var splitbyopen = article.split(/{|}/);



	for (x in splitbyopen){



		if (splitbyopen[x].indexOf("|") > -1){

			var splitbymid = splitbyopen[x].split("|")[Math.floor(Math.random() * splitbyopen[x].split("|").length)];

			splitbyopen[x] = splitbymid;
		}
	}
	


	var SPUNTEXT = document.getElementById('spun');
	SPUNTEXT.value = splitbyopen.join("");


}