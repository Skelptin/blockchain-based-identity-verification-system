import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { Drawer } from "@mui/material";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Navbar = () => {


    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };


    const navlinks = [
        { name: "Marketplace", link: "/marketplace" },
        { name: "Community", link: "/community" },
        { name: "About Us", link: "/create" },
    ]

    const requestAccount = async () => {


        if (window.ethereum) {
            console.log('Detected')
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                })
                console.log(accounts)
            } catch (err) {
                console.log(err)
            }
        } else {
            console.log('Not ')
        }
    }



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


                    <div className="sm:hidden">
                        <button onClick={toggleDrawer}>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>

                        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
                            <div className='p-4 grid items-center'>
                                <div className='flex items-center justify-between w-40 '>

                                    <MdKeyboardDoubleArrowRight onClick={() => setOpenDrawer(false)} className='pointer' />
                                    {/* <Link to="/profile">
                  {currentUser ? (
                    <img src={currentUser.avatar} alt="profile" width="35px" className="rounded-3xl h-7 w-7 object-cover" />
                  ) : (
                    <Link to={'/signin'} variant='outline' className='rounded-xl'>
                      Sign In
                    </Link>
                  )}
                </Link> */}

                                </div>
                                <ul className='flex flex-col gap-2 mt-5'>
                                    {
                                        navlinks.map(({ name, link }) => (
                                            <li key={link}>
                                                <Link to={link}>{name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Drawer>

                    </div>
                </div>
            </div>


        </nav>
    )
}

export default Navbar