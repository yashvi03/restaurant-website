import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';
import loadContact from './contact';


const addTabSwitching = () => {
    document.getElementById('home').addEventListener('click', loadHome);
    document.getElementById('menu').addEventListener('click', loadMenu);
    document.getElementById('about').addEventListener('click', loadAbout);
    document.getElementById('contact').addEventListener('click', loadContact);

};

loadHome();
addTabSwitching();
