import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FooterComponent } from '../Components/footer'
import { HeaderComponent } from '../Components/header'

export default function DigutopiaMain() {

    const [width, setwidth] = useState<Number>(0)
    const style = {
        backgroundImage: 'url("images/dugutopia/bg.png")'
    }

    useEffect(() => {

        setwidth(window.innerWidth)
    },)



    let cardImage = [
        {
            src: "/images/dugutopia/card1.png",
            link: ''
        },
        {
            src: "/images/dugutopia/card2.png",
            link: 'https://www.dugutopia.com'
        }
    ]


    // 450
    if (width < 450) {
        return (
            <div style={{ backgroundImage: 'url("/images/dugutopia/bgmobile.png")' }} className='bg-no-repeat bg-cover h-screen'>

                <HeaderComponent image={'/images/dugutopia/Header.png'} />

                <div className='p-10 mt-16 relative'>

                    <img
                        src='/images/dugutopia/mobilecard.png'
                        alt=""

                    />

                    <div className='absolute top-[75%] left-[30%] '>

                        <Link href={'/'}>
                            <Image
                                src='/images/dugutopia/goback.png'
                                alt=""
                                height={40}
                                width={150}
                                className='cursor-pointer hover:brightness-110'

                            />
                        </Link>
                    </div>
                </div>

                <div className='absolute bottom-0 w-full'>

                    <FooterComponent />

                </div>


            </div>
        )
    }


    return (
        <div style={style} className='bg-no-repeat h-screen bg-cover'>

            <HeaderComponent image={'/images/dugutopia/Header.png'} />


            <div className='ml-40 mt-5'>
                <Image
                    src={'/images/dugutopia/Logo.png'}
                    height={150}
                    width={400}
                />
            </div>


            <div className='flex flex-wrap w-full  justify-center md:mt-16 lg:mt-0  '>

                {cardImage.map((x, idx) => (

                    <div key={idx} className='p-2 mx-2 '>

                        <a href={x.link} target='blank'>

                            <Image
                                src={x.src}
                                alt=""
                                height={350}
                                width={250}

                            />
                        </a>
                    </div>
                ))}

            </div>


        </div>
    )
}
