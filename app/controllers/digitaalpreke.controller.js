//const db = require("../models");
//const DigitaalPreke = db.digitaalpreke;
//const Op = db.Sequelize.Op;

//exports.findAll = (req, res) => {
//  DigitaalPreke.findAll()
//    .then(data => {
//      res.send(data);
//    })
//    .catch(err => {
//      res.status(500).send({
//        message:
//          err.message || "Some error occurred while retrieving from db."
//      });
//    });
//};

const fs = require('fs');
const path = require('path');

exports.findAll = (req, res) => {
    const directoryPath = path.join(__dirname, '../digitaalpreke');

    // Read directory for TXT files
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error("Could not list the directory.", err);
            res.status(500).send({
                message: "Unable to list the files in the directory."
            });
            return;
        }

        const txtFiles = files.filter(file => path.extname(file) === '.txt');
        const fileContentsPromises = txtFiles.map(file => {
            return new Promise((resolve, reject) => {
                const filePath = path.join(directoryPath, file);
                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve({ fileName: file, content: data });
                });
            });
        });

        // Use Promise.all to wait for all readFile operations to complete
        Promise.all(fileContentsPromises)
            .then(contents => {
                console.log(contents);
		res.send(contents);
            })
            .catch(err => {
                console.error("Error reading files:", err);
                res.status(500).send({
                    message: "An error occurred while reading the files."
                });
            });
    });
};

