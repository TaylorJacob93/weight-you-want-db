const express = require("express");
const getDb = require("../services/db")


const app = express();
app.use(express.json());

// app.post("/client", async (req, res) => {
//     const db = await getDb();
//     const { username, password, date, goal, amWeight, pmWeight} = req.body;

//     try {
//          await db.query('INSERT INTO Client (username, password, date, goal, amWeight, pmWeight) VALUES (?, ?, ?, ?, ?, ?)', [
//             username,
//             password,
//             date,
//             goal,
//             amWeight,
//             pmWeight
//         ]);
//         res.sendStatus(201);
//     } catch (err) {
//          res.sendStatus(500) 
//         console.log(err);
//     }

//     db.end();
// });



