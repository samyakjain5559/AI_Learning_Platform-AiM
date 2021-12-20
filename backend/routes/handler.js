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

router.get('/getlessons', (req, res) => {
    pool.getConnection( (err, conn) => {
        if (err) throw err;

        try {
            conn.query('SELECT * FROM add_lessons', (err, result) => {
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
    const userpassword = req.body.inputpassword;

    pool.getConnection( (err, conn) => {
        if (err) throw err;

        const qry = `INSERT INTO sign_up(person_id, person_email, person_password) VALUES(?,?,?)`;
        conn.query(qry, [userId, username, userpassword], (err, result) => {
            conn.release();
            if (err) throw err;
            console.log('user added!');
        });

        res.redirect('/');
        res.end();
    });
});

router.post('/do_add_lessons', (req, res) => {       
    // we are using "req or request(the incoming part)" for reading the data that was send at this /addtweet url from frontend
    const lesson = req.body.added_lesson;

    pool.getConnection( (err, conn) => {
        if (err) throw err;

        const qry = `INSERT INTO add_lessons(lessons) VALUES(?)`;
        conn.query(qry, [lesson], (err, result) => {
            conn.release();
            if (err) throw err;
            console.log('lesson added!');
        });

        res.redirect('/course_add');
        res.end();
    });
});

router.post('/do_login', (req, res) => {       
    // we are using "req or request(the incoming part)" for reading the data that was send at this /addtweet url from frontend
    const username = req.body.inputemail_login;
    const userId = 1;
    const userpassword = req.body.inputpassword_login;

    pool.getConnection( (err, conn) => {
        if (err) throw err;

        const qry = `SELECT * FROM eng_4k_web_app.sign_up where person_email = ?`;
        conn.query(qry, [username], (err, result) => {
            //conn.release();
            if (err) {
              throw err;
            }else{
                if (result.length > 0) {
                    console.log( "User found successfully.");
                    res.redirect('/course_add'); 
                } else {
                    console.log( "User not found."); 
                    res.redirect('/'); 
                }
            }
            res.end();
        });
    });
});

module.exports = router;