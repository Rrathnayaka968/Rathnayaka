// JavaScript Document
var time = 100;
var worker_1_id = 0;

function start(event){
	
	if (event.code == "Enter" & worker_1_id == 0) { //Entrr ebuwoth haa worker id eka 0 unoth witharak run wenawa
		startTimer();
	}
	
	if (event.code =="Space") {
		alert("B");
	}
}

function startTimer(){
	
	worker_1_id = setInterval(() => {
		
			time = time - 1; // time eken 1 adu wenawa
	
	 	if(time == 0){ // time eka " 0 " kiyala chek 
	 	 	alert("Game Over"); 
			window.location.reload(); // if eka reload wenna code eka
	 	}

		document.getElementById("time").innerHTML ="Your Remaining Time : " +time; //html wala text ekata java link kara	
		
	}, 1000);
	

}

worker_name = setInterval(() =>{ /* wada karanna oni wada kotasa */ },1000 /* count wena welawa mili thathpara walin */ );

