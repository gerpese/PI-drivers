

const getTeamsHandler = (req, res) => {
	res.status(200).send("Este handler es de todos los Teams");
};

const getDetailTeamsHandler = (req, res) => {
	res.status(200).send("Este handler es de un Team especifico");
};

const createTeamHandler = (req, res) => {
	res.status(200).send("Crear un nuevo Team");
};

module.exports = {
	getTeamsHandler,
	getDetailTeamsHandler,
	createTeamHandler
};