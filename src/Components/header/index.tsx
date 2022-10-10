import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

// component
import Sidebar from '../sidebar/Sidebar'


interface PropsHeader {
  image: string;
}

export function HeaderComponent({ image }: PropsHeader) {
  const router = useRouter();
  const [open, setopen] = useState(false)

  return (
    <div >

      <Sidebar open={open} setopen={setopen} />
      <header className="w-full h-[50px] bg-black">
        <div className="px-5 py-1 lg:w-[60%] m-auto flex justify-between items-center" >
          <div className="h-[40px] w-[160px] relative">
            <Image
              src={image}
              alt="Logo Weguut"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="h-[40px] w-[40px] relative cursor-pointer">
            <Image
              src={"/images/Kids/Menu.png"}
              alt="Menu"
              layout="fill"
              objectFit="contain"
              onClick={() => setopen(!open)}
              style={{zIndex:10}}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
