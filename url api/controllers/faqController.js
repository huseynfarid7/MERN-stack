const fs = require('fs');
const path = require('path');

const getAllFaqInfo = (res) => {
    const parentFol = path.join(__dirname, '..')
    const dbJsonPath = path.join(parentFol, 'db.json')
    // console.log(fs.readfile(__dirname))
    const data = fs.readFile(dbJsonPath, 'utf-8', (err,data) => {
        if (err) {

        }
        
        console.log(JSON.parse(data).FAQ)
        const countdata = JSON.parse(data).FAQ
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(countdata))
        res.end()

    })
    // console.log(data)
}

const faqActions = {
    getAllFaqInfo
}

module.exports = faqActions