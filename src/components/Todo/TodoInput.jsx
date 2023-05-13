import './Todo.css'
import React, { useState} from 'react'
import { handleAddItemToList } from '../../hooks/firebase'

const TodoInput = ()=>{
    const [item, setItem] = useState('')
    const clearInput = ()=>{
        const inputEl = document.getElementById('todo-item-input')
        inputEl.value = ''
    }

    const handleChange = (event)=>{
        setItem(event.target.value)
    }

    return(
        <section id="todo-input" className='--todo-input-container flex flex-column flex-align-center'>
            <input type="text" id="todo-item-input" className="--todo-item-input XXpt" placeholder="Write something to do" onChange={(event) => handleChange(event)}/>
            <button id="add-button" className="btn addToList-btn XXpt bold" onClick={(event)=>{
                handleAddItemToList(item)
                clearInput()
            }}>Add to List</button>
        </section>
    )
}

export default TodoInput;
