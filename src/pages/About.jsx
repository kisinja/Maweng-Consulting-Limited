import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import aboutPic from '../assets/about-illustration.svg';
import { values } from '../data';
import WhyChooseUs from '../components/WhyChooseUs';
import Quote from '../components/Quote';
import testimonialIll from '../assets/testimonial-ill.svg';

const About = () => {

    const navigate = useNavigate();

    const bgColors = [
        "bg-[#62ff00]",
        "bg-gray-300",
        "bg-black"
    ];

    useEffect(() => {
        document.title = "About - Maweng Consulting Limited";
    }, []);

    return (
        <section className='px-[5%] py-[30px]'>
            <div className='flex flex-col gap-[60px]'>
                <div className='bg-[#62ff00] py-[5%] px-[10%] rounded-lg'>
                    <h2 className="text-center text-5xl font-bold tracking-wider">About Us</h2>
                    <p className='text-center font-bold mt-3'>
                        <span className='text-white cursor-pointer' onClick={() => navigate("/")}>Home {">"}</span>
                        <span className='ml-2'>About</span>
                    </p>
                </div>

                <div className='flex items-center gap-[80px] mb-[40px]'>
                    <div className='w-1/2'>
                        <img src={aboutPic} alt="illustration" />
                    </div>
                    <div className='p-1 flex flex-col gap-5 w-1/2'>
                        <h4 className='text-[#62ff00] font-bold'>About Us</h4>
                        <h1 className="font-bold text-4xl tracking-wider">We{"'"}ll Take Technology To <br />Where It{"'"}s never Been <br /> Before</h1>
                        <p className="text-sm text-gray-500 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi, reprehenderit labore vitae dolores omnis vel voluptatibus corrupti, a dolorem dicta nemo doloremque quod laboriosam sequi explicabo odit. Aperiam tenetur quis quod officiis sed nobis!</p>
                        <div className='pl-12 border-l-2 border-[#62ff00] flex flex-col gap-3'>
                            <p className="text-sm text-gray-500 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim consequuntur illo. Sunt possimus quod laborum, quasi laboriosam error est debitis alias atque sequi culpa!</p>
                            <p className="text-sm text-gray-500 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim consequuntur illo. Sunt possimus quod laborum, quasi laboriosam error est debitis alias atque sequi culpa!</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center gap-[30px]'>
                    {values.map((value, index) => {
                        const bgColor = bgColors[index % bgColors.length];
                        const textColor = bgColor === 'bg-black' ? 'text-white' : 'text-black';
                        return (
                            <div key={index} className={`w-[220px] p-2 rounded-lg text-center ${bgColor} ${textColor} flex flex-col gap-5`}>
                                <div>
                                    <i className={`${value.icon} text-xl`}></i>
                                    <h2 className={`${textColor} font-bold text-xl tracking-wider`}>{value.title}</h2>
                                </div>
                                <div>
                                    <p className='text-gray-800 text-lg'>{value.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <WhyChooseUs />
            <Quote />
            <div className='flex justify-center items-center gap-[120px] mt-[100px] mb-[50px]'>
                <div className='w-1/2'>
                    <img src={testimonialIll} alt="illustration" />
                </div>
                <div className='flex flex-col gap-5 w-1/2'>
                    <div className='flex flex-col gap-3'>
                        <h4 className='text-[#62ff00] font-bold'>Testimonials</h4>
                        <h1 className="font-bold text-4xl tracking-wider">What They Say <br /> <span className='bg-[#62ff00] text-black p-1 rounded'>About</span>Us?</h1>
                        <p className="text-sm text-gray-500 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi, reprehenderit labore vitae dolores omnis vel voluptatibus corrupti.</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                    </div>
                    <div className='w-[80%]'>
                        <p className="text-sm text-gray-800 font-bold tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe excepturi, reprehenderit labore vitae dolores</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className='w-12 h-12'>
                            <img src="https://i.pinimg.com/736x/6e/d6/c9/6ed6c9e725acd7906477e4461415d3ba.jpg" alt="john doe" className='w-full h-full rounded-full object-cover' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h3 className="text-[#62ff00] font-bold">John Doe</h3>
                            <p className="text-sm text-gray-500">CEO, Company Name</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About