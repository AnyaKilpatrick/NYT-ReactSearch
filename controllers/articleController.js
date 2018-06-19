const db = require("../models");

// Defining methods for the articleController
module.exports = {
    create: function(req, res){
        db.Article.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err=>res.status(422).json(err));
    }
};
