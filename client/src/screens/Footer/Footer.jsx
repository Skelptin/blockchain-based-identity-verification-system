import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import Logo from '../../assets/Logo.svg';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const year = new Date().getFullYear()


    return (
        <div className='text-sm text-left'>
            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <div className='mt-10 p-4 flex flex-wrap md:flex-row justify-between mx-auto max-w-6xl'>

                <div className="text-white mb-6 md:mb-0">
                    <p className='font-bold mb-2'>Info</p>
                    <ul className=' text-gray-300  '>
                        <li className="mb-2">
                            <Link to="/about-us" className="hover:text-white">About Us</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="hover:text-white">Pricing</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="hover:text-white">FAQ</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="hover:text-white">Status</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="hover:text-white">Policy</Link>
                        </li>
                    </ul>
                </div>

                <div className="text-white mb-6 md:mb-0">
                    <p className='font-bold mb-2'>Getting Started</p>
                    <ul>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-300 hover:text-white">Introduction</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-300 hover:text-white">Documentation</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-300 hover:text-white">Usages</Link>
                        </li>

                    </ul>
                </div>

                <div className="text-white mb-6 md:mb-0">
                    <p className='font-bold mb-2'>Resources</p>
                    <ul>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-300 hover:text-white">API</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-300 hover:text-white">Marketplace</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-300 hover:text-white">Community</Link>
                        </li>

                    </ul>
                </div>


                <div className='md:max-w-md'>
                    <p className='font-bold mb-2'>Newsletter</p>
                    <p className='text-gray-300 mb-4'>
                        Subscribe to our Newsletter for a weekly dose of new updates, helpful tips, and exclusive offers.
                    </p>
                    <div className="flex">
                        <input
                            className='bg-zinc-800 w-full h-10 rounded-l-lg px-4'
                            placeholder='Your Email'
                        />
                        <button className="bg-slate-500 text-white px-4 rounded-r-lg">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center text-slate-400 m-10'>
                © {year} Copyright TrustNet
                <div className='mt-3 flex items-center'>
                    <a href='https://github.com/Skelptin/blockchain-based-identity-verification-system'>
                        <FaGithub className='w-10 h-4 ' />
                    </a>


                    <div className="h-4 border-gray-500 border mx-3" />
                    <a href='#'>
                        <FaXTwitter className='w-10 h-4 ' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
