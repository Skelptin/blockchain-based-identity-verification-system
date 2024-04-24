import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../../../constants/constants';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IoClose } from "react-icons/io5";
import Button from '@mui/material/Button';

const GetUser = () => {
    const navigate = useNavigate();
    const [userAddress, setUserAddress] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        try {
            const user = await contract.getUserInfo(userAddress);
            setUserInfo(user);
            setError(null);
            setOpenModal(true);
        } catch (error) {
            console.error('Error fetching user info:', error);
            setUserInfo(null);
            setImageUrl('');
            setError('Error fetching user info');
        }
    };

    const handleCloseModal = () => setOpenModal(false);

    const formatDate = (epochTime) => {
        const date = new Date(epochTime * 1000);
        return date.toLocaleDateString();
    }

    return (
        <div className='bg-gradient-to-b from-black to-zinc-950 min-h-screen'>
            <div className='max-w-2xl mx-auto p-5'>
                <div className='flex bg-zinc-900 rounded-2xl mt-10 flex-col'>
                    <div className='mt-10 text-3xl'>
                        <h1 className='font-semibold'>Get User Info</h1>
                    </div>
                    <form onSubmit={handleFormSubmit} className='flex flex-col text-left gap-4 mt-10 p-3'>
                        <label>User Address</label>
                        <input
                            value={userAddress}
                            onChange={(e) => setUserAddress(e.target.value)}
                            className='bg-slate-700 rounded-lg h-12 w-full'
                            placeholder='Enter User Address'
                        />
                        <div className='flex gap-5 justify-center'>
                            <button className='bg-red-500 hover:opacity-85 p-2 rounded-3xl' type='button' onClick={() => navigate(-1)}>Back</button>
                            <button className='border-white bg-blue-500 hover:opacity-85 border p-2 rounded-3xl' type='submit'>Submit</button>
                        </div>
                    </form>

                    <Modal
                        open={openModal}
                        onClose={handleCloseModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className='rounded-3xl bg-slate-800' sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '25rem',

                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,
                        }}>
                            {userInfo && (
                                <>
                                    <div className='flex justify-end'>
                                        <IoClose onClick={() => setOpenModal(false)} className='w-6 h-6 text-white cursor-pointer' />
                                    </div>
                                    <div className='flex flex-col justify-center gap-2'>
                                        <h2 id="modal-modal-title" className='font-bold text-3xl text-slate-300 text-center'>User Details</h2>

                                        <img src={`https://gateway.pinata.cloud/ipfs/${userInfo.image}`} alt="User" className="max-w-full self-center mt-2 w-[200px] h-[300px]" />

                                        <p id="modal-modal-description" className='mt-5 text-slate-300 '><span className='font-semibold'>Name:</span> {userInfo.name}</p>
                                        <p id="modal-modal-description" className=' text-slate-300 '><span className='font-semibold'>Date of Birth:</span> {formatDate(userInfo.dateOfBirth)}</p>
                                        <p id="modal-modal-description" className=' text-slate-300 '><span className='font-semibold'>Address:</span> {userInfo.addr}</p>

                                    </div>
                                </>
                            )}
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default GetUser;
