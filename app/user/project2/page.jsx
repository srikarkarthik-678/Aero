import React from 'react'

const page = () => {
    return (
        <div>
            <div className="project bg-black text-white font-title">
                <div className="preojectdetails">
                    <div className="flex justify-center items-center h-[85vh]  max-md:h-[55vh] max-sm:h-[47vh]">
                        <img src="/WhatsApp Image 2025-10-06 at 12.23.58_47c239d3.jpg" alt="" className='w-[700px] rounded-xl' />
                    </div>
                    <div className='flex flex-col justify-center items-center  p-5'>
                        <div className=' text-gray-400 rounded-xl'>
                            <p className='text-center w-[700px] max-md:w-[400px] max-sm:w-[330px]'> Our project is a lightweight, high-efficiency, remote-controlled aircraft designed for maximum payload fraction. As a hand-launched vehicle, it eliminates the weight and complexity of landing gear, allowing every gram of its structure to be dedicated to performance. The design is deliberately minimalist, propelled by a single, high-torque propeller optimized for thrust and efficiency. Stability and control are managed through a conventional tail with a single vertical stabilizer, which reduces drag and simplifies construction. The aircraft is piloted entirely via a remote control link, where servos actuate the control surfaces (rudder, elevator, and ailerons) based on the pilot's direct input.</p>
                            <p className='text-center w-[700px] mt-3 max-md:w-[400px] max-sm:w-[330px]'>The core of the design is its high-lift airfoil, engineered to generate significant lift at low speeds, enabling it to carry payloads far exceeding its own empty weight. This entire platform was engineered specifically for the SAE DDC Micro Class. The competition's primary challenge is to achieve the highest possible payload-to-weight ratio within strict dimensional constraints. Our hand-launch design and minimalistic single-prop configuration are direct strategies to minimize airframe weight. This allows us to maximize our score, which is almost entirely dependent on the payload lifted. This aircraft is a purpose-built solution focused purely on aerodynamic efficiency to conquer the specific challenge of the Micro Class.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page
