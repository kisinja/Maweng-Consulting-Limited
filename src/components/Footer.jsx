/* import { Instagram, LinkedInOutlined, Twitter } from "@mui/icons-material"; */

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-gray-800 py-[30px] px-[5%] flex flex-col gap-12">
            <div className="flex w-full items-center justify-between">
                <ul className="flex items-center gap-8">
                    <li className="text-gray-100 tracking-wider">Services</li>
                    <li className="text-gray-100 tracking-wider">Schedule Appointment</li>
                    <li className="text-gray-100 tracking-wider">FAQ{"'"}s</li>
                    <li className="text-gray-100 tracking-wider">Contact</li>
                </ul>
                <div className="flex gap-5">
                    <i className="fa-brands fa-instagram text-green-800 text-xl cursor-pointer"></i>
                    <i className="fa-brands fa-linkedin text-green-800 text-xl cursor-pointer"></i>
                    <i className="fa-brands fa-twitter text-green-800 text-xl cursor-pointer"></i>
                </div>
            </div>
            <center>
                <p className="tracking-wider text-gray-100 text-sm">© {year} MAWENG CONSULTING SERVICES</p>
            </center>
        </footer>
    )
}

export default Footer
