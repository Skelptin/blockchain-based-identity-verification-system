import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../../../constants/constants';

const AccessRequest = () => {
    const navigate = useNavigate();
    const [userAddress, setUserAddress] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        try {
            const res = await contract.sendAccessRequest(userAddress);
            console.log('Access request sent successfully.', res.data);
        } catch (error) {
            console.error('Error sending access request:', error);
        }
    };

    return (
        <div className='bg-gradient-to-b from-black to-gray-900 min-h-screen'>


       
        <div className='max-w-2xl mx-auto p-5 '>
            <div className='flex bg-gray-900 rounded-2xl mt-10 flex-col'>
                <div className='mt-10 text-3xl'>
                    <h1 className='font-semibold'>Access Request</h1>
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
            </div>
        </div>
        </div>
    );
};

export default AccessRequest;
