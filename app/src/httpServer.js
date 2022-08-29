const app = require('./app')

const { createServer } = require('http')
const { Server } = require('socket.io')

//ARREGLAR ESTO
//import { ChatServices } from './service/chat.Services';


export const httpServer = createServer(app);
const io = new Server(httpServer)

//const historyDB = new ChatServices()
io.on('connection', async (socket) => {

    socket.emit('messages', await historyDB.getallMessages());
    
    
    socket.on('new-message', async data => {
        await historyDB.saveMessage(data);
        
        io.sockets.emit('messages', await historyDB.getallMessages() );
    });
})

io.on('connection', async (socket) => {

    console.log('Un cliente se ha conectado');

    //mensajes
    socket.emit("messages", messages)

    socket.on("messegesNew", (nuevoMensaje) => {

        messages.push(nuevoMensaje)
        io.sockets.emit("messages", messages)
    })

    //historial mensajes
    const message = await historial.loadMessage()
    socket.emit('messages', message )
    
    socket.on('messegesNew', async data => {

        await historial.saveMessage(data)
        const message2 = await historial.loadMessage()
        io.sockets.emit('messages', message2 );
   });
});




//server
const PORT = 8080 
httpServer.listen(PORT, () => console.log('Servidor corriendo en http://localhost:8080'))