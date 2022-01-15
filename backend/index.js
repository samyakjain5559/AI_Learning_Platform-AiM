const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routesHandler);

// // testing connection and insertion
// pool.getConnection((err, conn) => {
//     if (err) throw err;

//     const user = 'mtran';
//     const fullname = 'Matt Tran';
//     const password = 'matt'
//     const qry = `INSERT INTO sign_up(username, fullname, password, entry_date) VALUES (?, ?, ?, NOW())`;
//     conn.query(qry, [user, fullname, password], (err, result) => {
//         conn.release();
//         if (err) throw err;
//         console.log(result);
//     });
// });

// app.post('/sign_up', (req, res) => {
//     pool.getConnection((err, conn) => {
//         if (err) throw err;

//         const username = req.body.username;
//         const fullname = req.body.fullname;
//         const password = req.body.password;

//         const qry = `INSERT INTO sign_up(username, fullname, password, entry_date) VALUES (?, ?, ?, NOW())`;
//         conn.query(qry, [username, fullname, password], (err, result) => {
//             conn.release();
//             if (err) throw err;
//             console.log(result);
//         });
//     });
// })


const PORT = process.env.PORT || 4000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
