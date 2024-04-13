import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar';

import { ethers } from 'ethers';
import { createThirdwebClient, } from "thirdweb";
import { darkTheme, ConnectButton } from "thirdweb/react";
import { createWallet, walletConnect } from "thirdweb/wallets";

import { useDispatch } from 'react-redux';
import { setAddress } from '../store/wallet/walletSlice';


import './Navbar.css'

const client = createThirdwebClient({
    clientId: "85132d307848b9042fd6ed99d417915a",
});

const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    walletConnect(),
];



const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const navlinks = [
        { name: "Marketplace", link: "/marketplace" },
        { name: "Community", link: "/community" },
        { name: "About Us", link: "/about-us" },
    ]

    const requestAccount = async () => {

        if (window.ethereum) {
            console.log('Detected')
            try {
                const account = await window.ethereum.request({
                    method: "eth_requestAccounts"
                })
                dispatch(setAddress(account));
                navigate('/verification-page')
            } catch (err) {
                console.log(err)
            }
        } else {
            console.log('Not ')
        }
    }

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            await requestAccount();
            provider = new ethers.web(window.ethereum)
            console.log(provider);
        }
    };


    return (
        <nav className=''>
            <div className='leftNav flex justify-between items-center p-4 sm:justify-between '>
                <Link to={'/'}>
                    LOGO
                </Link>

                <div className='rightNav flex items-center justify-between '>
                    <div className="hidden sm:block">
                        <div className='flex items-center justify-between '>
                            <div className='flex'>
                                <ul className='flex gap-10 md:text-sm'>
                                    {
                                        navlinks.map(({ name, link }) => (
                                            <li key={link}>
                                                <Link to={link}>{name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>

                            </div>

                            <div className='ml-5'>
                           
                                <ConnectButton

                                    onConnect={() => requestAccount()}
                                    className='bg-red-800 text-white'
                                    client={client}
                                    wallets={wallets}
                                    theme={darkTheme({
                                        colors: {
                                            modalBg: "#000000",
                                            dropdownBg: "#000000",
                                        },
                                    })}
                                    connectModal={{ size: "wide" }}

                                />

                            </div>
                        </div>
                    </div>

                    <div className='sm:hidden'>
                        <Sidebar />
                    </div>
                </div>
            </div>


        </nav>
    )
}

export default Navbar