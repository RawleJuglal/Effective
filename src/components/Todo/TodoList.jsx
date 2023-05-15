import React, {useState, useEffect} from 'react'
import { nanoid } from 'nanoid'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsXLg } from 'react-icons/bs';
// import { onValue } from 'firebase/database'
// import {todoListInDB, handleRemoveItemFromList} from '../../hooks/firebase'

const todoList = ({explode, todo})=>{
    // const [todo, setTodo] = useState([])

    // useEffect(()=>{
    //     onValue(todoListInDB, snapshot =>{
    //         if(snapshot.exists()){
    //             let dataArr = Object.entries(snapshot.val())
    //             setTodo(dataArr)
    //         } else {
    //             setTodo([])
    //         }
    //     })
    // },[])

    function toggleCheck(e){
        if(e.target.checked){
            //Might want to call different function seperately when I fix db
            explode()
            document.getElementById(e.target.id).classList.add('strikethrough')
        } else {
            document.getElementById(e.target.id).classList.remove('strikethrough')
        }
    }


    let todoList = todo.length !== 0? todo.map(item=>{
        return <li key={nanoid()} id={item[0]} className='list-item'>
            <InputGroup className="mb-3 --todo-list-input-group">
                <InputGroup.Checkbox id={item[0]} onChange={toggleCheck} aria-label="Checkbox for following text input" />
                <Form.Text id="todo-list-item" className='--todo-list-item XXpt'>{item[1]}</Form.Text>
                <InputGroup.Text id={`${item[0]} todo-list-remove`} className='--todo-list-remove'  onClick={(event)=> handleRemoveItemFromList(event)}><BsXLg id={item[0]}/></InputGroup.Text>
            </InputGroup> </li>
    }) : (<p>No items here...yet</p>)

    return(
        <section id="todo-list-container" className='--todo-list-container'>
            <ul id="todo-list" className="todo-list">
                {todoList}
            </ul>
        </section>
    )
}

export default todoList;