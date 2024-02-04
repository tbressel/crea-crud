///////////////////////////////////////
//////////    FRAMEWORK   /////////////
///////////////////////////////////////

// Express (to use routes and)
const express = require('express');
const app = express();
app.use(express.json());


/////////////////////////////////////////
//////////    MIDDLEWARES   /////////////
/////////////////////////////////////////

//cors (against cross-origin requests but from localhost:3000)
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

//multer (to record files)
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'public/assets/images/',
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });


/////////////////////////////////////
//////////    LIBRARY   /////////////
////////////////////////////////////

// validator (pour valider les données)
const validator = require('validator');


/////////////////////////////////////
//////////    MODULE   /////////////
////////////////////////////////////

// mysql (database connexion)
const mysql = require('mysql');

// dotenv (to get variables from .env file)
require('dotenv').config();

// get connexion to database and limit to 10. Get variable from .env file with the process.env
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA,
    port: process.env.DB_PORT
});

// test the connexion to the database
pool.getConnection((err, connection) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connected to MySQL');
    connection.release();
});

// listen to port 4000 or the one in the .env file
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('listened port : ', port);
});


////////////////////////////////////////////////////////////////////////////
/////////////////////  GET ALL CONTACT FROM DATABASE ///////////////////////
////////////////////////////////////////////////////////////////////////////
app.get('/contactlist', (req, res) => {

     // prepare the request 
     const sql = `SELECT *, avatar_file FROM person ORDER BY lastname ASC`;

    // send the request to the database
    pool.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error with the request',
                status: 'Failure'
            });
        } else {
            // send the response
            res.json(results);
        }
    });
});

////////////////////////////////////////////////////////////////////////////
///////////////////////  ADD A CONTACT INTO DATABASE ///////////////////////
////////////////////////////////////////////////////////////////////////////
app.post('/addcontact', upload.single('avatar_file'), (req, res) => {

    console.log('Received request to add contact:', req.body.contact);
    console.log('Received file:', req.file);


    // get the data from the request body
    let {lastname, firstname, email, mobile_phone, home_phone} = JSON.parse(req.body.contact);
    // le nom du fichier sera généré automatiquement par multer
    let avatar_file = req.file ? req.file.filename : null; 

    // check each data and escape characters against XSS
    lastname = validator.escape(lastname);
    firstname = validator.escape(firstname);
    email = validator.escape(email);
    mobile_phone = validator.escape(mobile_phone);
    home_phone = validator.escape(home_phone);

    // check the email with the validator library using the metohd isEmail
    if (!validator.isEmail(email)) {
        return res.status(400).json({
            message: 'Invalid email',
            status: 'Failure'
        });
    }

    // prepare the request 
    const sql = `INSERT INTO person (lastname, firstname, email, mobile_phone, home_phone, avatar_file) 
    VALUES (?, ?, ?, ?, ?, ?)`;

    // send the request to the database
    pool.query(sql, [lastname, firstname, email, mobile_phone, home_phone, avatar_file], (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error from sql request',
                status: 'Failure'
            });
        } else {

            // send the response
            res.json({
                message: 'ajout ok', 
                status: 'Success',
            });
        }
    });
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////  UPDATE A CONTACT INTO DATABASE ///////////////////////
///////////////////////////////////////////////////////////////////////////////
app.post('/modifycontact', upload.single('avatar_file'), (req, res) => {

    // get the data from the request body
    let { id, lastname, firstname, email, mobile_phone, home_phone } = JSON.parse(req.body.contact);


        // le nom du fichier sera généré automatiquement par multer
        let avatar_file = req.file ? req.file.filename : null; 


    // check each data and escape characters against XSS
    lastname = validator.escape(lastname);
    firstname = validator.escape(firstname);
    email = validator.escape(email);
    mobile_phone = validator.escape(mobile_phone);
    home_phone = validator.escape(home_phone);


    // check the email with the validator library using the metohd isEmail
    if (!validator.isEmail(email)) {
        return res.status(400).json({
            message: 'Invalid email',
            status: 'Failure'
        });
    }
    // prepare the request
    const sql = `
    UPDATE person
    SET lastname = ?, firstname = ?, email = ?, mobile_phone = ?, home_phone = ?, avatar_file = ?
    WHERE id = ?
`;

    // send the request to the database
    pool.query(sql, [lastname, firstname, email, mobile_phone, home_phone,avatar_file, id], (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error from sql request',
                status: 'Failure'
            });
        } else {
            // send the response
            res.json({
                message: 'modif ok', 
                status: 'Success',
            });
        }
    });
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////  DELETE A CONTACT INTO DATABASE ///////////////////////
///////////////////////////////////////////////////////////////////////////////
app.delete('/deletecontact/:id', (req, res) => {

    // get the id from the request
    const id = req.params.id;

    // prepare the request
    const sql = `DELETE FROM person WHERE id = ?`;
    pool.query(sql, [id], (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error from sql request',
                status: 'Failure'
            });
        } else {
            // send the response
            res.json({
                message: 'suppression ok', 
                status: 'Success',
            });
        }
    });
} );