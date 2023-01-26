import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Yt() {
    const router = useRouter()
    return (
        <>
            <div className='  bg-[#f4f481] h-screen w-[100vw] flex flex-col justify-center items-center '>

                <div className='relative  '>

                    <img src="/images/yt/bg_image.png" className='h-[26rem]  md:h-auto xl:w-4/6 m-auto' alt="" />
                    <img src="/images/yt/text.png" className='absolute xl:top-1 lg:top-[5vh] top-[7vh] left-[13vw] xl:left-[16vw]  w-4/6' alt="" />
                    <img src="/images/yt/hands.png" className='absolute top-[8.3vh] left-[0vw] lg:top-[0vh] lg:left-[0vw]  xl:top-[6vh] xl:left-[21.5vw] xl:w-7/12' alt="" />
                    <Link href={'/videoshack-'}>
                    <img src="/images/yt/button.png" className='absolute z-10 top-[13vh] left-[0vw] lg:top-[8vh] lg:left-[7vw] lg:w-5/6 xl:top-8 xl:left-[16vw] xl:w-4/6 cursor-pointer' alt="" />
                    </Link>
                    <a href="http://friends.dugut.app" >

                    <img src="/images/yt/connect.png" className='z-20 absolute top-[14vh] left-[0vw] lg:top-[8vh] lg:left-[7vw] lg:w-5/6 xl:top-12 xl:left-[16vw] xl:w-4/6 cursor-pointer' alt="" onClick={() => {}} />
                    </a>
                    {/* <p className='absolute xl:top-[80vh] md:top-[47vh] top-[30vh] text-center font-bold xl:text-3xl left-[16vw] w-4/6 cursor-pointer text-white '>CONNECT!</p> */}

                </div>
            </div>
            <div className='bg-[#4617ab] h-10 w-full flex justify-center items-center'>
                <p className='text-white'>DuGut 2022, ALL right reserved &#169;</p>
            </div>
        </>
    )
}
