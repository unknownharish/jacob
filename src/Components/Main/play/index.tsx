import Image from 'next/image'
import React from 'react'

export default function PLayComponent() {
    return (
        <div>

            <div className=' flex justify-center items-center w-1/2 h-1/4  mx-auto'>

                <img src="/images/play/playgames.png" alt="" />
            </div>

            <div className="flex justify-center items-center flex-wrap animate-openMenu  ">


                <a href="https://dugut.app/game/2/ " target={'blank'}>

                    <div className="lg:flex w-[180px] h-[300px] lg:h-[280px] lg:w-[220px] lg:mt-4 cursor-pointer hover:opacity-120 hover:brightness-110 relative mx-2">
                        <Image
                            src={"/images/play/trees.png"}
                            alt="trees"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </a>

                <a href="https://dugut.app/game/3" target={'blank'}>
                    <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative mx-2">
                        <Image
                            src={"/images/play/food.png"}
                            alt="food"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </a>

                <a href="https://dugut.app/game/7" target={'blank'}>
                    <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative mx-2">
                        <Image
                            src={"/images/play/animals.png"}
                            alt="animals"
                            layout="fill"
                            objectFit="contain"

                        />
                    </div>
                </a>

                <a href="https://dugut.app/game/4" target={'blank'}>
                    <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative mx-2">
                        <Image
                            src={"/images/play/water.png"}
                            alt="water"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </a>






                <a href="https://dugut.app/game/10" target={'blank'}>
                    <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative mx-2">
                        <Image
                            src={"/images/play/whales.png"}
                            alt="whales"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </a>

                <a href=" https://dugut.app/game/1" target={'blank'}>
                    <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative mx-2">
                        <Image
                            src={"/images/play/plastic.png"}
                            alt="plastic"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </a>
            </div>


        </div>
    )
}
