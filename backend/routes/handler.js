const express = require('express');
const router = express.Router();
const pool =  require('../config/db_signup.js');
var currentUser;

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
                    currentUser = username;
                    console.log( `Current user is ${currentUser}`);
                    res.redirect('/addLessons'); 
                } else {
                    console.log( "User not found."); 
                    res.redirect('/'); 
                }
            }
            res.end();
        });
    });
});

router.post('/addLessons', (req, res) => {       
    // we are using "req or request(the incoming part)" for reading the data that was send at this /addtweet url from frontend
    const name = req.body.lessonName;
    const tag = req.body.lessonTag;
    const media = req.body.lessonMedia;
    const author = currentUser // Placeholder until implemented with login features

    pool.getConnection( (err, conn) => {
        if (err) throw err;

        var qry = `INSERT INTO lessondb (Author, LessonName) VALUES (?, ?)`;
        conn.query(qry, [author, name], (err, result) => {
            if (err) throw err;
            console.log('lesson added!');
        });
        qry = `INSERT INTO lessonmediadb (Media) VALUES (?)`;
        conn.query(qry, [media], (err, result) => {
            if (err) throw err;
            console.log('media added!');
        });
        qry = `INSERT INTO lessontagdb (Tag) VALUES (?)`;
        conn.query(qry, [tag], (err, result) => {
            conn.release();
            if (err) throw err;
            console.log('tags added!');
        });

        res.redirect('/listLessons');
        res.end();
    });
});

router.get('/listLessons', (req, res) => {   // When '/list' url is visited, return some json code for front end to fetch
    pool.getConnection( (err,conn) => {
        if (err) throw err;

        try {
            const qry = `SELECT l.Author, l.LessonName, lm.Media, lt.Tag FROM lessondb AS l INNER JOIN lessonmediadb AS lm ON l.LessonId=lm.LessonId INNER JOIN lessontagdb AS lt ON lm.LessonId=lt.LessonId WHERE l.Author=?`;
            conn.query(qry, [currentUser], (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            });
        } catch (err) {
            console.log(err);
            res.end();
        }
    });
});

module.exports = router;