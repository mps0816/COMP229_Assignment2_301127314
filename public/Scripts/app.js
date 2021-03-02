// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger'); 

        for (const button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if(document.title === "Home")
                //when we are inside the Home page                                  
                {   //assign home button to homeButton
                    let homeButton = document.getElementById("homeButton");
                    //assign about button to homeButton
                    let aboutButton = document.getElementById("aboutButton");
                    //assign projects button to homeButton 
                    let projectsButton = document.getElementById("projectsButton");
                    //assign services button to homeButton 
                    let servicesButton = document.getElementById("servicesButton");
                    //assign contact button to homeButton     
                    let contactButton = document.getElementById("contactButton"); 
                    //when the homeButton is clicked
                    homeButton.addEventListener("click", (event) => {  
                        event.preventDefault();
                        //the page will go to the home page
                        location.href ='/home.ejs';         
                });
                    //when aboutButton is clicked
                    aboutButton.addEventListener("click", (event) => { 
                        event.preventDefault();
                        //the page will go to the about page  
                        location.href ="/about";
                });
                    //when projectsButton is clicked
                    projectsButton.addEventListener("click", (event) => { 
                        event.preventDefault();
                        //the page will go to the projects page  
                        location.href ="/projects";  
                });
                    //when servicesButton is clicked
                    servicesButton.addEventListener("click", (event) => { 
                        event.preventDefault();
                        //the page will go to the services page
                        location.href ="/services";                                     
                });
                    //when contactButton is clicked
                    contactButton.addEventListener("click", (event) => { 
                        event.preventDefault();
                        //the page will go to the contact page
                        location.href ="/contact";  
                });
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    location.href = '/component-list';
                }
            }
                

            });
        }
    }
    //when we are inside the contact page 
    if(document.title === "Contact") 
    {   //assign submit button to the submitButton
        let sendButton = document.getElementById("submitButton");
        //assign reset button to the resetButton           
        let resetButton = document.getElementById("resetButton");
        //assign input box for last name to the lastName           
        let lastName = document.getElementById("lastName");
        //assign input box for first name to the firtName                 
        let firstName = document.getElementById("firstName"); 
        //assign input box for contact number to the contactNumber              
        let contactNumber = document.getElementById("contactNumber");
        //assign input box for short message to the shortMessage       
        let shortMessage = document.getElementById("shortMessage");        

        //when send button is clicked
        sendButton.addEventListener("click", (event) => {                   
                event.preventDefault();
                console.log('Send button clicked!');                         
                console.log( 
                    //all the values will be displayed on the console                                               
                    `
                     last Name : ${lastName.value}
                     first Name : ${firstName.value}
                     contact number : ${contactNumber.value}
                     short message : ${shortMessage.value}
                     `
                );
        });
        
    } 

    window.addEventListener('load', Start);
})();