import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../screens/HomePage/Home'

import About from '../screens/About/About'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import VerificationPage from '../screens/VerificationPage/VerificationPage'
import CreateUser from '../screens/VerificationPage/screens/CreateUser'

import AccessRequest from '../screens/VerificationPage/screens/AccessRequest'
import PrivateRoute from '../components/PrivateRoutes'
import VerifyUsers from '../screens/VerificationPage/screens/VerifyUsers'
import GetUser from '../screens/VerificationPage/screens/GetUser'
import IncomingRequests from '../screens/VerificationPage/screens/IncomingRequests'

const routes = () => {
    return (

        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            {/* <Route exact path='/login' element={<Login />}></Route> */}
            <Route exact path='/signup' element></Route>
            <Route exact path='/marketplace' element></Route>
            <Route exact path='/collection' element></Route>
            <Route exact path='/community' element></Route>

            <Route exact path='/About-us' element={<About />}></Route>

            {/* Private Routes  */}
            <Route element={<PrivateRoute />} >

                <Route exact path='/verification-page' element={<VerificationPage />} />
                <Route exact path='/verification-page/create-user' element={<CreateUser />} />
                <Route exact path='/verification-page/verify-user' element={<VerifyUsers />} />
                <Route exact path='/verification-page/access-request' element={<AccessRequest />} />
                <Route exact path='/verification-page/get-user' element={<GetUser />} />
                <Route exact path='/verification-page/incoming-requests' element={<IncomingRequests />} />

            </Route>


            <Route exact path='*' element={<ErrorPage />}></Route>
        </Routes>

    )
}

export default routes