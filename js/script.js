function agregar(){
	// toma el texto que se esta ingresando en textarea
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";
	// donde estará los textos que acabamos de tomar de textarea
	var cont = document.getElementById("contenedor");
	// nuevos nodos (elementos en html)
	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode("tareas");
	var elementoContenedor = document.createElement("span");
	// textarea no vacia ?? segun yo deberia ir en la linea 5
	if(tareas == null || tareas.length == 0) {
		alert("¡Error! Debe ingresar tarea");
		return false;
	}
	// asignamos los padres a los elementos creados
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);
	// nuevos checkbox e iconos
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class","check");
	var basura = document.createElement("span");
	basura.classList.add("fa","fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa","fa-heart");
	// asignamos los padres a los elementos nuevos
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);
	// evento al hacer clic
	chck.addEventListener("click", function(){
		elementoContenedor.classList.toggle("tachado");
		console.log("tachar/ seleccionar");
	});
	// remueve icono basura al hacer clic
	basura.addEventListener("click", function(){
		cont.removeChild(nuevasTareas);
		console.log("borra tarea");
	});
	// creacion funcion <3 y css
	cora.addEventListener("click", function(){
		cora.classList.toggle("red");
		console.log("activa corazón");
	});
}







