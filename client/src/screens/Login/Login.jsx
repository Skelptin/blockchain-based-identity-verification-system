import React from 'react'

import Hand from '../../assets/hand.svg'

import { Button } from '@mui/material'
import Spotify from '../../assets/spotify.svg'
import Metamask from '../../assets/metamask.svg'
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className='flex ml-20'>
                LOGO
            </div>
            <section >

                <div className='mt-20 flex flex-wrap'>
                    <div className='leftSection w-1/2'>
                        <div>
                            <img className='hand' src={Hand} />
                        </div>
                    </div>

                    <div className='rightSection w-1/2 flex items-center justify-center'>

                        <div className='login'>
                            <div className='loginBox items-center justify-center grid'>

                                <Button

                                    className='spotify' style={{ marginTop: '-6rem' }}>
                                    <img
                                        src={Spotify}
                                        className='logo'
                                    />

                                    <span className='spotifyName'> Spotify </span>
                                </Button>

                                <Button
                                    // sx={{
                                    //     backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    //     width: '15rem',
                                    //     height: '3rem',
                                    //     borderRadius: '1rem',
                                    //     '&:hover': {
                                    //         backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                    //     }

                                    // }}
                                    className='metamask' style={{ marginTop: '-8rem' }}>
                                    <img
                                        src={Metamask}
                                        className='logo'
                                    />
                                    <span className='metamaskName'> Metamask </span> </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

        </div >
    )
}

export default Login