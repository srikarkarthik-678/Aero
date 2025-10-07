import React from 'react'

const page = () => {
    return (
        <div>
            <div className="project bg-black text-white font-title">
                <div className="preojectdetails">
                    <div className="flex justify-center items-center h-[85vh] max-md:h-[55vh] max-sm:h-[47vh]">
                        <img src="/WhatsApp Image 2025-10-03 at 15.21.26_fec45392.jpg" alt="" className='w-[700px] rounded-xl' />
                    </div>
                    <div className='flex flex-col justify-center items-center '>
                         <div className='p-5 rounded-xl text-gray-400'>
                            <p className='text-center w-[700px] max-md:w-[400px] max-sm:w-[330px]'>During a mission, the drone follows a pre-programmed flight path, and upon reaching the target, the Raspberry Pi signals a servo to deploy the package. Once the delivery is complete, the drone automatically initiates a 'Return-to-Launch' command, navigating back home for a safe landing. This project successfully integrates hardware and software to create a simple yet robust platform for automated aerial delivery, showcasing the power of modern autonomous systems.</p>
                            <p className='text-center w-[700px] mt-3 max-md:w-[400px] max-sm:w-[330px]'>This entire system was developed as a competitive entry for the SAE Aero Design Challenge (AADC). The competition's rules place a strong emphasis on building an aircraft with a high payload-to-weight ratio and executing precise, automated maneuvers. Our design prioritizes structural efficiency and aerodynamic performance to meet these demanding criteria. The autonomous payload drop and return capabilities are not just features but are essential for scoring high points in the mission demonstration phase. Ultimately, this project serves as a practical test of our engineering design to solve the complex challenges presented by the SAE AADC.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page
