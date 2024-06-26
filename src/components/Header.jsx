import header1 from '../assets/header-1.svg';
import header2 from '../assets/header-2.svg';

const Header = () => {
    return (
        <section className="relative py-8 px-4 md:py-12 md:px-8 lg:px-16" id="home">
            <div className="w-64 h-48 absolute left-0 top-1/3 hidden md:block">
                <img src={header1} alt="illustration" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-16 bg-[#62ff00] flex flex-col items-center rounded-xl gap-8">
                <div className="text-center w-full md:w-3/4 lg:w-1/2 flex flex-col gap-3">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-wider">
                        Leveraging Tech <span className="bg-black text-white p-1 rounded">To Drive</span> A Better IT Experience
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg text-gray-500 tracking-wider">
                        Welcome to our platform, where you can connect, share, and engage with a vibrant community. Discover exciting content, make new friends, and stay updated with the latest trends. Join us today!
                    </p>
                </div>
                <div>
                    <a href="#about" className="bg-black text-white text-sm md:text-base lg:text-lg font-semibold px-4 md:px-6 lg:px-8 py-2 rounded-md cursor-pointer">
                        About Us
                    </a>
                </div>
            </div>
            <div className="w-64 h-48 absolute right-0 bottom-1/3 hidden md:block">
                <img src={header2} alt="illustration" className="w-full h-full object-cover" />
            </div>
        </section>

    )
}

export default Header