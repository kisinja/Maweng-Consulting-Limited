import { useLocation } from "react-router-dom";
import { services } from "../data";
import { useEffect } from "react";
import GetInTouch from "../components/GetInTouch";

const SingleService = () => {

    const location = useLocation();
    console.log(location);
    const id = location.pathname.split("/")[2];
    console.log(id);

    const mainService = services.find((service) => service.id === parseInt(id));
    console.log(mainService);

    const { title, img, desc } = mainService;

    useEffect(() => {
        document.title = `${mainService.title} - Maweng Consulting Limited`;
    }, [mainService]);

    return (
        <section className="py-10 px-4 md:px-6 lg:px-8">
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-8">
                <div className="w-full md:w-1/2 h-80 md:h-96">
                    <img src={img} alt={title} className="object-cover w-full h-full" id="service-img" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
                    <h1 className="font-bold text-3xl md:text-5xl tracking-wider text-center md:text-left">{title}</h1>
                    <p className="text-lg text-gray-500 tracking-wide text-center md:text-left">{desc}</p>
                    <div className="mt-4">
                        <button className="bg-[#62ff00] hover:bg-[#62ff00bb] text-white py-2 px-4 rounded-full cursor-pointer font-semibold">Get a Quote</button>
                    </div>
                </div>
            </div>
            <GetInTouch />
        </section>
    );
};

export default SingleService;