import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../../../constants/constants';

import { useSelector } from 'react-redux';

const CreateUser = () => {

  const navigate = useNavigate();

  const { address } = useSelector((state) => state.walletAddress)

  console.log(address)


  const [image, setImage] = useState([])
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [userAddress, setUserAddress] = useState('');

  const string = "dadadadada"

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      try {

        const file = image[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {
          // Convert the data URL to a base64-encoded string
          const imageData = reader.result.split(',')[1];

          // Call the smart contract function with the base64-encoded image data
          await contract.createUser(name, dob, address, imageData);
          console.log('Form data sent to smart contract');
        };
      } catch (error) {
        console.error('Error sending form data to smart contract:', error);
      }
    } else {
      console.error('MetaMask is not installed');
    }
  };



  return (
    <div className='max-w-2xl mx-auto p-5'>
      <div className='flex  bg-gray-900 rounded-2xl mt-10  flex-col'>
        <div className='mt-10 text-3xl'>
          <h1 className='font-semibold'>Create User</h1>
        </div>
        <form onSubmit={handleFormSubmit} className='flex flex-col text-left gap-4 mt-10 p-3'>

          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='bg-slate-700 rounded-lg h-12 w-full'
            placeholder='Enter Name'
          />


          <label>Date of Birth</label>
          <input
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className='bg-slate-700 rounded-lg h-12  w-full'
            placeholder='Enter Your DOB'
          />

          <label>Address</label>
          <input
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
            className='bg-slate-700 rounded-lg h-12  w-full'
            placeholder='Enter your Address'
          />

          <label>Image</label>
          <input
            onChange={(e) => setImage(e.target.files)}
            className='p-3 border border-gray-300 rounded w-full'
            type='file'
            id='images'
            accept='image/*'

          />

          <div className='flex gap-5 justify-center'>

            <button className='bg-red-500 hover:opacity-85 p-2 rounded-3xl' type='button' onClick={() => navigate(-1)}>Back</button>

            <button className='border-white bg-blue-500 hover:opacity-85 border p-2 rounded-3xl'> Submit </button>

          </div>
        </form>
      </div>
    </div>

  )
}

export default CreateUser