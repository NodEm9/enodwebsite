import { bootstrap } from 'bootstrap';

const homePage =() => {
        const cardText = document.querySelector('.card-text');
        let pCard = cardText.querySelector('.card__p');
        pCard.innerHTML = 'Web Development, Single-page and complex website design.';

        //Select the ul DOM element where the component items
        // are to be placed in the footer 
        const itemList = document.querySelector('.item-list');

       //Create a document fragment for the list items
        const fragment = document.createDocumentFragment();

        //Craete the list with a loop and and setAttribute (class)

         for(let i = 0; i < 4; i++){
              const listElement = document.createElement('li');

              //attach a function name inside the setting
              listElement.setAttribute('class', 'componentList') + i;

              const anchorElement = document.createElement('a');
              anchorElement.setAttribute('id', 'components', toggle()) + i;
              listElement.appendChild(anchorElement);

              fragment.appendChild(listElement);
              
                     function toggle() {
                            //Create an array list of th component
                            let listOfComponents  = ['Home', 'Contact', 'About Me', 'Projects'];
                            anchorElement.textContent = listOfComponents[i];

                            const para = document.getElementById('pItem');

                            if(listOfComponents){
                                   
                                   // document.getElementById('components')[0].setAttribute('href', 'index.html')
                                   anchorElement.setAttribute('href', 'index.html', listOfComponents[0]);
                                   anchorElement.setAttribute('href', 'contact.html', listOfComponents[1]);
                                   anchorElement.setAttribute('href', 'about.html', listOfComponents[2]);
                                   anchorElement.setAttribute('href', 'project.html', listOfComponents[3]);
                                   console.log(listOfComponents);
                            }else{
                                   para.textContent = 'Cannont set anchor attribute Href';
                            }
                      }
         }
         itemList.appendChild(fragment);
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
  