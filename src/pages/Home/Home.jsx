import './Home.css'

const loader = (auth, database)=>{
  console.log(database)
  return null;
}

const Home = ()=> {

  return (
    <div className='--home-page-container'>
      <h1>Reached the homepage</h1>
    </div>
  )
}

export {loader, Home}
