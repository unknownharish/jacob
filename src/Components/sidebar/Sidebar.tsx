import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export default function Sidebar({ open, setopen }: any) {

    const style = {

        transition: '0.3s all ease-in',
        transform: open ? 'translateY(0vh)' : 'translateY(-140vh)',
        zIndex: '5',
        // position: 'sticky',
        top: '0'
        // overflowX:'hidden'


    }
    // bg-gray-700


    return (
        <div style={style} className='sticky' >

            <div onClick={() => setopen(false)} className='bg-gray-700 h-screen opacity-25 absolute z-10 lg:w-4/6   '></div>

            <div className='bg-black px-2 text-white w-1/2 pt-10 fixed lg:w-2/6 md:px-16 md:pt-6 overflow-x-hidden absloute right-0'  >

                <Link href="/action" >
                    <div className='flex my-2 items-center cursor-pointer '>

                        <Image src={'/images/common/ACTION.png'} height={80} width={80} />
                        <p className='ml-2 '>ACTION</p>
                    </div>
                </Link>

                <Link href="/friends" >

                    <div className='flex my-2 items-center cursor-pointer'>
                        <Image src={'/images/common/FRIENDS.webp'} height={80} width={80} />
                        <p className='ml-2'>SOCIAL</p>
                    </div>
                </Link>

                <Link href="/dugutopia" >

                    <div className='flex my-2 items-center cursor-pointer'>
                        <Image src={'/images/common/DUGUTOPIA.png'} height={80} width={80} />
                        <p className='ml-2'>DUGUTOPIA</p>
                    </div>
                </Link>

                <Link href="/kids" >

                    <div className='flex my-2 items-center cursor-pointer'>
                        <Image src={'/images/common/KIDS.webp'} height={80} width={80} />
                        <p className='ml-2'>KIDS</p>
                    </div>
                </Link>

                <Link href="/nfts" >

                    <div className='flex my-2 items-center cursor-pointer'>
                        <Image src={'/images/common/NFT.webp'} height={80} width={80} />
                        <p className='ml-2'>NFTs</p>
                    </div>
                </Link>
                <Link href="/shop" >

                    <div className='flex my-2 items-center cursor-pointer'>
                        <Image src={'/images/common/SHOP_ICON.png'} height={80} width={80} />
                        <p className='ml-2'>SHOP</p>
                    </div>
                </Link>

                <div className=' flex flex-col justify-center w-3/4 text-md mx-4 mt-8 md:my-2  md:w-5/12 md:mt-4  '>

                    <div className='flex justify-center items-center  '>
                        <Image className='' src={'/images/common/circle-fill.svg'} height={20} width={20} />

                        <div className='ml-6 cursor-pointer'>
                             <a href="http://company.wedugut.com" target={'blank'}>
                                <p >ABOUT US</p>
                            </a>
                        </div>


                    </div>
                    <div className='flex justify-center items-center w-full ml-2 sm:mt-2 mt-1 '>
                        <Image className='' src={'/images/common/circle-fill.svg'} height={20} width={20} />

                        <div className='ml-6 cursor-pointer'>
                            <a href='mailto:business@dugut.app'>
                                <p >CONTACT US</p>
                            </a>
                        </div>


                    </div>
                    <div className=' w-full flex justify-center items-center my-1 relative -left-[18px] sm:-left-[17px] md:-left-[18px] md:mt-2'>
                        <Image className='' src={'/images/common/circle-fill.svg'} height={20} width={20} />

                        <div className='pl-6 cursor-pointer'>
                            <a href='https://www.dugut.org' target={'blank'}>
                                <p >JOBS</p>
                            </a>
                        </div>


                    </div>


                </div>

                <p className='text-center font-light mt-6 mb-2  md:w-3/4 md:mt-2 md:ml-8 '>Connect With us:</p>

                {/* sm links */}
                <div className='flex justify-around md:w-3/4 sm:w-5/6 m-auto  md:ml-8 '>
                    <div className='mx-1'>
                        <a href="https://www.facebook.com/wedugut/" target={'blank'}>

                            <Image src={'/images/common/facebook.svg'} height={15} width={15} />
                        </a>
                    </div>
                    <div className='mx-1'>
                        <a href="https://www.instagram.com/wedugut/" target={'blank'}>

                            <Image src={'/images/common/instagram.svg'} height={15} width={15} />
                        </a>
                    </div>
                    <div className='mx-1'>
                        <a href="https://twitter.com/wedugut" target={'blank'}>

                            <Image src={'/images/common/twitter.svg'} height={15} width={15} />
                        </a>
                    </div>
                    <div className='mx-1'>
                        <a href="https://www.tiktok.com/@wedugut" target={'blank'}>

                            <Image src={'/images/common/tiktok.svg'} height={15} width={15} />
                        </a>
                    </div>
                    <div className='mx-1'>
                        <a href="https://www.youtube.com/channel/UCyg87GirrddSvia8TqeWepA" target={'blank'}>

                            <Image src={'/images/common/youtube.svg'} height={15} width={15} />
                        </a>
                    </div>
                    <div className='mx-1'>
                        <a href="https://pt.linkedin.com/company/dugutapp" target={'blank'}>

                            <Image src={'/images/common/linkedin.svg'} height={15} width={15} />
                        </a>
                    </div>
                </div>

                <div className=' flex mt-2 mb-1 font-light justify-center text-xs md:flex md:justify-center md:w-3/4  md:ml-8'>

                    <a href="https://dugut.app/privacy/DuGut-Privacy-Policy.pdf" target={'blank'}>
                        <p className='mr-2 cursor-pointer'>Privacy</p>
                    </a>

                    <a href="https://dugut.app/data/DuGut-General-Data-Protection-Regulation.pdf" target={'blank'}>

                        <p className='mr-2 cursor-pointer'>GDPR</p>
                    </a>

                    <a href="https://dugut.app/terms/DuGut-Terms-of-Use.pdf" target={'blank'}>

                        <p className='mr-2 cursor-pointer'>Terms</p>
                    </a>

                </div>

                <div className=' flex justify-center mb-3  md:ml-8 md:w-3/4 ' style={{ fontSize: '9px' }}>
                    <p className='px-1'>DuGut <sup>TM</sup> LDA, 2022, All rights reserved </p>
                    <Image src={'/images/common/c-circle.svg'} height={10} width={10} />
                </div>

            </div>

        </div>
    )
}
