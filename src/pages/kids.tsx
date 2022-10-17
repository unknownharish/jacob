import Link from 'next/link'
import React from 'react'

export default function KidsRedirect() {
    return (
        <div className='bg-[#ff2ab7] h-screen flex align-bottom overflow-y-hidden'>


            <img src="images/startup/kids.png" className='h-5/6  mx-auto mt-24  ' alt="" />

            <div className='h-[10vh] flex justify-center absolute bottom-10 w-full'>

                <Link href='/kids-'>
                    <img src="images/startup/startbutton.png" className='cursor-pointer hover:brightness-110 w-40 m-auto' alt="" />
                </Link>

                {/* <p className='text-white text-lg '>Connect</p> */}
            </div>


            {/* footer  */}
            <div className='absolute bottom-0' >
                <img
                    src={'/images/journey/footer.png'}

                />
            </div>

        </div>
    )
}
