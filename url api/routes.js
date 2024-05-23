const aboutActions = require('./controllers/aboutController');
const faqActions = require('./controllers/faqController');

const routes = {
    "/" : {
        "GET": ()=>{}
    },
    "/FAQ" : {
        "GET": faqActions.getAllFaqInfo
    },
    "/about": {
        "GET": aboutActions.getAllAboutInfo
    }
}

module.exports = routes