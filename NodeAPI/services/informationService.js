const fs = require('fs');
const path = require('path');
const util = require('util');
const generateUniqueId = require('../helpers/generateUniqueId');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const parentFolder = path.join(__dirname, '..');
const DATABASE_PATH = path.join(parentFolder, 'database/db.json');

async function getInformation() {
    const result = await readFileAsync(DATABASE_PATH);
    const myAllData = JSON.parse(result);
    return myAllData.informations;
}

async function createInformation(information) {
    const result = await readFileAsync(DATABASE_PATH);
    const myAllData = JSON.parse(result);

    const newInformation = { id: generateUniqueId(myAllData.informations), ...information };
    myAllData.informations.push(newInformation);
    await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData, null, 2));
    return newInformation;
}

// async function updateInformation(id, newInformation) {
//     const result = await readFileAsync(DATABASE_PATH);
//     const myAllData = JSON.parse(result);

//     const informationIndex = myAllData.informations.findIndex(info => info.id === id);
//     if (informationIndex !== -1) {
//         myAllData.informations[informationIndex] = { id, ...newInformation };
//         await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData, null, 2));
//         return myAllData.informations[informationIndex];
//     } else {
//         return null;
//     }
// }

async function updateInformation(id, newInformation) {
    const result = await readFileAsync(DATABASE_PATH);
    const myAllData = JSON.parse(result);

    const informationIndex = myAllData.informations.findIndex(info => info.id === id);
    if (informationIndex !== -1) {
        myAllData.informations[informationIndex] = { id, ...newInformation };
        await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData, null, 2));
        return myAllData.informations[informationIndex];
    } else {
        return null;
    }
}

async function deleteInformation(id) {
    const result = await readFileAsync(DATABASE_PATH);
    const myAllData = JSON.parse(result);

    const informationIndex = myAllData.informations.findIndex(info => info.id === id);
    if (informationIndex !== -1) {
        const deletedInformation = myAllData.informations.splice(informationIndex, 1);
        await writeFileAsync(DATABASE_PATH, JSON.stringify(myAllData, null, 2));
        return deletedInformation[0];
    } else {
        return null;
    }
}

module.exports = {
    getInformation,
    createInformation,
    updateInformation,
    deleteInformation
};
