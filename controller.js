const Otter = require("./models");
module.exports={
    index: function(request, response){
        console.log("Hitting index");
        Otter.find()
        .then(data => response.render("index", {otters: data}))
        .catch(err=>console.log(err));
    },
    new: function(request, response){
        response.render("new");
    },
    newOtter: function(request, response){
        console.log(request.body);
        Otter.create(request.body)
        .then(newOtter=> console.log(newOtter), response.redirect("/"))
        .catch(err=>console.log(err));
    },
    otterId: function(request, response){
        Otter.find({_id: request.params.id})
        .then(data=> response.render("otterInfo", {otter:data}))
        .catch(err=>console.log(err));
    },
    delete: function(request, response){
        Otter.remove({_id: request.params.id})
        .then(response.redirect("/"))
        .catch(err=>console.log(err));
    },
    edit: function(request, response){
        Otter.find({_id: request.params.id})
        .then(data=> response.render("edit", {otter:data}))
        .catch(err=>console.log(err));
    },
    editOtter: function(request, response){
        console.log(request.body.age);
        Otter.update({_id: request.params.id}, {$set: {name:request.body.name, age:request.body.age}})
        .then(response.redirect("/"))
        .catch(err=>console.log(err));
    }

};