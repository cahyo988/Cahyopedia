"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'  
import hero1 from '../../public/assets/hero1.jpg'
import hero2 from '../../public/assets/hero2.jpg'
import hero3 from '../../public/assets/hero3.jpg'
import hero4 from '../../public/assets/hero4.jpg'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Hero = () => {
    const images = [hero1, hero2, hero3, hero4]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)  // Perbaiki typo 'lenght' menjadi 'length'
        }, 5000)

        return () => clearInterval(interval)
    }, [images.length])

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    return (
        <section className='relative flex justify-center mt-5 w-full max-w-6xl mx-auto'>
            <div className='relative w-full h-[300px]'>
                <Image
                    src={images[currentIndex]}
                    alt={`Hero image ${currentIndex + 1}`}
                    fill  
                    className='w-full h-full rounded-xl'  
                />
                <button
                    className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'
                    onClick={goToPrevious}
                >
                    <FaChevronLeft />
                </button>
                <button
                    className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'
                    onClick={goToNext}
                >
                    <FaChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Hero