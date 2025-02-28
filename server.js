const app = require('./app')
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Servidor web en el puerto ${PORT}.`);
});

server.closeAll = () => {
   app.con.end()
   server.close()
}

module.exports = server
