import React from 'react'

export default function Dugutopia() {
    return (
        <div className='bg-[#0084b4] h-screen flex align-bottom'>


            <img src="images/startup/dugutopia.png" className='h-5/6  mx-auto mt-24  ' alt="" />

            <div className='absolute top-[78%] -left-[6%]; md:left-[24%] flex flex-col items-center  '>
                <a href="https://www.dugutopia.com" target={'blank'} className='w-[18%] cursor-pointer hover:brightness-110' >

                    <img src="images/startup/startbutton.png" alt="" />

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
