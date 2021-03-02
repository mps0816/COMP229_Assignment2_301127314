/*
  Author's name : Christina May Pakingan
  Student ID : 301121940
  Web site name : Christina Pakingan
  date : February 28, 2021*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the User Model Instance
let userModel = require('../models/user');
let User = userModel.User; // alias

module.exports.DisplayHomePage = (req, res, next) => {

    console.log("Home Page Controller");

    res.render('index', { title: 'Home',
    displayName: req.user ? req.user.displayName : '' });
  }
  
module.exports.DisplayProjectsPage = (req, res, next) => {
    res.render('index', { title: 'Projects',
    displayName: req.user ? req.user.displayName : '' });
  }

module.exports.DisplayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services',
    displayName: req.user ? req.user.displayName : '' });
  }

module.exports.DisplayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About',
    displayName: req.user ? req.user.displayName : '' });
  }
  
module.exports.DisplayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact',
    displayName: req.user ? req.user.displayName : '' });
  }

  module.exports.DisplayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user)
    {
      res.render('auth/login', 
      {
        title: 'Login',
        messages: req.flash('loginMessage'),
        displayName: req.user ? req.user.displayName : ''
      });
    }
    return res.redirect('/');
  }

  module.exports.ProcessLoginPage = (req, res, next) => 
  {
    passport.authenticate('local', 
    (err, user, info) => {
      // server error?
      if(err)
      {
        return next(err);
      }

      // is there login errors?
      if(!user)
      {
        req.flash('loginMessage', 'Authentication Error');
        return res.redirect('/login');
      }

      req.login(user, (err) => {
        // db server error?
        if(err)
        {
          return next(err);
        }

        return res.redirect('/component-list');
      });
    })(req, res, next);
  }

  module.exports.DisplayRegisterPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user)
    {
      res.render('auth/register', 
      {
        title: 'Register',
        messages: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName : ''
      });
    }
    return res.redirect('/');
  }

  module.exports.ProcessRegisterPage = (req, res, next) => {
    // instantiate a new user object

    let newUser = new User({
      username: req.body.username,
      //password: req.body.password
      email: req.body.email,
      displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
      if(err)
      {
        console.log('Error: Inserting New User');
        if(err.name == "UserExistsError")
        {
          req.flash('registerMessage', 'Registration Error');
          console.log('Error: User Already Exists');
        }
        return res.redirect('/register');
      }
      else
      {
        // no error exists

        // option 1: res.redirect back to the login page and let user login

        // option 2: automatically login user

        return passport.authenticate('local')(req, res, ()=>{
          res.redirect('/component-list');
        });
      }
    })
  }

  module.exports.PerformLogout = (req, res, next) => {
    req.logout();
    res.redirect('/login');
  }
