import Link from 'next/link'
import React from 'react'

export default function SdgRedirect() {
    return (
        <div className='bg-[#94d502] h-screen flex flex-col overflow-y-hidden'>


            <img src="images/startup/sdg.png" className='h-5/6  mx-auto mt-24  ' alt="" />

            <div className='h-[10vh] flex justify-center absolute bottom-10 w-full'>

                <Link href='/sdg-'>
                    <img src="images/startup/startbutton.png" className='w-32 m-auto cursor-pointer hover:brightness-110 ' alt="" />
                </Link>

                {/* <p className='text-white text-lg '>Connect</p> */}
            </div>


            {/* footer  */}
            <div className='h-[8vh] flex justify-center items-end' >
                <img
                    src={'/images/journey/footer.png'}

                />
            </div>

        </div>
    )
}
