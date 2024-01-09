window.onload= function(){

	for(bt=0; bt<btConfirm.length;bt++){
		btConfirm[bt].addEventListener("click", (e)=>{
			let num=e.target.className;
			confirmar('1',num);
		})
	}

	for(bt in btEntrar_btcriar){
		btEntrar_btcriar[bt].addEventListener("click", e =>{
			confirmar('2',e.target.id);
		});
	}

	/*fechar.addEventListener("click",(e)=>{
		fecha_criar();
	})*/
	userName.addEventListener("keydown", (e) =>{
		if(e.key == 'Enter'){
			confirmar('1','0');
		}
	});

	

	document.querySelector(".codSala").addEventListener('click',(e)=>{
		const textoCopiado = document.querySelector(".codSala");
		navigator.clipboard.writeText(textoCopiado.textContent.split(" ")[3]);
		console.log(textoCopiado.textContent.split(" ")[3])
	})
	document.querySelector("main").addEventListener('click',(e)=>{
		userMsg.focus();
	})
	/*codeSala.addEventListener("keydown", (e) =>{
		if(e.key == 'Enter'){
			confirmar('1','1');
		}
	});*/
	/*copiarCode.addEventListener("click", e =>{
		var segundos=1;
		const textoCopiado = document.querySelector("#codePass");
		navigator.clipboard.writeText(textoCopiado.textContent);
	//	console.log(textoCopiado.textContent);
		avisar();
		setTimeout(()=>{remover_aviso()},1000*segundos);
	});*/

}