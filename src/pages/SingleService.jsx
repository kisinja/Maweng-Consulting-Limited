import { useLocation } from "react-router-dom";
import { services } from "../data";
import { useEffect } from "react";
import GetInTouch from "../components/GetInTouch";

const SingleService = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id);

    const mainService = services.find((service) => service.id === parseInt(id));
    console.log(mainService);

    const { title, img, desc } = mainService;

    useEffect(() => {
        document.title = `${mainService.title} - Maweng Consulting Limited`;
    }, [mainService]);


    return (
        <section className="py-[50px] px-[5%]">
            <div className="w-full flex justify-evenly gap-[80px]">
                <div className="w-1/2 h-[400px]">
                    <img src={img} alt={title} className="object-cover w-full h-full" id="service-img" />
                </div>
                <div className="w-1/2 flex flex-col justify-between" id="details">
                    <h1 className="font-bold text-5xl tracking-wider">{title}</h1>
                    <p className="text-lg text-gray-500 tracking-wider">{desc}</p>
                    <div>
                        <button className="bg-[#62ff00] p-2 rounded cursor-pointer text-black font-semibold">Get a Quote</button>
                    </div>
                </div>
            </div>

            <GetInTouch />
        </section>
    )
}

export default SingleService;
