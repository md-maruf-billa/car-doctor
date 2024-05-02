import React from 'react';

import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {title,img,price} = service;
    return (
        <div 
        data-aos="zoom-in-up" data-aos-duration="1000"
        className="p-6 rounded-md shadow-md bg-base-100 border">
            <img src={img} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <h2 className="text-[25px] font-semibold tracking-wide">{title}</h2>
            </div>
            <div className='flex justify-between text-[#FF3811] text-xl'>
                <h3>Price: ${price}</h3>
                <FaArrowRight className='cursor-pointer'/>
            </div>
        </div>
    );
};

export default ServiceCard;