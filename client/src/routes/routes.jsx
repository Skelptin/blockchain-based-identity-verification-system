import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../screens/HomePage/Home'
import Login from '../screens/Login/Login'

const routes = () => {
    return (

        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signup' element></Route>
            <Route exact path='/marketplace' element></Route>
            <Route exact path='/collection' element></Route>
            <Route exact path='/community' element></Route>
            <Route exact path='/create' element></Route>

        </Routes>

    )
}

export default routes