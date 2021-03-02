/*File name : index.js
  Author's name : Noushig Chitjian
  Student ID : 301117936
  Web site name : NC
  date : Oct 22, 2020 */
  
let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.DisplayHomePage);  

/* GET home page. */
router.get('/home', indexController.DisplayHomePage);

/* GET Projects page. */
router.get('/projects', indexController.DisplayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.DisplayServicesPage);

/* GET About page. */
router.get('/about', indexController.DisplayAboutPage);

/* GET Contact Us page. */
router.get('/contact', indexController.DisplayContactPage);

/* GET Route for displaying the Login page  */
router.get('/login', indexController.DisplayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.ProcessLoginPage);

/* for register page*/
/*GET Route for displaying the Register page */
router.get('/register', indexController.DisplayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.ProcessRegisterPage);


/* GET to perform UserLogout */
router.get('/logout', indexController.PerformLogout);

module.exports = router;
