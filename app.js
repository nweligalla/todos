const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search').search;


const createTodo = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo}</span>
        <i class="fas fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;


};

// add todos
addForm.addEventListener('submit', e => {
    e.preventDefault();
    if (addForm.add.value.trim() != '') {
        createTodo(addForm.add.value.trim());
        addForm.reset();
    }
});

// delete todos

list.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('delete'))
        e.target.parentElement.remove()
});

//search todos


const filterTodos = term => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
    filterTodos(search.value.trim().toLowerCase());
})




