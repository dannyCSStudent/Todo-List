import buildPage from "./PageBuilder";
import './styles.css';

buildPage();

const btn = document.getElementById('btn');
const sidebar = document.querySelector('.sidebar');
btn.addEventListener('click',function () {
    sidebar.classList.toggle('active');

})

const tooltip = document.querySelector('.tooltip');
tooltip.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const input = document.createElement('input');
    span.classList.add('nav-item');
    input.placeholder = 'Add a project';
    span.appendChild(input);
    li.appendChild(span);
    ul.appendChild(li);
})