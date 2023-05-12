import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import { Error } from './components/Error/Error'
import {Login, loader as loginLoader, action as loginAction} from './pages/Login/Login'
import {Home, loader as homeLoader } from './pages/Home/Home.jsx'
import {SignUp, loader as signupLoader, action as signupAction} from './pages/SignUp/SignUp'
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>} errorElement={<Error />}>
    <Route 
      index 
      element={<Login />} 
      loader={loginLoader} 
      action={loginAction}
    />
    <Route 
      path='signup' 
      element={<SignUp />} 
      loader={signupLoader}
      action={signupAction}/>
      <Route path='todo' element={<Home />} loader={homeLoader} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
