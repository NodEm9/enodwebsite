import { bootstrap } from 'bootstrap';

import '../style/main.scss';  
import '../style/contact.scss';

const mainHeading = document.querySelector('.c-heading'); 
const cHeader1 = document.querySelector('.c-heading1');

        
         
const contactPage = () => {
          //Add a new text to heading 
          mainHeading.textContent = 'Welcome to Contacts'; 
          
          cHeader1.textContent = `Reach us today, with any contact medium convinient to you. 
                    Call or email us and we will endeavour to get back to you ASAP. Thank you.`;

                    console.log(cHeader1)          
}
 contactPage();

 //Select the DOM containing the GitHub icon 
 //and store in a variable called socialIcon
 const socialIcon = document.querySelector('.social__icon1');

//Add a click event and a window.open function 
//to enable the window open the page in a new tab
 socialIcon.onclick = function () {
          window.open('https://github.com/NodEm9') 
 }
 
 //selecting DOM for Linkedin icon
 const linkedinIcon = document.querySelector('.social__icon2');

 linkedinIcon.onclick = function () {
          window.open('https://www.linkedin.com/in/emmanuel-nodolomwanyi-60b56246');
 }

 
 //Export the contact page function 
 export { contactPage };    

