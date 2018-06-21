const db = require("../models");

// Defining methods for the articleController
module.exports = {
    create: function(req, res){
        db.Article.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err=>res.status(422).json(err));
    },

    findArticles: function(req, res){
        db.Article.find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    deleteArticle: function(req, res){
        db.Article.deleteOne({_id: req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.sattus(422).json(err));
    }
};
