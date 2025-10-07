import React from 'react'
import TargetCursor from '@/app/Reactbits/Animations/Target'
import Link from 'next/link'
const page = () => {
    return (
        <div className='bg-black text-white min-h-screen'>
            <div className='max-md:hidden'>
                <TargetCursor
                    spinDuration={2}
                    hideDefaultCursor={true}
                    className=""
                />
            </div>

            <div className="about bg-black text-white  font-title">
                <div className="aboutus">
                </div>
                <div className="backgroundimg w-[100%] h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/pexels-photo-13201819.webp')" }}>
                    <div className="info flex justify-start items-center h-[80vh]">
                        <div className="aboutUs flex flex-col pl-5">
                            <div className="ab text-5xl text-white font-bold">
                                Projects
                            </div>
                            <div className="lorem w-[500px] mt-2 font-medium text-gray-400 max-sm:w-[100%]">
                                Our projects reflect our drive to innovate, collaborate, and make a difference. From developing cutting-edge applications to organizing impactful campus initiatives, each project showcases our creativity and teamwork.
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div className="projects-section">
                    <div className="projectscont flex flex-col items-center justify-center mt-7 gap-1 px-14">
                        <div className='text-3xl'>Projects</div>
                        <div className="line h-[1px] w-[90px] bg-red-600">

                        </div>
                        <div className="overviewcontent flex justify-around items-center  hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center mt-7 cursor-target">
                            <div className='flex flex-col justify-center items-center'>
                                <div className="img1">
                                    <img src="/WhatsApp Image 2025-10-03 at 15.21.27_bc8b2158.jpg" alt="" className=' rounded-xl max-w-[400px] max-md:w-[200px]' />
                                </div>
                                <div className='mt-5'>
                                    <Link href="/user/project1"><button className="cursor-target border border-gray-600 rounded-xl p-2">Learn More</button></Link>
                                </div>
                            </div>
                            <div className="details p-5 text-gray-400 w-[80%] ml-20 max-md:w-[350px] max-sm:ml-0 max-[365px]:w-[300px]">
                                Our project focused on creating a fully autonomous delivery drone capable of navigating complex missions entirely on its own. The core objective was to design a system that could receive specific GPS coordinates, fly to that location, ascend to a predetermined altitude to release a payload, and then reliably return to its original launch point. The drone's intelligence is built on a dual-computer architecture. A Pixhawk flight controller serves as the primary pilot, managing flight stability and low-level controls. It works in tandem with a Raspberry Pi, which acts as the mission commander, processing the high-level logic for navigation and payload release.
                            </div>
                        </div>
                        <div className="overviewcontent flex flex-row-reverse justify-around items-center mt-10 hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col mt-3 cursor-target">
                            <div className='flex flex-col justify-center items-center'>
                                <div className="img1">
                                    <img src="/WhatsApp Image 2025-10-06 at 12.23.58_47c239d3.jpg" alt="" className=' rounded-xl max-w-[400px] max-md:w-[200px]' />
                                </div>
                                <div className='mt-5'>
                                    <Link href="/user/project2"><button className="cursor-target border border-gray-600 rounded-xl p-2">Learn More</button></Link>
                                </div>
                            </div>
                            <div className="details p-5 text-gray-400 w-[80%] ml-20 max-md:w-[350px] max-sm:ml-0 max-[365px]:w-[300px]">
                                Our project is a lightweight, high-efficiency, remote-controlled aircraft designed for maximum payload fraction. As a hand-launched vehicle, it eliminates the weight and complexity of landing gear, allowing every gram of its structure to be dedicated to performance. The design is deliberately minimalist, propelled by a single, high-torque propeller optimized for thrust and efficiency. Stability and control are managed through a conventional tail with a single vertical stabilizer, which reduces drag and simplifies construction. The aircraft is piloted entirely via a remote control link, where servos actuate the control surfaces (rudder, elevator, and ailerons) based on the pilot's direct input.
                            </div>
                        </div>
                        <div className="overviewcontent flex justify-around items-center  hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center mt-3 cursor-target mb-10">
                            <div className='flex flex-col justify-center items-center'>
                                <div className="img1">
                                    <img src="/WhatsApp Image 2025-10-03 at 15.22.27_dbe25a4f.jpg" alt="" className=' rounded-xl max-w-[400px] max-md:w-[200px]' />
                                </div>
                                <div className='mt-5'>
                                    <Link href="/user/project3"><button className="cursor-target border border-gray-600 rounded-xl p-2">Learn More</button></Link>
                                </div>
                            </div>
                            <div className="details p-5 text-gray-400 w-[80%] ml-20 max-md:w-[350px] max-sm:ml-0 max-[365px]:w-[300px]">
                                This project centers on a large-scale, robust Unmanned Aerial Vehicle (UAV) built for heavy-lift missions and conventional ground operations. Unlike its smaller counterpart, this is a ground take-off aircraft, equipped with a sturdy landing gear system designed to handle significant operational loads. Propulsion is provided by a powerful engine capable of lifting a substantial payload off the runway. The aircraft's flight control system is manually operated by a skilled pilot using a remote controller. It features a sophisticated control surface layout, including multiple ailerons for superior roll authority and precise maneuverability, which is critical when flying with heavy and potentially unstable payloads.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page
