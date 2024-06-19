import { Link } from 'react-router-dom';
import { services } from '../data';

const Services = () => {
    return (
        <section id="services" className='py-[40px] px-[5%]'>
            <center className='mb-6'>
                <h3 className='text-[#62ff00] font-bold tracking-wider'>OUR SERVICES</h3>
                <h1 className='text-3xl font-semibold tracking-wider'>Our Mission is To make your <br /><span className='bg-[#62ff00] p-1 rounded'>Business</span> Better Through <br />Technology</h1>
            </center>
            <div className='grid grid-cols-3 gap-5 items-center'>
                {services.map((service, index) => (
                    <Link key={index} to={`/service/${service.id}`}>
                        <div className='min-w-[300px] h-[300px] bg-gray-100 text-black rounded-lg flex flex-col justify-between mt-3' id="service">
                            <div className='w-full h-[230px]'>
                                <img src={service.img} alt="" className='w-full h-full object-cover rounded-t-lg' />
                            </div>
                            <div className="p-3 bg-[#62ff00] rounded-b-lg">
                                <h1 className='font-bold text-lg tracking-wider'>{service.title}</h1>
                                <p className='tracking-wider text-gray-700'>{service.text}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Services