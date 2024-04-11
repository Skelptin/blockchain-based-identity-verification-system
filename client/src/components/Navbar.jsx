import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { Drawer } from "@mui/material";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { ethers } from 'ethers';
import Sidebar from './Sidebar';

const Navbar = () => {


    const [address, setAddress] = useState('')

    const navlinks = [
        { name: "Marketplace", link: "/marketplace" },
        { name: "Community", link: "/community" },
        { name: "About Us", link: "/create" },
    ]

    const requestAccount = async () => {


        if (window.ethereum) {
            console.log('Detected')
            try {
                const account = await window.ethereum.request({
                    method: "eth_requestAccounts"
                })
                setAddress(account)

            } catch (err) {
                console.log(err)
            }
        } else {
            console.log('Not ')
        }
    }

    // const connectWallet = async () => {
    //     if (typeof window.ethereum !== 'undefined') {
    //         await requestAccount();
    //         provider = new ethers.BrowserProvider(window.ethereum)
    //         console.log(provider);
    //     }
    // };




    return (
        <nav className=''>
            <div className='leftNav flex justify-between sm:justify-around '>
                <div>
                    LOGO
                </div>

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

                            <div>
                                {/* <button onClick={connectWallet}>dada</button> */}

                                <Button
                                    onClick={() => requestAccount()}
                                    sx={{
                                        background: "#2F80ED",
                                        color: 'white',
                                        borderRadius: '5rem',
                                        marginLeft: '2rem',
                                        width: '10rem',
                                        fontSize: '0.8rem',
                                        '&:hover': {
                                            backgroundColor: '#2670d4'
                                        }
                                    }}
                                >
                                    Connect Wallet
                                </Button>
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