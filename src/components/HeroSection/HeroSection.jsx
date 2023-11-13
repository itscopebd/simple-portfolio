import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import img from "../../assets/image/rofiq.png"
import { FaDownload } from 'react-icons/fa';
import rofiqul from "../../assets/image/Resume-Rofiqul.pdf";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, []);

    return (
        <div className=''>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center md:justify-between h-screen container mx-auto'>
                <div className='px-7 md:pr-16 w-12/12 lg:w-6/12'>
                    <div data-aos="fade-up" className='text-white'>
                        <p className='text-xl'>Hey, I'm </p>
                        <h1 className='text-3xl md:text-4xl mb-2 md:mb-4 mt-4'>Md. Rofiqul Islam</h1>
                        <TypeAnimation className='text-3xl md:text-5xl'
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'Web Designer',
                                1000,
                                'Front-end Developer',
                                1000,
                                'Wordpress Developer',
                                1000,
                                'Shopfiy Developer',
                                1000,
                                
                            ]}
                            speed={75}
                            
                            repeat={Infinity} preRenderFirstString={true} omitDeletionAnimation={true}
                            />
                        <h2 className='text-justify md:mt-4 mt-2'>Welcome to my portfolio! I'm Rofiqul Islam ,I have worked as a freelance web developer for the last few years and have connected with some companies. a dedicated web developer passionate about crafting engaging and innovative digital experiences. From designing stunning user interfaces to implementing robust back-end solutions, I thrive on turning ideas into reality. Explore my work and let's embark on a journey of creativity and excellence together.</h2>

                        <div className='flex'>
                            <a href={rofiqul} download={true} className='flex gap-2 items-center px-3 py-3 mt-5 rounded-md hover:bg-transparent hover:border-2 border-2 border-[#FFA500] bg-[#FFA500]'>Resume Download <FaDownload></FaDownload> </a>
                        </div>
                    </div>
                </div>
                <div className=' w-12/12 lg:w-6/12 text flex justify-center' data-aos="fade-up">
                    <img className='h-full w-full' src={img} alt="" />
                </div>
            </div>
        </div>

    );
};

export default HeroSection;