import React from 'react'

export default function Shop() {
    return (
        <div className='bg-[#cc0033] h-screen flex align-bottom'>


            <img src="images/startup/shop.png" className='h-5/6  mx-auto mt-12  ' alt="" />

            <div className='absolute top-[78%] -left-[6%]; md:left-[24%] xl:left-[25%] flex flex-col items-center  '>
                <a href="https://friends.dugut.app/shop" target={'blank'} className='w-[18%] cursor-pointer hover:brightness-110' >

                    <img src="images/startup/startbutton.png" alt="" />

                </a>



                <p className='text-white text-lg xl:text-2xl '>Connect</p>
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
