import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="py-[40px] px-[5%] relative" id="about">
            <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[50px] lg:gap-[100px] justify-center">
                <div className="py-[8%] px-[5%] rounded-lg bg-gray-200 text-left flex flex-col gap-5 w-full md:w-[50%] h-fit">
                    <h5 className="text-[#62ff00] tracking-wider">WHO WE ARE</h5>
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider">Your trusted tech partner in Nairobi</h2>
                    <p className="text-gray-500 tracking-wider text-lg md:text-xl">Maweng Consulting Limited is a leading software development company based in Nairobi, specializing in creating cutting-edge solutions for businesses of all sizes.</p>
                    <div>
                        <Link to="/about">
                            <button className='bg-[#62ff00] text-md md:text-lg font-semibold px-6 md:px-8 py-2 rounded-md cursor-pointer'>Read More</button>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-[50%] h-auto">
                    <img src="https://i.pinimg.com/736x/44/7f/cc/447fccca39bf58fb355970cc1c991854.jpg" className="w-full h-full object-cover rounded-lg" alt="about-image" />
                </div>
            </div>
        </section>

    )
}

export default About
