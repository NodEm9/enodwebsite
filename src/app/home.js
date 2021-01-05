import { bootstrap } from 'bootstrap';


const homePage =() => {

        const cardText = document.querySelector('.card-text');
        let pCard = cardText.querySelector('.card__p');
        pCard.innerHTML = 'Web Development, Single-page and complex website design.';

        //Select the ul DOM element where the component items
        // are to be placed in the footer 
        const itemList = document.querySelector('.item-list');
       
        }
homePage();

 //Select the DOM element for GitHub
 const socialIcon = document.querySelector('.social__icon1');

 //Add an eventListener with the function 
 socialIcon.addEventListener('click', function openNewpage(evt) {
         evt.preventDefault();
         if(socialIcon) {
                window.open('https://github.com/NodEm9');     
         }   
 });

 //Select the DOM element for Linkedin icon
 const linkedinIcon = document.querySelector('.social__icon2');

 linkedinIcon.addEventListener('click', function openIinkedinPage(e) {
        e.preventDefault();
        if(linkedinIcon){
              window.open('https://www.linkedin.com/in/emmanuel-nodolomwanyi-60b56246');
        } 
  });

 //Make sure all functions are exported correctly
 export { homePage };
  