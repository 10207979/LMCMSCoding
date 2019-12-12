	function checkQuiz() {
		let subtraction = document.getElementsByName("subtraction");
		let subtractio = document.getElementsByName("subtractio");
		let subtracti = document.getElementsByName("subtracti");
		let subtract = document.getElementsByName("subtract");
		let subtrac = document.getElementsByName("subtrac");
		let percentCorrect =0;
		let numberCorrect =0;




		for (let i = 0; i < subtraction.length; i++) {
			
			if (subtraction[i].checked && subtraction[i].value == "4") {

 			percentCorrect = percentCorrect + 20;
			numberCorrect = numberCorrect +1;
			break;
	

			}


		}


		for (let i = 0; i < subtractio.length; i++) {
			
			if (subtractio[i].checked && subtractio[i].value == "4") {

 			percentCorrect = percentCorrect + 20;
			numberCorrect = numberCorrect +1;
			break;
	

			}


		}


		for (let i = 0; i < subtracti.length; i++) {
			
			if (subtracti[i].checked && subtracti[i].value == "4") {

 			percentCorrect = percentCorrect + 20;
			numberCorrect = numberCorrect +1;
			break;
	

			}


		}


		for (let i = 0; i < subtract.length; i++) {
			
			if (subtract[i].checked && subtract[i].value == "4") {

 			percentCorrect = percentCorrect + 20;
			numberCorrect = numberCorrect +1;
			break;
	

			}


		}


		for (let i = 0; i < subtrac.length; i++) {
			
			if (subtrac[i].checked && subtrac[i].value == "1") {

 			percentCorrect = percentCorrect + 20;
			numberCorrect = numberCorrect +1;
			break;
	

			}


		}

		alert(percentCorrect + " " + numberCorrect);
}