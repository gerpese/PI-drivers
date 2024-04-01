const { createDriverDB, getDriverByName, getDriverById, getAllDrivers } = require("../controllers/driversController");


const getDriversHandler = async(req, res) => {
	const {name} = req.query;	

	try {

		if(name){
			const driverByName = await getDriverByName(name);
			res.status(200).json(driverByName);
		} else {
			const response = await getAllDrivers();
			res.status(200).json(response);
		}
	}catch (error){
		res.status(400).json({error: error.message});
	}
};

const getDetailDriversHandler = async (req, res) => {
	const {id} = req.params;
	const source = isNaN(id) ? 'bdd' : 'api';

	try {
		const response = await getDriverById(id, source);
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({error: error.message});
	};
};

const createDriverHandler = async(req, res) => {
	const {
			name, 
			surename,
			description,
			image,
			nationality,
			birthday,
			created
		} = req.body;
	
	try {
		const response = await createDriverDB(
			name, 
			surename,
			description,
			image,
			nationality,
			birthday,
			created);
		res.status(200).json(response);	
	} catch (error) {
		res.status(400).json({error:error.message});
	}


};

module.exports = {
	getDriversHandler,
	getDetailDriversHandler,
	createDriverHandler
};