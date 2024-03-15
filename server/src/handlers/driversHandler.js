

const getDriversHandler = (req, res) => {
	res.status(200).send("Este handler es de todos los Drivers");
};

const getDetailDriversHandler = (req, res) => {
	res.status(200).send("Este handler es de un Driver especifico");
};

const createDriverHandler = (req, res) => {
	res.status(200).send("Crear un Driver");
};

module.exports = {
	getDriversHandler,
	getDetailDriversHandler,
	createDriverHandler
};