import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');

const addTask = (evento) => {
  const list = document.querySelector('[data-list]');
  const task = createTask(evento);
  list.appendChild(task);
}

const taskList = [];

//Arrow functions o funciones anonimas
const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector('[data-form-input]');
  const value = input.value;
  const calendar = document.querySelector('[data-form-date]');
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");

 
  const task = document.createElement('li');
  task.classList.add('card');
  input.value = '';
  //backticks
  const taskContent = document.createElement('div');
  
  //Construcción del objeto. No hace falta agregar valor a las variables en este punto
  const taskObject ={
    value,
    dateFormat
  }

  taskList.push(taskObject);

  //API almacenamiento
  localStorage.setItem('tasks', JSON.stringify(taskObject));

  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;

  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;

  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());

  return task;
};


btn.addEventListener('click', addTask);
