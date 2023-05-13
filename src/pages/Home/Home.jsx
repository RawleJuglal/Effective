import './Home.css'
import React from 'react'
import { useLoaderData, defer, Await } from 'react-router-dom';
import { logoutUser} from '../../hooks/firebase';
import { BsDoorClosedFill } from 'react-icons/bs'
import turtleImg from '../../assets/turtle.jpg'
import TodoInput from '../../components/Todo/TodoInput'
import TodoList from '../../components/Todo/TodoList'

const loader = async ()=>{
  return null
}

const Home = ()=> {
  const dataPromise = useLoaderData()
  return (
    <div className='--home-page-container page-container'>
      <header className='--home-header'>
        <nav className='--home-nav flex'>
          <a className='--home-nav-door' onClick={logoutUser}><BsDoorClosedFill/></a>
        </nav>
      </header>
      <main>
        <section className='flex flex-center'>
          <img className='--home-turtle-img' src={turtleImg} alt={`image of turtle with toolbelt`}  />    
        </section>
        <TodoInput />
        <TodoList />       
      </main>
    </div>
  )
}

export {loader, Home}
