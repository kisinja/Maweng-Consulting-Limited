import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Gallery = () => {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Gallery - Maweng Consulting Limited";
    }, []);


    return (
        <section className='px-[5%] py-[30px]'>
            <div className='bg-[#62ff00] py-[5%] px-[10%] rounded-lg flex flex-col gap-2'>
                <h2 className="text-center text-5xl font-bold tracking-wider">Our Gallery</h2>
                <p className='text-center font-bold mt-3'>
                    <span className='text-white cursor-pointer' onClick={() => navigate("/")}>Home {">"}</span>
                    <span className='ml-2'>Gallery</span>
                </p>
                <h1 className="font-bold text-3xl mt-4 text-center">See it for <span className="bg-white text-black p-1 rounded">yourself</span></h1>
            </div>

            <center className="mt-[40px] mb-[60px] max-w-[550px] m-auto flex flex-col gap-3">
                <h1 className="font-bold text-3xl mt-4">Showcasing Innovation and Excellence
                </h1>
                <p className="text-gray-500 tracking-wider">
                    At <span className="text-[#62ff00]">MAWENG CONSULTING LIMITED</span>, we pride ourselves on delivering cutting-edge solutions that drive success for our clients. Our diverse portfolio highlights our expertise across various industries, showcasing the innovation, creativity, and dedication we bring to every project. Explore our recent projects and see how we transform ideas into reality.
                </p>
            </center>

            <div className="grid grid-cols-3 gap-4 mt-4 place-items-center">
                <div className="w-[330px] h-[330px]">
                    <img src="https://i.pinimg.com/564x/1d/58/d4/1d58d410149871f639375800435bcca0.jpg" alt="project" className="object-cover w-full h-full rounded-lg gallery-img" />
                </div>
                <div className="w-[330px] h-[330px]">
                    <img src="https://i.pinimg.com/564x/2d/ea/a9/2deaa9b9545513a3aeaab75bb1916614.jpg" alt="project" className="object-cover w-full h-full rounded-lg gallery-img" />
                </div>
                <div className="w-[330px] h-[330px]">
                    <img src="https://i.pinimg.com/564x/7d/0e/7d/7d0e7d9ceacd5ffde9f131b825423b3c.jpg" alt="project" className="object-cover w-full h-full rounded-lg gallery-img" />
                </div>
                <div className="w-[330px] h-[330px]">
                    <img src="https://i.pinimg.com/564x/47/57/6b/47576b13fd446c249c8b906126e67fb0.jpg" alt="project" className="object-cover w-full h-full rounded-lg gallery-img" />
                </div>
                <div className="w-[330px] h-[330px]">
                    <img src="https://i.pinimg.com/736x/f7/ef/16/f7ef16b8a13b06419a2ec127a6c6a6fa.jpg" alt="project" className="object-cover w-full h-full rounded-lg gallery-img" />
                </div>
                <div className="w-[330px] h-[330px]">
                    <img src="https://i.pinimg.com/564x/e2/70/d9/e270d9f16f4ed6955e1207ad9d0e122a.jpg" alt="project" className="object-cover w-full h-full rounded-lg gallery-img" />
                </div>
                <div className="w-[330px] h-[330px]">
                    <img src="https://i.pinimg.com/564x/73/12/ed/7312ed0fb2408ec87456ec8792e864c1.jpg" alt="project" className="object-cover w-full h-full rounded-lg gallery-img" />
                </div>
                <div className="w-[330px] h-[330px]">
                    <img src="https://i.pinimg.com/564x/3b/d2/ef/3bd2ef79a8e8debe4d9d536787c4a83b.jpg" alt="project" className="object-cover w-full h-full rounded-lg gallery-img" />
                </div>
            </div>
        </section>
    )
}

export default Gallery
