const { Router } = require("express");
const { getDriversHandler, 
getDetailDriversHandler, 
createDriverHandler
} = require("../handlers/driversHandler");

const driversRouter = Router();

driversRouter.get('/', getDriversHandler);

driversRouter.get('/:id', getDetailDriversHandler);

driversRouter.post('/', createDriverHandler);


module.exports = driversRouter;