import Navbar1 from "../Components/Navbar1"
import Footer1 from "../Components/Footer1"
export default function Layout({children})
{
    return(
        <>
            <div className="fixed top-0 left-0 w-full z-[9999] bg-black/60 backdrop-blur-md">
                <Navbar1/>
            </div>
            {children}
            <div>
                <Footer1 className="mt-10"/>
            </div>
        </>
    )
}
