const carrosRouter= require('express').Router();
const controller= require("../controllers/carros");

carrosRouter.get('/', controller.getALL);
carrosRouter.get('/:id', controller.getById);
carrosRouter.post('/create', controller.create);
carrosRouter.put('/update', controller.update);
carrosRouter.delete('/delete/:id', controller.delete);

module.exports= carrosRouter;