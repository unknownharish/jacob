import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useState } from 'react'
import ActionModal from './modal';

export default function Action() {
    const router = useRouter();
    const [actionModal, setactionModal] = useState(false)

    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <h1 style={{ color: '#97b229' }} className="text-[1.2rem] lg:text-[2rem] w-[95%] tracking-wide text-center mt-[3rem] lg:w-[600px]">
                Take Real-Life Micro Actions For Free!
            </h1>
            {/* logos */}
            <div className="flex justify-center items-center flex-wrap animate-openMenu">


                <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
                    <Image
                        src={"/images/action/ACTION.png"}
                        alt="Action"
                        layout="fill"
                        objectFit="contain"
                        onClick={() => setactionModal(true)}
                    />
                </div>



                <a href="https://www.friends.dugut.app" target={'blank'}>
                    <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
                        <Image
                            src={"/images/homePage/friends.png"}
                            alt="Friends"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </a>
                <Link href="/play">
                <div className=" lg:flex w-[180px] h-[300px] lg:h-[280px] lg:w-[220px] lg:mt-4 cursor-pointer hover:opacity-120 hover:brightness-110 relative">
                        <Image
                            src={"/images/action/GAMES.png"}
                            alt="Games"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Link>


                <a href="www.friends.wedugut.com/shop" target={'blank'}>

                    <div className="  lg:flex w-[180px] h-[300px] lg:h-[280px] lg:w-[220px] lg:mt-4 cursor-pointer hover:opacity-120 hover:brightness-110 relative">
                        <Image
                            src={"/images/homePage/SHOP_BUTTON.png"}
                            alt="Shop Button"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </a>

                <Link href="/sdg" target={'blank'}>
                    <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
                        <Image
                            src={"/images/action/SDGs.png"}
                            alt="SDG"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </Link>
            </div>


            {/* paragraph */}
            <div className='bg-white text-sm font-thin w-5/6 sm:w-3/6 lg:w-2/6 p-4 rounded-lg'>
                <p><strong className='font-bold'>Discover </strong> the most important issues we face today such as climate change, plastic waste, natural disasters, wildfires, and more...</p>
                <p><strong className='font-bold'>Learn </strong> more about these problems and solutions!</p>
                <p><strong className='font-bold'>Change </strong> your mindset towards a more sustainable way of living!</p>
                <p><strong className='font-bold'>Unite </strong> your friends and become part of the solution!
                    Share the journey with your friends so they can take actions with you!
                </p>
                <p><strong className='font-bold'>Act </strong> on your new knowledge. By completing the journey, you can plant a tree for free!
                </p>
            </div>

            {/* images climate */}
            <div className='flex mt-8 '>
                <div className="mr-3 w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">

                    <a href="https://climatechange.dugut.app/world-page/#" target={'blank'}>

                        <Image
                            src={"/images/action/CLIMATE.png"}
                            alt="Action"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </div>
                <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
                    <a href="https://plastic.dugut.app/world-page/#" target={'blank'}>

                        <Image
                            src={"/images/action/PLASTIC.png"}
                            alt="Action"
                            layout="fill"
                            objectFit="contain"
                        />
                    </a>
                </div>
            </div>


            {actionModal && <ActionModal setactionModal={setactionModal} />}


        </div >
    );
}
