"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div>
            <div className="navbardetails bg-black text-white font-title lg:fixed lg:top-0 w-[94%]">
                <div className="navbarcontents">
                    <div className="navbar">
                        <div className="img1 flex justify-between items-center px-10 py-2">
                            <Link href="/">
                                <img src="/Screenshot 2025-09-25 150620.png" alt="" className='w-24 cursor-pointer' />
                            </Link>
                            <div className='flex items-center gap-8 max-md:hidden'>
                                <Link href="/"><button className='cursor-pointer hover:bg-red-600 hover:p-2 hover:text-white hover:rounded-full p-2 font-semibold'>Home</button></Link>
                                <Link href="/user/aboutus"><button className='cursor-pointer hover:bg-red-600 hover:p-2 hover:text-white hover:rounded-full p-2 font-semibold'>About Us</button></Link>
                                <Link href="/user/project"><button className='cursor-pointer hover:bg-red-600 hover:p-2 hover:text-white hover:rounded-full p-2 font-semibold'>Projects</button></Link>
                                <Link href="/user/achivements"><button className='cursor-pointer hover:bg-red-600 hover:p-2 hover:text-white hover:rounded-full p-2 font-semibold'>Achievements</button></Link>
                            </div>
                            <div className="hidden max-md:block">
                                {menuOpen ? (
                                    <X size={28} className="cursor-pointer" onClick={() => setMenuOpen(false)} />
                                ) : (
                                    <Menu size={28} className="cursor-pointer" onClick={() => setMenuOpen(true)} />
                                )}
                            </div>
                        </div>
                        {menuOpen && (
                            <div className="md:hidden bg-black text-center space-y-4 py-4">
                                <Link href="/" onClick={() => setMenuOpen(false)}>
                                    <div className="hover:bg-red-600 py-2 font-semibold rounded-md">Home</div>
                                </Link>
                                <Link href="/user/aboutus" onClick={() => setMenuOpen(false)}>
                                    <div className="hover:bg-red-600 py-2 font-semibold rounded-md">About Us</div>
                                </Link>
                                <Link href="/user/project" onClick={() => setMenuOpen(false)}>
                                    <div className="hover:bg-red-600 py-2 font-semibold rounded-md">Projects</div>
                                </Link>
                                <Link href="/user/achivements" onClick={() => setMenuOpen(false)}>
                                    <div className="hover:bg-red-600 py-2 font-semibold rounded-md">Achievements</div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

