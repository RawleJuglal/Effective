import './Home.css'
import { logoutUser } from '../../hooks/firebase';
import { BsDoorClosedFill } from 'react-icons/bs'

const loader = (auth, database)=>{
  return null;
}

const Home = ()=> {

  return (
    <div className='--home-page-container'>
      <nav className='--home-nav'>
        <a onClick={logoutUser}><BsDoorClosedFill/></a>
      </nav>
      <h1>Reached the homepage</h1>
    </div>
  )
}

export {loader, Home}
