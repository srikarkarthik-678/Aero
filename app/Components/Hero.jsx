
import React, { useState, useEffect } from "react";

const Hero = () => {
    const sentences = [
        "We build innovative designs.",
        "We dream, we create, we fly.",
        "Engineering beyond limits."
    ];

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (index===sentences.length) {
            setIndex(0);
        }

        if (
            subIndex===sentences[index].length + 1 &&
            !deleting
        ) {
            setTimeout(() => setDeleting(true), 2000);
            return;
        }

        if (subIndex===0&&deleting) {
            setDeleting(false);
            setIndex((prev) => (prev+1)%sentences.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev+(deleting?-1:1));
        }, deleting?50:100);

        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting]);

    useEffect(() => {
        setText(sentences[index].substring(0, subIndex));
    }, [subIndex, index]);

    return (
        <div className="herosection bg-transparent text-white font-title flex justify-center items-center">
            <div className="aerodetails flex justify-between items-center h-[70vh] w-[100%] px-14 py-2 max-md:h-[90vh] max-sm:px-6 max-sm:py-1 max-sm:h-[95vh] max-sm:w-[350px]">
                <div className="select flex justify-between w-[100%] items-center bg-neutral-800 p-10 rounded-xl max-lg:flex max-lg:flex-col max-sm:p-2 max-sm:w-[300px]">
                    <div className="Aerotitle flex flex-col max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center ">
                        <div className="team text-2xl text-gray-600 select-none max-sm:text-base ">
                            Team
                        </div>
                        <div className="Aero text-6xl text-red-600 font-semibold select-none font-Aud max-md:text-3xl">
                            Aero...
                        </div>
                        <div className="typed-text text-xl text-gray-400 mt-4 font-mono select-none max-sm:text-base">
                            {text}
                            <span className="blinking-cursor">|</span>
                        </div>
                    </div>
                    <div className='flexright text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-xl text-center lg:text-left max-lg:mt-5 max-sm:w-[95%]'>
                       Aero Club is a vibrant community of aerospace engineering enthusiasts exploring flight, space, and aeronautical innovations. We bring together creative minds passionate about aircraft design, rocketry, drones, and aerodynamics. Through workshops, projects, and competitions, members gain hands-on experience in building, testing, and simulating aerospace systems.
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Hero

