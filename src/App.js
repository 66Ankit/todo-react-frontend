import './App.css';
import { useState } from 'react';
import Form from './components/Form/Form';
import Todo from './components/Todos/Todo';
import { useEffect } from 'react';

function App() {

  const [inputText,setInputText] =useState("");
  const [todos,setTodos]= useState([]);
  const [filter,setFilter] = useState('all');

  const [filteredTodo,setFilteredTodo] = useState([])

 // local storage

 const saveLocalStorage = () =>{
   
     localStorage.setItem('todos', JSON.stringify(todos))
   
 }

 // get local storage

 const getLocalStorage = () =>{
   if(localStorage.getItem('todos') === null)
   {
     localStorage.setItem('todos', JSON.stringify([]))
   }
   else{
     let todosLocal=JSON.parse(localStorage.getItem('todos'))
     setTodos(todosLocal)
   }
 }

 // use Effect to fill todos from local storage


 useEffect(() => {

   getLocalStorage()
 
  }, [])

  // filter handler

  const filterHandler = ()=>{
    if(filter === 'completed')
      setFilteredTodo(todos.filter(item => item.completed === true ))
    else if(filter === 'uncompleted')
      setFilteredTodo((todos.filter(item => item.completed === false )))
    else
      setFilteredTodo(todos);
  }

  useEffect(() => {
    
    saveLocalStorage()
    filterHandler()

  }, [filter,todos])

  return (
    <div className="App">
      <header>
        <h1>AJ's Todo </h1>
      </header>
      <Form setFilter={setFilter} inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos}/>
      <Todo setTodos={setTodos} todos={todos} filteredTodo={filteredTodo} />
    </div>
  );
}

export default App;
