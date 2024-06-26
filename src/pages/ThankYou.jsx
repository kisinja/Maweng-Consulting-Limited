import { Link } from "react-router-dom";
import { MailOutlined } from "@mui/icons-material";

const ThankYou = () => {
    return (
        <section id="thank-you" className="pt-[30px] pb-[80px]">
            <div className="flex flex-col items-center gap-3 max-w-[450px] m-auto bg-[#67ff00] py-4 px-2 rounded-lg">
                <div className="thank-icon bg-black w-14 h-14 p-4 flex items-center justify-center rounded-full">
                    <MailOutlined style={{ fontSize: "50px", color: "#67ff00" }} />
                </div>
                <h1 className="font-bold text-2xl text-white tracking-wider text-center">Thank you. Your Appointment has been received Successfully!</h1>
                <p className="text-gray-700 tracking-wider text-lg">our team of experts will reach out soon</p>

                <div className="flex justify-center items-center">
                    <Link to="/">
                        <button className="bg-[#000] text-white rounded-[30px] hover:text-black py-2 px-5 hover:bg-white  hover:border-2 hover:border-black">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ThankYou;