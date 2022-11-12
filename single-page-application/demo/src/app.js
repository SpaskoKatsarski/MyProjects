import { checkUserNav } from './auth.js';
import { showCatalogView } from './catalog.js';
import './details.js';
import './login.js';

checkUserNav();

// Start application in catalog view
showCatalogView();