import React from 'react';
import CarouserBtn from './CarouserBtn';
import Button from './../../Utils/Button/Button';


const Banner = () => {


    return (
        <div className="carousel h-[600px] rounded-lg w-full mt-2 lg:mt-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.2),rgba(0,0,0,0.9))]">
            <div id="slide1" className="carousel-item relative w-full bg-[linear-gradient(90deg,#151515,rgba(21,21,21,0.00)),url(https://i.postimg.cc/xjH67Lsc/1.jpg)] bg-no-repeat bg-cover bg-center">
                <div className='text-white w-[512px] flex flex-col justify-center ml-24 gap-8'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex  gap-8'>
                        <Button btnName={"Discover More"} customStyle={"bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] text-white"} />
                         <Button customStyle={"hover:bg-[#FF3811] hover:text-white"} btnName={"Latest Project"} />
                    </div>
                </div>
                <CarouserBtn prev={"#slide4"} next={"#slide2"} />
            </div>
            <div id="slide2" className="carousel-item relative w-full bg-[linear-gradient(90deg,#151515,rgba(21,21,21,0.00)),url(https://i.postimg.cc/NjGb5SQH/2.jpg)] bg-no-repeat bg-cover bg-center">
                <div className='text-white w-[512px] flex flex-col justify-center ml-24 gap-8'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex  gap-8'>
                        <Button btnName={"Discover More"} customStyle={"bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] text-white"} />
                         <Button customStyle={"hover:bg-[#FF3811] hover:text-white"} btnName={"Latest Project"} />
                    </div>
                </div>
                <CarouserBtn prev={"#slide1"} next={"#slide3"} />
            </div>
            <div id="slide3" className="carousel-item relative w-full bg-[linear-gradient(90deg,#151515,rgba(21,21,21,0.00)),url(https://i.postimg.cc/TP4k80MW/3.jpg)] bg-no-repeat bg-cover bg-center">
                <div className='text-white w-[512px] flex flex-col justify-center ml-24 gap-8'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex  gap-8'>
                        <Button btnName={"Discover More"} customStyle={"bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] text-white"} />
                         <Button customStyle={"hover:bg-[#FF3811] hover:text-white"} btnName={"Latest Project"} />
                    </div>
                </div>
                <CarouserBtn prev={"#slide2"} next={"#slide4"} />
            </div>
            <div id="slide4" className="carousel-item relative w-full bg-[linear-gradient(90deg,#151515,rgba(21,21,21,0.00)),url(https://i.postimg.cc/1tVvyFs7/4.jpg)] bg-no-repeat bg-cover bg-center">
                <div className='text-white w-[512px] flex flex-col justify-center ml-24 gap-8'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex  gap-8'>
                        <Button btnName={"Discover More"} customStyle={"bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] text-white"} />
                         <Button customStyle={"hover:bg-[#FF3811] hover:text-white"} btnName={"Latest Project"} />
                    </div>
                </div>
                <CarouserBtn prev={"#slide3"} next={"#slide5"} />
            </div>
            <div id="slide5" className="carousel-item relative w-full bg-[linear-gradient(90deg,#151515,rgba(21,21,21,0.00)),url(https://i.postimg.cc/MK2FK9c7/5.jpg)] bg-no-repeat bg-cover bg-center">
                <div className='text-white w-[512px] flex flex-col justify-center ml-24 gap-8'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex  gap-8'>
                        <Button btnName={"Discover More"} customStyle={"bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] text-white"} />
                         <Button customStyle={"hover:bg-[#FF3811] hover:text-white"} btnName={"Latest Project"} />
                    </div>
                </div>
                <CarouserBtn prev={"#slide5"} next={"#slide6"} />
            </div>
            <div id="slide6" className="carousel-item relative w-full bg-[linear-gradient(90deg,#151515,rgba(21,21,21,0.00)),url(https://i.postimg.cc/RVBgzq8G/6.jpg)] bg-no-repeat bg-cover bg-center">
                <div className='text-white w-[512px] flex flex-col justify-center ml-24 gap-8'>
                    <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex  gap-8'>
                        <Button btnName={"Discover More"} customStyle={"bg-[#FF3811] hover:bg-transparent hover:text-[#FF3811] text-white"} />
                        <Button customStyle={"hover:bg-[#FF3811] hover:text-white"} btnName={"Latest Project"} />
                    </div>
                </div>
                <CarouserBtn prev={"#slide5"} next={"#slide1"} />
            </div>
        </div>
    );
};

export default Banner;