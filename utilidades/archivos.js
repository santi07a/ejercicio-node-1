const fs = require("fs");
const chalk = require("chalk");
const debug = require("debug")("http");

module.exports.guardarSaludo(nombre) {
	return fs.writeFile("saludo.txt", "Hola," + nombre + ". Encantado de saludarte.", (err) => {
		if (err) {
			debug(chalk.red.bold("hay un error maldito bastardo"));
		}
	});
}

guardarSaludo("santiago");

