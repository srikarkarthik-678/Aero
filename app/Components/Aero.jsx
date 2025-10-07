"use client"
import React from 'react'
import { useEffect, useState } from 'react';
const Aero = () => {

    return (
        <div>
            <div className="aerodetails text-white bg-transparent pt-28 font-title">
                <div className="aerocontent">
                    <div className="start flex flex-col justify-center items-center h-[240px] gap-6 max-sm:h-[100px]">
                        <div className="mu text-9xl font-Aud text-red-600 max-lg:text-7xl">
                            AERO
                        </div>
                        <div className=' text-lg max-lg:text-sm'>
                            An Innovative Club of Mahindra University
                        </div>
                        <div className='max-lg:text-sm max-sm:hidden'>
                            Soar beyond limits, explore the skies, and innovate with passion at Aero Club, where aerospace dreams take flight every day.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aero

