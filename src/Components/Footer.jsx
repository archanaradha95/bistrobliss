import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#474747] text-white py-10 px-4 md:px-16">
        <div className="flex  flex-wrap flex-row justify-between gap-10 max-w-7xl mx-auto">

            <div className="space-y-2 md:space-y-3 md:w-1/3 lg:space-y-5">
                <img src="/assets/images/footer-Logo.svg" alt="logo"
                    className="object-cover cursor-pointer hover:scale-105 transition-all duration-200" />
                <p className="text-[#ADB29E] font-normal text-sm md:text-base leading-relaxed">In the new era of technology
                    we look a in the
                    future with certainty and pride to for our company and.</p>
                <div className="flex  gap-3 items-center">
                    <img src="/assets/images/twitter-icon.svg" alt="twitter"
                        className="cursor-pointer hover:bg-[#AD343E] transition-all duration-200" />
                    <img src="/assets/images/fb-icon.svg" alt="fb"
                        className="cursor-pointer hover:bg-[#AD343E] transition-all duration-200" />
                    <img src="/assets/images/inta-icon.svg" alt="instagram"
                        className="cursor-pointer hover:bg-[#AD343E] transition-all duration-200" />
                    <img src="/assets/images/github-icon.svg" alt="github"
                        className="cursor-pointer hover:bg-[#AD343E] transition-all duration-200" />
                </div>
            </div>

            <div className="cursor-pointer">
                <h4
                    className=" font-bold text-white text-base md:text-xl mb-2 md:mb-4 ">
                    Pages</h4>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    Home</p>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    About</p>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    Menu</p>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    Pricing</p>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    Blog</p>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    Contact</p>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    Delivery</p>
            </div>
            <div className="cursor-pointer">
                <h4
                    className=" font-bold text-white text-base md:text-xl mb-2 md:mb-4 ">
                    Utility Pages</h4>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    Start Here</p>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    Styleguide</p>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    Password Protected</p>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    404 Not Found</p>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    Licenses</p>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    Changelog</p>
                <p
                    className=" font-normal text-sm md:text-base text-[#DBDFD0] mb-1 md:mb-2 ">
                    View More</p>
            </div>
            <div>
                <h4
                    className=" font-bold text-white text-base md:text-xl mb-2 md:mb-4 ">
                    Follow Us On Instagram</h4>
                <div className="grid grid-cols-2 gap-3">
                    <img src="/assets/images/footer1.svg" alt="food"
                        className="cursor-pointer hover:scale-105 transition-all duration-200" />
                    <img src="/assets/images/footer2.svg" alt="food"
                        className="cursor-pointer hover:scale-105 transition-all duration-200" />
                    <img src="/assets/images/footer3.svg" alt="food"
                        className="cursor-pointer hover:scale-105 transition-all duration-200" />
                    <img src="/assets/images/footer4.svg" alt="food"
                        className="cursor-pointer hover:scale-105 transition-all duration-200" />
                </div>
            </div>

        </div>

        <div className="border-t border-[#414536] mt-10 pt-6 text-center text-sm text-[#DBDFD0]">
            Copyright © 2023 Hashtag Developer. All Rights Reserved
        </div>

    </footer>
    </div>
  )
}

export default Footer
