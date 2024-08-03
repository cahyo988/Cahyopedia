"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FcGrid, FcKindle, FcSelfServiceKiosk, FcMultipleDevices } from "react-icons/fc";
import { PiDog } from "react-icons/pi";
import { FaPlaneDeparture, FaMoneyBillWave } from "react-icons/fa";

import produk1 from '../../public/assets/produk1.jpg';
import produk2 from '../../public/assets/produk2.jpg';
import produk3 from '../../public/assets/produk3.jpg';
import produk4 from '../../public/assets/produk4.jpg';

const Category = () => {
    const [activeTab, setActiveTab] = useState('pulsa');
    const category = [produk1, produk2, produk3, produk4];

    const TabContent = ({ tab }) => {
        switch (tab) {
            case 'pulsa':
                return <PulsaForm />;
            case 'paketData':
                return <PaketDataForm />;
            case 'flight':
                return <FlightForm />;
            case 'listrikPLN':
                return <ListrikPLNForm />;
            default:
                return null;
        }
    };

    return (
        <section className='relative flex flex-wrap mt-5 w-full max-w-6xl mx-auto shadow rounded-md p-5'>
            {/* Left side - Kategori Pilihan */}
            <div className='w-full md:w-1/2 max-w-xl my-3'>
                <div>
                    <h1 className='px-2 py-2 font-bold text-lg'>Kategori Pilihan</h1>
                    <div className='flex flex-wrap'>
                        {category.map((cat, index) => (
                            <div key={index} className='w-1/4 p-2'>
                                <Image src={cat} alt={`Category ${index + 1}`} layout="responsive" width={100} height={100} className='shadow rounded-md' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right side - Top Up & Tagihan */}
            <div className='w-full md:w-1/2'>
                <h1 className='px-5 py-2 font-bold text-lg'>Top Up & Tagihan</h1>
                <div className="flex shadow rounded-t-lg ml-5">
                    <button
                        className={`px-10 py-2 ${activeTab === 'pulsa' ? 'border-b-2 border-green-500' : ''}`}
                        onClick={() => setActiveTab('pulsa')}
                    >
                        Pulsa
                    </button>
                    <button
                        className={`px-11 py-2 ${activeTab === 'paketData' ? 'border-b-2 border-green-500' : ''}`}
                        onClick={() => setActiveTab('paketData')}
                    >
                        Paket Data
                    </button>
                    <button
                        className={`px-10 py-2 ${activeTab === 'flight' ? 'border-b-2 border-green-500' : ''}`}
                        onClick={() => setActiveTab('flight')}
                    >
                        Flight
                    </button>
                    <button
                        className={`px-11 py-2 ${activeTab === 'listrikPLN' ? 'border-b-2 border-green-500' : ''}`}
                        onClick={() => setActiveTab('listrikPLN')}
                    >
                        Listrik PLN
                    </button>
                </div>
                <div className="p-4 shadow rounded-b-lg ml-5">
                    <TabContent tab={activeTab} />
                </div>
            </div>
            <div className='px-6 py-1 flex flex-wrap gap-4'>
                <div className='shadow rounded-xl p-2 flex items-center gap-2'>
                    <FcGrid className='w-5 h-5' />
                    <p>Kategori</p>
                </div>
                <div className='shadow rounded-xl p-2 flex items-center gap-2'>
                    <FcMultipleDevices className='w-5 h-5' />
                    <p>Handphone & Tablet</p>
                </div>
                <div className='shadow rounded-xl p-2 flex items-center gap-2'>
                    <FcKindle className='w-5 h-5' />
                    <p>Topup & Tagihan</p>
                </div>
                <div className='shadow rounded-xl p-2 flex items-center gap-2'>
                    <FcSelfServiceKiosk className='w-5 h-5' />
                    <p>Elektronik</p>
                </div>
                <div className='shadow rounded-xl p-2 flex items-center gap-2'>
                    <PiDog className='w-5 h-5 text-yellow-600' />
                    <p>Perawatan Hewan</p>
                </div>
                <div className='shadow rounded-xl p-2 flex items-center gap-2'>
                    <FaPlaneDeparture className='w-5 h-5 text-blue-400' />
                    <p>Travel & Entertaintment</p>
                </div>
                <div className='shadow rounded-xl p-2 flex items-center gap-2'>
                    <FaMoneyBillWave className='w-5 h-5 text-green-700' />
                    <p>Keuangan</p>
                </div>

            </div>
        </section>
    )
}

const PulsaForm = () => (
    <form className='flex gap-2 p-5'>
        <input type="tel" placeholder="Nomor Telepon" className="w-full p-2 mb-2 border rounded" />
        <select className="w-full p-2 mb-2 border rounded">
            <option>Pilih Nominal</option>
            <option>Rp. 10.000</option>
            <option>Rp. 20.000</option>
            <option>Rp. 30.000</option>
            <option>Rp. 40.000</option>
            <option>Rp. 50.000</option>
        </select>
        <button className="px-5 bg-green-500 text-white rounded">Beli</button>
    </form>
);

const PaketDataForm = () => (
    <form className='flex gap-2 p-5'>
        <input type="tel" placeholder="Nomor Telepon" className="w-full p-2 mb-2 border rounded" />
        <select className="w-full p-2 mb-2 border rounded">
            <option>--Pilih Paket--</option>
        </select>
        <button className="px-5 bg-green-500 text-white rounded">Beli</button>
    </form>

);

const FlightForm = () => (
    <div>Coming Soon</div>
);

const ListrikPLNForm = () => (
    <div>Coming Soon</div>
);

export default Category;