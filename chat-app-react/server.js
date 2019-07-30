const express = require("express");
const app = express();
const PORT = 4040;
require("dotenv").config();
const mongoose = require('mongoose');
const expressJwt = require("express-jwt");

app.use(express.json());

app.use("/", require("./userRouter"));

mongoose.connect("mongodb://localost:27017//chat-ap", {userNewUrlParser: true})
.then(() => console.log('connected to database'))
.catch(err => console.log(err));

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({message: err.message})
});

app.use("/auth", require("./routes/auth"));
app.use("/chat", require("./routes/chat.js"));
app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use("/api/chat", require("./routes/chat.js"));

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
});

const express2 = require("express");
const app2 = express();

server = app2.listen(4050, () => {
    console.log("server is running on 5050")
});

const socket = require("socket.io");
io = socket(server);

io.connect("connection", (socket) => {
    console.log(socket.id);
    socket.on("SEND_MESSAGE", (data) => {
        io.emit("RECEIVE_MESSAGE", data);
    })
});
