const COLORS = [
    '380fdb',
    'db0f7c',
    '0fdb24',
    '0facdb',
    '120fd4',
    'dbc70d',
    '0bbee5',
    '570ccf',
    'cf5d0c',
    '9b0ccf',
];

const list = document.querySelector('.list');

const fetchTodos = async () => {
   const todos = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())

        todos.forEach((todo, index) => {
            createCard(todo, index)
        });
}
fetchTodos();

const createCard = (todo, index) => {
    const { title, id, completed } = todo;

    const card = document.createElement('li');
    const cardHeader = document.createElement('div');
    const cardContent = document.createElement('div');

    card.classList.add('card');
    cardHeader.classList.add('card-header');
    cardContent.classList.add('card-content');
    
    card.style.background = `#${COLORS[index]}`;

    cardHeader.innerHTML = `
        <span>Загловок: ${title}</span>

        <span>Id задачи: ${id}</span>
    `;

    cardContent.innerHTML = `
        <span>Выполнен: ${completed ? 'да' : 'нет'}</span>

        <input type="checkbox" />
    `;

    card.appendChild(cardHeader);
    card.appendChild(cardContent);
    list.appendChild(card)
}