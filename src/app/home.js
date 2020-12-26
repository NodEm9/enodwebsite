
const homePage =() => {
        const home = document.querySelector('.home');
        let p = home.querySelector('p');
        p.innerHTML = 'Web Development, Single-page and complex website design.';
 }
 homePage();


 //Select the DOM element for GitHub
 const socialIcon = document.querySelector('.social__icon');

 //Add an eventListener with the function 
 socialIcon.addEventListener('click', openNewpage);

 //Run this function if the icon is clicked
 function openNewpage(evt) {
         evt.preventDefault();

         if(socialIcon) {
               window.open('https://github.com/NodEm9');
               return
         }
 }
 openNewpage();

 //Make sure all functions are exported correctly
 export { homePage, openNewpage };
  