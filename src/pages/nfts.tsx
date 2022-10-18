import React from 'react'

export default function Nfts() {
    return (
        <div className='bg-[#ef6c00] h-screen flex flex-col overflow-y-hidden'>


            <img src="images/startup/nft.png" className='h-5/6  mx-auto mt-24  ' alt="" />

            <div className='h-[12vh] md:h-[15vh] flex flex-col justify-center absolute bottom-10 md:bottom-7 w-full  '>

                <a href='http://friends.dugut.app ' target={'blank'}>
                    <img src="images/startup/Connect.png" className='cursor-pointer hover:brightness-110 w-24 m-auto ' alt="" />
                </a>
                <a href="http://actionist.dugutopia.com" target={'blank'} className='cursor-pointer hover:brightness-110 w-40 m-auto' >

                    <img src="images/startup/Gobutton.png" alt="" />

                </a>


                {/* <p className='text-white text-lg '>Connect</p> */}
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
