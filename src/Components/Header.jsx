import React from 'react'
import image from '../assets/images/logo.svg'
import { useNavigate } from 'react-router-dom'
import { FiPhone,FiMail } from "react-icons/fi";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {

    const navigate = useNavigate();
    const clickAbout = ()=>{
        navigate("/about")
    }

    const clickMenu = ()=>{
        navigate("/menu")        
    }

    const clickPage = ()=>{
        navigate("/pages")
    }

    const clickContact = ()=>{
        navigate("/contact")
    }
     const clickhome = ()=>{
        navigate("/")
    }

    const bookATablebtn =()=>{
        navigate("/bookaTable");
    }
  return (
    <>
    <div className='bg-[#474747] hidden md:flex justify-between items-center gap-5 text-[#F9F9F7] font-dm font-normal px-16 py-2 '>

    {/* mail & numbers */}

    <div className='flex items-center gap-10'>
    <div className='flex gap-3 justify-center items-center'>
        <FiPhone className='h-5 cursor-pointer hover:scale-90 transition-all duration-300'/><span className='cursor-pointer hover:translate-y-1 transition-all duration-300'>(414) 857 - 0107</span>
    </div>
    <div className='flex gap-3 justify-center items-center'>
        <FiMail className='h-5 cursor-pointer hover:scale-90 transition-all duration-300'/><span className='cursor-pointer hover:translate-y-1 transition-all duration-300'>yummy@bistrobliss</span>
    </div>
    </div>

    {/* social icons */}

<div className='flex justify-center items-center gap-3'>
    <a href="#" className='h-5 rounded-full cursor-pointer hover:scale-90 transition-all duration-300'><FaTwitter/></a>
    <a href="#" className='h-5 cursor-pointer hover:scale-90 transition-all duration-300'><FaFacebookF/></a>
    <a href="#" className='h-5 cursor-pointer hover:scale-90 transition-all duration-300'><FaInstagram/></a>
    <a href="#" className='h-5 cursor-pointer hover:scale-90 transition-all duration-300'><FaGithub/></a>
</div>

    </div>

    {/* navigations & buttons */}
      <div className='flex justify-between  items-center gap-5 px-3 md:px-6 xl:px-16 py-2 font-medium text-[#2C2F24] '> 
        
        {/* navigation */}
        
            <div>
                <img src={image} alt="logo" onClick={clickhome} className='cursor-pointer h-5 md:h-9 object-cover'/>
            </div>
            <div className='hidden lg:flex justify-center items-center gap-5'>
                <p className='cursor-pointer  hover:bg-[#DBDFD0] rounded-3xl px-4 py-1 ' onClick={clickhome}>Home</p>
       <div onClick={clickAbout} className='cursor-pointer hover:bg-[#DBDFD0] rounded-3xl px-4 py-1' >About</div>
       <div onClick={clickMenu} className='cursor-pointer hover:bg-[#DBDFD0] rounded-3xl px-4 py-1' >Menu</div>
       <div onClick={clickPage} className='cursor-pointer hover:bg-[#DBDFD0] rounded-3xl px-4 py-1' >Pages</div>
       <div onClick={clickContact} className='cursor-pointer hover:bg-[#DBDFD0] rounded-3xl px-4 py-1'>Contact</div>
            </div>
    
    {/* book a table button */}
    <div className='flex justify-center items-center gap-5'>
        <button onClick={bookATablebtn} className='border border-[#2C2F24] rounded-3xl py-1 px-2 md:py-3 md:px-6 text-sm md:text-base cursor-pointer hover:bg-gray-200 transition-all duration-300  w-fit'>Book A Table</button>
    <GiHamburgerMenu className='lg:hidden h-5 md:h-7  cursor-pointer'/>
    </div>
    </div>
    
    </>
  )
}

export default Header
