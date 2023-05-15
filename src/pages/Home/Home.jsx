import './Home.css'
import React, { useState, useEffect, useRef } from 'react'
import Confetti from 'react-confetti'
import { useLoaderData, useNavigate, defer, Await } from 'react-router-dom';
import { onValue } from '@firebase/database';
import { logoutUser, todoListInDB} from '../../hooks/firebase';
import { BsDoorClosedFill } from 'react-icons/bs'
import PencilLogo from '../../assets/PencilLogo.png'
import TodoInput from '../../components/Todo/TodoInput'
import TodoList from '../../components/Todo/TodoList'

const loader = ()=>{
 return null
}

const Home = ()=> {
    const dataPromise = useLoaderData()
    const navigate = useNavigate()
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [list, setList] = useState(null)
    const confetiRef = useRef(null);

    useEffect(()=>{
        setHeight(confetiRef.current.clientHeight);
        setWidth(confetiRef.current.clientWidth);

        onValue(todoListInDB, snapshot =>{
            if(snapshot.exists()){
                let dataArr = Object.entries(snapshot.val())
                setList(dataArr)
            } else {
                setList([])
            }
        })
    }, [])

    function toggleConfetti(){
      document.getElementById('home-confetti').classList.toggle('hidden')
      setTimeout(()=>{
        document.getElementById('home-confetti').classList.toggle('hidden')
      }, 3000)
    }

  return (
      <div className="confettie-wrap" ref={confetiRef}>
        <Confetti id='home-confetti' className='--home-confetti hidden' numberOfPieces={150} width={width} height={height} />
        <div className='--home-page-container page-container'>
          <header className='--home-header'>
            <nav className='--home-nav flex'>
              <a className='--home-nav-door' onClick={()=>{
                logoutUser
                navigate('/')
                }}>
                  <BsDoorClosedFill/>
                    <span>Sign Out</span>
              </a>
            </nav>
          </header>
          <main>
            <section className='flex flex-center'>
              <img className='--home-turtle-img' src={PencilLogo} alt={`image of pencil logo`}  />    
            </section>
            <TodoInput />
            <TodoList explode={toggleConfetti} todo={list} /> 
                  
          </main>
        </div>
    </div>
  )
}

export {loader, Home}
