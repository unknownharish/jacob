import Link from 'next/link'
import React from 'react'

export default function SdgRedirect() {
    return (
        <div className='bg-[#94d502] h-screen flex flex-col overflow-y-hidden'>


            <img src="images/startup/sdg.png" className='h-5/6  mx-auto mt-8 p-1 ' alt="" />

            <div className='h-[12vh] md:h-[15vh] flex flex-col justify-center absolute bottom-8 md:bottom-5 w-full'>

                <Link href='/sdg-'>
                    <img src="images/startup/Gobutton.png" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>
                <a href='http://friends.dugut.app' target='blank' className='mb-2'>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-40 m-auto' alt="" />
                </a>


            </div>


            {/* footer  */}
            {/* <div className='h-[8vh] flex justify-center items-end' >
                <img
                    src={'/images/journey/footer.png'}

                />
            </div> */}

        </div>
    )
}
