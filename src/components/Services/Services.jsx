import React, { useEffect } from 'react';
import creative from "../../assets/image/creative.png"
import development from "../../assets/image/development.png"
import responsive from "../../assets/image/responsive.png"
import wordpress from "../../assets/image/wordpress.png"
import shopify from "../../assets/image/shopify.png"
import figma from "../../assets/image/figma.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, []);
    
    return (
        <div id='services' data-aos="fade-up">
            <div className='pt-5 container mx-auto px-5 md:px-0'>
                <div className='relative section__title my-10'>
                    <h3 className='text-center py-3 text-4xl text-white'>Services</h3>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>

                    <div className="card bg-white shadow-xl">
                        <div className='flex items-center'>
                            <div className='w-4/12'>
                                <figure><img  src={creative} alt="Shoes" /></figure>
                            </div>
                            <div className='w-8/12'>
                                <div className="card-body">
                                    <h2 className="card-title">Creative web Design</h2>
                                    <p className='text-justify'>Need a website? Fully Responsive static websites by using HTML, CSS, JavaScript, JQuery, Bootstrap and Tailwindcss.</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="card bg-white shadow-xl">
                        <div className='flex items-center'>
                            <div className='w-4/12'>
                                <figure><img  src={development} alt="Shoes" /></figure>
                            </div>
                            <div className='w-8/12'>
                                <div className="card-body">
                                    <h2 className="card-title">MERN Stack Projects</h2>
                                    <p className='text-justify'>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="card bg-white shadow-xl">
                        <div className='flex items-center'>
                            <div className='w-4/12'>
                                <figure><img  src={responsive} alt="Shoes" /></figure>
                            </div>
                            <div className='w-8/12'>
                                <div className="card-body">
                                    <h2 className="card-title">WordPress</h2>
                                    <p className='text-justify'>Build WordPress website with Elementor, WPBakery Page Builder, Gutenberg, Divi, Avada, Betheme, Woodmart, Newspapr and E-Commerce Website. or custom theme development. </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="card bg-white shadow-xl">
                        <div className='flex items-center'>
                            <div className='w-4/12'>
                                <figure><img  src={wordpress} alt="Shoes" /></figure>
                            </div>
                            <div className='w-8/12'>
                                <div className="card-body">
                                    <h2 className="card-title">Wordpres Website</h2>
                                    <p className='text-justify'>Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="card bg-white shadow-xl">
                        <div className='flex items-center'>
                            <div className='w-4/12'>
                                <figure><img  src={shopify} alt="Shoes" /></figure>
                            </div>
                            <div className='w-8/12'>
                                <div className="card-body">
                                    <h2 className="card-title">Shopify Store</h2>
                                    <p className='text-justify'>Shopify Store & Premium Theme Customization.Landing Page Design, Product , Sales and Squeeze Page Design .Page Builder ( Pagefly, Gempages, Shogun) or custom theme development </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-white shadow-xl">
                        <div className='flex items-center'>
                            <div className='w-4/12'>
                                <figure><img  src={figma} alt="Shoes" /></figure>
                            </div>
                            <div className='w-8/12'>
                                <div className="card-body">
                                    <h2 className="card-title">Convert</h2>
                                    <p className='text-justify'>Figma, XD,PSD to ( HTML, React js, Wordpress, Shopify) theme development </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default Services;