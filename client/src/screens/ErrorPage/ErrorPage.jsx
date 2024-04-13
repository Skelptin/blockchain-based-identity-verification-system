import React from 'react'
import { MdError } from "react-icons/md";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <MdError size='100px' />
            <p>
                Eror 404: Page not found!
            </p>
            <Link to={'/'} className='mt-4 text-blue-500'>
                Redirect to Home Page
            </Link>
        </div>
    )
}

export default ErrorPage