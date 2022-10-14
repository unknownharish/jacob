import Link from 'next/link'
import React from 'react'

export default function Friends() {
    return (
        <div className='bg-[#c43538] h-screen flex align-bottom'>


            <img src="images/startup/friends.png" className='h-5/6  mx-auto mt-24  ' alt="" />

            <div className='absolute top-[80%] md:top-[78%] -left-[6%]; md:left-[24%] flex flex-col items-center  '>
                <a href="https://friends.dugut.app" target={'blank'} className='w-[18%] cursor-pointer hover:brightness-110' >

                    <img src="images/startup/startbutton.png"  alt="" />

                </a>


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
