
const Location = () => {
    return (
        <section className="py-[50px] px-[5%]">
            <div className="flex justify-between">
                <div className="w-[550px] flex flex-col gap-5">
                    <h5 className="text-sm tracking-wider text-[#62ff00] font-bold">OUR LOCATION</h5>
                    <h1 className="font-bold tracking-wider text-5xl">Let Us Do The Work, So You Can Focus On What Matters</h1>
                    <p className="text-gray-500 text-sm tracking-wider">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nam aliquam provident tempora magni quia ipsum voluptatem perferendis sapiente nisi?</p>

                    <div className="flex items-center gap-5">
                        <div className="w-[330px] py-2 px-3 bg-black rounded-md flex gap-4 items-center">
                            <div className="w-12 h-12 rounded-full bg-[#62ff00] flex items-center justify-center">
                                <i className="fa-solid fa-envelope text-lg"></i>
                            </div>
                            <div>
                                <h5 className="font-bold text-lg tracking-wide text-white">Email</h5>
                                <p className="text-gray-500 text-sm tracking-wider">support@mawengconsulting.co.ke</p>
                            </div>
                        </div>
                        <div className="w-1/2 py-2 px-3 bg-[#62ff00] rounded-md flex gap-4 items-center">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                                <i className="fa-solid fa-phone text-lg text-white"></i>
                            </div>
                            <div>
                                <h5 className="font-bold text-lg tracking-wide">Phone</h5>
                                <p className="text-gray-500 text-sm tracking-wider">07123000000</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] h-[150px]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8615806140274!2d36.7973497!3d-1.2547773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17c07e842095%3A0x89a643b02ed55fb4!2sGOMYCODE%20Nairobi!5e0!3m2!1sen!2ske!4v1718910518854!5m2!1sen!2ske" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-md w-full h-full"></iframe>
                    </div>
                </div>
                <div className="w-[450px]">
                    <form action="" className="py-3 px-4 bg-gray-200 rounded-md flex flex-col">
                        <div className="mb-3">
                            <label htmlFor="" className="font-bold text-lg tracking-wide">Name</label>
                            <input type="text" placeholder="Enter your name" className="w-full p-2 rounded-md border-2 outline-none bg-white" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="font-bold text-lg tracking-wide">Email</label>
                            <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-md border-2 outline-none bg-white" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="font-bold text-lg tracking-wide">Message</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message" className="w-full p-2 rounded-md resize-none border-2 outline-none bg-white"></textarea>
                        </div>

                        <button className="bg-[#62ff00] p-2 rounded-md text-black font-semibold">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Location