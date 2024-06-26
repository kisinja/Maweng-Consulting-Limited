import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const BASE_URL = "http://localhost:7000";

    const navigate = useNavigate();

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
        setError("");

        try {
            const res = await fetch(`${BASE_URL}/book-appointment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!res.ok) {
                throw new Error("Network response was not ok");
            }

            var data = await res.json();
            console.log(data);
            toast.success(data.message);
            navigate("/thank-you");
        } catch (error) {
            console.error('Error booking appointment:', error.message);
            setError('Failed to book appointment. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-[30px] px-[5%]" id="booking">
            <div className="p-4 bg-[#62ff00] max-w-[550px] m-auto rounded-lg">
                <center>
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">Book an Appointment</h1>
                </center>
                <form className="rounded-lg bg-white px-4 py-3" onSubmit={handleSubmit}>
                    <div className="flex justify-between items-center gap-1">
                        <div className="mb-3 flex-1">
                            <label htmlFor="exampleInputEmail1" className="form-label">Service</label>
                            <input type="text" name="service" className="form-control text-gray-800"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 flex-1">
                            <label htmlFor="exampleInputEmail1" className="form-label">Date</label>
                            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                onChange={handleChange}
                                name="date"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Time</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            onChange={handleChange}
                            name="time"
                        />
                    </div>
                    <div className="flex justify-between items-center gap-1">
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


                    <div>
                        {error && <div className="text-red-500 text-center bg-white p-1 rounded-lg text-lg">{error}</div>}
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn bg-black hover:bg-white hover:text-black hover:border-2 hover:border-[#62ff00] py-2 px-6 rounded-lg text-white">
                            {loading ? "Booking..." : "Book Appointment"}
                        </button>
                    </div>
                </form>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </section>
    );
};

export default Booking
