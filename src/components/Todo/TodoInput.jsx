import './Todo.css'
import React, { useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsPlusLg } from 'react-icons/bs';
import { handleAddItemToList } from '../../hooks/firebase'

const TodoInput = ()=>{
    const [item, setItem] = useState('')

    const clearInput = ()=>{
        const inputEl = document.getElementById('todo-item-input-ctrl')
        inputEl.value = ''
        setItem(inputEl.value)
    }

    const handleChange = (event)=>{
        setItem(event.target.value)
    }

    return(
        <section id="todo-input" className='--todo-input-container flex flex-column flex-align-center'>
            <InputGroup className="mb-3">
                <Form.Control
                id="todo-item-input-ctrl"
                placeholder="✍️ Add Item"
                aria-label="Add an item"
                required
                type="text"
                onChange={(event)=>handleChange(event)}
                />
                <InputGroup.Text id="todo-item-input" ><BsPlusLg id='todo-submit' onClick={(event)=>{
                handleAddItemToList(item)
                clearInput()
            }}/></InputGroup.Text>
            </InputGroup>
        </section>
    )
}

export default TodoInput;
