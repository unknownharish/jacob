import Link from 'next/link'
import React from 'react'

export default function Redirect_to_Action() {
    return (
        <div className='bg-[#94d502] h-screen flex align-bottom'>

         
            <img src="images/startup/action.png" className='h-5/6  mx-auto mt-24  ' alt="" />

            <div className='absolute top-3/4 -left-[6%]; md:left-[24%] flex flex-col items-center'>

                <Link href='/action-'>
                    <img src="images/startup/startbutton.png" className='w-[18%] cursor-pointer hover:brightness-110 ' alt="" />
                </Link>

                <p className='text-white text-lg '>Connect</p>
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
