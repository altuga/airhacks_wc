import './xmas/XMas.js';
import { Router } from './lib/vaadin-router.js';


const outlet = document.querySelector('output');
const router = new Router(outlet);
router.setRoutes([
  {path: '/',     component: 'a-xmas'},
  {path: '/gifts',  component: 'a-gifts'},
]);