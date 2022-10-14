import Link from 'next/link'
import React from 'react'

export default function MainHomepage() {

   
    return (
        <div> 

            <img src="images/startup/main.png" className='h-screen w-screen object-cover md:object-fill' alt="" />

            <div className='absolute top-3/4 -left-[6%]; md:left-[24%] flex flex-col items-center'>

                <Link href='/main'>
                    <img src="images/startup/startbutton.png" className='w-[18%] cursor-pointer hover:brightness-110 ' alt="" />
                </Link>

                <p className='text-white text-lg '>Connect</p>
            </div>


        </div>
    )
}
