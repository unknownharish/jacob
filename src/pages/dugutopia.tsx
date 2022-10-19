import Link from 'next/link'
import React from 'react'

export default function Dugutopia() {


    return (
        <div className='bg-[#0084b4] h-[95vh] flex flex-col'>


            <img src="images/startup/dugutopia.png" className='h-5/6 mx-auto mt-24  ' alt="" />

            <div className='h-[10vh] lg:h-[14vh] flex flex-col justify-center absolute bottom-2 md:bottom-3 w-full '>
                <Link href='/dugutopia-'  className='mb-2'>
                    <img src="images/startup/Gobutton.png" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>
                <a href='http://friends.dugut.app ' target={'blank'}>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-28 m-auto mt-2' alt="" />
                </a>


            </div>


       
        </div>
    )
}
