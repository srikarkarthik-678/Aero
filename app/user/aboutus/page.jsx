"use client"
import React, { useState, useEffect, useRef } from 'react'
import DecryptedText from '@/app/Reactbits/Animations/decrypted'
import ElectricBorder from '@/app/Reactbits/Animations/Electric'
import ProfileCard from '@/app/Reactbits/Animations/profile'
import Cubes from '@/app/Reactbits/Animations/cube'
import TiltedCard from '@/app/Reactbits/Animations/profile'
import Particles from '@/app/Reactbits/Animations/Particles'
import { ChevronLeft, ChevronRight } from "lucide-react"
const Page = () => {
    const images =
    {
        Head: "/2_20251003_194613_0001.png",
        Logistics: "/10_20251003_194614_0009.png",
        R: "/5_20251003_194613_0004.png",
        Event: "/7_20251003_194613_0006.png",
        Logestics: "/10_20251003_194614_0009.png",
        Marketing: "/13_20251003_194614_0012.png",
        Social: "/15_20251003_194614_0014.png",
        Electrical: "/17_20251003_194614_0016.png",
        Finance: "/20_20251003_194614_0019.png",
        Software: "/21_20251003_194614_0020.png",
        Mechanical: "/23_20251003_194614_0022.png",
        Aerospace: "/25_20251003_194615_0024.png"
    }
    const sentence = ["Hey! This is Harsha Vardhan Reddy.Leadership is not about flying the highest — its about helping every wing lift together."]
    const sentence1 = ["Hey! This is Srikar Karthik.The best code doesnt just run — it takes flight with logic, precision, and imagination."]
    const sentence2 = ["Hey! This is Rishith.Power is nothing without direction — and every spark here drives innovation skyward."]
    const sentence3 = ["Hey! This is Manavendra Reddy.Perfection lies in the details — when every gear moves in harmony, flight becomes poetry."]
    const sentence4 = ["Hey! This is Mitansh.We dont just study the sky — we engineer paths through it"]
    const sentence5 = ["Hey! This is Aryan Goud.A strong foundation isnt built on ideas alone, but on the numbers that make them soar"]
    const sentence6 = ["Hey! This is Surya Pavan Reddy.Dreams dont spread on wings alone — they need stories that inspire others to take off too."]
    const sentence7 = ["Hey! This is Advait.Behind every successful mission lies flawless coordination — precision is our invisible engine"]
    const sentence8 = ["Hey! This is Koushik.We give wings to ideas by telling stories that travel faster than sound."]
    const sentence9 = ["Hey! This is Nithin.Great events are like flight plans — they demand vision, timing, and the courage to take off."]
    const sentence10 = ["Hey! This is Rishikesh.“R&D is the engine of discovery — turning questions into experiments, and experiments into breakthroughs."]
    const [index, setindex] = useState(0)
    const [text, settext] = useState("")
    const [menu, setmenu] = useState("Head")
    const scrollRef = useRef(null);
    useEffect(() => {
        if (menu == "Head") {
            if (index < sentence[0].length) {
                const time = setTimeout(() => {
                    setindex((prev) => prev + 1)
                }, 10);
                return () => clearTimeout(time);
            }
        }
        else if(menu=="Software")
        {
            if (index < sentence1[0].length) {
                const time = setTimeout(() => {
                    setindex((prev) => prev + 1)
                }, 10);
                return () => clearTimeout(time);
            }
        }
        else if(menu=="Electrical")
        {
            if (index < sentence2[0].length) {
                const time = setTimeout(() => {
                    setindex((prev) => prev + 1)
                }, 10);
                return () => clearTimeout(time);
            }
        }
        else if(menu=="Mechanical")
        {
            if (index < sentence3[0].length) {
                const time = setTimeout(() => {
                    setindex((prev) => prev + 1)
                }, 10);
                return () => clearTimeout(time);
            }
        }
        else if(menu=="Aerospace")
        {
            if (index < sentence4[0].length) {
                const time = setTimeout(() => {
                    setindex((prev) => prev + 1)
                }, 10);
                return () => clearTimeout(time);
            }
        }
        else if(menu=="Finance")
        {
            if (index < sentence5[0].length) {
                const time = setTimeout(() => {
                    setindex((prev) => prev + 1)
                }, 10);
                return () => clearTimeout(time);
            }
        }
        else if(menu=="Marketing")
        {
            if (index < sentence6[0].length) {
                const time = setTimeout(() => {
                    setindex((prev) => prev + 1)
                }, 10);
                return () => clearTimeout(time);
            }
        }
        else if(menu=="Logestics")
        {
            if (index < sentence7[0].length) {
                const time = setTimeout(() => {
                    setindex((prev) => prev + 1)
                }, 10);
                return () => clearTimeout(time);
            }
        }
        else if(menu=="Social")
        {
            if (index < sentence8[0].length) {
                const time = setTimeout(() => {
                    setindex((prev) => prev + 1)
                }, 10);
                return () => clearTimeout(time);
            }
        }
        else if(menu=="Event")
        {
            if (index < sentence9[0].length) {
                const time = setTimeout(() => {
                    setindex((prev) => prev + 1)
                }, 10);
                return () => clearTimeout(time);
            }
        }
        else if(menu=="R")
        {
            if (index < sentence10[0].length) {
                const time = setTimeout(() => {
                    setindex((prev) => prev + 1)
                }, 10);
                return () => clearTimeout(time);
            }
        }

    }, [index])
    useEffect(() => {
        setindex(0)
    }, [menu])

    useEffect(() => {
        if(menu=="Head")
        {
            settext(sentence[0].substring(0, index))
        }
        else if(menu=="Software")
        {
            settext(sentence1[0].substring(0, index))
        }
        else if(menu=="Electrical")
        {
            settext(sentence2[0].substring(0, index))
        }
        else if(menu=="Mechanical")
        {
            settext(sentence3[0].substring(0, index))
        }
        else if(menu=="Aerospace")
        {
            settext(sentence4[0].substring(0, index))
        }
        else if(menu=="Finance")
        {
            settext(sentence5[0].substring(0, index))
        }
        else if(menu=="Marketing")
        {
            settext(sentence6[0].substring(0, index))
        }
        else if(menu=="Logestics")
        {
            settext(sentence7[0].substring(0, index))
        }
        else if(menu=="Social")
        {
            settext(sentence8[0].substring(0, index))
        }
        else if(menu=="Event")
        {
            settext(sentence9[0].substring(0, index))
        }
        else if(menu=="R")
        {
            settext(sentence10[0].substring(0, index))
        }
        
    }, [index, menu])
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -150 : 150;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };
    return (
        <div>
            <div className="about bg-black text-white  font-title">
                <div className="aboutus">

                </div>
                <div className="backgroundimg w-[100%] h-[60vh] bg-cover bg-center " style={{ backgroundImage: "url('/WhatsApp Image 2025-08-23 at 19.00.14_7dbffdb6.jpg')" }}>
                    <div className="info flex justify-start items-center h-[80vh]">
                        <div className="aboutUs flex flex-col pl-5">
                            <div className="ab text-5xl text-red-600 font-bold">
                                About Us
                            </div>
                            <div className="lorem w-[500px] mt-2 font-medium ttext-white max-sm:w-[300px] text-gray-100">
                                We are a passionate team of innovators and problem-solvers committed to creating meaningful solutions. With diverse expertise in technology, design, and strategy, we work together to transform ideas into impactful projects.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Meeth">
                    <div className="meetdetails flex flex-col justify-center items-center mt-6 gap-1">
                        <div className="meetheteam text-2xl">
                            Meet The Team
                        </div>
                        <div className="line h-[2px] w-[140px] bg-red-600">

                        </div>
                        <div className="mt-4 px-5 w-[1500px] max-2xl:w-[1000px] max-lg:w-[700px] max-md:w-[550px] max-sm:w-[100%]">
                            Our Aero Club team is a dynamic group of aerospace enthusiasts, each contributing uniquely to the club’s success. The Head oversees all club activities, ensuring smooth coordination and vision alignment. The Software Head manages simulations, coding projects, and technical tools for drones and aircraft systems. The Electrical Head handles circuits, power systems, and onboard electronics for various projects. The Mechanical Head leads structural design, fabrication, and assembly of aircraft and rockets. The Aerospace Head focuses on flight dynamics, aerodynamics, and space-related research. The Finance Head manages budgets, sponsorships, and resource allocation. The Marketing Head promotes the club’s initiatives, branding, and outreach. The Logistics Head ensures smooth procurement, material management, and event arrangements. The Social Media Head documents club activities and handles online presence. The Event Management Head organizes workshops, competitions, and guest sessions. The R & D Head drives innovation, prototyping, and experimental projects.
                        </div>
                    </div>
                    <div className="wanttoknow">
                        <div className="flexcol flex flex-col justify-center items-center min-h-screen gap-4 select-none">
                            <div className='flex flex-col justify-center items-center mt-4 gap-1'>
                                <div className="meetthecre text-2xl">
                                    Meet The Heads
                                </div>
                                <div className='line h-[2px] w-[140px] bg-red-500'>

                                </div>
                            </div>
                            <div className="img">
                                <TiltedCard
                                    imageSrc={images[menu]}
                                    containerHeight="460px"
                                    containerWidth="360px"
                                    imageHeight="460px"
                                    imageWidth="360px"
                                    rotateAmplitude={12}
                                    scaleOnHover={1.2}
                                    showMobileWarning={false}
                                    showTooltip={true}
                                    displayOverlayContent={true}
                                    className="max-sm:w-[300px]"
                                />
                            </div>
                            <div className="relative mt-7 w-full">
                                <button
                                    onClick={() => scroll("left")}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white z-10 2xl:hidden"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <div
                                    ref={scrollRef}
                                    className="blankice h-[57px] bg-gray-800 text-gray-300 rounded-full p-2 px-10 flex items-center overflow-x-auto sm:overflow-x-hidden space-x-2 scrollbar-hide"
                                >
                                    <div
                                        className={`${menu == "Head"
                                            ? "bg-red-600 text-white font-medium"
                                            : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                                        onClick={() => setmenu("Head")}
                                    >
                                        Head
                                    </div>
                                    <div
                                        className={`${menu == "Software"
                                            ? "bg-red-600 text-white font-medium"
                                            : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                                        onClick={() => setmenu("Software")}
                                    >
                                        Software
                                    </div>
                                    <div
                                        className={`${menu == "Electrical"
                                            ? "bg-red-600 text-white font-medium"
                                            : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                                        onClick={() => setmenu("Electrical")}
                                    >
                                        Electrical
                                    </div>
                                    <div
                                        className={`${menu == "Mechanical"
                                            ? "bg-red-600 text-white font-medium"
                                            : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                                        onClick={() => setmenu("Mechanical")}
                                    >
                                        Mechanical
                                    </div>
                                    <div
                                        className={`${menu == "Aerospace"
                                            ? "bg-red-600 text-white font-medium"
                                            : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                                        onClick={() => setmenu("Aerospace")}
                                    >
                                        Aerospace
                                    </div>
                                    <div
                                        className={`${menu == "R"
                                            ? "bg-red-600 text-white font-medium"
                                            : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                                        onClick={() => setmenu("R")}
                                    >
                                        R & D
                                    </div>
                                    <div
                                        className={`${menu == "Event"
                                            ? "bg-red-600 text-white font-medium"
                                            : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                                        onClick={() => setmenu("Event")}
                                    >
                                        Event Management
                                    </div>
                                    <div
                                        className={`${menu == "Social"
                                            ? "bg-red-600 text-white font-medium"
                                            : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                                        onClick={() => setmenu("Social")}
                                    >
                                        Social Media
                                    </div>
                                    <div
                                        className={`${menu == "Marketing"
                                            ? "bg-red-600 text-white font-medium"
                                            : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                                        onClick={() => setmenu("Marketing")}
                                    >
                                        Marketing
                                    </div>
                                    <div
                                        className={`${menu == "Logestics"
                                            ? "bg-red-600 text-white font-medium"
                                            : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                                        onClick={() => setmenu("Logestics")}
                                    >
                                        Logestics
                                    </div>
                                    <div
                                        className={`${menu == "Finance"
                                            ? "bg-red-600 text-white font-medium"
                                            : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                                        onClick={() => setmenu("Finance")}
                                    >
                                        Finance
                                    </div>
                                    <div
                                        className={`${menu == "Others"
                                            ? "bg-red-600 text-white font-medium"
                                            : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                                        onClick={() => setmenu("Others")}
                                    >
                                        Others Head
                                    </div>
                                </div>
                                <button
                                    onClick={() => scroll("right")}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white z-10 2xl:hidden"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                        {menu === "Head" && (
                            <div className='mx-16 p-5  rounded-md bg-gray-500/20'>
                                <DecryptedText text="Harsha Vardhan Reddy" animateOn="view" speed={100} maxIterations={30} characters="ABCD1234!?" className='text-2xl' />
                                <p className='mt-3 text-gray-400 '>{text}</p>
                            </div>
                        )}
                        {menu === "Software" && (
                            <div className='mx-16  p-5 rounded-md bg-gray-500/20  '>
                                <DecryptedText text="Srikar Karthik" animateOn="view" speed={100} maxIterations={30} characters="ABCD1234!?" className='text-2xl' />
                                <p className='mt-3 text-gray-400 '>{text}</p>
                            </div>
                        )}
                        {menu === "Electrical" && (
                            <div className='mx-16  p-5 rounded-md bg-gray-500/20'>
                                <DecryptedText text="Rishith" animateOn="view" speed={100} maxIterations={30} characters="ABCD1234!?" className='text-2xl' />
                                <p className='mt-3 text-gray-400 '>{text}</p>
                            </div>
                        )}
                        {menu === "Mechanical" && (
                            <div className='mx-16  p-5 rounded-md bg-gray-500/20'>
                                <DecryptedText text="Manavendra Reddy" animateOn="view" speed={100} maxIterations={30} characters="ABCD1234!?" className='text-2xl' />
                                <p className='mt-3 text-gray-400 '>{text}</p>
                            </div>
                        )}
                        {menu === "Aerospace" && (
                            <div className='mx-16  p-5 rounded-md bg-gray-500/20'>
                                <DecryptedText text="Mitansh" animateOn="view" speed={100} maxIterations={30} characters="ABCD1234!?" className='text-2xl' />
                                <p className='mt-3 text-gray-400 '>{text}</p>
                            </div>
                        )}
                        {menu === "Finance" && (
                            <div className='mx-16  p-5 rounded-md bg-gray-500/20'>
                                <DecryptedText text="Aryan Goud" animateOn="view" speed={100} maxIterations={30} characters="ABCD1234!?" className='text-2xl' />
                                <p className='mt-3 text-gray-400 '>{text}</p>
                            </div>
                        )}
                        {menu === "Marketing" && (
                            <div className='mx-16  p-5 rounded-md bg-gray-500/20'>
                                <DecryptedText text="Surya Pavan Reddy" animateOn="view" speed={100} maxIterations={30} characters="ABCD1234!?" className='text-2xl' />
                                <p className='mt-3 text-gray-400 '>{text}</p>
                            </div>
                        )}
                        {menu === "Logestics" && (
                            <div className='mx-16  p-5 rounded-md bg-gray-500/20'>
                                <DecryptedText text="Advait Reddy" animateOn="view" speed={100} maxIterations={30} characters="ABCD1234!?" className='text-2xl' />
                                <p className='mt-3 text-gray-400 '>{text}</p>
                            </div>
                        )}
                        {menu === "Social" && (
                            <div className='mx-16  p-5 rounded-md bg-gray-500/20'>
                                <DecryptedText text="Koushik" animateOn="view" speed={100} maxIterations={30} characters="ABCD1234!?" className='text-2xl' />
                                <p className='mt-3 text-gray-400 '>{text}</p>
                            </div>
                        )}
                        {menu === "Event" && (
                            <div className='mx-16  p-5 rounded-md bg-gray-500/20'>
                                <DecryptedText text="Nithin" animateOn="view" speed={100} maxIterations={30} characters="ABCD1234!?" className='text-2xl' />
                                <p className='mt-3 text-gray-400 '>{text}</p>
                            </div>
                        )}
                        {menu === "R" && (
                            <div className='mx-16  p-5 rounded-md bg-gray-500/20'>
                                <DecryptedText text="Rishikesh" animateOn="view" speed={100} maxIterations={30} characters="ABCD1234!?" className='text-2xl' />
                                <p className='mt-3 text-gray-400 '>{text}</p>
                            </div>
                        )}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page

