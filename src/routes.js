const express = require('express')
const routes = express.Router()

routes.get("/", function(req, res){
    return res.render("index.html")
})

routes.get("/profile", function(req, res){
    return res.render("profile.html")
})

routes.get("/task", function(req, res){
    return res.render("profile-task.html")
})

module.exports = routes