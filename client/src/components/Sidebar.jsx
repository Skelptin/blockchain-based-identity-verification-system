import React, { useState } from 'react'
import { Drawer } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Sidebar = () => {


    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const navlinks = [
        { name: "Marketplace", link: "/marketplace" },
        { name: "Community", link: "/community" },
        { name: "About Us", link: "/create" },
    ]

    return (
        <div>
            <div className="sm:hidden">
                <button onClick={toggleDrawer}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
                    <div className='p-4 grid items-center'>
                        <div className='flex items-center justify-between w-40 '>

                            <MdKeyboardDoubleArrowRight onClick={() => setOpenDrawer(false)} className='pointer' />
                            {/* <Link to="/profile">
{currentUser ? (
<img src={currentUser.avatar} alt="profile" width="35px" className="rounded-3xl h-7 w-7 object-cover" />
) : (
<Link to={'/signin'} variant='outline' className='rounded-xl'>
  Sign In
</Link>
)}
</Link> */}

                        </div>
                        <ul className='flex flex-col gap-2 mt-5'>
                            {
                                navlinks.map(({ name, link }) => (
                                    <li key={link}>
                                        <Link to={link}>{name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Drawer>

            </div></div>
    )
}

export default Sidebar