const ENDPOINTS = require('../helpers/urlHelper');
const informationRouter = require('./informationRouter');
const generateResponse = require('../helpers/responseGenerator');

const handleRoutes = (req, res) => {
    const { url } = req;
    const id = `/${url.split("/")[1]}`
    switch (id) {  
        case ENDPOINTS.DEFAULT_ENDPOINT:
            console.log("Home page");
            // res.writeHead(200, { 'Content-Type': 'text/plain' });
            // res.end("Welcome to the home page");
            break;
        case ENDPOINTS.INFORMATIONS_ENDPOINT:
            informationRouter.handleInformationsRouter(req, res)
            break;
        default:
            generateResponse(res, 404, { message: 'Route Not Found' });
            break;
    }
};

module.exports = { handleRoutes };
