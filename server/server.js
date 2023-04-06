import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';
import UserModel from './model/User.model.js';
// import bodyParser from"body-parser"


const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack


const port = 8080;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

app.get('/getAllUsers', async (req, res) => {
    try {
        const allUsers = await UserModel.find({});
        res.send({ status: "ok", data: allUsers })
    } catch (error) {
        console.log(error);
    }
})

app.post("/deleteUser", async (req, res) => {
    const { userid } = req.body;
    try {
        UserModel.deleteOne(
            { _id: userid }, function (err) { console.log(err) }
        )
        res.send({ status: "ok", data: "Deleted" })
    } catch (error) {
        console.log(error);
    }
})

app.post("/incPointsby10", async (req, res) => {
    const { userid, points } = req.body;
    try {
        let updatedPoints = points+10;
        UserModel.findByIdAndUpdate(userid, { $set: { points: updatedPoints } }, function (err) { console.log(err) })
        res.send({ status: "ok", data: "points increased" })
    } catch (error) {
        console.log(error)
    }
})

app.post("/decPointsby10", async (req, res) => {
    const { userid, points } = req.body;
    try {
        let updatedPoints = points-10;
        UserModel.findByIdAndUpdate(userid, { $set: { points: updatedPoints } }, function (err) { console.log(err) })
        res.send({ status: "ok", data: "points decreased" })
    } catch (error) {
        console.log(error)
    }
})

app.post("/incPointsby50", async (req, res) => {
    const { userid, points } = req.body;
    try {
        let updatedPoints = points+50;
        UserModel.findByIdAndUpdate(userid, { $set: { points: updatedPoints } }, function (err) { console.log(err) })
        res.send({ status: "ok", data: "points increased by 50" })
    } catch (error) {
        console.log(error)
    }
})
app.post("/decPointsby50", async (req, res) => {
    const { userid, points } = req.body;
    try {
        let updatedPoints = points-50;
        UserModel.findByIdAndUpdate(userid, { $set: { points: updatedPoints } }, function (err) { console.log(err) })
        res.send({ status: "ok", data: "points decreased by 50" })
    } catch (error) {
        console.log(error)
    }
})


/** api routes */
app.use('/api', router)

// app.use(bodyParser({limit: '1mb'}));

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})

