import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const active = localStorage.getItem('thirdweb:active-wallet-id')
    const { address } = useSelector((state) => state.walletAddress);
    return active ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute

