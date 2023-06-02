function obtenerDatos() {
	fetch("./src/datosPelis.json")
		.then(res => res.json())
		.then(({ PELIS }) => {
			console.log(PELIS)
			generarDatos(PELIS)
		}
		)
}

function generarDatos(datos) { //recibe un arreglo de objetos
	let n = datos.length
	let txt = `<div class="container text-center">
`
	for (i = 0; i < n; i++) {
		// let salto = true
		if (i % 2 == 0) {
			salto = false;
			txt += `    <div class="row g-3 ">
`
		}
		txt += `      <div class="col pos">
		<div class="contimg">
			<img src="${datos[i].IMG}" alt="${datos[i].NOM}"
				class="img-fluid  i">
			<div class="sinopsis"><p>${datos[i].SINOP} <br><br> Dirigida por <a href="${datos[i].DIRL}" target="_blank" rel="noopener noreferrer">${datos[i].DIRN}</a></p></div>
		</div>
		<b>${datos[i].NOM}</b>
	</div>`
		// if (i % 2 == 0 && salto == true) {
		// 	txt += `    </div>
		// 	`
		// }
		if(i % 2 != 0){
			txt += `    </div>
			<br><br>
			`
		}
	}
	txt += `</div>`
	document.getElementById("todo").innerHTML = txt;
	// console.log(datos[0].NOM)
	// console.log(`hola que  
	// quieres cara 
	// de nalga`)
}