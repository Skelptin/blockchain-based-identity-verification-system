import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../constants/constants';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const UserDetail = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userAddress = await window.ethereum.request({ method: 'eth_requestAccounts' });

                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(contractAddress, contractABI, signer);

                const user = await contract.users(userAddress);
                console.log(user)
                setUserInfo(user);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user info:', error);
                setError('Failed to fetch user information');
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, [userAddress]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {error ? (
                        <Snackbar open={!!error} autoHideDuration={6000}>
                            <MuiAlert severity="error">{error}</MuiAlert>
                        </Snackbar>
                    ) : (
                        <div>
                            <h2>User Details</h2>
                            <p>Name: {userInfo.name}</p>
                            <p>Date of Birth: {new Date(userInfo.dateOfBirth * 1000).toLocaleDateString()}</p>
                            <p>Address: {userInfo.addr}</p>

                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default UserDetail;
