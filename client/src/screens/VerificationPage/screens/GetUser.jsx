import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { contractAddress, contractABI } from '../../../constants/constants';

const GetUser = () => {


    return (
        <div className='max-w-2xl mx-auto p-5'>
            <div className='flex bg-gray-900 rounded-2xl mt-10 flex-col'>
                <div className='mt-10 text-3xl'>
                    <h1 className='font-semibold'>Access Request</h1>
                </div>
                <form className='flex flex-col text-left gap-4 mt-10 p-3'>
                    <label>User Address</label>
                    <input
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
    );
};

export default GetUser;
