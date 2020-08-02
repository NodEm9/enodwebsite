import { run } from './app/app';
import './style/main.scss';
import { HomePage } from './app/home';
import { ContactPage } from './contact';
import { about } from './app/about';
import { ComponentService } from './app/component.service';


const componentService = new ComponentService();
const homepage = new HomePage();
const contactpage = new ContactPage();




run(ComponentService, HomePage, ContactPage);