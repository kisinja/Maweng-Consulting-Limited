import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Quote from "../components/Quote";
import Location from "../components/Location";
import { useEffect, useState } from "react";

const Home = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 150) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        }
    }, []);

    return (
        <>
            <Header />
            <About />
            <Services />
            <WhyChooseUs />
            <Quote />
            <Location />
            {isActive && (
                <div className={`up-btn bg-black w-12 h-12 flex items-center justify-center rounded right-2 bottom-[15%] fixed bg-opacity-75 hover:bg-opacity-90`} title="Back to Top">
                    <a href="#home">
                        <i className="fa-solid fa-chevron-up text-2xl text-[#62ff00]"></i>
                    </a>
                </div>
            )}
        </>
    )
}

export default Home
