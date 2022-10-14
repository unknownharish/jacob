import Image from 'next/image'
import React from 'react'
import { FooterComponent } from '../Components/footer'
import { HeaderComponent } from '../Components/header'
import Journey from '../Components/Main/journey'

export default function JourneyMain() {
    return (
        <>
            <HeaderComponent image='/images/journey/takeactionheader.png' />

            <Journey />

            {/* footer  */}
            <div >
                <img
                    src={'/images/journey/footer.png'}

                />
            </div>
        </>

    )
}
