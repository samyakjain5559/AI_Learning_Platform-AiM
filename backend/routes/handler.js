const express = require('express');
const router = express.Router();
const pool =  require('../config/db_signup.js');

router.get('/getsignup', (req, res) => {
    pool.getConnection( (err, conn) => {
        if (err) throw err;

        try {
            conn.query('SELECT * FROM sign_up', (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));   // this is rsponse we are sending constantly to this URL
            });
        } catch (err) {
            console.log(err);
            res.end();
        }
    });
});

router.post('/do_sign_up', (req, res) => {       
    // we are using "req or request(the incoming part)" for reading the data that was send at this /addtweet url from frontend
    const username = req.body.inputemail;
    const userId = 1;
    const userpassword = "jkdjf";

    pool.getConnection( (err, conn) => {
        if (err) throw err;

        const qry = `INSERT INTO sign_up(person_id, person_name, person_password) VALUES(?,?,?)`;
        conn.query(qry, [userId, username, userpassword], (err, result) => {
            conn.release();
            if (err) throw err;
            console.log('user added!');
        });

        res.redirect('/');
        res.end();
    });
});

module.exports = router;