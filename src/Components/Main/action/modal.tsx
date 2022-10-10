import React from 'react'

export default function ActionModal({ setactionModal }: any) {


    const style = {

        backgroundImage: 'url("/images/action/modal-bg.png")',
        // backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        // height: '65vh',
        // backgroundPosition: 'bottom',

    }

    return (
        <div style={style} className=' bg-contain h-[65vh] fixed top-24 sm:w-[50vw] md:h-[88vh] md:w-[48vw] bg-center md:top-20 '>

            <div className=' mt-5 h-full flex flex-col justify-center items-center sm:mt-10 sm:mr-3'>

                <div className=" cursor-pointer w-3/4 sm:w-4/6" onClick={() => setactionModal(false)}>
                    <img src="/images/action/one.png"
                        alt="first image"
                    />
                </div>
                <div className=" cursor-pointer w-3/4 my-2 sm:w-4/6" >
                    <a href="https://www.friends.dugut.app " target={'blank'}>
                        <img src="/images/action/two.png"
                            alt="second image"
                        />
                    </a>
                </div>

                <div className=" cursor-pointer w-3/4 sm:w-4/6" >
                    <a href="http://eepurl.com/hlZEQT" target={'blank'}>
                        <img src="/images/action/three.png"
                            alt="third image"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
