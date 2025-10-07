import React from 'react'
import Cubes from '../Reactbits/Animations/cube'

const Hover = () => {
    return (
        <div className="hover">
            <div className="hoverdetai">
                <div className="hovercontent font-title">
                    <div className="flex justify-between items-center gap-4 ml-10  p-5 rounded-xl w-[100%] max-md:flex max-md:flex-col-reverse max-md:justify-center max-md:items-center max-md:ml-0">
                        <div className='text-gray-400 text-md'>Aero Club helps members build strong profiles in aerospace engineering. Through projects, workshops, and competitions in aircraft design, drones, and rocketry, members gain hands-on experience and technical skills. The club promotes teamwork, problem-solving, and leadership, helping students showcase innovation.</div>
                        <div className="w-[150vw]  flex justify-center items-center max-md:w-[70vw]">
                            <Cubes
                                gridSize={8}
                                maxAngle={60}
                                radius={4}
                                borderStyle="2px dashed #5227FF"
                                faceColor="#1a1a2e"
                                rippleColor="#ff6b6b"
                                rippleSpeed={1.5}
                                autoAnimate={true}
                                rippleOnClick={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hover

