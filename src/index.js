import { run } from './app/app';
import './style/main.scss';
import { home } from './app/home';
import { contact } from './app/contact';
import { about } from './app/about';
import { ComponentService } from './app/component.service';


const componentService = new ComponentService();



run(ComponentService);