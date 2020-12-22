import { run } from './app/app';
import { homePage } from './app/home';
import { ComponentService } from './app/component.service';
import { contactPage } from './app/contact';
import { AboutMe } from './app/about';
import { alertMessage } from './app/alert.service';

import './style/main.scss';
import './style/contact.scss';
import './style/about.scss';
import './style/project.scss';

const componentService = new ComponentService();
// const homepage = new HomePage();
// const contactpage = new ContactPage();
const aboutme = new AboutMe();

console.log(alertMessage)

export {
          homePage,
          contactPage,
          alertMessage
}

run(ComponentService, AboutMe);

