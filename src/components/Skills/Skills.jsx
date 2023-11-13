import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, []);
    return (
        <div className='container mx-auto pb-10 ' id='skills' data-aos="fade-up">
            <div className='relative section__title my-10'>
                <h3 className='text-center py-3 text-4xl text-white'>My Skills</h3>
            </div>

            <div className='grid px-5 md:px-0 min-[550px]:grid-cols-3 min-[350px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5 mt-16'>

                <div className="shadow-sm shadow-[#FFA500]">
                    <div className="card-body py-3 items-center text-center text-white">
                       <h4 className='text-2xl'> Html</h4>
                    </div>
                </div>
                <div className="shadow-sm shadow-[#FFA500]">
                    <div className="card-body py-3 items-center text-center text-white">
                       <h4 className='text-2xl'> Css</h4>
                    </div>
                </div>
                <div className="shadow-sm shadow-[#FFA500]">
                    <div className="card-body py-3 items-center text-center text-white">
                       <h4 className='text-2xl'> BootStrap</h4>
                    </div>
                </div>
                <div className="shadow-sm shadow-[#FFA500]">
                    <div className="card-body py-3 items-center text-center text-white">
                       <h4 className='text-2xl'> TailwindCss</h4>
                    </div>
                </div>
                
                <div className="shadow-sm shadow-[#FFA500]">
                    <div className="card-body py-3 items-center text-center text-white">
                       <h4 className='text-2xl'> Javascript</h4>
                    </div>
                </div>
                <div className="shadow-sm shadow-[#FFA500]">
                    <div className="card-body py-3 items-center text-center text-white">
                       <h4 className='text-2xl'> Es6</h4>
                    </div>
                </div>
                
                <div className="shadow-sm shadow-[#FFA500]">
                    <div className="card-body py-3 items-center text-center text-white">
                       <h4 className='text-2xl'>Figma</h4>
                    </div>
                </div>
                <div className="shadow-sm shadow-[#FFA500]">
                    <div className="card-body py-3 items-center text-center text-white">
                       <h4 className='text-2xl'>Wordpress</h4>
                    </div>
                </div>
                <div className="shadow-sm shadow-[#FFA500]">
                    <div className="card-body py-3 items-center text-center text-white">
                       <h4 className='text-2xl'>Shopify</h4>
                    </div>
                </div>
               
            
            </div>
        </div>
    )

};

export default Skills;