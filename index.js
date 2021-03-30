const saluda = require("./utilidades/archivos.js");
const chalk = require("chalk");

if (process.argv[2]) {
	saluda(process.argv[2].replace("--nombre=", ""));
} else {
	console.log(chalk.yellow("No hay parámetros."));
	process.exit(0);
}