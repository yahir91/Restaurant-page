import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import { render } from './modules/content';
// import './modules/content'
import { contactListener } from './modules/contactButton';
import { menuListener } from './modules/menuButton';


render();
contactListener();
menuListener();