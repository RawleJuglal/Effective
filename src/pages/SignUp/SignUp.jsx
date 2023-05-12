import React from 'react'
import { nanoid } from 'nanoid';
import { useLoaderData, Form, useActionData, useNavigation } from 'react-router-dom'
import { writeUserData } from '../../hooks/firebase';

const loader = async()=>{
    return null;
}

const action = async({ request })=>{
    console.log('action called')
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

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
        await writeUserData(nanoid(),'ghostprime', email, password)
        return redirect('/')
    } catch(err){
        return err
    }
    

}

const SignUp = ()=>{
    const errors = useActionData()
    const navigation = useNavigation()

    return(
        <div className='--signup-page-container'>
            <h1>Sign Up Page</h1>
            <Form method="POST" replace>
                <input type="text" name="email" placeholder='email'/>
                {errors?.email && <span>{errors.email}</span>}
                <input type="password" name="password" placeholder='password'/>
                {errors?.password && <span>{errors.password}</span>}
                <button disabled={navigation.state === 'submitting'}>
                    {navigation.state === 'submitting' ? 'Creating User...' : 'Sign Up'}
                </button>
            </Form>
        </div>
    )
}

export {loader, action, SignUp}