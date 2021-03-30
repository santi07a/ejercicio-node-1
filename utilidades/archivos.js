const fs = require("fs");
const chalk = require("chalk");
const debug = require("debug")("http");

const guardarSaludo = (nombre) => {
	fs.writeFile((`./ textos / saludo.txt, Hola, ${nombre}. Encantado de saludarte.`), (err) => {
		if (err) {
			return debug(chalk.red.bold("hay un error maldito bastardo"));
		}
	});
};
module.exports = guardarSaludo;

