import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
      <Header/>
     
     {/* contact us */}

    <section className="bg-[url('/assets/images/contactus-bg.jpg')] bg-cover bg-center my-5 md:my-10 p-3 md:px-10 md:py-5">
       <div className='lg:h-[400px] '>
         <h1 className="font-playfair font-medium text-2xl md:text-3xl lg:text-5xl leading-snug text-center mb-5">Contact Us</h1>
        <p className="text-sm md:text-base font-normal text-[#36392d] text-center max-w-2xl mx-auto ">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
       </div>
    
       {/* form  */}

            <div className="relative z-40 lg:-top-65 bg-white  mt-3 md:mt-5 lg:mt-10 space-y-2 md:space-y-5 border rounded-xl p-3 md:p-10 max-w-3xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            <div className="flex flex-col gap-1">
                <label for="name" className="font-medium text-sm">Name</label>
            <input type="text" id="name" placeholder="Enter Your Name" className="border rounded-3xl px-6 py-2"/>
            </div>
        <div className="flex flex-col gap-1">
            <label for="email">Email</label>
            <input type="email" id="phone" placeholder="Enter email address" className="border rounded-3xl px-6 py-2"/>
        
        </div>     
        </div>
        <div className="flex flex-col gap-1">
             <label for="subject" className="font-medium text-sm">Subject</label>
            <input type="text" id="subject" placeholder="write a subject" className="border rounded-3xl px-6 py-2"/>

        </div>

         <div className="flex flex-col gap-1">
             <label for="subject" className="font-medium text-sm">Message</label>
                <textarea id="message" placeholder="Write your message" rows="5" className="border rounded-3xl px-6 py-3 w-full resize-none"></textarea>

        </div>

        <button
                    className="border border-[#2C2F24] rounded-3xl py-1 px-2 md:py-3 md:px-6 text-sm md:text-base cursor-pointer hover:bg-[#AD343E] hover:text-white transition-all duration-300 w-full">Book
                    a Table</button>
        </div>


        <div className="flex flex-col md:flex-row gap-3 md:gap-5 lg:gap-10 justify-center relative lg:-top-60  my-3 md:my-5 lg:my-10 ">
            <div >
                <h3 className="font-bold text-sm md:text-xl mb-2">Call Us:</h3>
            <p className="text-[#AD343E] font-bold">+1-234-567-8900</p>
            </div>
            <div>
                <h3 className="font-bold text-sm md:text-xl mb-2">Hours:</h3>
                <p className="text-[#2C2F24] font-normal sm:text-sm md:text-base">Mon-Fri: 11am - 8pm </p>
                <p className="text-[#2C2F24] font-normal sm:text-sm md:text-base"> Sat, Sun: 9am - 10pm</p>
            </div>
            <div>
                <h3 className="font-bold text-sm md:text-xl mb-2">Our Location:</h3>
                <p className="text-[#2C2F24] font-normal sm:text-sm md:text-base">123 Bridge Street </p>
                   <p className="text-[#2C2F24] font-normal sm:text-sm md:text-base">Nowhere Land, LA 12345</p>   
                    <p className="text-[#2C2F24] font-normal sm:text-sm md:text-base"> United States</p>
            </div>
        </div>
    </section>

    <div className='relative lg:-top-60'>
      <Footer/>
    </div>
      
    </div>
  )
}

export default Contact
