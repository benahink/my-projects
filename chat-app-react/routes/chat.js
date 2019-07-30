const express = require("express");
const chatRouter = express.Router();
const Chat = require("../models/chatSchema.js");

chatRouter.get("/", (req, res, next) => {
    Chat.find({user: req.user._id}, (err, chats) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(chats)
    })
})

chatRouter.post("/", (req, res, next) => {
    const chat = new Chat(req.body);

    chat.user = rq.user._id;
    chat.save((err, newChat) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.status(201).send(newChat)
    })
})

chatRouter.get("/:chatId", (req, res, next) => {
    Chat.findOne({_id: req.params.chatId, user: req.user._id}, (err, chat) => {
        if (err) {
            res.status(500);
            return next(err);
        } else if (!chat) {
            res.status(404);
            return next(new Error("no chat found"))
        }
        return res.send(chat)
    });
});

chatRouter.put("/:chatId", (req, res, next) => {
    Chat.findOneAndUpdate(
        {_id: res.params.chatId, user: req.user._id},
        req.body, 
        {new: true}, 
        (err, chat) => {
            if (err) {
                res.status(500)
                return next(err);
            }
            return res.send(chat);
        }
    )
})

chatRouter.delete("/:chatId", (req, res, next) => {
    Chat.findOneAndRemove({_id: req.params.chatId, user: req.user._id}, (err, chat) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(chat);
    });
});

module.exports = chatRouter;