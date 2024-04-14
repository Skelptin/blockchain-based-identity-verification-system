import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../../../constants/constants';

const GetUser = () => {
    const navigate = useNavigate();
    const [userAddress, setUserAddress] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        try {
            const user = await contract.getUserInfo(userAddress);
            setUserInfo(user);
            setError(null);

            const pinataImageUrl = `https://gateway.pinata.cloud/ipfs/${user.image}`;
            setImageUrl(pinataImageUrl);
        } catch (error) {
            console.error('Error fetching user info:', error);
            setUserInfo(null);
            setImageUrl('');
            setError('Error fetching user info');
        }
    };

    return (
        <div className='bg-gradient-to-b from-black to-gray-950 min-h-screen'>
        <div className='max-w-2xl mx-auto p-5'>
            <div className='flex bg-gray-900 rounded-2xl mt-10 flex-col'>
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
                {userInfo && (
                    <div className="mt-5">
                        <h2 className="text-lg font-semibold">User Info:</h2>
                        <p>Name: {userInfo.name}</p>
                        <p>Date of Birth: {userInfo.dateOfBirth.toString()}</p>
                        <p>Address: {userInfo.addr}</p>
                        {imageUrl ? (
                            <img src={imageUrl} alt="User" className="max-w-full mt-2" onError={() => setImageUrl('')} />
                        ) : (
                            <p className="text-red-500 mt-2">Error loading image</p>
                        )}
                    </div>
                )}
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>


        </div>
        </div>
    );
};

export default GetUser;
