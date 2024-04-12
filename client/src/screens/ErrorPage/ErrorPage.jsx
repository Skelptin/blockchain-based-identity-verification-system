import React from 'react'
import { MdError } from "react-icons/md";

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <MdError size='100px'/>
            <p>
                Eror 404: Page not found!
            </p>
        </div>
    )
}

export default ErrorPage