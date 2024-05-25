const { HTTP_METHODS } = require('../helpers/enums');
const informationController = require('../controllers/informationController');

const handleInformationsRouter = (req, res) => {
    const { method } = req;

    switch (method) {
        case HTTP_METHODS.GET:
            informationController.getInformationInfo(req, res);
            break;
        case HTTP_METHODS.POST:
            informationController.createInformation(req, res);
            break;
        // case HTTP_METHODS.PUT:
        //     informationController.updateInformation(req, res);
        //     break;
        case HTTP_METHODS.PUT:
            informationController.updateInformation(req,res);
            break;
        case HTTP_METHODS.DELETE:
            informationController.deleteInformation(req, res);
            break;
        default:
            res.writeHead(405, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Method Not Allowed' }));
            break;
    }
};

module.exports = {
    handleInformationsRouter
};
