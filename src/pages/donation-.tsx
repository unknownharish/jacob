import { useRouter } from 'next/router';
import React from 'react'
import { HeaderComponent } from '../Components/header'
import MainDonation from '../Components/Main/donation'

export default function DonationRedirect() {

  const router = useRouter(); 

  return (
    <>
      <HeaderComponent
        image={
          router.asPath === "/"
            ? "/images/homePage/Logo.png"
            : "/images/Kids/Logo.png"
        }
      />
      <MainDonation />

    </>

  )
}
