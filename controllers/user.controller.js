const express = require('express');
const User = require('../models/user');



// Create a new user
const createUser = async (req, res) => {
    const { name, email, age } = req.body;
  
    try {
      const user = new User({ name, email, age });
      await user.save();
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

  // Get all users
const allUsers = async (req, res) => {
    try {
      const users = await User.find({});
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
  
  // Update a user
  const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(id, { name, email, age }, { new: true });
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }
  
  // Delete a user
 const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const user = await User.findByIdAndDelete(id);
    // const user = await User.deleteOne({_id: req.params.id}).clone();
      res.send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

    module.exports = {createUser, allUsers, updateUser, deleteUser};