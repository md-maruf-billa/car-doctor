import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import aboutPerson from '../../assets/images/about_us/person.jpg'
import aboutParts from '../../assets/images/about_us/parts.jpg'
import Button from '../../Utils/Button/Button';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import axios from 'axios';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:7000/services")
            .then(result => {
                setServices(result.data);
                
            })
            .catch(error => {
                console.error(error.message)
            })
    }, [])
    return (
        <div>
            <Banner />

            {/* ----------------About Section Start hare-------------- */}
            <div
                data-aos='fade-left' data-aos-duration="1500"
                className='flex gap-[122px] mt-28'>
                {/* ----------Image Card--------- */}
                <div className='relative'>
                    <img className='rounded-md h-full' src={aboutPerson} alt="" />
                    <img className='absolute top-1/2  left-1/2 size-[330px] border-[15px] border-white rounded-lg' src={aboutParts} alt="" />
                </div>

                {/* ----------About Content part------- */}
                <div
                    data-aos='fade-left' data-aos-duration="1500"
                    className='space-y-7'>

                    <p className='text-[#FF3811] text-xl font-bold'>About Us</p>
                    <h2 className='text-5xl font-bold'>We are qualified & of experience in this field</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <div

                        className='flex'>
                        <Button btnName={"Get More Info"} customStyle={"text-white bg-[#FF3811] hover:bg-transparent  hover:text-[#FF3811]"} />
                    </div>
                </div>
            </div>



            {/* ----------------Our Services section start hare--------- */}

            <div className='mt-[250px]'>

                <div className=' flex justify-center items-center flex-col text-center gap-5'>
                    <h1 className='text-5xl font-bold'>Our Service Area</h1>
                    <p className='w-[714px]'>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                    </p>
                </div>

                {/* ----------Services Card------------- */}

                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        services?.map(service => <ServiceCard service={service} key={service._id}/>)
                    }

                </div>
                <div className='flex justify-center items-center mt-12'>
                    <Button btnName={"More Services"}/>
                </div>

            </div>
        </div>
    );
};

export default Home;