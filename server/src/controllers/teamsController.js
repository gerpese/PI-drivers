const { Team } = require('../db');

const createTeamDb = async (name, driverId) => {
	const team = await Team.create({name});
	
	await team.addDriver(driverId);

	return team;
};

module.exports = {
	createTeamDb
}