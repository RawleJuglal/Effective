import React, {useState, useEffect} from 'react'
import { nanoid } from 'nanoid'
import { onValue } from 'firebase/database'
import {todoListInDB, handleRemoveItemFromList} from '../../hooks/firebase'

const todoList = ({items})=>{
    const [todo, setTodo] = useState([])

    useEffect(()=>{
        onValue(todoListInDB, snapshot =>{
            if(snapshot.exists()){
                let dataArr = Object.entries(snapshot.val())
                setTodo(dataArr)
            } else {
                setTodo([])
            }
        })

    },[])




    let todoList = todo.length !== 0 ? todo.map(item=>{
        return <li key={nanoid()} id={item[0]} className='list-item' onClick={(event)=> handleRemoveItemFromList(event)}>{item[1]} </li>
    }) : (<p>No items here...yet</p>)

    return(
        <section id="todo-list-container" className='todo-list-container'>
            <ul id="todo-list" className="todo-list">
                {todoList}
            </ul>
        </section>
    )
}

export default todoList;