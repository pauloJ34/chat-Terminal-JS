const socket = io.connect('https://chatJS.pauloj34.repl.co');

const form = document.querySelector('.chat');
const userName = document.querySelector("input[name='username']");
const userMsg = document.querySelector("input[name='userMsg']")
const btConfirm = document.querySelector("#bt-confirmar");
const btEntrar_btcriar=[document.querySelector("#entrar"),
	document.querySelector("#criar")];

userName.focus();


btConfirm.addEventListener("click", (e)=>{console.log('1');})


userName.addEventListener("keydown", (e) =>{
	if(e.key == 'Enter'){
		confirmar('1');
	}
});


for(bt in btEntrar_btcriar){
	btEntrar_btcriar[bt].addEventListener("click", e =>{
		confirmar('2');
	});
}


const confirmar = (num) =>{
	if(num=='1'){ //selecionar o nome de usuario
		//localStorage.setItem('userName', userName.value);
		const mainGrup = document.querySelector(".mainGrupo");
		mainGrup.classList.add("disable");
		console.log(userName.value);
	}
	else if(num == '2'){
		document.querySelector(".mainGrupo-sala").remove();
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