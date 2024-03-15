const { Router } = require("express");
const  { getTeamsHandler,
getDetailTeamsHandler, 
createTeamHandler
} = require("../handlers/teamsHandler");

const teamsRouter = Router();


teamsRouter.get('/', getTeamsHandler);

teamsRouter.get('/:id', getDetailTeamsHandler);

teamsRouter.post('/', createTeamHandler);



module.exports = teamsRouter;