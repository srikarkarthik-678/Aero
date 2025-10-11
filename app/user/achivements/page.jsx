import React from 'react'
import Orb from '@/app/Reactbits/Animations/Orb'
import TargetCursor from '@/app/Reactbits/Animations/Target'
import Link from 'next/link'
const page = () => {
    return (
         <div className='bg-black text-white min-h-screen'>
            <div className='max-lg:hidden'>
                <TargetCursor
                    spinDuration={2}
                    hideDefaultCursor={true}
                    className=""
                />
            </div>
            <div className="about bg-black text-white  font-title">
                <div className="aboutus">
                </div>
                <div className="backgroundimg w-[100%] h-[65vh] bg-cover bg-center" style={{ backgroundImage: "url('/success-achieving-goals-silhouette-businessman-260nw-2421512117.jpg')" }}>
                    <div className="info flex justify-start items-center h-[80vh]">
                        <div className="aboutUs flex flex-col pl-5">
                            <div className="ab text-5xl text-orange-600 font-bold max-sm:text-3xl">
                                Achievements
                            </div>
                            <div className="lorem w-[500px] mt-2 font-medium text-white max-sm:w-[100%]">
                               Our journey has been marked by milestones that inspire us to aim higher. From winning competitions to successfully executing innovative projects, each achievement reflects our dedication, teamwork, and commitment to excellence.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-section">
                    <div className="projectscont flex flex-col items-center justify-center mt-7 gap-1 px-14">
                        <div className='text-3xl'>Achievements</div>
                        <div className="line h-[1px] w-[90px] bg-red-600">

                        </div>
                        <div className="overviewcontent flex justify-around items-center  hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center mt-7 cursor-target">
                            <div className='flex flex-col justify-center items-center'>
                                <div className="img1">
                                    <img src="/WhatsApp Image 2025-10-03 at 15.21.27_0b6b3e29.jpg" alt="" className=' rounded-xl max-w-[400px] max-md:w-[350px]' />
                                </div>
                                <div className='mt-5'>
                                    <Link href="/user/achivements1"><button className="cursor-target border border-gray-600 rounded-xl p-2">Learn More</button></Link>
                                </div>
                            </div>
                            <div className="details p-5 text-gray-400 w-[80%] ml-20 max-md:w-[100%] max-sm:ml-2">
                                Our team is absolutely thrilled to announce a significant milestone in our competitive journey. At the recent SAE Aero Design Challenge (AADC), hosted at the prestigious KCG College of Engineering in Chennai, we proudly secured the 19th position. Facing a formidable field of 70 of the nation's brightest engineering teams, this accomplishment is far more than just a number. It stands as a powerful testament to the relentless dedication that fueled countless late nights in the workshop, the innovative design principles that guided our build, and the collaborative spirit that saw us through every challenge.
                            </div>
                        </div>
                        <div className="overviewcontent flex flex-row-reverse justify-around items-center mt-10 hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col mt-3 cursor-target">
                            <div className='flex flex-col justify-center items-center'>
                                <div className="img1">
                                    <img src="/WhatsApp Image 2025-10-03 at 15.21.26_fec45392.jpg" alt="" className=' rounded-xl max-w-[400px] max-md:w-[350px]' />
                                </div>
                                 <div className='mt-5'>
                                    <Link href="/user/achivements2"><button className="cursor-target border border-gray-600 rounded-xl p-2">Learn More</button></Link>
                                </div>
                            </div>
                            <div className="details p-5 text-gray-400 w-[80%] ml-20 max-md:w-[100%] max-sm:ml-2">
                               During a mission, the drone follows a pre-programmed flight path, and upon reaching the target, the Raspberry Pi signals a servo to deploy the package. Once the delivery is complete, the drone automatically initiates a 'Return-to-Launch' command, navigating back home for a safe landing. This project successfully integrates hardware and software to create a simple yet robust platform for automated aerial delivery, showcasing the power of modern autonomous systems.
                            </div>
                        </div>
                        <div className="overviewcontent flex justify-around items-center  hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center mt-3 cursor-target mb-10">
                            <div className='flex flex-col justify-center items-center'>
                                <div className="img1">
                                    <img src="/WhatsApp Image 2025-10-06 at 12.23.56_c8fafd12.jpg" alt="" className=' rounded-xl max-w-[400px] max-md:w-[350px]' />
                                </div>
                                <div className='mt-5'>
                                    <Link href="/user/achivements3"><button className="cursor-target border border-gray-600 rounded-xl p-2">Learn More</button></Link>
                                </div>
                            </div>
                            <div className="details p-5 text-gray-400 w-[80%] ml-20 max-md:w-[100%] max-sm:ml-2">
                               Building on this success, we recently participated in a preparatory workshop for the upcoming DDC event, focusing on both our Micro and Regular class entries. We are excited to report that this workshop was a resounding success. Our lightweight, hand-launched Micro class plane demonstrated exceptional stability and efficiency in the air. Simultaneously, our larger, ground-takeoff Regular class UAV showcased its robust design and powerful performance. Seeing both our aircraft fly successfully has validated our engineering approach and gives us immense confidence as we move into the final stages of preparation for the main competition.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
