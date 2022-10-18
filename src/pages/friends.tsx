import Link from 'next/link'
import React from 'react'

export default function Friends() {


    return (
        <div className='bg-[#c43538] h-screen ' >


            <div className='flex justify-center  h-screen overflow-y-hidden'>

                <img src="images/startup/friends.png" className='' alt="" />
            </div>
            <div className='h-[18vh] flex flex-col justify-center absolute bottom-10 md:bottom-7 w-full  '>

                <a href='http://friends.dugut.app ' target={'blank'}>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-24 m-auto ' alt="" />
                </a>
                <a href='https://friends.dugut.app' target={'blank'} className='mt-2'>
                    <img src="images/startup/Gobutton.png" className='cursor-pointer hover:brightness-110 w-40 m-auto ' alt="" />
                </a>

            </div>


            {/* footer  */}
            {/* <div className='flex justify-center items-end' >
                <img
                    src={'/images/journey/footer.png'}

                />
            </div> */}

        </div>
    )
}
