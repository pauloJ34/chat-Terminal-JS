const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname,'public')));

app.set('views', path.join(__dirname,'public'));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use('/', (req, res) => {
  res.render("index.html")
});

io.on('connection', socket => {
	console.log(`Usuário ${socket.id} conectado`);

	socket.emit("opens-room", getRoomsActive());
	
	socket.on('join', room =>{
		socket.join(room);
		socket.broadcast.emit('rooms', getRoomsActive());
		console.log(getRoomsActive());
		//console.log(`usario conectado ${user}`);
	});
	
	socket.on('s3ndM3ss4g3', data =>{
		console.log(data);
		socket.broadcast.to(data.room).emit('r3c3b8rM3223g3',data);
		
	});
	socket.on('disconnect', () =>{
		console.log(`Usuário ${socket.id} disconectado`);
		let rooms = getRoomsActive();
		for(let room in rooms){
			socket.leave(room);
		}
	});
})

server.listen(3000, () => {
  console.log('server iniciado');
});

const getRoomsActive=()=>{
	const lista = Array.from(io.sockets.adapter.rooms);
	const filtro = lista.filter(room => !room[1].has(room[0]))
	const resposta = filtro.map(i => i[0]);
  return resposta;
}