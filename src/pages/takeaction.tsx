import React from 'react'
import TakeAction from '../Components/Main/takeaction'
import { HeaderComponent } from '../Components/header'

export default function TakeActionMain() {
    return (
        <div>


            <HeaderComponent image='/images/journey/takeactionheader.png' />

            <TakeAction />
            {/* footer  */}
            <div>
                <img
                    src={'/images/journey/footer.png'}

                />
            </div>
        </div>
    )
}
