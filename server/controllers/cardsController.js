const db = require("../models");

// Defining methods for the booksController
const controller = {
  findAll: (req, res) => {
    db.Organization.findAll({
      where: {
        inactive: false
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Organization.findOne({
      where: {
        id: req.params.id,
        inactive: false
      }
    })
      .then(dbModel => {
        if (dbModel) {
          res.json(dbModel);
        } else {
          res.status(404).json({
            message: 'Id not found.'
          });
        }
      })
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Organization.create({
      name: req.body.name,
      description: req.body.description
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Organization.update({
      name: req.body.name,
      description: req.body.description
    }, {
        where: {
          id: req.params.id,
          inactive: false
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Organization.update({
      inactive: true
    }, {
        where: {
          id: req.params.id
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  nextCardsForUser: function (userID, iteration, since, cb) {
    db.Card.findAll({
      where: {
        userID: userID,
        active: true,
        shownCount: iteration,
        lastShown: { $lte: since },
      }
    })
      .then(dbModel => cb(dbModel))
      .catch(err => { });

  }
};

export { controller as default };
