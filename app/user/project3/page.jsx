import React from 'react'

const page = () => {
    return (
        <div>
            <div className="project bg-black text-white font-title">
                <div className="preojectdetails">
                    <div className='flex flex-col justify-center items-center'>
                        <div className="flex justify-center items-center  h-[85vh]  max-md:h-[55vh] max-sm:h-[47vh] ">
                            <img src="/WhatsApp Image 2025-10-03 at 15.22.27_dbe25a4f.jpg" alt="" className='w-[700px] rounded-xl' />
                        </div>
                        <div className='flex flex-col justify-center items-center  p-5 '>
                            <div className='  text-gray-400 rounded-xl'>
                                <p className='text-center w-[700px] max-md:w-[400px] max-sm:w-[330px]'>This project centers on a large-scale, robust Unmanned Aerial Vehicle (UAV) built for heavy-lift missions and conventional ground operations. Unlike its smaller counterpart, this is a ground take-off aircraft, equipped with a sturdy landing gear system designed to handle significant operational loads. Propulsion is provided by a powerful engine capable of lifting a substantial payload off the runway. The aircraft's flight control system is manually operated by a skilled pilot using a remote controller. It features a sophisticated control surface layout, including multiple ailerons for superior roll authority and precise maneuverability, which is critical when flying with heavy and potentially unstable payloads.</p>
                                <p className='text-center w-[700px] mt-3 max-md:w-[400px] max-sm:w-[330px]'>Directional stability is maintained by a large vertical stabilizer, essential for a vehicle of this size. The airframe has been structurally reinforced to withstand the stresses of takeoff, flight with a heavy load, and landing. This aircraft was designed to compete in the SAE DDC Regular Class, where the objective is to lift the maximum absolute payload. The design choices, such as the robust landing gear and complex aileron system, are necessary to manage the sheer scale and power required by this category. Success in this class is a testament to both strong aerodynamic design and exceptional piloting skill. Our UAV is engineered to provide the pilot with a stable and responsive platform needed to safely fly the mission and maximize the payload score.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page
