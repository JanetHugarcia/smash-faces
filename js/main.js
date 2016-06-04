var pais=null;
var num=null;
var aux=[];
var mensaje=null;
var c=0;
var vida=5;

$(document).ready(function(){
	$("#lista").on('change', function() {
		aux=[];
		c=0;
		$('#puntos span').text(c);
		var valor=$('#lista').val();
		obtenerSegunSelect(valor);

	});
	$('#comprobar').click(function(){
		$('#mensaje').text("");

		if($('#nombre').val().toLowerCase()==pais[num].name.toLowerCase()){
			c+=5;
			$('#puntos span').text(c);
			$('#mensaje').text("Excelente!, Haz acertado");

			var valor=$('#lista').val();
			obtenerSegunSelect(valor);
			$('#nombre').val("");
		}else{
			vida--;
			$('#mensaje').text("Sigue intentando tienes " + (vida)+" oportunidades");
			if(vida==0){
				var valor=$('#lista').val();
				obtenerSegunSelect(valor);
				$('#nombre').val("");
				c--;
				$('#puntos span').text(c);
				$('#mensaje').text("");
				vida=5;

			}
		}

	});
});
function randomNoRepetido(maximo){
	var tamaño=maximo.length;
	var aleatorio;
	var existe = true;
	do{

		aleatorio=Math.floor(Math.random()*tamaño);
		
		if(aux.length== tamaño){
			aleatorio=-1
			existe=false;
			alert("Ya no hay imágenes");
		}else if(aux.length==0){
			aux.push(aleatorio);
			existe=false;
		}else{
			var encontrado = aux.indexOf(aleatorio);
			if(encontrado<0){
				aux.push(aleatorio);
				existe = false;
			}else{
				console.log("Se repite " + aleatorio);
			}
		}
	
	}while(existe)
	return aleatorio;
}
function obtenerSegunSelect(valor){		
		if (valor==2) {
			pais=peru;
			num=randomNoRepetido(pais);
			setTimeout(fotos(peru,num),3000);
		}else if (valor==3) {
			pais=mexico;
			num=randomNoRepetido(pais);
			setTimeout(fotos(mexico,num),3000);
		}else{
			$("#imagen").html("<span>Elige pais</span>");	
		}
}
function obtenernombrepais(){
	var npais = "";
	if(pais === peru)
		npais = "peru";
	else {
		npais = "mexico";
	}
	return npais;
}
function fotos(pais,num){

	var foto=('fotos/'+obtenernombrepais()+'/'+pais[num].image);
	$("#imagen").html("<img class='foto' src='"+foto+"'/>");	
}



