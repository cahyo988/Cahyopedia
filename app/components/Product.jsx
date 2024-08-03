import React from 'react'
import prod1 from '../../public/assets/prodak1.jpg';
import prod2 from '../../public/assets/prodak2.jpg';
import prod3 from '../../public/assets/prodak3.jpg';
import prod4 from '../../public/assets/prodak4.jpg';
import prod5 from '../../public/assets/prodak5.jpg';
import Image from 'next/image';
const Product = () => {
    const products = [
        {
            image: prod1,
            name: "Oohom Rak Putar Tempat Make Up Tempat Sendok ...",
            price: "Rp38.855",
            discount: "58%",
            cashback: "3,1rb",
            rating: "4.9",
            sales: "1750+ terjual",
            location: "Dilayani Tokopedia"
        },
        {
            image: prod2,
            name: "Flap Shoes Care Lem Sepatu Super Kuat Original Pabrik - Lem Kuning",
            price: "Rp43.500",
            cashback: "4,3rb",
            rating: "5.0",
            sales: "250+ terjual",
            location: "Kota Sidoarjo"
        },
        {
            image: prod3,
            name: "Alas Potong Kertas PVC Paper Cutting Mat A3 Double-Side - Merah Muda, Surabaya",
            price: "Rp43.500",
            cashback: "4,1rb",
            rating: "5.0",
            sales: "950+ terjual",
            location: "Kota Kediri"
        },
        {
            image: prod4,
            name: "Pilla Home Essential SARUNG BANTAL Polos - Lilac",
            price: "Rp43.500",
            cashback: "4,2rb",
            rating: "5.0",
            sales: "350+ terjual",
            location: "Kota Banten"
        },
        {
            image: prod5,
            name: "[BUY 1 GET 1] PRONAS Bolognese Sapi 350 gr",
            price: "Rp43.500",
            cashback: "4,3rb",
            rating: "5.0",
            sales: "550+ terjual",
            location: "Kota Surabaya"
        },
        {
            image: prod3,
            name: "Alas Potong Kertas PVC Paper Cutting Mat A3 Double-Side - Merah Muda, Surabaya",
            price: "Rp43.500",
            cashback: "4,1rb",
            rating: "5.0",
            sales: "950+ terjual",
            location: "Kota Kediri"
        },
        {
            image: prod4,
            name: "Pilla Home Essential SARUNG BANTAL Polos - Lilac",
            price: "Rp43.500",
            cashback: "4,2rb",
            rating: "5.0",
            sales: "350+ terjual",
            location: "Kota Banten"
        },
        {
            image: prod5,
            name: "[BUY 1 GET 1] PRONAS Bolognese Sapi 350 gr",
            price: "Rp43.500",
            cashback: "4,3rb",
            rating: "5.0",
            sales: "550+ terjual",
            location: "Kota Surabaya"
        },
        
    ];

    return (
        <section className='relative flex flex-col mt-5 w-full max-w-6xl mx-auto'>
            <div className='flex text-start justify-start gap-2 align-center mb-4'>
                <h1 className='font-bold text-lg'>
                    Produk Pilihan Untukmu!  <span className='text-sm font-normal text-slate-700'>Serba di bawah 50rb</span>   <span className='text-sm text-green-500 '>Lihat Semua</span>
                </h1>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {products.map((product, index) => (
                    <div key={index} className='border rounded-lg p-2'>
                        <Image src={product.image} alt={product.name} className='w-full h-40 object-cover mb-2' />
                        <h3 className='text-sm font-semibold mb-1'>{product.name}</h3>
                        <p className='text-lg font-bold mb-1'>{product.price}</p>
                        <div className='flex items-center mb-1'>
                            {product.discount && <span className='bg-red-100 text-red-600 text-xs px-1 mr-1'>Diskon {product.discount}</span>}
                            {product.cashback && <span className='bg-orange-100 text-orange-600 text-xs px-1'>Cashback {product.cashback}</span>}
                        </div>
                        <div className='flex items-center text-xs text-gray-500'>
                            <span>⭐ {product.rating}</span>
                            <span className='mx-1'>|</span>
                            <span>{product.sales}</span>
                        </div>
                        <p className='text-xs text-gray-500 mt-1'>{product.location}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Product