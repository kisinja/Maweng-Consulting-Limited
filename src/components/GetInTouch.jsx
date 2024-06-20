import { Link } from "react-router-dom";

const GetInTouch = () => {
    return (
        <div className="w-full px-[3%] py-[5%] mt-[80px] bg-[#44a607] flex flex-col gap-5">
            <h1 className="text-white text-5xl font-bold tracking-wider">Let{"'"}s talk</h1>
            <p className="text-white text-xl tracking-wider">We would love to here from you!</p>
            <div>
                <Link to="/contact">
                    <button className="bg-transparent text-white text-md font-bold border-2 py-3 px-8 border-white">GET IN TOUCH</button>
                </Link>
            </div>
        </div>
    )
}

export default GetInTouch