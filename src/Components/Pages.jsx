import React from 'react'
import Header from './Header'
import Footer from './Footer';

const Pages = () => {

  const blogsData = [
  {
    id: 1,
    image: "/assets/images/blog1.svg",
    alt: "burger",
    date: "January 3, 2023",
    title: "The secret tips & tricks to prepare a perfect burger & pizza for our customers"
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
  },
  {
    id: 6,
    image: "/assets/images/blog6.jpg",
    alt: "burger",
    date: "January 3, 2023",
    title: "The secret tips & tricks to prepare a perfect burger"
  },
  {
    id: 7,
    image: "/assets/images/blog7.jpg",
    alt: "cake",
    date: "January 3, 2023",
    title: "7 delicious cheesecake recipes you can prepare"
  },
  {
    id: 8,
    image: "/assets/images/blog8.jpg",
    alt: "pizza",
    date: "January 3, 2023",
    title: "5 great pizza restaurants you should visit this city"
  },
  {
    id: 9,
    image: "/assets/images/blog9.jpg",
    alt: "gadgets",
    date: "January 3, 2023",
    title: "5 great cooking gadgets you can buy to save time"
  },
  {
    id: 10,
    image: "/assets/images/blog10.jpg",
    alt: "sushi",
    date: "January 3, 2023",
    title: "How to prepare a delicious gluten free sushi"
  },
  {
    id: 11,
    image: "/assets/images/blog11.jpg",
    alt: "desserts",
    date: "January 3, 2023",
    title: "Top 20 simple and quick desserts for kids"
  },
  {
    id: 12,
    image: "/assets/images/blog12.jpg",
    alt: "desserts",
    date: "January 3, 2023",
    title: "Top 20 simple and quick desserts for kids"
  }
];

  return (
    <div>
      <Header/>
      {/* blogs  */}

    <section className="bg-[#F9F9F7] my-5 md:my-10 p-3 md:px-10 md:py-5">
       
            <h2 className="font-playfair font-medium text-2xl md:text-3xl lg:text-5xl leading-snug text-center mb-5">Our
                Blog & Articles</h2>
           <p className="text-sm md:text-base font-normal text-[#414536] text-center max-w-2xl mx-auto ">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        

         {/* blog images  */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-3 md:my-5 lg:my-10">
          {blogsData.map((item)=>{
            return(
              <>
              <div
                className="  bg-white space-y-2 md:space-y-3 lg:space-y-5 cursor-pointer hover:scale-105 transition-all duration-200">
                <img src={item.image} alt={item.alt} className="w-full h-40 rounded-t-lg object-cover" />
                <p className="text-sm  text-[#737865] px-3 md:px-5">{item.date}</p>
                <h3 className="text-base md:text-lg text-[#2C2F24] font-medium leading-snug px-3 md:px-5">{item.title}</h3>
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

export default Pages
