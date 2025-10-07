import React from 'react'

const page = () => {
    return (
        <div>
            <div className="project bg-black text-white font-title">
                <div className="preojectdetails">
                    <div className="flex justify-center items-center h-[85vh] max-md:h-[55vh] max-sm:h-[47vh]">
                        <img src="/WhatsApp Image 2025-10-03 at 15.21.27_bc8b2158.jpg" alt="" className='w-[700px] rounded-xl max-md:w-[400px] max-sm:w-[350px]' />
                    </div>
                    <div className='flex flex-col justify-center items-center '>
                        <div className='p-5 rounded-xl text-gray-400'>
                            <p className='text-center w-[700px] max-md:w-[400px] max-sm:w-[330px]'> Our project focused on creating a fully autonomous delivery drone capable of navigating complex missions entirely on its own. The core objective was to design a system that could receive specific GPS coordinates, fly to that location, ascend to a predetermined altitude to release a payload, and then reliably return to its original launch point. The drone's intelligence is built on a dual-computer architecture. A Pixhawk flight controller serves as the primary pilot, managing flight stability and low-level controls. It works in tandem with a Raspberry Pi, which acts as the mission commander, processing the high-level logic for navigation and payload release..</p>
                            <p className='text-center w-[700px] mt-3 max-md:w-[400px] max-sm:w-[330px]'>Our 
                                During a mission, the drone follows a pre-programmed flight path, and upon reaching the target, the Raspberry Pi signals a servo to deploy the package. Once the delivery is complete, the drone automatically initiates a 'Return-to-Launch' command, navigating back home for a safe landing. This project successfully integrates hardware and software to create a simple yet robust platform for automated aerial delivery, showcasing the power of modern autonomous systems.</p>
                            <p className='text-center w-[700px] mt-3 max-md:w-[400px] max-sm:w-[330px]'>This entire system was developed as a competitive entry for the SAE Aero Design Challenge (AADC). The competition's rules place a strong emphasis on building an aircraft with a high payload-to-weight ratio and executing precise, automated maneuvers. Our design prioritizes structural efficiency and aerodynamic performance to meet these demanding criteria. The autonomous payload drop and return capabilities are not just features but are essential for scoring high points in the mission demonstration phase. Ultimately, this project serves as a practical test of our engineering design to solve the complex challenges presented by the SAE AADC.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page
