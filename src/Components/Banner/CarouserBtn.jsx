import React from 'react';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
const CarouserBtn = ({prev , next}) => {
    return (
        <div className="absolute flex gap-5 transform right-12 bottom-12">
            <a href={prev} className="btn btn-circle bg-[#FFFFFF33] text-white border-none hover:bg-[#FF3811]"><IoArrowBackOutline /></a>
            <a href={next} className="btn btn-circle bg-[#FFFFFF33] text-white border-none hover:bg-[#FF3811]"><IoArrowForwardOutline /></a>
        </div>
    );
};

export default CarouserBtn;