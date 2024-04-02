import React from 'react';

import { Button } from '@mui/material';

import HomeAnimation from '../../components/HomeAnimation';
// import LunchBreak from '../../assets/lunchbreak.svg';
import './Home.css'

const Home = () => {
    return (
        <div className=" text-white">


            <section>
                <div className='flex flex-wrap' style={{ marginTop: '7rem' }}>

                    <div className='leftSection w-1/2'>
                        <div className='flex desc' >
                            <h1 className='text-5xl sm:text-9xl text-left font-black' >
                                Who Are <br />You?
                            </h1>
                        </div>
                        <div className='box'></div>
                        <div className='text-left'>
                            <p className='flex flex-col gap-2 text-sm sm:text-lg   '>
                                <p>Insecure about who has access to your data</p>
                                <p>Want to show only the relevant data</p>
                                <p>Revolutionizing Trust: Introducing Our <span className='font-semibold'>Blockchain Verification System</span></p>

                            </p>

                        </div>

                        <div className='flex gap-4 mt-10'>
                            <Button
                                sx={{
                                    background: "#2F80ED",
                                    color: 'white',
                                    borderRadius: '5rem',
                                    width: { xs: '6rem', md: '8rem' },
                                    '&:hover': {
                                        backgroundColor: '#2670d4'
                                    }
                                }}
                                className='bg-blue-600 rounded-full p-3 hover:opacity-90'
                            >
                                Explore
                            </Button>

                            <Button
                                sx={{
                                    border: 'solid 1px',
                                    background: 'transparent',
                                    color: 'white',
                                    borderRadius: '5rem',
                                    width: { xs: '5rem', md: '8rem' },
                                }}
                            >
                                Create
                            </Button>

                        </div>

                        <div className='flex mt-10 gap-5 '>
                            <span>
                                <p className=''>30B+</p>
                                Data Breaches
                            </span>

                            <span>
                                <p className=''>5M+</p>
                                Identity Theft Cases
                            </span>

                            <span>
                                <p className=''>$10B+</p>
                                Cybercrime Losses
                            </span>

                        </div>

                    </div>

                    <div className='rigthSection'>
                        <div className='mt-10 sm:mt-15 '>
                            <div className='glow'></div>
                            <div className='flex justify-end '>

                                <div className='card bg-opacity-40 font-bold'>
                                    Highly Secure

                                </div>
                                <div className='relative top-20 flex card bg-opacity-40 font-bold'>
                                    Robust
                                </div>

                            </div>
                            {/*                             
                            <div className='square' style={{ marginTop: '-1rem', marginLeft: '3rem' }}>

                            </div>
                            <div className='square2' style={{ marginLeft: '11rem', marginTop: '3rem' }}>

                            </div> */}
                            <div className=''>
                                <HomeAnimation />
                            </div>


                            {/* <div className='glow2'></div> */}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
