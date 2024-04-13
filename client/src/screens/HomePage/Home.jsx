import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeAnimation from '../../components/HomeAnimation';
import Alert from '../../components/Alert';
import { useSelector } from 'react-redux';
import './Home.css';

const Home = () => {

    const { activeWallet } = useSelector((state) => state.walletAddress)
    console.log(activeWallet)
    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleExplore = () => {
        if (!activeWallet) {

            setShowSnackbar(true);
        }
    };

    return (
        <div className="text-white p-5">

            <section>
                <div className='flex flex-wrap flex-col-reverse sm:flex-nowrap sm:flex-row mt-[6%]' >
                    <div className='leftSection w-full sm:w-1/2'>
                        <div className='flex desc' >
                            <h1 className='glo text-5xl sm:text-9xl text-left font-black' >
                                Who Are <br />You?
                            </h1>
                        </div>
                        <div className='box'></div>
                        <div className='text-left mt-5'>
                            <p className='flex flex-col gap-2 text-sm sm:text-lg text-slate-200   '>
                                <span>Insecure about who has access to your data</span>
                                <span>Want to show only the relevant data</span>
                                <span>Revolutionizing Trust: Introducing Our <span className='font-semibold'>Blockchain Verification System</span></span>
                            </p>
                        </div>
                        <div className='flex gap-4 mt-10'>
                            <Link to={showSnackbar ? '' : '/verification-page'}>
                                <Button
                                    onClick={handleExplore}
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
                            </Link>
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

                    <div className='rigthSection '>
                        <div className='mt-10 sm:mt-15 '>

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
                                <div className='glow'></div>
                                <HomeAnimation />
                            </div>


                            <div className='glow2'></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Render the Snackbar component conditionally */}
            <Alert message='Connect to wallet' active={!showSnackbar} />
        </div>
    );
}

export default Home;
