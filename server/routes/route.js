module.exports = function(app){
  const controller = require("../controllers/controller");
  app.get("/api/cakes", controller.index);
  app.post("/api/cakes/new", controller.create);
}