import React from 'react'
import Header from './Header'

const BookATable = () => {
  return (
    <div>
        {/* table booking  */}

<Header/>
    <section className="p-3 md:px-10 md:py-4 bg-[#F9F9F7] " >
        <h1 className="text-center font-playfair font-medium text-xl md:text-2xl lg:text-4xl mb-3 md:mb-3 lg:mb-5">Book A Table</h1>
        <p className="text-sm md:text-base font-normal text-[#414536] text-center max-w-2xl mx-auto">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
    
        <div className="relative z-40 bg-white  mt-3 md:mt-5 lg:mt-10 space-y-2 md:space-y-5 border rounded-xl p-3 md:p-10 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
                <div className="flex flex-col gap-1">
            <label htmlFor="date" className=" font-medium text-sm">Date</label>
            <input type="date" id="date" placeholder="dd/mm/year" className="border rounded-3xl px-6 py-2"/>
            </div> 
            <div className="flex flex-col gap-1">
            <label htmlFor="time" className="font-medium text-sm">Time</label>
            <select id='time' className="border rounded-3xl px-6 py-2">
                <option disabled selected>--:--PM </option>
                <option >AM</option>
                <option >PM</option></select>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-medium text-sm">Name</label>
            <input type="text" id="name" placeholder="Enter Your Name" className="border rounded-3xl px-6 py-2"/>
            </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" placeholder="x-xxx-xxx-xxx" className="border rounded-3xl px-6 py-2"/>
        
        </div>     
        </div>
        <div className="flex flex-col gap-1">
             <label htmlFor="totalperson" className="font-medium text-sm">Total Person</label>
            <select id='totalperson' className="border rounded-3xl px-6 py-2">Total Person
                <option >1 person</option>
                <option >2 person</option>
                <option >3 person</option>
                <option >4 person</option>
                <option >5 person</option>
            </select>
        </div>
        <button
                    className="border border-[#2C2F24] rounded-3xl py-3 px-6 text-sm md:text-base cursor-pointer hover:bg-[#AD343E] hover:text-white transition-all duration-300 w-full mt-1">Book
                    a Table</button>
        </div>

        <div className="relative -top-10 md:-top-20 lg:-top-40">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15543.359815805874!2d80.19482028237842!3d13.109323494136783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52645e939e230b%3A0x55e3f3b536bed015!2z4K614K6_4K6y4K-N4K6y4K6_4K614K6-4K6V4K-N4K6V4K6u4K-NLCDgrprgr4bgrqngr43grqngr4gsIOCupOCuruCuv-CutOCvjSDgrqjgrr7grp_gr4E!5e0!3m2!1sta!2sin!4v1754750180975!5m2!1sta!2sin" 
            width="500" height="400" 
            style={{border:0}} allowfullscreen="" loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade" 
            className="w-full "></iframe>
        </div>
    </section>

   

 

    </div>
  )
}

export default BookATable
