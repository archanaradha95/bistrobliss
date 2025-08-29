import React, { useState } from 'react'
import Header from './Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer';
// import image from '../assets/images/logo.svg'
// import img1 from ''
// import img2 from '../assets/images/menupage-2.jpg'
// import img3 from '../assets/images/menupage-3.jpg'
// import img4 from '../assets/images/menupage-4.jpg'
// import img5 from '../assets/images/menupage-5.jpg'
// import img6 from '../assets/images/menupage-6.jpg'
// import img7 from '../assets/images/menupage-7.jpg'
// import img8 from '../assets/images/menupage-8.jpg'


const Menu = () => {

  const menuData = [
  {
    id: 1,
    name: "Fried Eggs",
    price: 9.99,
    category: "Breakfast",
    image: "/assets/images/menupage-1.jpg",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    id: 2,
    name: "Hawaiian Pizza",
    price: 15.99,
    category: "MainDishes",
    image: "/assets/images/menupage-2.jpg",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    id: 3,
    name: "Martinez Cocktail",
    price: 7.25,
    category: "Drinks",
    image: "/assets/images/menupage-3.jpg",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    id: 4,
    name: "Butterscotch Cake",
    price: 20.99,
    category: "Desserts",
    image: "/assets/images/menupage-4.jpg",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    id: 5,
    name: "Mint Lemonade",
    price: 5.89,
    category: "Drinks",
    image: "/assets/images/menupage-5.jpg",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    id: 6,
    name: "Chocolate Icecream",
    price: 18.05,
    category: "Desserts",
    image: "/assets/images/menupage-6.jpg",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    id: 7,
    name: "Cheese Burger",
    price: 12.55,
    category: "MainDishes",
    image: "/assets/images/menupage-7.jpg",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  },
  {
    id: 8,
    name: "Classic Waffles",
    price: 12.99,
    category: "Breakfast",
    image: "/assets/images/menupage-8.jpg",
    description: "Made with eggs, lettuce, salt, oil and other ingredients."
  }
];

const partners = [
  { id: 1, logo: "/assets/images/delivery-partner1.svg", alt: "Uber Eats" },
  { id: 2, logo: "/assets/images/delivery-partner2.svg", alt: "Grubhub" },
  { id: 3, logo: "/assets/images/delivery-partner3.svg", alt: "Postmates" },
  { id: 4, logo: "/assets/images/delivery-partner4.svg", alt: "Doordash" },
  { id: 5, logo: "/assets/images/delivery-partner5.svg", alt: "Foodpanda" },
  { id: 6, logo: "/assets/images/delivery-partner6.svg", alt: "Deliveroo" },
  { id: 7, logo: "/assets/images/delivery-partner7.svg", alt: "Instacart" },
  { id: 8, logo: "/assets/images/delivery-partner8.svg", alt: "Just Eat" },
  { id: 9, logo: "/assets/images/delivery-partner9.svg", alt: "Just Eat" },
];

console.log("partners",partners)

const [filter,setFilter] = useState('All')

// const navigate = useNavigate();


// const handleClick = (category) =>{
//   if(category === "All"){
//     navigate('/menuData',{state:menuData});
//   }else{
//     const filtered = menuData.filter(item =>item.category===category);
//     navigate('/menuData',{state:filtered});
//   }
// }

const filteredMenu = filter === 'All' ? menuData : menuData.filter((item)=>item.category === filter) 

  return (
    <div>
     <Header/>
       <div>

        <div className="flex flex-col justify-center items-center md:max-w-md md:mx-auto my-10">
            <h3 className="text-center font-playfair font-medium text-xl md:text-2xl lg:text-4xl mb-3 md:mb-3 lg:mb-5">
            Our Menu</h3>
            <p className="text-sm md:text-base font-normal text-[#414536] text-center ">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
       
        </div>

        {/* menu list */}
       
       <div className='flex flex-wrap gap-5 justify-center'>
         <button onClick={()=>setFilter("All")} className='border border-[#2C2F24] rounded-3xl py-1 px-2 md:py-3 md:px-6 text-sm md:text-base cursor-pointer hover:bg-[#AD343E] hover:text-white transition-all duration-300 font-semibold w-fit'>All</button>
        <button onClick={()=>setFilter("Breakfast")} className='border border-[#2C2F24] rounded-3xl py-1 px-2 md:py-3 md:px-6 text-sm md:text-base cursor-pointer hover:bg-[#AD343E] hover:text-white transition-all duration-300 font-semibold w-fit'>Breakfast</button>
        <button onClick={()=>setFilter("MainDishes")} className='border border-[#2C2F24] rounded-3xl py-1 px-2 md:py-3 md:px-6 text-sm md:text-base cursor-pointer hover:bg-[#AD343E] hover:text-white transition-all duration-300 font-semibold w-fit'>Main Dishes</button>
        <button onClick={()=>setFilter("Drinks")} className='border border-[#2C2F24] rounded-3xl py-1 px-2 md:py-3 md:px-6 text-sm md:text-base cursor-pointer hover:bg-[#AD343E] hover:text-white transition-all duration-300 font-semibold w-fit'>Drinks</button>
        <button onClick={()=>setFilter("Desserts")} className='border border-[#2C2F24] rounded-3xl py-1 px-2 md:py-3 md:px-6 text-sm md:text-base cursor-pointer hover:bg-[#AD343E] hover:text-white transition-all duration-300 font-semibold w-fit'>Desserts</button>
       </div>
       
       {/* filtered menu list */}

       <div className="grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-3 gap-5 md:p-10 lg:p-20 ">
        
            {filteredMenu.map((item)=>{
                return(
                    <>
                    <div className=''>
                        <img src={item.image} alt="food" className="w-full h-48 object-cover rounded-lg"/>
                        <div className='mt-2 font-bold text-lg text-center'>${item.price}</div>
                        <div className='font-semibold text-center'>{item.name}</div>
                        <div className='text-sm text-gray-500 text-center'>{item.description}</div>

                    </div>
                    </>
                )
            })}
        </div>
       </div>

        {/* delivery partners */}
  <section className="bg-[#F9F9F7] my-5 md:my-10 flex flex-col gap-3 px-3 md:flex-row items-center md:items-start md:gap-8  md:px-10  lg:px-20 lg:py-10">
        
        {/* text */}
        <div className="max-w-xs md:max-w-sm lg:max-w-md">
<h2 className=" font-playfair font-medium text-xl md:text-2xl lg:text-4xl mb-3  lg:mb-5">You can order through apps</h2>
<p className="text-sm md:text-base font-normal text-[#414536]  "> Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
        </div>
    

    {/* logos */}

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:px-5">
      {partners.map((item)=>{
        return(
          <>
          <div className="bg-white border border-gray-200 shadow-md rounded-lg flex items-center justify-center p-4 cursor-pointer hover:scale-105 transition-all duration-300">
            <img src={item.logo} alt="partners" className="h-7 object-contain" />
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

export default Menu


// props