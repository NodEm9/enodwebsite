import { run } from './app/app';
import './style/main.scss';
import { HomePage } from './app/home';
import { ComponentService } from './app/component.service';
import { ContactPage } from './app/contact';
import { AboutMe } from './app/about';




const componentService = new ComponentService();
const homepage = new HomePage();
const contactpage = new ContactPage();
const aboutme = new AboutMe();


run(ComponentService, HomePage, ContactPage, AboutMe);

