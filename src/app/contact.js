import { bootstrap } from 'bootstrap';
import '../style/main.scss';
import '../style/contact.scss';
import { openNewpage } from './home';

const greetingMsg = document.querySelector('.greetingMsg');

const contactPage = () => {

          const cHeader = greetingMsg.querySelector('h1'); 
          cHeader.textContent = 'Welcome to Contacts';
          const cHeader1 = document.querySelector('.c-heading1');
          cHeader1.textContent = `Reach us today, with any contact medium convinient to you\n 
                                    In case we are not available at the moment, Kindly drop us a message
                                    and we will  endeavour to get back to you ASAP. Thank you. `;                                    
 
}
 contactPage();


 
 export { contactPage }; 

