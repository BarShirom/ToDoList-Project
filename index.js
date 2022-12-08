const form = document.querySelector('#addToDo');
const input = document.querySelector('#theToDo');
const todolist = document.querySelector('#todolist');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newToDo = document.createElement('li');
    const newToDoName = document.createElement('span');
    const removeBtn = document.createElement('button');
    
    newToDoName.innerText = input.value;
    removeBtn.innerText = 'x';
    newToDo.appendChild(newToDoName);
    newToDo.appendChild(removeBtn);
    input.value = '';
    todolist.appendChild(newToDo);
    
    removeBtn.setAttribute("id", "remove");
     removeBtn.addEventListener("click", function(e){
      e.target.parentElement.remove();
    })
    
  })
  
 