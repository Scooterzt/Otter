const controller = require("./controller");

module.exports = function(app){
    app.get("/", controller.index);
    app.get("/otter/new", controller.new);
    app.get("/otter/edit/:id", controller.edit);
    app.get("/otter/:id", controller.otterId);
    app.get("/otter/delete/:id", controller.delete);
    app.post("/otter", controller.newOtter);
    app.post("/otter/:id", controller.editOtter);
    app.post("/otter/delete/:id", controller.delete); 
};