
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

//create a reference to the model
let Contacts = require('../models/businessContact');

module.exports.displayContactList = (req, res, next) => {
    Contacts.find((err, contactList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('businessContact/list', {title: 'Component List', 
            ContactList: contactList,
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayAddPage = (req, res, next) =>{
    res.render('businessContact/add', {title: 'Add Contact',
    displayName: req.user ? req.user.displayName : ''});
}

module.exports.processAddPage = (req, res, next) =>{
    let newContact = Contacts({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contacts.create(newContact, (err, Contacts) =>{   //pass err in Contacts model
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the business contact list
            res.redirect('/contact-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) =>{
    let id = req.params.id;

    Contacts.findById(id, (err, contactToEdit, contactList) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit View
            res.render('businessContact/edit', {title: 'Edit Contact',
            contact: contactToEdit, ContactList: contactList,
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.processEditPage = (req, res, next) =>{
    let id = req.params.id

    let updateContact = Contacts({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contacts.updateOne({_id: id}, updateContact, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/contact-list');
        }
    });
}

module.exports.performDelete = (req, res, next) =>{
    let id = req.params.id;

    Contacts.remove({_id: id}, (err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the business contact list
            res.redirect('/contact-list');
        }
    });

}