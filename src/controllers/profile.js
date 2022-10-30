const getDb = require("../services/db")

exports.create = async (req, res) => {
    const db = await getDb();
    const { username, date, goal, amWeight, pmWeight} = req.body;

    try {
         await db.query('INSERT INTO Profile (username, date, goal, amWeight, pmWeight) VALUES (?, ?, ?, ?, ?)', [
            username,
            date,
            goal,
            amWeight,
            pmWeight
        ]);
        res.sendStatus(201);
    } catch (err) {
         res.sendStatus(500) 
        console.log(err);
    }
    db.end();
};

    exports.read = async (req, res) => {
        const db = await getDb();    
        try{
            const [profileInfo] = await db.query(`SELECT * FROM Profile`)
            res.status(200).json(profileInfo)
          }
          catch(err){
            res.status(500).json(err)
          }
          db.end()

    db.end();
};


