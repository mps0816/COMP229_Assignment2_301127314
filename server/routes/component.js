/*File name : components.js
  Author's name : Noushig Chitjian
  Student ID : 301117936
  Web site name : NC
  date : Oct 22, 2020 */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let componentController = require('../controllers/component');

// helper function for authentication guard
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Component-list page. READ */
router.get('/', componentController.DisplayComponentList);
  
/* GET Display Add page. CREATE  */
router.get('/add', requireAuth, componentController.DisplayAddPage);

/* POST process the Add page. CREATE */
router.post('/add', requireAuth, componentController.ProcessAddPage);

/* GET Display Edit page. UPDATE */
router.get('/edit/:id', requireAuth, componentController.DisplayEditPage);

/* POST process the Edit page. UPDATE */
router.post('/edit/:id', requireAuth, componentController.ProcessEditPage);

/* GET process the Delete page. DELETE */
router.get('/delete/:id', requireAuth, componentController.ProcessDeletePage);


module.exports = router;