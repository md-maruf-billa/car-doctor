import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import teamMember1 from '../../assets/images/team/1.jpg'
import teamMember2 from '../../assets/images/team/2.jpg'
import teamMember3 from '../../assets/images/team/3.jpg'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Slider = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mt-12"
                data-aos="zoom-in-up" data-aos-duration="1500"
            >
                <SwiperSlide>
                    <div className='p-6 bg-[#E8E8E8] rounded-lg'>
                        <img className='rounded-md' src={teamMember1} alt="" />
                        <div className='flex justify-center items-center flex-col mt-2'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                        </div>
                        <div className='text-3xl flex items-center justify-center gap-4 mt-5'>
                            <FaFacebook className='text-blue-500'/>
                            <FaTwitter className='text-blue-500'/>
                            <FaLinkedin className='text-blue-900'/>
                            <FaInstagram className='text-rose-600'/>
                        </div>
                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className='p-6 bg-[#E8E8E8] rounded-lg'>
                        <img className='rounded-md' src={teamMember2} alt="" />
                        <div className='flex justify-center items-center flex-col mt-2'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                        </div>
                        <div className='text-3xl flex items-center justify-center gap-4 mt-5'>
                            <FaFacebook className='text-blue-500'/>
                            <FaTwitter className='text-blue-500'/>
                            <FaLinkedin className='text-blue-900'/>
                            <FaInstagram className='text-rose-600'/>
                        </div>
                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <div className='p-6 bg-[#E8E8E8] rounded-lg'>
                        <img className='rounded-md' src={teamMember3} alt="" />
                        <div className='flex justify-center items-center flex-col mt-2'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                        </div>
                        <div className='text-3xl flex items-center justify-center gap-4 mt-5'>
                            <FaFacebook className='text-blue-500'/>
                            <FaTwitter className='text-blue-500'/>
                            <FaLinkedin className='text-blue-900'/>
                            <FaInstagram className='text-rose-600'/>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='p-6 bg-[#E8E8E8] rounded-lg'>
                        <img className='rounded-md' src={teamMember1} alt="" />
                        <div className='flex justify-center items-center flex-col mt-2'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                        </div>
                        <div className='text-3xl flex items-center justify-center gap-4 mt-5'>
                            <FaFacebook className='text-blue-500'/>
                            <FaTwitter className='text-blue-500'/>
                            <FaLinkedin className='text-blue-900'/>
                            <FaInstagram className='text-rose-600'/>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='p-6 bg-[#E8E8E8] rounded-lg'>
                        <img className='rounded-md' src={teamMember2} alt="" />
                        <div className='flex justify-center items-center flex-col mt-2'>
                            <h3 className='text-2xl font-bold'>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                        </div>
                        <div className='text-3xl flex items-center justify-center gap-4 mt-5'>
                            <FaFacebook className='text-blue-500'/>
                            <FaTwitter className='text-blue-500'/>
                            <FaLinkedin className='text-blue-900'/>
                            <FaInstagram className='text-rose-600'/>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>


        </>
    );


};

export default Slider;