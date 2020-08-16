window.$ = require('jquery');
import { run } from './app/app';
import './style/main.scss';
import { HomePage } from './app/home';
import { ComponentService } from './app/component.service';
import { ContactPage } from './app/contact';

const componentService = new ComponentService();
const homepage = new HomePage();
const contactpage = new ContactPage();



run(ComponentService, HomePage, ContactPage);