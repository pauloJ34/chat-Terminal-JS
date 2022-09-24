let salas ;

const voltar_sala=()=>{
	return salas;
}
const chat = () =>{
	const socket = io.connect('/');

	socket.on("opens-room", data =>{
		salas=data;
		ver_sala();
	})

	socket.on('r3c3b8rM3223g3', data => {
		renderMessages(data.author, data.message)
	});
	
	socket.on('rooms',data =>{
		salas=data;
		ver_sala();
	});
	
	userMsg.addEventListener('keydown', event => {
		if(event.key == 'Enter'){
			let user =sessionStorage.getItem('user');
			let msg = userMsg.value;
			let code = codeSala;

			//console.log(user);
			if (user.length && msg.length) {
				let msgObject = {
					author: user,
					message: msg,
					room: code,
				}
				socket.emit('s3ndM3ss4g3', msgObject);
				renderMessages(msgObject.author, msgObject.message);
			}
			userMsg.value=null;
		}
	});

	const renderMessages = (user, msg) => {
		
		//console.log(user+", "+msg);

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

	criar_sala= (codeSala) =>{
		socket.emit('join',codeSala);
	}
}

