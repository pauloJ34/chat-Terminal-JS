

const socket = io.connect('https://chat-terminal-js.pauloj34.repl.co');


const form = document.querySelector('.chat');
const userName = document.querySelector("input[name='username']");
const userMsg = document.querySelector("input[name='userMsg']")
const btConfirm = document.querySelector("#bt-confirmar");
const btEntrar_btcriar = [document.querySelector("#entrar"),
	document.querySelector("#criar")];
const fechar = document.querySelector("#Xfechar");
const copiarCode = document.querySelector("#img");


userName.focus();


btConfirm.addEventListener("click", (e)=>{console.log('1');})


userName.addEventListener("keydown", (e) =>{
	if(e.key == 'Enter'){
		confirmar('1');
	}
});


for(bt in btEntrar_btcriar){
	btEntrar_btcriar[bt].addEventListener("click", e =>{
		confirmar('2',e.target.id);
	});
}


copiarCode.addEventListener("click", e =>{
	const textoCopiado = document.querySelector("#codePass");
	navigator.clipboard.writeText(textoCopiado.textContent);
	console.log(textoCopiado.textContent);
	setTimeout(()=>{	},1000*2);
});



const craeteCode = () =>{
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for ( var i = 0; i < 12; i++ ) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	console.log(result);
	document.querySelector("#codePass").innerHTML= result;
}

const confirmar = (num,id) =>{
	if(num=='1'){ //selecionar o nome de usuario
		//localStorage.setItem('userName', userName.value);
		const mainGrup = document.querySelector(".mainGrupo");
		mainGrup.classList.add("disable");
		console.log(userName.value);
	}
	else if(num == '2'){
		document.querySelector(".mainGrupo-sala").remove();
		
		if(id == "entrar"){
			document.querySelector('.mainGrupo-entrar-sala').classList.remove('disable');
		}
		else if(id == 'criar'){
			craeteCode();
		}
	}
}


socket.on('r3c3b8rM3223g3', data => {
	renderMessages(data.author, data.message)
})


userMsg.addEventListener('keydown', event => {
	if(e.key == 'Enter'){
		let user = userName.value;
		let msg = userMsg.value;

		console.log(user);
		if (user.length && msg.length) {
			let msgObject = {
				author: user,
				message: msg,
			}
			socket.emit('s3ndM3ss4g3', msgObject);
			renderMessages(msgObject.author, msgObject.message);
		}
	}
});


const renderMessages = (user, msg) => {
	
	console.log(user+", "+msg);

	let div = document.createElement('div');
	let strong = document.createElement('strong');
	let textUser= document.createTextNode(`${user} : `)
	let textMSG = document.createTextNode(msg);

	div.classList.add('chat-messeges');
	div.classList.add(user);

	strong.appendChild(textUser);
	div.appendChild(strong);
	div.appendChild(textMSG);

	document.querySelector('#area-chat').appendChild(div);

}