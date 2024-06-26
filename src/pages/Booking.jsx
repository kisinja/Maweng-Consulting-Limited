import { useState } from "react";
import Loader from "../components/Loader";

const Booking = () => {

    const [loading, setLoading] = useState(false);

    const BASE_URL = "http://localhost:7000";

    const [formData, setFormData] = useState({
        service: "",
        date: "",
        time: "",
        fullName: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/book-appointment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            setLoading(false);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <section className="py-[60px] px-[5%]">
            <div className="p-4 bg-[#62ff00]">
                <center>
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">Book an Appointment</h1>
                </center>
                <form className="rounded-lg bg-white px-4 py-3" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Service</label>
                        <input type="text" name="service" className="form-control text-gray-800"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Date</label>
                        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            onChange={handleChange}
                            name="date"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Time</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            onChange={handleChange}
                            name="time"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                        <input type="text" className="form-control"
                            name="fullName"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                        <input type="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            name="phone"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
                        <textarea name="message" id="" className="resize-none w-full h-[200px] p-1 border rounded-lg outline-none form-control" placeholder="Type Something ..." onChange={handleChange}></textarea>
                    </div>


                    <div className="text-center">
                        {loading ? <Loader /> : (
                            <button type="submit" className="btn bg-black hover:bg-white hover:text-black hover:border-2 hover:border-[#62ff00] py-2 px-6 rounded-lg text-white">
                                Book Appointment
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Booking
