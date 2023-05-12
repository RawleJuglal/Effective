import React from 'react'
import { Link, Form, useLoaderData, useActionData, redirect } from 'react-router-dom'
import { loginUser } from '../../hooks/firebase'

const loader = ()=>{
    return null
}

const action = async({request})=>{
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    const errors = {};

    if (typeof email !== "string" || !email.includes("@")) {
        errors.email =
            "That doesn't look like an email address";
    }
    
    if (typeof password !== "string" || password.length < 6) {
        errors.password = "Password must be > 6 characters";
    }
    
    // return data if we have errors
    if (Object.keys(errors).length) {
        return errors;
    }

    try{
        await loginUser(email, password)
        return redirect('/todo')
    } catch(err){
        return err
    }
}

const Login = ()=>{
    const errors = useActionData()
    return(
        <div className='--login-page-container'>
            <h1>Login Page</h1>
            <Form method='post' replace>
                <input type="text" name="email" placeholder='email'/>
                {errors?.email && <span>{errors.email}</span>}
                <input type="text" name="password" placeholder='password'/>
                {errors?.password && <span>{errors.password}</span>}
                <button type="submit">Login in</button>
            </Form>
            <p>If you don't have an account<Link to='signup'> Sign up here</Link></p>
        </div>
    )
}

export {loader, action, Login}