import React, { useEffect } from 'react';
import perfectImage from "../../assets/image/perfect.png"
import ideaImage from "../../assets/image/idea.png"
import bestImage from "../../assets/image/best.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Quality = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, []);
    return (
        <div className='container bg-white mx-auto grid md:grid-cols-3 gap-5 md:gap-2 py-10' data-aos="fade-up">
            <div className="card px-2">
                <figure><img className='w-32 h-32' src={perfectImage} alt="Shoes" /></figure>
                <div className="card-body px-2 border-none text-black">
                    <h2 className="card-title text-center text-3xl block">Pixel Perfect</h2>
                    <p className='text-center'>My design service is dedicated to delivering meticulous, refined, and pixel-perfect creations for your utmost satisfaction.</p>
                  
                </div>
            </div>
            <div className="card px-2">
                <figure><img className='w-32 h-32' src={bestImage} alt="Shoes" /></figure>
                <div className="card-body px-2 border-none text-black">
                    <h2 className="card-title text-center text-3xl block">High Quality</h2>
                    <p className='text-center'>the clean and organized layout. a visually appealing color scheme that aligns with your brand. legible fonts and maintain consistency throughout the site. your website is accessible and looks good on various devices</p>
                  
                </div>
            </div>
            <div className="card px-2 ">
                <figure><img className='w-32 h-32' src={ideaImage} alt="Shoes" /></figure>
                <div className="card-body px-2 border-none text-black">
                    <h2 className="card-title text-center text-3xl block">Awesome Idea</h2>
                    <p className='text-center'>First, listen to the client's needs. After that research according to the needs. After that, we create the structure and start working.</p>
                  
                </div>
            </div>
        </div>
    );
};

export default Quality;