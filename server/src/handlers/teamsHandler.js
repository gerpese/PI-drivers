const { createTeamDb } = require('../controllers/teamsController');

const getTeamsHandler = (req, res) => {
	res.status(200).send("Este handler es de todos los Teams");
};

const getDetailTeamsHandler = (req, res) => {
	res.status(200).send("Este handler es de un Team especifico");
};


const createTeamHandler = async (req ,res) => {
	const { name, driverId } = req.body;

	try {
		const newTeam = await createTeamDb(name);

		res.status(200).json(newTeam);

	}catch (error){
		res.status(400).json({error: error.message});
	}

};


module.exports = {
	getTeamsHandler,
	getDetailTeamsHandler,
	createTeamHandler
};

/*const { createTeamDb } = require('../controllers/teamsController');

const createTeamHandler = async (req ,res) => {
	const { name, driverId } = req.body;

	try {
		const newTeam = await createTeamDb(name);

		res.status(200).json(newTeam);

	}catch (error){
		res.status(400).json({error: error.message});
	}

};

module.exports = {
	createTeamHandler
};*/