import Link from 'next/link'
import React from 'react'

export default function Donation() {


    return (
        <div className='bg-[#ffcccc] h-screen flex flex-col'>


            <img src="images/donation/donation.png" className='h-5/6 mx-auto mt-24  ' alt="" />

            <div className='h-[12vh] lg:h-[14vh] flex flex-col justify-center absolute bottom-5 md:bottom-6 w-full'>
                <Link href='/donation-'  className='mb-2'>
                    <img src="images/startup/Gobutton.png" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>
                <a href='' className='mb-2'>
                    <img src="images/donation/button.png" className='cursor-pointer hover:brightness-110 w-28 mt-2 md:mt-0 m-auto' alt="" />
                </a>


            </div>


       
        </div>
    )
}
