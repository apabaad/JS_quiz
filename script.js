function validate(){
	
	var total=6;
	var score=0;

	var q1 = document.forms["quizform"]["q1"].value;
	var q2 = document.forms["quizform"]["q2"].value;
	var q3 = document.forms["quizform"]["q3"].value;
	var q4 = document.forms["quizform"]["q4"].value;
	var q5 = document.forms["quizform"]["q5"].value;
	var q6 = document.forms["quizform"]["q6"].value;



	

	for(i=1; i<=total; i++){
		if (eval('q'+i) == '') {
		alert('You missed question '+ i);
		return false;	
	}
	}


	var answers = ["b","b","c","a","b","d"];


	for(i=1; i<=total; i++){
	if(eval('q'+i) == answers[i-1]){
		score++;
		}
	}

	document.getElementById('results').innerHTML='<h3>You scored <span>' +score+ '</span> out of <span>' +total+ '</span>.</h3>';
	return false;

}