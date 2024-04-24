import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosCreate } from "react-icons/io";
import { GrValidate } from "react-icons/gr";
import { MdOutlinePresentToAll } from "react-icons/md";
import { MdOutlineGetApp } from "react-icons/md";
import { HiOutlineQueueList } from "react-icons/hi2";

const Cards = () => {
    return (
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center p-10'>
            <Link to={'/verification-page/create-user'} className='hover:opacity-80 flex justify-center'>
                <div className="bg-gray-800 text-white rounded-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="flex justify-center">
                        <IoIosCreate className='text-3xl' />
                    </div>
                    <h2 className="text-2xl font-bold mt-2">Create Account / Your Account</h2>
                    <p className="text-sm mt-2">
                        Create your User ID and get started with our platform.
                        Whether you're a new user or need to establish a fresh account,
                        this is where your journey begins.
                    </p>
                </div>
            </Link>

            <Link to={'/verification-page/verify-user'} className='hover:opacity-80 flex justify-center'>
                <div className='bg-gray-800 text-white rounded-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out'>
                    <div className="flex justify-center">
                        <GrValidate className='text-3xl' />
                    </div>
                    <h2 className="text-2xl font-bold mt-2">Designate Validator</h2>
                    <p className="text-sm mt-2">
                        Ensure the authenticity of your account and verify your identity securely.
                        Validate your user status to access all the features and
                        benefits our platform offers.
                    </p>
                </div>
            </Link>


            <Link to={'/verification-page/access-request'} className='hover:opacity-80 flex justify-center'>
                <div className='bg-gray-800 text-white rounded-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out'>
                    <div className="flex justify-center">
                        <MdOutlinePresentToAll className='text-3xl' />
                    </div>
                    <h2 className="text-2xl font-bold mt-2">Send Access Request</h2>
                    <p className="text-sm mt-2">
                        Request access to specific features or functionalities within our blockchain identity system.
                        Seamlessly send access requests for tailored identity verification processes,
                        ensuring secure and efficient user interactions.
                    </p>
                </div>
            </Link>

            <Link to={'/verification-page/incoming-requests'} className='hover:opacity-80 flex justify-center'>
                <div className='bg-gray-800 text-white rounded-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out'>
                    <div className="flex justify-center">
                        <HiOutlineQueueList className='text-4xl' />
                    </div>
                    <h2 className="text-2xl font-bold">Incoming Requests</h2>
                    <p className="text-sm mt-2">Manage incoming access requests efficiently within our blockchain identity framework. Review and respond to requests to maintain control over data access.</p>
                </div>
            </Link>

            <Link to={'/verification-page/get-user'} className='hover:opacity-80 flex justify-center'>
                <div className='bg-gray-800 text-white rounded-lg p-4 transform hover:scale-105 transition duration-300 ease-in-out'>
                    <div className="flex justify-center">
                        <MdOutlineGetApp className='text-3xl' />
                    </div>
                    <h2 className="text-2xl font-bold">Get User Info</h2>
                    <p className="text-sm mt-2">Retrieve comprehensive user information securely from our blockchain network. Gain insights into user profiles to facilitate seamless interactions.</p>
                </div>
            </Link>



        </div>
    );
};

export default Cards;
