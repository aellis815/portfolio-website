"use client";
import Link from 'next/link';
import NavLink from './NavLink';
import { useState } from 'react';
//list of icon names via @heroicons/react
import { Bars2Icon, XCircleIcon, HomeIcon } from '@heroicons/react/16/solid';
import MobileMenu from './MobileMenu';

//navLinks can be edited/updtated with new paths in the future if needed
const navLinks = [
    { path: '#aboutme', title: 'About Me' },
    { path: '#skills', title: 'Skills' },
    { path: '#projects', title: 'Projects' },
    { path: '#email', title: 'Contact' },
]

//NavBar component NavLinks 
//for styling of NavLinks themselves - see NavLink.tsx
//for styling of NavLinks structure -> see 
export default function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const closeNavbar = () => setNavbarOpen(true);
    return (
        <nav className={`fixed top-0 left-0 right-0 z-10 bg-slate-900 bg-opacity-90 shadow-lg shadow-slate-800 backdrop-blur-[0.5rem] ${navbarOpen ? 'rounded-3xl' : 'rounded-full'}`}>
            <div id="NavBar Container" className="flex flex-wrap items-center justify-between mx-auto p-5 ">
                <div className="md:block hidden">
                    <Link id="TL HomeBtn Container" href={"/"} className="text-lg md:text-5xl text-white font-bold">
                        <HomeIcon id="home button" className="h-10 w-10 text-slate-200" />
                    </Link>
                </div>
                <div id="mobile menu : D" className="block md:hidden ml-auto">
                    {//toggle button for mobile menu
                        !navbarOpen ? (
                            <button
                                onClick={() => setNavbarOpen(true)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white">
                                <Bars2Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button
                                onClick={() => setNavbarOpen(false)}
                                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white">
                                <XCircleIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div id="NavLinks Container" className="menu hidden md:block md:w-auto">
                    <ul id="NavLinks mapping" className="flex p-4 md:p-0 md:flex-row md:space-x-6">
                        {/* mapping navLinks array for navbar */}
                        {
                            navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink href={link.path} title={link.title} />
                                    </li>
                            ))}
                    </ul>
                </div>
            </div>
            {/* Toggle mobile menu overlay ---> placed down here to avoid parent styling*/}
            {navbarOpen ? <MobileMenu links={navLinks} /> : null}
        </nav>
    );
}

