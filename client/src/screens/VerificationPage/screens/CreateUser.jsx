import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { setLoggedInUser } from '../../../store/user/userSlice';
import { contractAddress, contractABI } from '../../../constants/constants';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import UserDetail from '../../../components/UserDetail';

const CreateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);


  const [selectedFile, setSelectedFile] = useState(null);
  const [metamaskAccount, setMetamaskAccount] = useState(null);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');


  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const add = window.ethereum.request({ method: 'eth_requestAccounts' });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError('Please select an image.');
      return;
    }

    const sevenYearsAgo = new Date();
    sevenYearsAgo.setFullYear(sevenYearsAgo.getFullYear() - 7);
    const dobDate = new Date(dob);
    if (dobDate > sevenYearsAgo) {
      setError('Date of Birth should be at least 7 years ago.');
      return;
    }

    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        // Upload image to Pinata IPFS
        const formData = new FormData();
        formData.append("file", selectedFile);
        const metadata = JSON.stringify({
          name: "UserImage",
        });
        formData.append("pinataMetadata", metadata);

        const options = JSON.stringify({
          cidVersion: 0,
        });
        formData.append("pinataOptions", options);

        const res = await fetch(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
            },
            body: formData,
          }
        );
        const resData = await res.json();
        console.log('IPFS hash:', resData.IpfsHash);

        const dobEpochTime = new Date(dob).getTime() / 1000;

        const response = await contract.createUser(name, dobEpochTime, address, resData.IpfsHash);
        setSnackbarMessage(response.message)
        setSuccess(true);
        setError('');
        setSnackbarSeverity('success');
        setSnackbarMessage('User created successfully!');
        setOpenSnackbar(true);

      } catch (error) {
        console.error('Error sending form data to smart contract:', error);

        setSuccess(false);
        setSnackbarSeverity('error');
        setSnackbarMessage('User Already Exists');
        setOpenSnackbar(true);
      }
    } else {
      console.error('MetaMask is not installed');
      setError('MetaMask is not installed');
      setSuccess(false);
      setSnackbarSeverity('error');
      setSnackbarMessage('MetaMask is not installed');
      setOpenSnackbar(true);
    }
  };


  const formatDate = (epochTime) => {
    const date = new Date(epochTime * 1000);
    return date.toLocaleDateString();
  }


  useEffect(() => {
    const fetchLoggedInUserInfo = async () => {
      if (window.ethereum) {
        try {
          const res = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const currentAccount = res[0];
          setMetamaskAccount(currentAccount);
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);
          const userInfo = await contract.users(currentAccount);
          dispatch(setLoggedInUser(userInfo));
        } catch (error) {
          console.error('Error fetching logged-in user info:', error);
        }
      }
    };

    fetchLoggedInUserInfo();


    const handleAccountsChanged = (accounts) => {
      if (accounts.length > 0) {
        setMetamaskAccount(accounts[0]);
        window.location.reload();
      }
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }


    return () => {
      if (window.ethereum) {
        window.ethereum.off('accountsChanged', handleAccountsChanged);
      }
    };
  }, [dispatch]);

  return (
    <div className='bg-gradient-to-b from-black to-zinc-900 min-h-screen'>
      {console.log(loggedInUser)}
      {


        loggedInUser && loggedInUser.name === "" ? (
          <div className='max-w-2xl mx-auto p-5'>
            <div className='flex bg-zinc-900 rounded-2xl mt-10 flex-col'>
              <div className='mt-10 text-3xl'>
                <h1 className='font-semibold'>Create User</h1>
              </div >
              <form onSubmit={handleFormSubmit} className='flex flex-col text-left gap-4 mt-10 p-3'>
                <label>Name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='bg-slate-700 rounded-lg h-12 w-full'
                  placeholder='Enter Name'
                />
                <label>Date of Birth</label>
                <input
                  required
                  type='date'
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className='bg-slate-700 rounded-lg h-12  w-full'
                  placeholder='Enter Your DOB'
                />
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <label>Address</label>
                <input
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className='bg-slate-700 rounded-lg h-12  w-full'
                  placeholder='Enter your Address'
                />
                <label>Image</label>
                <input
                  required
                  onChange={changeHandler}
                  className='p-3 border border-gray-300 rounded w-full'
                  type='file'
                  id='images'
                  accept='image/*'
                />

                <div className='flex gap-5 justify-center'>
                  <button className='bg-red-500 hover:opacity-85 p-2 rounded-3xl' type='button' onClick={() => navigate(-1)}>Back</button>
                  <button className='border-white bg-blue-500 hover:opacity-85 border p-2 rounded-3xl' type='submit'>Submit</button>
                </div>
              </form>
            </div >
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
              <MuiAlert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                {snackbarMessage}
              </MuiAlert>
            </Snackbar>
          </div >

        ) : (<div className='max-w-2xl mx-auto p-5'>
          <div className='flex bg-zinc-900 rounded-2xl mt-10 flex-col'>
            <div className='mt-10 text-3xl'>
              <h1 className='font-semibold'>Your Account</h1>
            </div >

            <div className='self-center'>
              <img src={`https://gateway.pinata.cloud/ipfs/${loggedInUser.image}`} alt="User" className="max-w-full self-center mt-5 w-[200px] h-[300px]" />
            </div>
            <div className='flex text-left gap-4 mt-10 p-3'>
              <div className=''>
                <div className='flex gap-2'>
                  <label className='font-semibold'>Name: </label> {loggedInUser.name}
                </div>
                <div className='flex gap-2 mt-4'>
                  <label className='font-semibold'>Date of Birth:</label> {formatDate(loggedInUser.dateOfBirth)}
                </div>
                <div className='flex gap-2 mt-4'>
                  <label className='font-semibold'>Address:</label>
                  {loggedInUser.addr}
                </div>
              </div>
            </div>
            <div className='flex gap-5 m-2 justify-center'>
              <button className='bg-red-500 hover:opacity-85 p-2 rounded-3xl' type='button' onClick={() => navigate(-1)}>Back</button>

            </div>
          </div >

        </div >

        )


      }

    </div >
  );
};

export default CreateUser;
