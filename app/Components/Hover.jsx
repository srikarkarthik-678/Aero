import React from 'react'
import Cubes from '../Reactbits/Animations/cube'

const Hover = () => {
    return (
        <div className="hover">
            <div className="hoverdetai">
                <div className="hovercontent font-title">
                    <div className="flex justify-between items-center gap-4 ml-10  p-5 rounded-xl w-[100%] max-md:flex max-md:flex-col-reverse max-md:justify-center max-md:items-center max-md:ml-0">
                        <div className='text-gray-400 text-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe suscipit unde nobis eaque. Ipsum, reprehenderit pariatur eius provident fugit vero, alias perspiciatis, voluptas sequi adipisci libero nemo veniam blanditiis aliquid. Rem necessitatibus ipsam ratione soluta, sunt natus culpa itaque commodi.</div>
                        <div className="w-[150vw]  flex justify-center items-center max-md:w-[50vw]">
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
