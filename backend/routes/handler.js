const express = require("express");
const router = express.Router();
const pool = require("../config/db_signup.js");

var currentUser;

router.post("/sign_up", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    const fullname = req.body.fullname;
    const email = req.body.email;
    const password = req.body.password;
    const account_type = req.body.checkbox_type;

    const qry = `INSERT INTO users(fullname, email, password, entry_date, type) VALUES (?, ?, ?, NOW(), ?)`;
    conn.query(
      qry,
      [fullname, email, password, account_type],
      (err, result) => {
        conn.release();
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          res.send({ message: "Account created." });
        }
      }
    );
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
        res.send({ err: err });
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "Incorrect email and/or password." });
        }
      }
    });
  });
});

router.post("/addCourse", (req, res) => {
  // we are using "req or request(the incoming part)" for reading the data that was send at this /addtweet url from frontend
  const name = req.body.lessonName;
  const tag = req.body.lessonTag;
  const media = req.body.lessonMedia;
  const author = currentUser; // Placeholder until implemented with login features
  const image = req.body.courseimage;
  const description = req.body.coursedescription;

  pool.getConnection((err, conn) => {
    if (err) throw err;

    var qry = `INSERT INTO lessondb (Author, LessonName,image,description) VALUES (?, ?, ?, ?)`;
    conn.query(qry, [author, name, image, description], (err, result) => {
      if (err) throw err;
      console.log("lesson added!");
    });
    qry = `INSERT INTO lessonmediadb (Media) VALUES (?)`;
    conn.query(qry, [media], (err, result) => {
      if (err) throw err;
      console.log("media added!");
    });
    qry = `INSERT INTO lessontagdb (Tag) VALUES (?)`;
    conn.query(qry, [tag], (err, result) => {
      conn.release();
      if (err) throw err;
      console.log("tags added!");
    });

    res.redirect("/listLessons");
    res.end();
  });
});

router.get("/listLessons", (req, res) => {
  // When '/list' url is visited, return some json code for front end to fetch
  pool.getConnection((err, conn) => {
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

// ======================= Joshua backend testing portion =============================

// TODO: Use JWT token to add user as author of course into database
router.post("/createCourse1", (req, res) => {
  const courseName = req.body.courseName;
  const courseDescription = req.body.courseDescription;
  const courseTags = req.body.courseTags;
  const courseMedia = req.body.courseMedia;
  const courseImage = req.body.courseImage;
  pool.getConnection((err, conn) => {
    if (err) throw err;
    console.log(
      "Adding... Course name: " +
        courseName +
        " ... Course description: " +
        courseDescription
    );
    try {
      var qry = `INSERT INTO coursedb (CourseName, CourseDescription, CourseTags, CourseMedia, CourseImage) VALUES (?, ?, ?, ? ,?)`;
      conn.query(
        qry,
        [courseName, courseDescription, courseTags, courseMedia, courseImage],
        (err, result) => {
          if (err) throw err;
          console.log("lesson added!");
          res.redirect("/course/list");
          res.end();
        }
      );
    } catch (err) {
      console.log("Error adding course to database.");
    }
  });
});

// TODO: Use JWT token to list courses created by the current user
router.get("/listCourse1", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    try {
      const qry = `SELECT * FROM coursedb`;
      conn.query(qry, (err, result) => {
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

// This is used to share the visited courseid in listCourse
// to listCourseLessons
// ie. listCourse updates courseId from the button the client clicks
// and when theclient is redirected to listCourseLessons, it calls
// the GET method '/listCourseLesson1' with the param 'courseId'
var courseId;

// TODO: Use JWT token to list course content created by the current user
router.post("/viewCourse1", (req, res) => {
  courseId = req.body.CourseId;
  console.log("The course ID you are trying to go to is " + courseId);
  pool.getConnection((err, conn) => {
    if (err) throw err;

    try {
      const qry = `SELECT * FROM lessondb WHERE CourseId=?`;
      conn.query(qry, [courseId], (err, result) => {
        conn.release();
        if (err) throw err;
        res.redirect("/course/view");
        res.end();
      });
    } catch (err) {
      console.log(err);
      res.end();
    }
  });
});

// TODO: Use JWT token to list courses created by the current user
router.get("/listCourseLesson1", (req, res) => {
  console.log(
    `The lessons you are trying to load are from courseId ${courseId}`
  );
  pool.getConnection((err, conn) => {
    if (err) throw err;

    try {
      console.log("here");
      const qry = `SELECT * FROM lessondb WHERE courseId=?`;
      conn.query(qry, [courseId], (err, result) => {
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

// TODO: Use JWT token to add user as author of lesson into database
router.post("/createLesson1", (req, res) => {
  const lessonName = req.body.lessonName;
  const lessonDescription = req.body.lessonDescription;
  const lessonContent = req.body.lessonContent;
  const lessonImage = req.body.lessonImage;
  const lessonCourseId = req.body.lessonCourseId;
  pool.getConnection((err, conn) => {
    if (err) throw err;
    console.log(
      "Adding... Lesson name: " +
        lessonName +
        " ... Lesson description: " +
        lessonDescription +
        " ... Parent Course ID: " +
        lessonCourseId +
        " ... Lesson content: " +
        lessonContent +
        " ... Lesson image: " +
        lessonImage
    );
    try {
      var qry = `INSERT INTO lessondb (LessonName, image, description,CourseId) VALUES (?, ?, ?, ?)`;
      conn.query(
        qry,
        [lessonName, lessonImage, lessonDescription, lessonCourseId],
        (err, result) => {
          if (err) throw err;
          console.log("lesson added!");
          res.redirect("/lesson/list");
          res.end();
        }
      );
    } catch (err) {
      console.log("Error adding course to database.");
    }
  });
});

// TODO: Use JWT token to list lessons created by the current user
router.get("/listLesson1", (req, res) => {
  pool.getConnection((err, conn) => {
    if (err) throw err;

    try {
      const qry = `SELECT * FROM lessondb`;
      conn.query(qry, (err, result) => {
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

// =================== End of Joshua backend testing portion ========================

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
