const express = require("express");
const userRouter = express.Router();
const user = require("./models/user.js");

userRouter.route("/")
.post((req, res) => {
    const newUser = new user(req.body);
    newUser.save((err, new_user) => {
        if(err) return res.status(500).send(err)
        return res.send(new_user)
    })
})
.get((req, res) => {
    user.find((err, user) => {
        if (err) {
            return Response.status(500).send(err)
        } 
        return Response.status(200).send(user) 
    })
});

module.exports = userRouter;