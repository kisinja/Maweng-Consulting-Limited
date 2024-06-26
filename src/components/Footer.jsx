/* import { Instagram, LinkedInOutlined, Twitter } from "@mui/icons-material"; */

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-black py-[30px] px-[5%] flex flex-col gap-12">
            <div className="flex w-full items-center justify-between">
                <ul className="flex flex-col gap-3 md:flex-row md:gap-8">
                    <li className="text-gray-100 tracking-wider">
                        <a href="#services" className="text-gray-500 hover:text-white">
                            Services
                        </a>
                    </li>
                    <li className="text-gray-100 tracking-wider">
                        <a href="" className="text-gray-500 hover:text-white">
                            Schedule Appointment
                        </a>
                    </li>
                    <li className="text-gray-100 tracking-wider">
                        <a href="#faqs" className="text-gray-500 hover:text-white">
                            FAQ{"'"}s
                        </a>
                    </li>
                    <li className="text-gray-100 tracking-wider">
                        <a href="#contact" className="text-gray-500 hover:text-white">
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="flex gap-5 md:flex-row">
                    <i className="fa-brands fa-instagram text-green-800 text-xl cursor-pointer hover:text-[#62ff00]"></i>
                    <i className="fa-brands fa-linkedin text-green-800 text-xl cursor-pointer hover:text-[#62ff00]"></i>
                    <i className="fa-brands fa-twitter text-green-800 text-xl cursor-pointer hover:text-[#62ff00]"></i>
                </div>
            </div>
            <center>
                <p className="tracking-wider text-gray-100 text-sm">© {year} MAWENG CONSULTING SERVICES</p>
            </center>
        </footer>
    );
};

export default Footer
