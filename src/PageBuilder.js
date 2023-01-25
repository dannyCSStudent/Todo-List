import Icon from './images/menu.png';
import Odin from './images/odin-lined.png';

const buildPage = () => {
    const myIcon = new Image();
    myIcon.src = Icon;
    const myOdin = new Image();
    myOdin.src = Odin;

    
    const body = document.querySelector('body');
    const sidebar = document.createElement('div');
    const mainContent = document.createElement('div');
    const container = document.createElement('div');
    const todo = document.createElement('h1');
    const rightSide = document.createElement('h1');
    const top = document.createElement('div');
    const logo = document.createElement('div');
    const user = document.createElement('div');
    const btn = document.createElement('button');
    const odinImg = document.createElement('img');
    const menuImg = document.createElement('img');

    odinImg.classList.add('odin-img');
    btn.setAttribute('id', 'btn');
    menuImg.classList.add('menu-img');
    sidebar.classList.add('sidebar');
    mainContent.classList.add('main-content');
    container.classList.add('container');
    
    top.classList.add('top');
    logo.classList.add('logo');
    user.classList.add('user');

    menuImg.setAttribute('src', myIcon.src);
    todo.textContent = 'Todo List';
    rightSide.textContent = 'Right Side'

    container.appendChild(todo);
    container.appendChild(rightSide);
    mainContent.appendChild(container);

;
    user.appendChild(odinImg);
    btn.appendChild(menuImg);
    logo.appendChild(btn);
    top.appendChild(logo);
    sidebar.appendChild(top)
    sidebar.appendChild(user);
    body.appendChild(sidebar);
    body.appendChild(mainContent);


}

export default buildPage