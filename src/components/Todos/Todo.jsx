import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

export default function Todo({setTodos,todos,filteredTodo}) {



    return (
        <div className="todo-container">
            <ul className="todo-list">
              {filteredTodo.map((item)=>(<TodoItem setTodos={setTodos} todos={todos} item={item} key={item.id}/>))}
                
            </ul>
            
        </div>
    )
}
