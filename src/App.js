import './App.css';
import { useState } from 'react';
import Form from './components/Form/Form';
import Todo from './components/Todos/Todo';
import { useEffect } from 'react';
import axios from 'axios'

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

 const getLocalStorage = async () =>{
  
  const url="https://nodejs-todo-api-ankit.herokuapp.com/api/todos/61c782c3ae191ac14f31f6a9"
      
      // setTodos()
      
      // console.log(serverData)
      // console.log(serverTodos)
      // 
  
      
  if(localStorage.getItem('todos') === null)
   {
     const serverData= await axios.get(url)
      const serverTodos =[] 
      serverData.data.forEach(element => {

        serverTodos.push({"text":element.todo,
                          "completed":element.completed,
                        "id":element._id})
        
      });
      localStorage.setItem('todos',JSON.stringify(serverTodos));
      setTodos(serverTodos)
    //  localStorage.setItem('todos', JSON.stringify([]))
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
