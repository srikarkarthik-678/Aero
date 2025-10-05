import Navbar1 from "../Components/Navbar1"
import Footer1 from "../Components/Footer1"
export default function Layout({children})
{
    return(
        <>
            <div>
                <Navbar1/>
            </div>
            {children}
            <div>
                <Footer1 className="mt-10"/>
            </div>
        </>
    )
}