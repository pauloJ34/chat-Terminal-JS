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
	console.log(`socket conectado ${socket.id}`);
	socket.on('s3ndM3ss4g3', data =>{
		console.log(data);
		socket.broadcast.emit('r3c3b8rM3223g3',data);
		
	})
})

server.listen(3000, () => {
  console.log('server iniciado');
});
