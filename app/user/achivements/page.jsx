import React from 'react'
import Orb from '@/app/Reactbits/Animations/Orb'
import TargetCursor from '@/app/Reactbits/Animations/Target'
import Link from 'next/link'
const page = () => {
    return (
         <div className='bg-black text-white min-h-screen'>
            <TargetCursor
                spinDuration={2}
                hideDefaultCursor={true}
            />
            <div className="about bg-black text-white  font-title">
                <div className="aboutus">
                </div>
                <div className="backgroundimg w-[100%] h-[65vh] bg-cover bg-center" style={{ backgroundImage: "url('/success-achieving-goals-silhouette-businessman-260nw-2421512117.webp')" }}>
                    <div className="info flex justify-start items-center h-[80vh]">
                        <div className="aboutUs flex flex-col pl-5">
                            <div className="ab text-5xl text-orange-600 font-bold max-sm:text-3xl">
                                Achievements
                            </div>
                            <div className="lorem w-[500px] mt-2 font-medium text-white max-sm:w-[100%]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit aliquam quo sed ipsum nam esse, impedit provident reiciendis reprehenderit in, quaerat quibusdam.
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
                                    <img src="/WhatsApp Image 2025-10-03 at 15.21.29_f3ee0650.jpg" alt="" className=' rounded-xl max-w-[400px] max-md:w-[350px]' />
                                </div>
                                <div className='mt-5'>
                                    <Link href="/user/achivements1"><button className="cursor-target border border-gray-600 rounded-xl p-2">Learn More</button></Link>
                                </div>
                            </div>
                            <div className="details p-5 text-gray-400 w-[80%] ml-20 max-md:w-[100%] max-sm:ml-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, earum dolor natus hic optio tenetur omnis odio magnam facilis labore autem pariatur ducimus nemo error ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque architecto id, quasi saepe veritatis quia impedit in, beatae atque corrupti! Voluptas, facilis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias hic nisi modi amet quis aut sapiente exercitationem iste quasi. In?...............
                            </div>
                        </div>
                        <div className="overviewcontent flex flex-row-reverse justify-around items-center mt-10 hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col mt-3 cursor-target">
                            <div className='flex flex-col justify-center items-center'>
                                <div className="img1">
                                    <img src="/WhatsApp Image 2025-10-04 at 03.27.18_19022f78.jpg" alt="" className=' rounded-xl max-w-[400px] max-md:w-[350px]' />
                                </div>
                                 <div className='mt-5'>
                                    <Link href="/user/achivements2"><button className="cursor-target border border-gray-600 rounded-xl p-2">Learn More</button></Link>
                                </div>
                            </div>
                            <div className="details p-5 text-gray-400 w-[80%] ml-20 max-md:w-[100%] max-sm:ml-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, earum dolor natus hic optio tenetur omnis odio magnam facilis labore autem pariatur ducimus nemo error ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque architecto id, quasi saepe veritatis quia impedit in, beatae atque corrupti! Voluptas, facilis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias hic nisi modi amet quis aut sapiente exercitationem iste quasi. In?.................
                            </div>
                        </div>
                        <div className="overviewcontent flex justify-around items-center  hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center mt-3 cursor-target mb-10">
                            <div className='flex flex-col justify-center items-center'>
                                <div className="img1">
                                    <img src="/WhatsApp Image 2025-10-03 at 15.22.29_e94e2435.jpg" alt="" className=' rounded-xl max-w-[400px] max-md:w-[350px]' />
                                </div>
                                <div className='mt-5'>
                                    <Link href="/user/achivements3"><button className="cursor-target border border-gray-600 rounded-xl p-2">Learn More</button></Link>
                                </div>
                            </div>
                            <div className="details p-5 text-gray-400 w-[80%] ml-20 max-md:w-[100%] max-sm:ml-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, earum dolor natus hic optio tenetur omnis odio magnam facilis labore autem pariatur ducimus nemo error ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque architecto id, quasi saepe veritatis quia impedit in, beatae atque corrupti! Voluptas, facilis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias hic nisi modi amet quis aut sapiente exercitationem iste quasi. In?...........
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
