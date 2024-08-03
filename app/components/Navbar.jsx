import React from 'react';
import Image from 'next/image';
import cahyopedia from "../../public/assets/cahyopedia.png"
import { FaUser } from 'react-icons/fa';
import { CiBellOn, CiShoppingCart } from 'react-icons/ci';
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { FcShop } from "react-icons/fc";

const Navbar = () => {
  return (
    <nav className='px-10 py-4 border-b border-gray-200 sticky'>
      <div className='flex gap-5 items-center'>
        <Image src={cahyopedia} width={150} height={250} alt="Cahyopedia logo" />
        <h5 className='flex items-center'>
          Kategori
        </h5>
        <div className="relative w-3/5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Cari Di Cahyopedia"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
        <div className='flex items-center gap-5 ml-10'>
          <a href="" className='flex items-center gap-1 hover:text-green-600'><CiShoppingCart className='w-7 h-7' /></a>
          <a href="" className='flex items-center gap-1 hover:text-green-600'><CiBellOn className='w-7 h-7' /></a>
          <a href="" className='flex items-center gap-1 hover:text-green-600'><PiEnvelopeSimpleThin className='w-7 h-7' /></a>
        </div>
        <div className='flex items-center ms-auto gap-10 mr-16'>
          <a href="" className='flex items-center gap-1 hover:text-green-600'><FcShop className='w-5 h-5' /> Toko</a>
          <a href="" className='flex items-center gap-1 hover:text-green-600'><FaUser className='w-5 h-5' /> Cahyo</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar