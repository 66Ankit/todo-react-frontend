import React from 'react'

export default function TodoItem({setTodos, todos ,item}) {

    const deleteHandler = ()=>{
        setTodos(todos.filter(el => el.id!==item.id))
    }

    const completeHandler = ()=>{
        setTodos(todos.map((el)=>{

            if(el.id === item.id)
            {
                return {
                    ...item, completed : !item.completed
                }
            }
            return el;
        }))
    }

    return (
        <div>
            <div className="todo">
                <li className={`todo-item ${item.completed ? "completed" : ''}`}>{item.text}</li>
                    <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
                    <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
            </div>
        </div>
    )
}
