import { bootstrap } from 'bootstrap';

import '../style/main.scss'; 
import '../style/project.scss';

const section = document.querySelector('.container');


const allProject = () => {
  //create a div for where to place the h1
  const div = document.createElement('div');

  //Div should be inserted immidiately after section with 
  //the container class begining
  section.insertAdjacentElement('afterbegin', div);

  //Create an h1 for the  and set the id attribute  to main-heading
  //and append it as child of the div
   const h1 = document.createElement('h1');
   h1.setAttribute('id', 'main-heading');
   h1.textContent = 'Welcome to Portfolio';
   div.appendChild(h1);
}
allProject();


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

export { allProject };