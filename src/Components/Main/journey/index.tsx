import Image from 'next/image'
import React from 'react'

export default function Journey() {

    let imgs = [
        { src: '/images/journey/PlasticJourney.png', href: 'https://plastic.dugut.app/world-page/#',text:'More than 5 trillion pieces of plastic are already floating in our oceans. Learn about our plastic waste problem and how you can make a difference, at the end of the journey we will clean up ocean plastic in your name! ' ,},
        { src: '/images/journey/ClimateJourney.png', href: 'https://climatechange.dugut.app/world-page/#',text:'Droughts, wildfires, and extreme weather conditions are only going to increase as the planet heats up! Learn about our climate crisis and how you can make a difference, and at the end of the journey we will plant a tree in your name!' }

    ]


    return (
        <>


            <div className=' w-screen min-h-screen bg-journey'>

                <div className=' flex justify-center items-center pt-10' >


                    <img className='h-60 px-3 md:p-0'
                        src={'/images/journey/takejourney.png'}

                    />

                </div>


                <div className='flex justify-center items-center w-full '>

                    {/* images  */}
                    <div className='flex flex-col mx-1 px-2 md:px-0 '>

                        {imgs.map((x, idx) => (
                            <div key={idx} className='flex mt-2 mb-8'>


                                <a href={x.href} target={'blank'}>

                                    <Image
                                        src={x.src}
                                        height='350'
                                        width='200'
                                        className='cursor-pointer hover:brightness-110 '

                                    />
                                </a>

                                <div className='flex flex-col w-52 mx-2 text-white justify-center items-center'>
                                    <p className='text-center my-1 text-xs md:text-sm'>{x.text}</p>

                                    <a href={x.href} target={'blank'} className='mt-3 hover:brightness-110'>

                                        <Image src='/images/takeaction/GOButton.png'
                                            height='75'
                                            width='180'
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div>

                    </div>


                </div>

            </div>
        </>
    )
}
