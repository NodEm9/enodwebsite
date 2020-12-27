import bootstrap from 'bootstrap';
//Importing all functions of the siblings files
import { run } from './app/app';
import { homePage } from './app/home';
import { openNewpage } from './app/home';
import { ComponentService } from './app/component.service';
import { contactPage } from './app/contact';
import { AboutMe } from './app/about';
import { alertMessage } from './app/alert.service';

//importing all scss files 
import './style/main.scss';
import './style/contact.scss';
import './style/about.scss';    
import './style/project.scss';

const componentService = new ComponentService();
const aboutme = new AboutMe();
 
console.log(alertMessage)

export {
          homePage,
          openNewpage,
          contactPage,
          alertMessage,
}

run(ComponentService, AboutMe);

