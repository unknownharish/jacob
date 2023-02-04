import React from 'react'
import Link from 'next/link'

export default function Journey() {
    return (
        <div className='bg-gradient-to-t from-white to-cyan-300 h-screen flex flex-col overflow-y-hidden'>



            <img src="images/prejourney/takejourney.webp" className='mt-40 h-[35vh] w-10/12 md:h-5/6 md:w-10/12 mx-auto  md:mt-0 ' alt="" />

            <div className='h-[12vh] lg:h-[14vh] flex flex-col justify-center absolute bottom-5 md:bottom-6 w-full'>

                <Link href='/journey-' >
                    <img src="images/startup/GOButton.webp" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>
              
                <Link href='/journey-' >
                    <img src="images/prejourney/SHAREBUTTON.webp" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>
              


            </div>

        </div>
    )
}
