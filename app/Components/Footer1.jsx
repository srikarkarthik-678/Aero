import React from "react";
import { FaInstagram, FaSnapchatGhost, FaTwitter, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Footer1 = () => {
  return (
    <footer className="bg-black text-gray-600 py-2 border-t border-gray-400/30">
      <div className="flex justify-center space-x-4 mb-3 mt-2">
        <a href="#" className="border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition">
          <FaInstagram className="text-gray-400 text-lg" />
        </a>
        <a href="#" className="border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition">
          <FaSnapchatGhost className="text-gray-400 text-lg" />
        </a>
        <a href="#" className="border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition">
          <FaTwitter className="text-gray-400 text-lg" />
        </a>
        <a href="#" className="border border-gray-300 p-2 rounded-full hover:bg-gray-100 transition">
          <FaFacebookF className="text-gray-400 text-lg" />
        </a>
      </div>

      <ul className="flex justify-center space-x-6 mb-2 text-xs font-medium">
        <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link href="/user/aboutus" className="hover:text-gray-300">About Us</Link></li>
        <li><Link href="/user/project" className="hover:text-gray-300">Projects</Link></li>
        <li><Link href="/user/achivements" className="hover:text-gray-300">Achievements</Link></li>
      </ul>

       <p className="text-center text-[15px] text-gray-500 font-title">
        Aero © {new Date().getFullYear()} | Made By SrikarKarthik
      </p>
      
    </footer>
  );
};

export default Footer1;
