import React, { useEffect, useState } from 'react'

const Overview = () => {
    const [first, setfirst] = useState(0)
    const [second, setsecond] = useState("")
    const [third, setthird] = useState("")
    const L1 = []
    return (
        <div>
            <div className="overviedetails bg-transparent text-white font-title p-16">
                <div className="overviewcontent flex justify-around items-center  hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-sm:border-hidden">
                    <div className="img1">
                        <img src="1753397173229_blog_pic_3.png" alt="" className=' rounded-xl max-w-[400px] max-md:w-[300px]'/>
                    </div>
                    <div className="details p-5 text-gray-400 w-[700px] ml-20 max-md:w-[400px] max-md:ml-2 max-md:mt-5 max-sm:w-[350px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, earum dolor natus hic optio tenetur omnis odio magnam facilis labore autem pariatur ducimus nemo error ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque architecto id, quasi saepe veritatis quia impedit in, beatae atque corrupti! Voluptas, facilis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias hic nisi modi amet quis aut sapiente exercitationem iste quasi. In?
                    </div>
                </div>
                 <div className="overviewcontent flex flex-row-reverse justify-around items-center mt-10 hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col max-sm:border-hidden">
                    <div className="img1">
                        <img src="1753426811620_blog_pic_5.png" alt="" className=' rounded-xl max-w-[400px] max-md:w-[300px]'/>
                    </div>
                    <div className="details p-5 text-gray-400 w-[700px] ml-20 max-md:w-[400px] max-md:ml-2 max-md:mt-5 max-sm:w-[350px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, earum dolor natus hic optio tenetur omnis odio magnam facilis labore autem pariatur ducimus nemo error ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque architecto id, quasi saepe veritatis quia impedit in, beatae atque corrupti! Voluptas, facilis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias hic nisi modi amet quis aut sapiente exercitationem iste quasi. In?
                    </div>
                </div>
                 <div className="overviewcontent flex justify-around items-center mt-10  hover:bg-gray-500/20  p-5 rounded-xl border border-gray-400/30 max-lg:flex max-lg:flex-col  max-sm:border-hidden">
                    <div className="img1">
                        <img src="1753451611737_blog_pic_12.png" alt="" className=' rounded-xl max-w-[400px] max-sm:w-[300px]'/>
                    </div>
                    <div className="details p-5 text-gray-400 w-[700px] ml-20 max-md:w-[400px] max-md:ml-2 max-md:mt-5 max-sm:w-[350px]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, earum dolor natus hic optio tenetur omnis odio magnam facilis labore autem pariatur ducimus nemo error ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque architecto id, quasi saepe veritatis quia impedit in, beatae atque corrupti! Voluptas, facilis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias hic nisi modi amet quis aut sapiente exercitationem iste quasi. In?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
