import React from 'react'
import { Link, Form, useLoaderData, useActionData, redirect } from 'react-router-dom'

const loader = ()=>{
    return null
}

const Login = ()=>{
    const errors = useActionData()
    return(
        <div className='--login-page-container'>
            <h1>Login Page</h1>
            <Form method='POST' replace>
                <input type="text" name="email" placeholder='email'/>
                {errors?.email && <span>{errors.email}</span>}
                <input type="text" name="password" placeholder='password'/>
                {errors?.password && <span>{errors.password}</span>}
                <button type="submit">Login in</button>
            </Form>
            <p>If you don't have an account<Link to='signup'>Sign up here</Link></p>
        </div>
    )
}

export {loader, Login}