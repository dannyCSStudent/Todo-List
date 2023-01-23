
const buildPage = () => {
    const content = document.querySelector('.content');
    const header = document.createElement('div');
    const hideSidebar = document.createElement('div');
    const banner = document.createElement('div');
    const addTaskBtn = document.createElement('button');
   
    header.classList.add('header');
    hideSidebar.classList.add('hide-sidebar');
    banner.classList.add('banner');
    addTaskBtn.classList.add('add-task');

    hideSidebar.textContent = 'aaa';
    banner.textContent = 'Todos';
    addTaskBtn.textContent = 'Add';

    header.appendChild(hideSidebar);
    header.appendChild(banner);
    header.appendChild(addTaskBtn);

    content.appendChild(header);
}

export default buildPage