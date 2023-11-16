import React from 'react';

import { FaBeer, FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaLocationArrow, FaPhone } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
        <div className='container mx-auto pl-10 gap-5 md:gap-0 grid md:grid-cols-3 pb-16 mt-10 md:mt-7'>
            <div className='text-white'>
                <h3 className='text-2xl mb-3'> Md. Rofiqul islam </h3>
                <p className='mb-2'>Front-end Developer</p>
                <p className='mb-2 flex items-center gap-2'> <FaEnvelope></FaEnvelope> <span>itscopebd@gmail.com</span> </p>
                <p className='mb-2 flex items-center gap-2'> <FaPhone></FaPhone> 01580495093 (WhatsApp)</p>
                <p className='mb-2 flex items-center gap-2'> <FaLocationArrow></FaLocationArrow> Mirpur, Dhaka, Bangladesh</p>
            </div>
            <div className='text-white'>
                <h3 className='text-2xl mb-3'> Services </h3>
                <p className='cursor-pointer hover:text-[#FFA500] mb-2'>Web Design</p>
                <p className='cursor-pointer hover:text-[#FFA500] mb-2'>Figma to HTML</p>
                <p className='cursor-pointer hover:text-[#FFA500] mb-2'>Front-end Development</p>
                <p className='cursor-pointer hover:text-[#FFA500] mb-2'>Wordpress</p>
                <p className='cursor-pointer hover:text-[#FFA500] mb-2'>Shopify</p>
                {/* <p className='cursor-pointer hover:text-[#FFA500] mb-2'>MERN Stack Development</p> */}
            </div>
            <div className='text-white'>
                <h3 className='text-2xl mb-3'> Social Link </h3>
                <div className='text-center flex gap-2 flex-col justify-center'>
                    <p> <a href="https://www.linkedin.com/in/md-rofiqul-islam-250655241" target='_blank'>  <FaLinkedin className='hover:text-[#FFA500]' size={30}></FaLinkedin> </a></p>
                    <p> <a href="https://github.com/itscopebd?tab=repositories" target='_blank'> <FaGithub className='hover:text-[#FFA500]' size={30}></FaGithub></a> </p>
                    <p> <a href="https://www.facebook.com/profile.php?id=100004253328622" target='_blank'><FaFacebook className='hover:text-[#FFA500]' size={30}></FaFacebook> </a></p>
                </div>

            </div>
        </div>
        <p className='text-white text-center border-b-2 border-white pb-10'>Copyright © 2023 - All right reserved by Rofiqul islam</p>
        </>
    );
};

export default Footer;