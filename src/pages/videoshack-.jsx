import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import { HeaderComponent } from '../Components/header'

export default function YtMain({ data }) {

    const [ytlinks, setytlinks] = useState([
        // { link: 'https://www.youtube.com/embed/oSIv-E60NiU', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi sequi autem? Doloribus placeat veniam illo repudiandae ab corrupti odit?' },

    ])


    const tiktok = [{ link: 'ZMYRfm2sD' }, { link: 'ZMYRfbRWN' }]

    useEffect(() => {

        setytlinks(data)

    }, [])

    // console.log(data)



    let store = useSelector((x) => x.store);

    if (ytlinks.length == 0) {
        return <div className='flex justify-center items-center h-screen bg-gray-50'>
            <Image src={'/images/yt/loader.gif'}
                height={'400'}
                width={'500'}
                className=' bg-gray-400'
            />
        </div>
    }

    return (
        <>

            <Script strategy='lazyOnload' src="https://www.tiktok.com/embed.js"></Script>

            <HeaderComponent image={'/images/dugutopia/Header.png'} />
            <div className='  bg-[#f4f481] w-[100vw] min-h-screen '>

                <div className='flex justify-center items-center'>
                    <Image
                        src={'/images/yt/logo.png'}
                        height='400'
                        width='750'
                        className=''
                    />
                </div>

                <p className='text-center my-2'>Featured Videos</p>
                <div className='flex flex-wrap justify-around xl:justify-center items-center  md:w-full lg:w-11/12 xl:w-7/12 m-auto pb-40 '>
                    {ytlinks.map(x => {

                        return <div className='flex flex-col p-5 md:w-5/12 m-5'>
                            <iframe width="370" height="225" src={`https://www.youtube.com/embed/${x.link}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                            <p className='my-3 w-full md:w-10/12'>{x.text}</p>
                        </div>
                    })}
                </div>





                <p className='text-center my-2'>Tiktok Videos</p>
                <div className='flex flex-wrap justify-around xl:justify-center items-center  md:w-full lg:w-11/12 xl:w-7/12 m-auto pb-40 '>
                    {
                        tiktok.map(x => {

                            return <div className='flex flex-col p-5 md:w-5/12 m-5'>
                                <iframe width="370" height="470" src={`https://www.tiktok.com/wedugut/video/${x.link}`} title="Tiktok video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                <p className='my-3 w-full md:w-10/12'>{x.text}</p>
                            </div>
                        })
                    }

                </div>
            </div>
            <div className='bg-[#4617ab] h-10 w-full flex justify-center items-center'>
                <p className='text-white'>DuGut 2022, ALL right reserved &#169;</p>
            </div>
        </>
    )
}


export async function getServerSideProps() {


    let { data } = await axios.get('https://jacob-unknownharish.vercel.app/api/getRecord')
    // console.log(data);
    return {
        props: {
            data
        }
    }



}