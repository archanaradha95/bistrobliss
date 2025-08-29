import React from 'react'
import { useLocation } from 'react-router-dom'

const MenuData = () => {

    const location =useLocation();
    const menuData = location.state || {}
    console.log(menuData);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 ">
        
            {menuData.map((item)=>{
                return(
                    <>
                    <div>
                        <img src={item.image} alt="food" className="w-full h-48 object-cover rounded-lg"/>
                        <div className='mt-2 font-bold text-lg'>${item.price}</div>
                        <div className='font-semibold'>{item.name}</div>
                        <div className='text-sm text-gray-500'>{item.description}</div>

                    </div>
                    </>
                )
            })}
        </div>
   
    </>
  )
}

export default MenuData
