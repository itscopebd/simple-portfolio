import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from "../../lottie/email.json";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    useEffect(() => {
        AOS.init({ duration: 2000 });

    }, []);

    return (
        <div id='contact' data-aos="fade-up">
            <div className='py-5 container mx-auto'>
                <div className='relative section__title mt-10'>
                    <h3 className='text-center py-3 text-4xl text-white'>Contact With Me</h3>
                </div>
                <div className= ' px-5 md:px-0 flex flex-col-reverse md:flex-row gap-5 md:gap-10 md:items-center'>
                    <div className='w-12/12 md:w-6/12'>
                        <form className='flex gap-5 flex-col'>
                            <div>
                                <label htmlFor="" className='text-white'>Your Name</label>
                                <input type="text" placeholder="Name" className="input w-full" />
                            </div>
                            <div>
                                <label htmlFor="" className='text-white'> Your Email</label>
                                <input type="email" placeholder="Email" className="input w-full" />
                            </div>
                            <div>
                                <label htmlFor="" className='text-white'>Your Message</label>
                                <textarea rows={5} className="textarea w-full" placeholder="Message"></textarea>
                            </div>
                            <div>
                                <button className='btn btn-sm btn-outline inline text-white capitalize rounded-md px-7'>Send</button>
                            </div>
                        </form>
                    </div>
                    <div className='w-12/12 md:w-6/12'>
                        <Lottie className="w-full"
                            options={defaultOptions}
                            
                        />
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Contact;