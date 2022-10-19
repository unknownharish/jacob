import Link from 'next/link'
import React from 'react'

export default function PlayRedirect() {
    return (
        <div className='bg-[#94d502] h-screen flex flex-col overflow-y-hidden'>


            <img src="images/startup/play.png" className='h-5/6  mx-auto mt-24  ' alt="" />

            <div className='h-[10vh] lg:h-[14vh] flex flex-col justify-center absolute bottom-2 md:bottom-2 w-full'>

                <Link href='/play-' className='mb-2'>
                    <img src="images/startup/Gobutton.png" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </Link>
                
                <a href='http://friends.dugut.app' target='blank' className='mb-2'>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-28 mt-2 md:mt-0 m-auto' alt="" />
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
