const {Driver, Team} = require("../db");
const axios = require('axios');
const { infoCleaner } = require("../utils/functions")
//const infoCleaner = require("../utils/utils");

const createDriverDB = async (
			name, 
			surename,
			description,
			image,
			nationality,
			birthday,
			created) => {
	return await Driver.create(
		{
			name, 
			surename,
			description,
			image,
			nationality,
			birthday,
			created
		});
};

const getDriverById = async (id, source) => {

	const driver = 
		source === "api" 
			? (await axios.get(`http://localhost:5000/drivers/${id}`))
				.data 
			: await Driver.findByPk(id);
	return driver;
};


const getDriverByName = async(name) => {
	const infoApi = (await axios.get('http://localhost:5000/drivers/')
		).data;

	const driversApi = infoCleaner(infoApi);

	const driverFiltered = driversApi.filter((driver) => driver.name.forename === name);
	
	const driverDb = await Driver.findAll({where: {name: name}});

	return [...driverFiltered, ...driverDb];
};	

const getAllDrivers = async () => {
	const driversDB = await Driver.findAll();
	const infoApi = (await axios.get('http://localhost:5000/drivers/')
		).data;

	const driversApi = infoCleaner(infoApi);	

	return [...driversDB, ...driversApi];
};


module.exports = {
	createDriverDB,
	getDriverById,
	getAllDrivers,
	getDriverByName
}
/*const getDriverById = async (id, sourse) => {

	const driver = 
		sourse === "api" 
		? (await axios
			.get(`http://localhost:5000/drivers/:${id}`))
			.data 
		: await Driver.findByPk(id, {
			include: {
				model: Teams,
				attributes: ["title", "body"]
			}
		}); 
	return driver;
};	*/