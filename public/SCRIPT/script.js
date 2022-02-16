
const form = document.querySelector('.chat');
const userName = document.querySelector("input[name='username']");
const userMsg = document.querySelector("input[name='userMsg']")
const btConfirm = document.querySelectorAll("#bt-confirmar");
const btEntrar_btcriar = [document.querySelector("#entrar"),document.querySelector("#criar")];
const fechar = document.querySelector("#Xfechar");
const copiarCode = document.querySelector("#img");
let codeSala;
//let codeSala=document.querySelector('input[name="codSala"');
const lista_sala= document.querySelector(".lista-sala");
let result;

userName.focus();

const ver_sala=()=>{
	
	//console.log(voltar_sala());
	let n;
	for(n in voltar_sala()){
		let li=document.createElement('li');
		let span= document.createElement('span');
		let text= document.createTextNode(voltar_sala()[n]);
		
		span.appendChild(text);
		li.appendChild(span);
		
		lista_sala.appendChild(li);	
	}
	if(n != null){
		const lis=document.querySelectorAll("li");
			for(let num =0;num<lis.length; num++){
			
			lis[num].addEventListener('click',(e)=>{
				codeSala=e.target.innerText;
				//console.log(e.target.innerText);
				confirmar("1","1")
			})
				
			//}
		}
	}
}

const craeteCode = () =>{
	if(!result){
		result='';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for ( var i = 0; i < 12; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		codeSala=result;
		confirmar('1','1')
	}
}

const confirmar = (num,id) =>{
	if(num=='1'){ //selecionar o nome de usuario
		if(id=="0"){
			sessionStorage.setItem("user",userName.value);
			document.querySelector('.mainGrupo-sala').classList.remove('disable');
			document.querySelector(".mainGrupo").classList.add("disable");
			chat();
		}else if(id=="1"){//entrar sala
			if(codeSala){
				//console.log(codeSala)
				criar_sala(codeSala);
				document.querySelector('.campusSeparado').classList.add("disable");
				document.querySelector('.chat').classList.remove('disable');
				document.querySelector(".codSala").innerHTML=`<strong>Código da Sala:</strong> ${codeSala}`;
				userMsg.focus();
			}
		}
	}
	else if(num == '2'){
		//document.querySelector(".mainGrupo-sala").classList.add('disable');
		if(id == "entrar"){
			document.querySelector('.mainGrupo-entrar-sala').classList.toggle('disable');
		
		}else if(id == 'criar'){
			//document.querySelector('.mainGrupo-criar-sala').classList.remove('disable');
			craeteCode();
		}
	}
}

const avisar= () =>{
	let div = document.createElement('div');
	let span = document.createElement('span');
	let conteudoTexto = document.createTextNode("copiado")
	div.classList.add('aviso');

	div.appendChild(span);
	span.appendChild(conteudoTexto);
	document.querySelector(".campusSeparado").appendChild(div);
}

const remover_aviso = () =>{
	document.querySelector('.aviso').remove();
}

const fecha_criar=()=>{
	document.querySelector('.mainGrupo-criar-sala').classList.add('disable');
	document.querySelector('.mainGrupo-entrar-sala').classList.remove('disable');
}

if(sessionStorage.getItem('user')){
	document.querySelector('.mainGrupo-sala').classList.remove('disable');
	document.querySelector(".mainGrupo").classList.add("disable");
	chat();
}
