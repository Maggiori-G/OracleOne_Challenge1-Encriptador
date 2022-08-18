function validString(text){
	let regExp=/[^a-z]/gm;;
	let isValid=true;
	if(regExp.test(text)){
		isValid=false;
		alert("Solo se permite el ingreso de letras minusculas y sin acentos");
	}
	return isValid;
}
function encrypt(){
	let text=document.getElementById("txtInicial").value;
	let encryptedText;
	if(validString(text)){
		encryptedText=text.replace(/e/gm,"enter");
		encryptedText=encryptedText.replace(/i/gm,"imes");
		encryptedText=encryptedText.replace(/a/gm,"ai");
		encryptedText=encryptedText.replace(/o/gm,"ober");
		encryptedText=encryptedText.replace(/u/gm,"ufat");
		document.getElementById("txtFinal").value=encryptedText;
	}
	document.getElementById("txtInicial").value="";
}
function decrypt(){
	let text=document.getElementById("txtInicial").value;
	let decryptedText;
	if(validString(text)){
		decryptedText=text.replace(/enter/gm,"e");
		decryptedText=decryptedText.replace(/imes/gm,"i");
		decryptedText=decryptedText.replace(/ai/gm,"a");
		decryptedText=decryptedText.replace(/ober/gm,"o");
		decryptedText=decryptedText.replace(/ufat/gm,"u");
		document.getElementById("txtFinal").value=decryptedText;
	}
	document.getElementById("txtInicial").value="";
}
function copyText(){
	let text=document.getElementById("txtFinal");
	text.select();
	let succesful=document.execCommand("copy");
	if(succesful){
		alert("Copiado");
	}
	else{
		alert("No se pudo copiar");
	}
}