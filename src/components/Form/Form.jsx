import React from 'react'


export default function Form({inputText,setInputText,todos,setTodos,setFilter}) {


    const inputTextHandler =(e)=>{
        // console.log(e.target.value)
        setInputText(e.target.value)
    }

    const submitTodoHandler= (e)=>{
        e.preventDefault();

        setTodos([
            ...todos, {text :inputText, completed:false, id: Math.random()}
        ]);
        setInputText("");
    }

    const filterHandler = (e)=>{
        setFilter(e.target.value)
    }

    return (
            <form>
                <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText}/>
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={filterHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                
            </form>
    )
}
