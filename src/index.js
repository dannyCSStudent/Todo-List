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
    const addBtn = document.createElement('button');

    span.classList.add('nav-item');
    input.placeholder = 'Add a project';

    addBtn.textContent = '+';
    addBtn.classList.add('add-btn');

    span.appendChild(input);
    li.appendChild(span);
    li.appendChild(addBtn);
    ul.appendChild(li);

    let x = document.querySelector('input');
    addBtn.addEventListener('click', function (e) {
        let input = x.value;
        if (!(validate(input))) {
            alert('Please enter a project');
            return
        }
        removeLi(e);
        
        createSpan(input, ul);
    })

    
    
})
const validate = (data) => {
    if (data == '') {
        return false;
    }
    return true;
}

const removeLi = (e) => {
    let target = e.target;
    target.parentNode.parentNode.removeChild(target.parentNode);
}

const createSpan = (data, u) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = data;
    li.appendChild(span);
    u.appendChild(li);

}