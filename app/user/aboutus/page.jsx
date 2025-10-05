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
  const sentence = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita cumque eaque delectus at iusto nam dolore ratione ipsam ex, distinctio, error ducimus nihil eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quibusdam?"]
  const [index, setindex] = useState(0)
  const [text, settext] = useState("")
  const [menu, setmenu] = useState("Head")
  const scrollRef = useRef(null);
  useEffect(() => {
    if (index < sentence[0].length) {
      const time = setTimeout(() => {
        setindex((prev) => prev + 1)
      }, 10);
      return () => clearTimeout(time);
    }
  }, [index, menu])
  useEffect(() => {
    setindex(0)
  }, [menu])

  useEffect(() => {
    settext(sentence[0].substring(0, index))
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
        <div className="backgroundimg w-[100%] h-[60vh] bg-cover bg-center " style={{ backgroundImage: "url('/WhatsApp Image 2025-08-23 at 19.00.14_fc1cf94c.jpg')" }}>
          <div className="info flex justify-start items-center h-[80vh]">
            <div className="aboutUs flex flex-col pl-5">
              <div className="ab text-5xl text-red-600 font-bold">
                About Us
              </div>
              <div className="lorem w-[500px] mt-2 font-medium ttext-white max-sm:w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit aliquam quo sed ipsum nam esse, impedit provident reiciendis reprehenderit in, quaerat quibusdam.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam saepe, magni voluptates eveniet laboriosam est praesentium esse provident. Ratione voluptatibus eaque quasi exercitationem aut accusantium? Voluptates recusandae doloribus magnam totam saepe repellendus tenetur consequuntur ratione ipsam deserunt expedita, quasi temporibus id vero non aut, quibusdam delectus sapiente? Porro impedit doloribus distinctio voluptatum. Voluptates ipsum impedit inventore, quo animi unde distinctio amet eveniet eligendi, cum autem cumque, aut nulla magnam aperiam saepe debitis quam perspiciatis ipsa? Laudantium repudiandae error modi reiciendis, pariatur blanditiis, perferendis distinctio quibusdam tempore praesentium recusandae nesciunt deleniti architecto! Voluptates, vel quisquam doloribus adipisci repudiandae aliquam corporis totam deleniti nam veniam dolore mollitia modi blanditiis sit consectetur explicabo omnis sed accusantium perferendis in natus dolores beatae dolor est.
            </div>
            <div className="mt-4 px-5 w-[1500px] max-2xl:w-[1000px] max-lg:w-[700px] max-md:w-[550px] max-sm:w-[100%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate modi nesciunt molestiae suscipit perspiciatis eaque minima impedit aspernatur illo blanditiis dolores itaque maxime nisi ducimus quia consequatur, incidunt praesentium dolorum exercitationem doloremque facilis. Ullam odit voluptas consequuntur id voluptatem corporis facere error esse suscipit officia hic cum et ea laborum nesciunt minima itaque ipsum nulla deleniti consectetur quisquam eaque, accusamus modi dignissimos. Totam soluta, architecto aperiam vel ullam, saepe libero, reiciendis consequuntur quo ut cum corporis harum illo. Modi totam amet hic odit dignissimos ut, architecto veniam cupiditate recusandae eos debitis, iste quod quia laborum at porro optio non deleniti, eius quis! Quisquam, sequi. Consequuntur sapiente minus pariatur excepturi, ad iste dicta perspiciatis, saepe provident sint velit suscipit dolorem iure!
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
                    className={`${menu == "Finance"
                      ? "bg-red-600 text-white font-medium"
                      : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                    onClick={() => setmenu("Finance")}
                  >
                    Finance
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
                    className={`${menu == "Social"
                      ? "bg-red-600 text-white font-medium"
                      : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                    onClick={() => setmenu("Social")}
                  >
                    Social Media
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
                    className={`${menu == "R"
                      ? "bg-red-600 text-white font-medium"
                      : "hover:bg-red-600 hover:text-white"} px-4 py-2 rounded-full whitespace-nowrap cursor-pointer transition-all`}
                    onClick={() => setmenu("R")}
                  >
                    R & D
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
