import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function HomePageComponent() {
  const router = useRouter();




  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <h1 className="text-[2.2rem] lg:text-[3.3rem] w-[95%] tracking-wide text-white text-center mt-[3rem] lg:w-[600px]">
        CHANGE YOUR FUTURE  1 MICRO-ACTION AT A TIME!
      </h1>
      <div className="flex justify-center items-center flex-wrap animate-openMenu">


          <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
            <Image
              src={"/images/homePage/action.png"}
              alt="Action"
              layout="fill"
              objectFit="contain"

            onClick={() => router.push("/action")}
            />
          </div>

      


        <a href="http://www.friends.dugut.app" target={'blank'}>
          <div className="w-[180px] h-[300px]  lg:h-[350px] lg:w-[220px] cursor-pointer hover:brightness-110 relative">
            <Image
              src={"/images/homePage/friends.png"}
              alt="Friends"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </a>

        <a href="http://www.dugutopia.com" target={'blank'}>
          <div className="w-[180px] h-[300px] lg:h-[350px] lg:w-[220px] cursor-pointer hover:opacity-120 hover:brightness-110 relative">
            <Image
              src={"/images/homePage/dugotopia.png"}
              alt="Dugotopia"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </a>


        <div className=" w-[180px] h-[300px] lg:h-[350px] lg:w-[220px] cursor-pointer hover:opacity-120 hover:brightness-110 relative">
          <Image
            src={"/images/homePage/kids.png"}
            alt="Kids"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push("/kids")}
          />
        </div>

        <a href="http://www.actionist.dugutopia.com" target={'blank'}  >

          <div className=" hidden lg:flex w-[180px] h-[300px] lg:h-[350px] lg:w-[220px] cursor-pointer hover:opacity-120 hover:brightness-110 relative">
            <Image
              src={"/images/homePage/nft.png"}
              alt="Nft"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </a>
        <a href="http://www.friends.wedugut.com/shop" target={'blank'}>

          <div className=" hidden lg:flex w-[180px] h-[300px] lg:h-[280px] lg:w-[220px] lg:mt-4 cursor-pointer hover:opacity-120 hover:brightness-110 relative">
            <Image
              src={"/images/homePage/SHOP_BUTTON.png"}
              alt="Shop Button"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </a>
      </div>
    </div >
  );
}
