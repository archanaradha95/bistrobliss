import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import image from '../assets/images/about.svg'
import image1 from '../assets/images/delivery1.svg'
import image2 from '../assets/images/delivery2.svg'
import image3 from '../assets/images/delivery3.svg'
import time from '../assets/images/time-Icon.svg'
import offer from '../assets/images/offer-icon.svg'
import onlineshoping from '../assets/images/onlineshoping-Icon.svg'
import { FiPhone,FiMail} from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Footer from './Footer'
// import image from "../../public/logo.svg"
function Home() {

  const menuCategoryData = [
  {
    id: 1,
    name: "Breakfast",
    image: "/assets/images/menu1.svg",
    alt: "Breakfast",
    description: "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    id: 2,
    name: "Main Dishes",
    image: "/assets/images/menu2.svg",
    alt: "Main Dishes",
    description: "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    id: 3,
    name: "Drinks",
    image: "/assets/images/menu3.svg",
    alt: "Drinks",
    description: "In the new era of technology we look in the future with certainty and pride for our life."
  },
  {
    id: 4,
    name: "Desserts",
    image: "/assets/images/menu4.svg",
    alt: "Desserts",
    description: "In the new era of technology we look in the future with certainty and pride for our life."
  }
];


const eventsData = [
  {
    id: 1,
    name: "Caterings",
    image: "/assets/images/events1.svg",
    alt: "Caterings",
    description: "In the new era of technology we look in the future with certainty for life."
  },
  {
    id: 2,
    name: "Birthdays",
    image: "/assets/images/events2.jpg",
    alt: "Birthdays",
    description: "In the new era of technology we look in the future with certainty for life."
  },
  {
    id: 3,
    name: "Weddings",
    image: "/assets/images/events3.jpg",
    alt: "Weddings",
    description: "In the new era of technology we look in the future with certainty for life."
  },
  {
    id: 4,
    name: "Events",
    image: "/assets/images/events4.jpg",
    alt: "Events",
    description: "In the new era of technology we look in the future with certainty for life."
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


const blogsData = [
  {
    id: 1,
    image: "/assets/images/blog1.svg",
    alt: "burger",
    date: "January 3, 2023",
    title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers",
    description: "Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
  },
  {
    id: 2,
    image: "/assets/images/blog2.svg",
    alt: "snacks",
    date: "January 3, 2023",
    title: "How to prepare the perfect french fries in an air fryer"
  },
  {
    id: 3,
    image: "/assets/images/blog3.svg",
    alt: "chicken",
    date: "January 3, 2023",
    title: "How to prepare delicious chicken tenders"
  },
  {
    id: 4,
    image: "/assets/images/blog4.svg",
    alt: "cake",
    date: "January 3, 2023",
    title: "7 delicious cheesecake recipes you can prepare"
  },
  {
    id: 5,
    image: "/assets/images/blog5.svg",
    alt: "pizza",
    date: "January 3, 2023",
    title: "5 great pizza restaurants you should visit this city"
  }
];



  return (
    <div>
      <Header/>
      
      {/*  home  */}

    <section className="bg-[url('/assets/images/home_bg.svg')] h-[400px] md:h-[550px] bg-cover bg-center object-cover flex justify-center "
        id="home">
        <div className="flex flex-col justify-center items-center text-[#2C2F24] max-w-sm text-center">
            <h3 className="font-playfair font-normal text-xl md:text-3xl lg:text-6xl  mb-5 ">Best food for your taste</h3>
            <p className="font-normal text-sm md:text-base  mb-5">Discover delectable cuisine and unforgettable moments in
                our welcoming, culinary haven.</p>
            <div className="flex flex-col md:flex-row gap-5">
                <button
                    className="border border-[#2C2F24] rounded-3xl py-1 px-2 md:py-3 md:px-6 text-sm md:text-base cursor-pointer hover:bg-[#AD343E] hover:text-white transition-all duration-300 font-semibold w-fit">Book
                    a Table</button>
                <button
                    className="border border-[#2C2F24] rounded-3xl py-1 px-2 md:py-3 md:px-6 text-sm md:text-base cursor-pointer hover:bg-[#AD343E] hover:text-white transition-all duration-300 font-semibold w-fit">Explore
                    Menu</button>
            </div>
        </div>
    </section>

     {/* menu cards  */}
    

    <section className="my-3 md:my-5 lg:my-10 " >
        <h3 className="text-center font-playfair font-medium text-xl md:text-2xl lg:text-4xl mb-3 md:mb-5 lg:mb-10">Browse
            Our Menu</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-2 md:px-10 md:py-4">
            
                  {menuCategoryData.map((item)=>{
                    return(
                      <>
                      <div className='border border-[#DBDFD0] rounded-xl space-y-3 p-5 cursor-pointer hover:scale-105 transition-all duration-300 md:space-y-5'>
                        <div className='flex justify-center'><img src={item.image} alt={item.alt} className="h-16 " /></div>
                        <div className='font-bold text-base md:text-2xl text-center text-[#2C2F24]'>{item.name}</div>
                        <div className='text-sm md:text-base font-normal text-[#414536] text-center'>{item.description}</div>
                        <div className='flex justify-center'>
                          <button
                    className="text-[#AD343E] font-dm font-bold text-sm md:text-base hover:-translate-y-3 cursor-pointer transition-all duration-200">Explore
                    Menu</button>
                        </div>
                </div>

                      </>
                    )
                  })}
                
      </div>
      </section>

      
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

             {/* our events  */}

    <section className=" md:my-10 p-3 md:px-10 md:py-5">
        <h2 className="font-playfair font-medium  text-[#2C2F24]  text-xl md:text-2xl lg:text-4xl max-w-md leading-snug mb-5 lg:mb-10">We also offer
            unique services for your events</h2>

             {/* events cards  */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
          {eventsData.map((item)=>{
            return(
              <>
              <div className="space-y-2 md:space-y-5 ">
                <img src={item.image} alt={item.alt}
                    className="w-full h-[300px] md:rounded-xl  object-cover  cursor-pointer hover:scale-105 transition-all duration-300" />
                <h3 className="font-bold text-xl md:text-2xl">{item.name}</h3>
                <p className="font-normal text-sm md:text-base text-[#414536] max-w-sm">{item.description}</p>
            </div>
              </>
            )
          })}
            
            </div>
</section>

     {/* delivery  */}

    <section className="bg-[#F9F9F7]">
        <div className="flex flex-col gap-5 px-3 py-5 md:flex-row md:gap-10 md:px-10 md:py-20 ">

             {/* img  */}
            <div className="flex gap-2 md:gap-5 w-full md:w-1/2 ">
                <img src={image1} alt="food" className="h-[250px] md:h-[300px] lg:h-[400px] object-cover" />

                <div className="relative top-5 lg:top-8 flex flex-col justify-between  gap-4">
                    <img src={image2} alt="food" className="h-[130px] md:h-[150px] lg:h-[230px] object-cover" />
                    <img src={image3} alt="food"
                        className="h-[100px] md:h-[130px] lg:h-[150px] rounded-lg object-cover" />
                </div>
            </div>

            {/* text  */}
            <div className=" w-full md:w-1/2 lg:w-[35%] flex flex-col justify-center gap-5">
                <h2 className="font-playfair font-medium text-2xl md:text-3xl lg:text-5xl leading-snug">Fastest Food
                    Delivery in City</h2>
                <p className="text-[#414536] text-sm md:text-base font-normal">Our visual designer lets you quickly and of
                    drag a down your way to customapps for both keep desktop. </p>
                <div className="flex  items-center gap-3">
                    <img src={time} alt="delivery"
                        className="cursor-pointer hover:scale-110 transition-all duration-200" />
                    <p className="font-medium text-sm md:text-base ">Delivery within 30 minutes</p>
                </div>
                <div className="flex  items-center gap-3">
                    <img src={offer} alt="delivery"
                        className="cursor-pointer hover:scale-110 transition-all duration-200" />
                    <p className="font-medium text-sm md:text-base ">Best Offer & Prices</p>
                </div>
                <div className="flex  items-center gap-3">
                    <img src={onlineshoping} alt="delivery"
                        className="cursor-pointer hover:scale-110 transition-all duration-200" />
                    <p className="font-medium text-sm md:text-base ">Online Services Available</p>
                </div>
            </div>
        </div>
    </section>

     {/* reiew  */}

    <section className=" md:my-10 p-3 md:px-10 md:py-5">
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

             {/* blogs */}

    <section className="bg-[#F9F9F7] my-5 md:my-10 p-3 md:px-10 md:py-5">
        <div className="flex flex-col md:flex-row  justify-between items-center mb-5 md:mb-8">
            <h2 className="font-playfair font-medium text-2xl md:text-3xl lg:text-5xl leading-snug text-center mb-5">Our
                Blog & Articles</h2>
            <button
                className="border border-[#2C2F24] rounded-3xl py-1 px-2 md:py-3 md:px-6 text-sm md:text-base cursor-pointer hover:bg-[#AD343E] hover:text-white transition-all duration-300 font-semibold w-fit">Read
                All Articles</button>
        </div>

     {/* blog images  */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsData.map((item)=>{
            return(
              <>
              <div
                className="md:row-span-2 bg-white space-y-2 md:space-y-3 lg:space-y-5 cursor-pointer hover:scale-105 transition-all duration-200">
                <img src={item.image} alt={item.alt} className="w-full h-64 rounded-t-lg object-cover" />
                <p className="text-sm  text-[#737865] px-3 md:px-5">{item.date}</p>
                <h3 className="text-base md:text-lg text-[#2C2F24] font-medium leading-snug px-3 md:px-5">{item.title}</h3>
                <p className="text-sm md:text-base text-[#414536] font-normal px-3 md:px-5">{item.description}</p>
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

export default Home
