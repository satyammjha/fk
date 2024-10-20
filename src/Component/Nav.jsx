import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Nav = () => {
    const navLinks = [
        {
            title: "Database",
            link: "/database",
        },
    ];

    return (
        <div className="flex gap-4 bg-[#FFC408] h-[6vh] items-center p-2 sticky top-0">
            {navLinks.map((navLink, index) => ( // Corrected map usage
                <Link key={index} to={navLink.link} className="font-bold p-1 text-white bg-[#007BFF] rounded-md">
                    {navLink.title}
                </Link>
            ))}
            <div className="font-bold p-1 text-white bg-[#007BFF] rounded-md">Product Count: 30</div>
            <div className="font-bold p-1 text-white bg-[#007BFF] rounded-sm ml-[35vw]">Live Master Database</div>
        </div>
    );
};

export default Nav;