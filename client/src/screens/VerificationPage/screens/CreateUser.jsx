import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../../../constants/constants';
import { useSelector } from 'react-redux';

const CreateUser = () => {
  const navigate = useNavigate();
  const { address } = useSelector((state) => state.walletAddress);
  const [formData, setFormData] = useState({
    image: [],
    name: '',
    dob: '',
    userAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      try {
        const file = formData.image[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {
          const imageData = reader.result.split(',')[1];
          await contract.createUser(formData.name, formData.dob, address, imageData);
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
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className='bg-slate-700 rounded-lg h-12 w-full'
            placeholder='Enter Name'
          />
          <label>Date of Birth</label>
          <input
            name='dob'
            value={formData.dob}
            onChange={handleInputChange}
            className='bg-slate-700 rounded-lg h-12  w-full'
            placeholder='Enter Your DOB'
          />
          <label>Address</label>
          <input
            name='userAddress'
            value={formData.userAddress}
            onChange={handleInputChange}
            className='bg-slate-700 rounded-lg h-12  w-full'
            placeholder='Enter your Address'
          />
          <label>Image</label>
          <input
            onChange={handleImageChange}
            className='p-3 border border-gray-300 rounded w-full'
            type='file'
            id='images'
            accept='image/*'
          />
          <div className='flex gap-5 justify-center'>
            <button className='bg-red-500 hover:opacity-85 p-2 rounded-3xl' type='button' onClick={() => navigate(-1)}>
              Back
            </button>
            <button className='border-white bg-blue-500 hover:opacity-85 border p-2 rounded-3xl' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
