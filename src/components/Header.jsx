import header1 from '../assets/header-1.svg';
import header2 from '../assets/header-2.svg';

const Header = () => {
    return (
        <section className='relative py-[30px] px-[5%]'>
            <div className='w-[300px] h-[200px] absolute left-0 top-[30%]'>
                <img src={header1} alt="illustration" className='w-full h-full object-cover' />
            </div>
            <div className='p-[10%] bg-[#62ff00] flex flex-col items-center rounded-xl gap-8'>
                <div className='text-center w-[70%] flex flex-col gap-3'>
                    <h1 className='font-bold text-5xl tracking-wider'>Leveraging Tech <span className='bg-black text-white p-1 rounded'>To Drive</span> A Better IT Experience</h1>
                    <p className='text-md text-gray-500 tracking-wider'>Welcome to our platform, where you can connect, share, and engage with a vibrant community. Discover exciting content, make new friends, and stay updated with the latest trends. Join us today!</p>
                </div>
                <div>
                    <a href="#about" className='bg-black text-white text-lg font-semibold px-8 py-2 rounded-md cursor-pointer'>About Us</a>
                </div>
            </div>
            <div className='w-[300px] h-[200px] absolute right-0 bottom-[30%]'>
                <img src={header2} alt="illustration" className='w-full h-full object-cover' />
            </div>
        </section>
    )
}

export default Header