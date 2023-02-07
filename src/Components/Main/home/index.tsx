import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function HomePageComponent() {
  const router = useRouter();




  return (
    <div className="flex-1 flex flex-col justify-center items-center min-h-screen">
      <div className=' flex justify-center items-center w-1/2 h-2/5  mx-auto '>

        <img className='h-32 mt-10 md:my-10 md:h-60' src="/images/startup/App Header.webp" alt="" />
      </div>

      <div className="flex justify-center items-center flex-wrap animate-openMenu ">


        <div className="-mt-8 w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
          <Image
            src={"/images/homePage/action.webp"}
            alt="Action"
            layout="fill"
            objectFit="contain"

            onClick={() => router.push("/action")}
          />
        </div>




        <Link href='/friends'>

          <div className="-mt-8 w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
            <Image
              src={"/images/homePage/friends.webp"}
              alt="Friends"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        <div className="md:-mt-5 w-[180px] h-[300px] lg:h-[350px] lg:w-[220px] cursor-pointer hover:opacity-120 hover:brightness-110 relative">
          <Image
            src={"/images/homePage/kids.webp"}
            alt="Kids"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push("/kids")}
          />
        </div>

        <Link href='/donation'>
          <div className=" mt-4 sm:mt-0 w-[180px] h-[300px] lg:h-[350px] lg:w-[220px] cursor-pointer hover:opacity-120 hover:brightness-110 relative">
            <Image
              src={"/images/donation/donatebutton.webp"}
              alt="Dugotopia"
              layout="fill"
              objectFit="contain"

            />
            <div className='relative bg-red-500 h-6 w-4/6 left-[18%] top-[15%]'>
              <p className='text-white flex justify-center items-center'>Coming soon</p>
            </div>
          </div>
        </Link>




        <Link href='/videoshack'>
          <div className="  lg:flex w-[180px] h-[300px] lg:h-[350px] lg:w-[220px] cursor-pointer hover:opacity-120 hover:brightness-110 relative">
            <Image
              src={"/images/homePage/videoshack.webp"}
              alt="Nft"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        <Link href='/shop'>
          <div className="mb-5 md:mb-10 lg:flex w-[180px] h-[300px] lg:h-[300px] lg:w-[220px] lg:mt-4 cursor-pointer hover:opacity-120 hover:brightness-110 relative">
            <Image
              src={"/images/homePage/SHOP_BUTTON.webp"}
              alt="Shop Button"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

      </div>
    </div >
  );
}
