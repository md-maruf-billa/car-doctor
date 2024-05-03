import React from 'react';
import group from '../../assets/icons/group.svg'
import watch from '../../assets/icons/watch.svg'
import person from '../../assets/icons/person.svg'
import delivery from '../../assets/icons/deliveryt.svg'
import wrench from '../../assets/icons/Wrench.svg'
import check from '../../assets/icons/check.svg'

const FeaturesCard = () => {
    return (

        <div className='mt-12 flex justify-evenly'>
            <div
                data-aos='zoom-in-up' data-aos-duration='500'
                className='flex items-center flex-col border   p-8 rounded-md'>
                <img src={group} alt="" />
                <p className='font-bold'>Expert Team</p>
            </div>
            <div
                data-aos='zoom-in-up' data-aos-delay='100' data-aos-duration='500'
                className='flex items-center flex-col border   p-8 rounded-md bg-[#FF3811]'>
                <img src={watch} alt="" />
                <p className='font-bold'>Timely Delivery</p>
            </div>
            <div
                data-aos='zoom-in-up' data-aos-delay='200' data-aos-duration='500'
                className='flex items-center flex-col border   p-8 rounded-md'>
                <img src={person} alt="" />
                <p className='font-bold'>24/7 Support</p>
            </div>
            <div
                data-aos='zoom-in-up' data-aos-delay='200' data-aos-duration='500'
                className='flex items-center flex-col border   p-8 rounded-md'>
                <img src={wrench} alt="" />
                <p className='font-bold'>Best Equipment</p>
            </div>
            <div
                data-aos='zoom-in-up' data-aos-delay='200' data-aos-duration='500'
                className='flex items-center flex-col border   p-8 rounded-md'>
                <img src={check} alt="" />
                <p className='font-bold'>100% Guranty</p>
            </div>
            <div
                data-aos='zoom-in-up' data-aos-delay='200' data-aos-duration='500'
                className='flex items-center flex-col border   p-8 rounded-md'>
                <img src={delivery} alt="" />
                <p className='font-bold'>Timely Delivery</p>
            </div>

        </div>

    );
};

export default FeaturesCard;