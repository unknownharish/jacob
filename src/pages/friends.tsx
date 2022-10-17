import Link from 'next/link'
import React from 'react'

export default function Friends() {

    const style = {
        backgroundImage: 'url("images/startup/friends.png")'
    }
    return (
        <div className='bg-[#c43538] h-screen ' >


            <div className='flex justify-center  h-screen'>

                <img src="images/startup/friends.png" className='' alt="" />
            </div>
            <div className='h-[10vh] flex items-center absolute bottom-20 w-full'>
                <a href="https://friends.dugut.app" target={'blank'} className='cursor-pointer hover:brightness-110 w-40 m-auto' >

                    <img src="images/startup/startbutton.png" alt="" />

                </a>

            
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
