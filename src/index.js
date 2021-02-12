import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import { render } from './modules/content';
// import './modules/content'
import { homeListener } from './modules/home';
import { contactListener } from './modules/contactButton';
import { menuListener } from './modules/menuButton';


render();
homeListener();
contactListener();
menuListener();