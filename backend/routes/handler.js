const express = require('express');
const router = express.Router();
const pool =  require('../config/db.js');

router.get('/gettweets', (req, res) => {
    pool.getConnection( (err, conn) => {
        if (err) throw err;

        try {
            conn.query('SELECT u.username, u.fullname, t.tweet FROM users as u INNER JOIN tweets as t ON u.id=t.user_id', (err, result) => {
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

router.post('/addTweet', (req, res) => {       
    // we are using "req or request(the incoming part)" for reading the data that was send at this /addtweet url from frontend
    const userTweet = req.body.tweetInput;
    const userId = 1; // 1=codrkai, 2=eaglefang

    pool.getConnection( (err, conn) => {
        if (err) throw err;

        const qry = `INSERT INTO tweets(tweet, user_id) VALUES(?,?)`;
        conn.query(qry, [userTweet, userId], (err, result) => {
            conn.release();
            if (err) throw err;
            console.log('Tweet added!');
        });

        res.redirect('/tweets');
        res.end();
    });
});

module.exports = router;