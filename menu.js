var miMenuDesplegable;
function mostrar() {
	//body
	document.getElementById('miMenu').classList.toggle("mostrar");
}
window.onclick=function(e){
	if (!e.target.matches(".boton_desplegar")) {
		miMenuDesplegable=document.getElementById('miMenu');
		if (miMenuDesplegable.classList.contains('mostrar')) {
			miMenuDesplegable.classList.remove("mostrar");
		}
	}
}