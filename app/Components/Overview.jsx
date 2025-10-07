import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const Overview = () => {
    const [first, setfirst] = useState(0)
    const [second, setsecond] = useState("")
    const [third, setthird] = useState("")
    const L1 = []
    return (
        <div>
            <div className="overviedetails bg-transparent text-white font-title p-16">
                <div className="overviewcontent flex justify-around items-center  hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-sm:border-hidden">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="img1">
                            <img src="/WhatsApp Image 2025-10-03 at 15.21.27_0b6b3e29.jpg" alt="" className=' rounded-xl max-w-[400px] max-md:w-[350px]' />
                        </div>
                        <div className='mt-5'>
                            <Link href="/user/achivements"><button className="cursor-target border border-gray-600 rounded-xl p-2">Learn More</button></Link>
                        </div>
                    </div>
                    <div className="details p-5 text-gray-400 w-[700px] ml-20 max-md:w-[400px] max-md:ml-2 max-md:mt-5 max-sm:w-[350px]">
                        Our team is absolutely thrilled to announce a significant milestone in our competitive journey. At the recent SAE Aero Design Challenge (AADC), hosted at the prestigious KCG College of Engineering in Chennai, we proudly secured the 19th position. Facing a formidable field of 70 of the nation's brightest engineering teams, this accomplishment is far more than just a number. It stands as a powerful testament to the relentless dedication that fueled countless late nights in the workshop, the innovative design principles that guided our build, and the collaborative spirit that saw us through every challenge.
                    </div>
                </div>
                <div className="overviewcontent flex flex-row-reverse justify-around items-center mt-10 hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col max-sm:border-hidden">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="img1">
                            <img src="/WhatsApp Image 2025-10-06 at 23.57.10_5a252955.jpg" alt="" className=' rounded-xl max-w-[400px] max-md:w-[350px]' />
                        </div>
                    </div>
                    <div className="details p-5 text-gray-400 w-[700px] ml-20 max-md:w-[400px] max-md:ml-2 max-md:mt-5 max-sm:w-[350px]">
                        As Team Aero, we successfully organized an orientation session to introduce new students to the Aero Club — its purpose, vision, and the exciting opportunities it offers in the field of aerodynamics, drones, and aviation technology.
                        During the session, we explained how the club functions, the kinds of projects and workshops we conduct, and how students can actively participate and contribute. To make the event engaging and interactive, we also conducted a series of knowledge-based games and quizzes related to aerospace concepts and general science.
                    </div>
                </div>
                <div className="overviewcontent flex justify-around items-center mt-10  hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col  max-sm:border-hidden">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="img1">
                            <img src="/WhatsApp Image 2025-10-06 at 12.23.56_c8fafd12.jpg" alt="" className=' rounded-xl max-w-[400px] max-md:w-[350px]' />
                        </div>
                        <div className='mt-5'>
                            <Link href="/user/achivements"><button className="cursor-target border border-gray-600 rounded-xl p-2">Learn More</button></Link>
                        </div>
                    </div>
                    <div className="details p-5 text-gray-400 w-[700px] ml-20 max-md:w-[400px] max-md:ml-2 max-md:mt-5 max-sm:w-[350px]">
                        Building on this success, we recently participated in a preparatory workshop for the upcoming DDC event, focusing on both our Micro and Regular class entries. We are excited to report that this workshop was a resounding success. Our lightweight, hand-launched Micro class plane demonstrated exceptional stability and efficiency in the air. Simultaneously, our larger, ground-takeoff Regular class UAV showcased its robust design and powerful performance. Seeing both our aircraft fly successfully has validated our engineering approach and gives us immense confidence as we move into the final stages of preparation for the main competition.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview

