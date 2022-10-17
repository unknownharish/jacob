import React from 'react'

export default function Shop() {
    return (
        <div className='bg-[#cc0033] h-screen flex flex-col overflow-y-hidden'>

 
            <img src="images/startup/shop.png" className='h-5/6  mx-auto mt-12  ' alt="" />

            <div className='h-[10vh] flex justify-center absolute bottom-10 w-full'>
                <a href="https://friends.dugut.app/shop" target={'blank'} className='w-40 m-auto cursor-pointer hover:brightness-110' >

                    <img src="images/startup/startbutton.png" alt="" />

                </a>



                {/* <p className='text-white text-lg xl:text-2xl '>Connect</p> */}
            </div>


            {/* footer  */}
            <div className='h-[18vh] flex justify-center items-end' >
                <img
                    src={'/images/journey/footer.png'}

                />
            </div>

        </div>
    )
}
