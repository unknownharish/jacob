import { useRouter } from 'next/router';
import Script from 'next/script';
import React from 'react'
import { HeaderComponent } from '../Components/header'
import MainDonation from '../Components/Main/donation'

export default function DonationRedirect() {

  const router = useRouter();

  return (
    <>
      <HeaderComponent image={'/images/homePage/Logo.webp'} />

      <div className='bg-gradient-to-t from-white to-cyan-300 bg-center bg-cover'>

        <MainDonation />
      </div>


      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-0GMXD0ECE2"></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'G-0GMXD0ECE2');
        `,
        }}
      />

    </>

  )
}
