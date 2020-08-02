//dom.j
/**
 * document.createElement(tagename) - returns 1 element node
 * document.createTextNode(text) - returns 1 text node
 * parent.appendChild(node) - add child to parent
 * parent.removeChild(node) - removes node from parent
 * 
 * element.innerHTML
 * element.textContent
 */

 export class ContactPage {
     constructor(){
          let Contacts = document.querySelector('.contact');
          let h2 = Contacts.querySelector('h2');
          h2.textContent = 'Contacts here';

  
     }
     

 }