import { Link } from "react-router";
import NavButton from "./components/common/button/navbutton";


export default function Navbar({setContactModal}:any) {


    return <div 
        className='
            w-full 
            h-[150px] xs:h-[120px] lg:h-[90px]
            bg-primary text-secondary
            px-[50px] py-[20px] lg:py-[10px] gap-[20px] lg:gap-[0px]
            flex flex-col lg:flex-row items-center
        '
    >
        <Link to='/' className='w-full text-beeg h-fit text-center lg:text-start leading-[50%] a-hover'>FunLearn</Link>
        <div 
            className='
                h-full p-[0px] lg:p-[10px] 
                grid grid-cols-2 
                xs:flex xs:flex-row xs:justify-center lg:justify-end 
                gap-[10px] sm:gap-[20px] md:gap-[40px] 
                items-center w-full lg:w-fit 
            '
        >
            <Link to="/plans" className="text-smol nav-sizing w-full text-center xs:w-fit a-hover">Plans</Link>
            <Link to="/tutors" className="text-smol nav-sizing w-full text-center xs:w-fit a-hover">Tutors</Link>
            <Link to="/about-us" className="text-smol nav-sizing w-full text-center xs:w-fit a-hover">About Us</Link>
            <NavButton onClick={setContactModal}>Contact Us</NavButton>
            {/* <Link to="/contact-us" className="text-smol nav-sizing w-full text-center xs:w-fit a-hover">Contact Us</Link> */}
        </div>
        
    </div>
}