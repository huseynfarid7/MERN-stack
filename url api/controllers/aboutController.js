const fs = require('fs');
const path = require('path');

const getAllAboutInfo = (res) => {
    const parentFol = path.join(__dirname, '..')
    const dbJsonPath = path.join(parentFol, 'db.json')
    // console.log(fs.readfile(__dirname))
    const data = fs.readFile(dbJsonPath, 'utf-8', (err,data) => {
        if (err) {

        }
        
        console.log(JSON.parse(data).about)
        const countdata = JSON.parse(data).about
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(countdata))
        res.end()

    })
    // console.log(data)
}

const aboutActions = {
    getAllAboutInfo
}

module.exports = aboutActions