import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../../../constants/constants';

const CreateUser = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');


  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  console.log('key', )

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      console.error('Please select an image.');
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

        await contract.createUser(name, dobEpochTime, address, resData.IpfsHash);
        console.log('Form data sent to smart contract');
      } catch (error) {
        console.error('Error sending form data to smart contract:', error);
      }
    } else {
      console.error('MetaMask is not installed');
    }
  };

  return (
    <div className='max-w-2xl mx-auto p-5'>
      <div className='flex bg-gray-900 rounded-2xl mt-10 flex-col'>
        <div className='mt-10 text-3xl'>
          <h1 className='font-semibold'>Create User</h1>
        </div>
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
      </div>
    </div>
  );
};

export default CreateUser;
