import bootstrap from 'bootstrap';

//Importing all functions of the siblings files
import { run } from './app/app';
import { homePage } from './app/home';
import { allProject } from './app/projects';
import { contactPage } from './app/contact';
import { AboutMe } from './app/about';
import { alertMessage } from './app/alert.service';

//importing all scss files 
import './style/main.scss';
import './style/contact.scss';
import './style/about.scss';    
import './style/project.scss';

 
console.log(alertMessage)

export {
          homePage,
          contactPage,
          AboutMe,
          allProject,
          alertMessage,
}


