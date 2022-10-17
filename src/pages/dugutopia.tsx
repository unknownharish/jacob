import React from 'react'

export default function Dugutopia() {
    return (
        <div className='bg-[#0084b4] h-screen flex align-bottom overflow-y-hidden'>


            <img src="images/startup/dugutopia.png" className='h-5/6  mx-auto mt-24  ' alt="" />

            <div className='h-[10vh] flex justify-center absolute bottom-10 w-full'>
                <a href="https://www.dugutopia.com" target={'blank'} className='cursor-pointer hover:brightness-110 w-40 m-auto' >

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
