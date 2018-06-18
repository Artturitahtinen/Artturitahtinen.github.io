function EngSivulle(){
	window.location = "EngBlogi";
}
function FinSivulle(){
	window.location = "index";
}
window.onload = function(){
	var x = document.getElementsByClassName("circle-img");
	var y = x[0];
	var opacitointiArvo = 0;
	var t = setInterval(Opacitoi2, 50);
	
	function Opacitoi2(){
	if(opacitointiArvo > 1){
		clearInterval(t);
	}
	else{
		opacitointiArvo += 0.1;
		var z = opacitointiArvo.toString();
		y.style.opacity = opacitointiArvo;
	}
	}
	
};
