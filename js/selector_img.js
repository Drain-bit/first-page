const main_img = document.querySelector('.main_elemento')
const array = document.querySelectorAll('.elemento')

array.forEach(i =>{ /*el clasico i pasa por cada elemento*/
	i.addEventListener('click', function(){
		main_img.src = i.src
	})
})

window.onload = function(){
	/*creamos los elmentos por cada cuadro*/
	/*No reconocera numero tiene que ser letras*/
	let img01 = document.querySelector("#img01");
	let img02 = document.querySelector("#img02");
	let img03 = document.querySelector("#img03");
	let img04 = document.querySelector("#img04");

	/*cuando se le ase click a la imagen tanto*/
	img01.addEventListener("click",info01);
	img02.addEventListener("click",info02);
	img03.addEventListener("click",info03);
	img04.addEventListener("click",info04);
}

function info01(){
	let titulo = document.querySelector("#titulo");
	titulo.innerHTML = 'cuadro 01';

	let historia = document.querySelector("#lore");
	historia.innerHTML = 'aqui ira el contexto del primer cuadro';

	let estado = document.querySelector("#estado");
	estado.innerHTML = 'Estado: Colección privada';

	let preci = document.querySelector("#precio");
	preci.innerHTML = 'Precio : S/1500.00';

	let medi = document.querySelector("#medidas");
	medi.innerHTML = 'Medidas : 122cm X 150cm';
}

function info02(){
	let titulo = document.querySelector("#titulo");
	titulo.innerHTML = 'cuadro 02';

	let historia = document.querySelector("#lore");
	historia.innerHTML = 'aqui ira el contexto del segundo cuadro';

	let estado = document.querySelector("#estado");
	estado.innerHTML = 'Estado: Disponible';

	let preci = document.querySelector("#precio");
	preci.innerHTML = 'Precio : S/2000.00';

	let medi = document.querySelector("#medidas");
	medi.innerHTML = 'Medidas : 0.7m X 1m';
}

function info03(){
	let titulo = document.querySelector("#titulo");
	titulo.innerHTML = 'cuadro 03';

	let historia = document.querySelector("#lore");
	historia.innerHTML = 'aqui ira el contexto del tercer cuadro';

	let estado = document.querySelector("#estado");
	estado.innerHTML = 'Estado: Colección privada';

	let preci = document.querySelector("#precio");
	preci.innerHTML = 'Precio : S/1000.00';

	let medi = document.querySelector("#medidas");
	medi.innerHTML = 'Medidas : 100cm X 70cm';
}

function info04(){
	let titulo = document.querySelector("#titulo");
	titulo.innerHTML = 'Virgen del Capinuri';

	let historia = document.querySelector("#lore");
	historia.innerHTML = 'aqui ira el contexto del cuarto cuadro';

	let estado = document.querySelector("#estado");
	estado.innerHTML = 'Estado: En exposición';

	let preci = document.querySelector("#precio");
	preci.innerHTML = 'Precio : S/15000.00';

	let medi = document.querySelector("#medidas");
	medi.innerHTML = 'Medidas : 122cm X 150cm';
}
