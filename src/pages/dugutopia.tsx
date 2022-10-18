import Link from 'next/link'
import React from 'react'

export default function Dugutopia() {
    return (
        <div className='bg-[#0084b4] h-screen flex flex-col overflow-y-hidden'>


            <img src="images/startup/dugutopia.png" className='h-5/6 mx-auto mt-24  ' alt="" />

            <div className='h-[18vh] flex flex-col justify-center absolute bottom-0 w-full '>
                <a href='https://www.dugutopia.com' target={'blank'} className='mb-2'>
                    <img src="images/startup/Gobutton.png" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </a>
                <a href='http://friends.dugut.app ' target={'blank'}>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
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
