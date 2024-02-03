const express = require('express');
const app = express();
app.use(express.json());

const validator = require('validator');
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA,
    port: process.env.DB_PORT
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connected to MySQL');
    connection.release();
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('listened port : ', port);
});

app.get('/contactlist', (req, res) => {
    const sql = `SELECT * FROM person ORDER BY lastname ASC`;
    pool.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error with the request',
                status: 'Failure'
            });
        } else {
            res.json(results);
        }
    });
});

app.post('/addcontact', (req, res) => {
    let {lastname, firstname, email, mobile_phone, home_phone} = req.body;
    console.log('requete :', req.body)
    lastname = validator.escape(lastname);
    firstname = validator.escape(firstname);
    email = validator.escape(email);
    mobile_phone = validator.escape(mobile_phone);
    home_phone = validator.escape(home_phone);

    if (!validator.isEmail(email)) {
        return res.status(400).json({
            message: 'Invalid email',
            status: 'Failure'
        });
    }

    console.log(lastname, firstname, email, mobile_phone, home_phone);
    const sql = `INSERT INTO person (lastname, firstname, email, mobile_phone, home_phone) 
    VALUES (?, ?, ?, ?, ?)`;
    pool.query(sql, [lastname, firstname, email, mobile_phone, home_phone], (error) => {
        if (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error from sql request',
                status: 'Failure'
            });
        } else {
            res.json({
                message: 'ajout ok', 
                status: 'Success',
            });
        }
    });
});