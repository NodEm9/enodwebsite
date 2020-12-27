
const homePage =() => {
        const home = document.querySelector('.home');
        let pCard = document.querySelector('.card__p');
        pCard.innerHTML = 'Web Development, Single-page and complex website design.';
 } 
 homePage();


 //Select the DOM element for GitHub
 const socialIcon = document.querySelector('.social__icon');

 //Add an eventListener with the function 
 socialIcon.addEventListener('click', openNewpage);

 Client.openNewpag();

 //Run this function if the icon is clicked
 function openNewpage(evt) {
         evt.preventDefault();

         if(socialIcon) {
               window.open('https://github.com/NodEm9');
               return
         }
 }
 openNewpage();

const searchBox = document.querySelector('.searchBox');

const searchBtn = document.querySelector('.searchBtn');

searchBtn.addEventListener('click', createSerach);

 //
 function createSerach() {
        //  const fragment =  document.createDocumentFragment();


 }   

 //Make sure all functions are exported correctly
 export { homePage, openNewpage };
  