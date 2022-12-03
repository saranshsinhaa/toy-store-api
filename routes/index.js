const express = require("express");

const router = express.Router();

const { toy } = require("../models/toy");

//Get all toys

router.get("/api/toys", (req, res) => {
  toy.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

// Add  new toy
router.post("/api/toy/add", (req, res) => {
  const emp = new toy({
    name: req.body.name,
    company: req.body.company,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  emp.save((err, data) => {
    if (!err) {
      res.status(200).json({
        code: 200,
        message: "Toy Added Successfully",
        addToy: data,
      });
    } else {
      console.log(err);
    }
  });
});

// Get Single Toy

router.get("/api/toy/:id", (req, res) => {
  toy.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

// Update  Toy

router.put("/api/toy/update/:id", (req, res) => {
  const toyNew = {
    name: req.body.name,
    company: req.body.company,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  toy.findByIdAndUpdate(
    req.params.id,
    { $set: toyNew },
    { new: true },
    (err, data) => {
      if (!err) {
        res.status(200).json({
          code: 200,
          message: "Toy Updated Successfully",
          updateToy: data,
        });
      } else {
        console.log(err);
      }
    }
  );
});

// Delete Toy
router.delete("/api/toy/delete/:id", (req, res) => {
  toy.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res
        .status(200)
        .json({ code: 200, message: "Toy deleted", deleteToy: data });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
