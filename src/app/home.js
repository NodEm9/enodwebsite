
const homePage =() => {
        const home = document.querySelector('.home');
        let pCard = document.querySelector('.card__p');
        pCard.innerHTML = 'Web Development, Single-page and complex website design.';
 } 
 homePage();


 //Select the DOM element for GitHub
 const socialIcon = document.querySelector('.social__icon1');

 //Add an eventListener with the function 
 socialIcon.addEventListener('click', openNewpage);

//  Client.openNewpag();

 //Run this function if the icon is clicked
 function openNewpage(evt) {
         evt.preventDefault();
         if(socialIcon) {
                window.open('https://github.com/NodEm9');     
         }
         openIinkedinPage();
         
 }
  function openIinkedinPage(e) {
        const linkedinIcon = document.querySelector('.social__icon3');
  
        linkedinIcon.addEventListener('click', openIinkedinPage);
        e.preventDefault();

        if(linkedinIcon){
              window.open('https://www.linkedin.com/in/emmanuel-nodolomwanyi-60b56246');
        } 
  }
  openNewpage();

 //Make sure all functions are exported correctly
 export { homePage, openNewpage };
  