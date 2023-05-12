import React from 'react'
import { useRouteError } from 'react-router'


const Error = ()=>{
    const error = useRouteError()
    return(
        <>
            <h1>Error: {error.message}</h1>
            <p>{error.status} - {error.statusText}</p>
        </>
    )
}

export {Error}