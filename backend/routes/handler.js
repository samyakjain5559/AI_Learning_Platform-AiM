const express = require('express');
const router = express.Router();
const pool = require('../config/db_signup.js');

router.post("/sign_up", (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err;

        const fullname = req.body.fullname;
        const email = req.body.email;
        const password = req.body.password;

        const qry = `INSERT INTO users(fullname, email, password, entry_date) VALUES (?, ?, ?, NOW())`;
        conn.query(qry, [fullname, email, password], (err, result) => {
            conn.release();
            if (err) {
                console.log(err)
            } else {
                console.log(result);
                res.send({ message: 'Account created.' })
            }
        });
    });
});

router.post("/login", (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) throw err;

        const email = req.body.email;
        const password = req.body.password;

        const qry = `SELECT * FROM eng_4k_web_app.users WHERE email = ? AND password = ?`;
        conn.query(qry, [email, password], (err, result) => {
            conn.release();
            if (err) {
                res.send({ err: err })
            } else {
                if (result.length > 0) {
                    res.send(result)
                } else {
                    res.send({ message: 'Incorrect email and/or password.' })
                }
            }
        });
    });
});


// ======================== Currently working on implementing these below ====================================
// router.post("/login", (req, res) => {
//   const username = req.body.email_login;
//   const password = req.body.password_login;

//   pool.getConnection((err, conn) => {
//     if (err) throw err;

//     const qry = `SELECT * FROM eng_4k_web_app.sign_up WHERE person_email = ? AND password = ?`;
//     conn.query(qry, [username, password], (err, result) => {

//       if (err) {
//         throw err;
//       } else {
//         if (result.length > 0) {
//           console.log("User found successfully.");
//           currentUser = username;
//           currentPass = password;
//           console.log(`Current user is ${currentUser}`);
//           console.log(`Current pass is ${currentPass}`);
//           // console.log("Current user is " + result[0].type);

//           res.redirect("/success");

//           // if (result[0].type == "teacher") {
//           //   res.redirect("/addLessons");
//           // } else {
//           //   res.redirect("/searchLessons"); // Student page team must redirect to his page
//           // }
//         } else {
//           console.log("User not found.");
//           res.redirect("/");
//         }
//       }
//       res.end();
//     });
//   });
// });

// router.post("/addCourse", (req, res) => {
//   // we are using "req or request(the incoming part)" for reading the data that was send at this /addtweet url from frontend
//   const name = req.body.lessonName;
//   const tag = req.body.lessonTag;
//   const media = req.body.lessonMedia;
//   const author = currentUser; // Placeholder until implemented with login features
//   const image = req.body.courseimage;
//   const description = req.body.coursedescription;

//   pool.getConnection((err, conn) => {
//     if (err) throw err;

//     var qry = `INSERT INTO lessondb (Author, LessonName,image,description) VALUES (?, ?, ?, ?)`;
//     conn.query(qry, [author, name, image, description], (err, result) => {
//       if (err) throw err;
//       console.log("lesson added!");
//     });
//     qry = `INSERT INTO lessonmediadb (Media) VALUES (?)`;
//     conn.query(qry, [media], (err, result) => {
//       if (err) throw err;
//       console.log("media added!");
//     });
//     qry = `INSERT INTO lessontagdb (Tag) VALUES (?)`;
//     conn.query(qry, [tag], (err, result) => {
//       conn.release();
//       if (err) throw err;
//       console.log("tags added!");
//     });

//     res.redirect("/listLessons");
//     res.end();
//   });
// });

// router.get("/listLessons", (req, res) => {
//   // When '/list' url is visited, return some json code for front end to fetch
//   pool.getConnection((err, conn) => {
//     if (err) throw err;

//     try {
//       const qry = `SELECT l.Author, l.LessonName, lm.Media, lt.Tag FROM lessondb AS l INNER JOIN lessonmediadb AS lm ON l.LessonId=lm.LessonId INNER JOIN lessontagdb AS lt ON lm.LessonId=lt.LessonId WHERE l.Author=?`;
//       conn.query(qry, [currentUser], (err, result) => {
//         conn.release();
//         if (err) throw err;
//         res.send(JSON.stringify(result));
//       });
//     } catch (err) {
//       console.log(err);
//       res.end();
//     }
//   });
// });

// router.get("/searchLessons", (req, res) => {
//   // When '/list' url is visited, return some json code for front end to fetch
//   pool.getConnection((err, conn) => {
//     if (err) throw err;

//     try {
//       const qry = `SELECT * FROM lessondb`;
//       conn.query(qry, [currentUser], (err, result) => {
//         conn.release();
//         if (err) throw err;
//         res.send(JSON.stringify(result));
//       });
//     } catch (err) {
//       console.log(err);
//       res.end();
//     }
//   });
// });

module.exports = router;
