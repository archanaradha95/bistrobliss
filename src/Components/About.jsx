import React from 'react'
import Header from './Header'
import image from '../assets/images/about.svg'
import { FiPhone,FiMail} from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Footer from './Footer';


const About = () => {

  const deliveryData = [
  {
    "icon": "/assets/images/restaurant-menu-about.svg",
    "alt": "restaurant-menu",
    "title": "Multi Cuisine",
    "description": "In the new era of technology we look in the future with certainty life."
  },
  {
    "icon": "/assets/images/easytoorder-about.svg",
    "alt": "easytoorder",
    "title": "Multi Cuisine",
    "description": "In the new era of technology we look in the future with certainty life."
  },
  {
    "icon": "/assets/images/freedelivery-about.svg",
    "alt": "freedelivery",
    "title": "Multi Cuisine",
    "description": "In the new era of technology we look in the future with certainty life."
  }
];


const guestData = [
  {
    "value": "3",
    "label": "Locations"
  },
  {
    "value": "1995",
    "label": "Founded"
  },
  {
    "value": "65+",
    "label": "Staff Members"
  },
  {
    "value": "100%",
    "label": "Satisfied Customers"
  }
];

const reviewData = [
  {
    id: 1,
    title: "“The best restaurant”",
    description:
      "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    image: "/assets/images/review1.svg",
    alt: "customer",
    name: "Sophire Robson",
    location: "Los Angeles, CA"
  },
  {
    id: 2,
    title: "“Simply delicious”",
    description:
      "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    image: "/assets/images/review2.svg",
    alt: "customer",
    name: "Matt Cannon",
    location: "San Diego, CA"
  },
  {
    id: 3,
    title: "“One of a kind restaurant”",
    description:
      "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    image: "/assets/images/review3.svg",
    alt: "customer",
    name: "Andy Smith",
    location: "San Francisco, CA"
  }
];


  return (
    <div>
     <Header/>
      {/* <h3 className='font-bold text-center text-2xl my-10'>About - Us</h3> */}

      {/* about us */}

      <div className='flex flex-col flex-grow lg:flex-row justify-center items-center gap-5 p-2 md:px-10 md:py-5 xl:px-20 xl:py-15'>
        <div className='w-full lg:w-1/2 relative'>
          <img src={image} alt="aboutus" className='object-cover w-full h-[300px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]'/>
          <div className="bg-[#474747] absolute right-0 bottom-0 lg:left-20 lg:top-40 xl:left-40 xl:top-60 text-white space-y-2 md:space-y-3 w-fit md:w-[300px] md:h-[230px] p-2 md:p-5">
                    <p className="font-bold text-base md:text-xl">Come and visit us</p>
                    <div className="flex gap-3 items-center">
                        <FiPhone/>
                        <p className="text-[#F9F9F7] font-normal text-sm md:text-base">(414) 857 - 0107</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FiMail/>
                        <p className="text-[#F9F9F7] font-normal text-sm md:text-base">happytummy@restaurant.com</p>
                    </div>
                    <div className="flex gap-3 items-center m-w-sm">
                        <SlLocationPin className='h-7 w-7 '/>
                        <p className="text-[#F9F9F7] font-normal text-sm md:text-base ">837 W. Marshall Lane Marshalltown, IA
                            50158, Los Angeles</p>
                    </div>
                </div>
        </div>

        {/* text area */}

        <div className="w-full md:w-[500px] text-[#2C2F24] space-y-3 md:space-y-5">
                <h3 className="font-playfair font-medium text-2xl md:text-3xl lg:text-5xl leading-snug">We provide healthy
                    food for your family.</h3>
                <p className="font-medium text-base md:text-xl">Our story began with a vision to create a unique dining
                    experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's
                    rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                <p className="text-[#414536] text-sm md:text-base font-normal">At place, we believe that dining is not just
                    about food, but also about the overall experience. Our staff, renowned for their warmth and
                    dedication, strives to make every visit an unforgettable event.</p>
                <button
                    className="border border-[#2C2F24] rounded-3xl py-1 px-2 md:py-3 md:px-6 text-sm md:text-base font-semibold cursor-pointer hover:bg-gray-200 transition-all duration-300 w-fit">More
                    About Us</button>

            </div>
      </div>

        {/* video  */}
    <section className=" my-3 md:my-10  ">
        <div className="relative bg-[url('/assets/images/video-bg.png')] object-cover bg-cover bg-center h-[600px] ">
            
            {/* overlay  */}
            <div className="bg-[#2C2F24D6]  absolute inset-0  h-[600px]"></div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">
                <img src="/assets/images/Play-button (2).svg" alt="play" className="h-16 w-16  bg-white rounded-full object-cover cursor-pointer hover:scale-50 transition-all duration-200 mb-5"/>
            <h2 className="font-playfair font-medium text-2xl md:text-3xl lg:text-5xl leading-snug text-white max-w-md">Feel the authentic & original taste from us</h2>
            
        </div>
        </div>
        </section>

{/* delivery  */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  px-3 py-5 md:px-10  ">
          {deliveryData.map((item)=>{
            return(
              <>
               <div className="flex gap-5 items-center">
                <img src={item.icon} alt={item.alt} className="cursor-pointer hover:scale-50 transition-all duration-200" />
               <div >
                 <h3 className="font-bold text-base md:text-2xl  text-[#2C2F24]">{item.title}</h3>
                <p className="text-sm md:text-base font-normal text-[#414536] ">{item.description}</p>
               </div>
            </div>
              </>
            )
          })}
           
            </div>

       {/* valuable guest  */}

<section className="bg-[#F9F9F7] flex flex-col flex-wrap gap-10  p-2 md:flex-row items-center md:my-10 md:p-0   ">
    <div className="w-full md:w-1/2 p-0 md:p-14 lg:p-20">
        <h2 className="font-playfair font-medium text-2xl md:text-3xl lg:text-5xl leading-snug  mb-4">A little information for our valuable guest</h2>
    <p className="text-[#414536] text-sm md:text-base font-normal mb-8 max-w-lg">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col border border-[#DBDFD0] rounded-lg justify-center items-center px-3 py-2 md:px-5 md:py-3">
            <h2 className="font-playfair font-medium text-4xl">3</h2>
            <p className="font-medium text-base md:text-xl">Locations</p>
        </div>
        <div className="flex flex-col border border-[#DBDFD0] rounded-lg justify-center items-center px-3 py-2 md:px-5 md:py-3">
            <h2 className="font-playfair font-medium text-4xl">1995</h2>
            <p className="font-medium text-base md:text-xl">Founded</p>
        </div>
        <div className="flex flex-col border border-[#DBDFD0] rounded-lg justify-center items-center px-3 py-2 md:px-5 md:py-3">
            <h2 className="font-playfair font-medium text-4xl">65+</h2>
            <p className="font-medium text-base md:text-xl">Staff Members</p>
        </div>
        <div className="flex flex-col border border-[#DBDFD0] rounded-lg justify-center items-center px-3 py-2 md:px-5 md:py-3">
            <h2 className="font-playfair font-medium text-4xl">100%</h2>
            <p className="font-medium text-base md:text-xl">Satisfied Customers</p>
        </div>
</div>
</div>
<div class="w-full md:w-[40%]">
    <img src="/assets/images/about-valuableguest.svg" alt="valuableguest" className="object-cover h-[500px] py-2 md:py-5"/>
</div>
</section>

 {/* reiew  */}

    <section className=" md:my-10 p-3 md:px-10 ">
        <h2 className="font-playfair font-medium text-2xl md:text-3xl lg:text-5xl leading-snug text-center mb-5">What Our
            Customers Say</h2>

            {/* mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3">
{reviewData.map((item)=>{
  return(
    <>
                <div
                className="space-y-3 md:space-y-5 p-3 md:p-5 bg-[#F9F9F7] cursor-pointer hover:scale-110 transition-all duration-200">
                <h3 className="font-bold text-xl md:text-2xl text-[#AD343E]">{item.title}</h3>
                <p className="text-[#414536] text-sm md:text-base font-normal">{item.description}</p>
                <hr className="text-[#DBDFD0]"/>
                <div className="flex gap-5 items-center">
                    <img src={item.image} alt={item.alt} className="h-15 object-cover" />
                    <div className="">
                        <p className="text-[#2C2F24] font-bold text-sm md:text-base">{item.name}</p>
                        <p className="text-[#414536] font-normal text-sm md:text-base">{item.location}</p>
                    </div>
                </div>
            </div>
    </>
  )
})}
            </div>
            </section>

<Footer/>

    
    </div>
  )
}

export default About
