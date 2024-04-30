import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../../../constants/constants';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const IncomingRequests = () => {
    const navigate = useNavigate();
    const [requests, setRequests] = useState([]);
    const [customAccessTime, setCustomAccessTime] = useState(0); // Default access time limit in days
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        const fetchRequests = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractABI, signer);

            try {
                const res = await contract.getIncomingRequests();
                setRequests(res);
            } catch (error) {
                console.error('Error fetching incoming requests:', error);
            }
        };

        fetchRequests();
    }, []);

    const handleGrantAccess = async (requester) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        try {
            await contract.grantAccess(requester, customAccessTime * 24 * 60 * 60);
            console.log('Access granted to user:', requester);

            const updatedRequests = requests.filter(request => request.requester !== requester);
            setRequests(updatedRequests);

            // Show success snackbar
            setSnackbarSeverity('success');
            setSnackbarMessage('Access granted successfully!');
            setSnackbarOpen(true);
        } catch (error) {
            console.error('Error granting access:', error);

            // Show error snackbar
            setSnackbarSeverity('error');
            setSnackbarMessage('Failed to grant access. Please try again.');
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div className='bg-gradient-to-b from-black to-zinc-900 min-h-screen'>
            <div className='max-w-2xl mx-auto p-5'>
                <div className='flex bg-zinc-900 rounded-2xl mt-10 flex-col'>
                    <div className='mt-10 text-3xl'>
                        <h1 className='font-semibold'>Incoming Requests</h1>
                    </div>

                    <h2 className='m-5 text-left text-lg'>Requests:</h2>

                    {requests.length > 0 ? (
                        <ul className='m-3'>
                            {requests.map((request, index) => (
                                <li key={index} className='flex justify-between items-center border-b border-gray-600 py-2'>
                                    <span>{request.requester}</span>
                                    <div className='flex items-center'>
                                        <input
                                            type='number'
                                            min='1'
                                            placeholder='Enter Time'
                                            value={customAccessTime}
                                            onChange={(e) => setCustomAccessTime(e.target.value)}
                                            className='bg-slate-700 rounded-lg h-8 w-20 mr-2'
                                        />
                                        <button
                                            onClick={() => handleGrantAccess(request.requester)}
                                            className='border-white bg-blue-500 hover:opacity-85 border p-2 rounded-3xl flex-shrink-0'
                                        >
                                            Grant
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className='text-gray-400 text-center'>No pending requests</p>
                    )}

                    <div className='flex gap-5 m-3 justify-center'>
                        <button className='bg-red-500 hover:opacity-85 p-2 rounded-3xl' type='button' onClick={() => navigate(-1)}>Back</button>
                    </div>
                </div>
            </div>

            {/* Snackbar for success or error messages */}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </div>
    );
};

export default IncomingRequests;
