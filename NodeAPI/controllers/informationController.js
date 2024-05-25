const parseRequestBody = require('../helpers/parser');
const generateResponse = require('../helpers/responseGenerator');
const InformationService = require('../services/informationService');

const getInformationInfo = async (req, res) => {
    const result = await InformationService.getInformation();
    generateResponse(res, 200, result);
};

const createInformation = async (req, res) => {
    const body = await parseRequestBody(req);

    const addNewRecord = await InformationService.createInformation(body);
    generateResponse(res, 201, addNewRecord);
};

// const updateInformation = async (req, res) => {
//     const id = req.url.split('/').pop();
//     const body = await parseRequestBody(req);
//     const updatedRecord = await InformationService.updateInformation(id, body);
//     if (updatedRecord) {
//         generateResponse(res, 200, updatedRecord);
//     } else {
//         generateResponse(res, 404, { message: 'Information not found' });
//     }
// };

const updateInformation = async (req,res) => {
    const id = req.url.split('/').pop();
    const body = await parseRequestBody(req);
    const updatedRecord = await InformationService.updateInformation(id,body);
    if (updatedRecord){
        generateResponse(res,200,updatedRecord);
    } else {
        generateResponse(res,404, {message: 'Information not found'});
    }
}

const deleteInformation = async (req, res) => {
    const id = req.url.split('/').pop();
    const deleted = await InformationService.deleteInformation(id);
    if (deleted) {
        generateResponse(res, 204, { message: 'Information deleted successfully' });
    } else {
        generateResponse(res, 404, { message: 'Information not found' });
    }
};

module.exports = {
    getInformationInfo,
    createInformation,
    updateInformation,
    deleteInformation
};
