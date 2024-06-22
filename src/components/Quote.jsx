import { PhoneAndroidOutlined } from "@mui/icons-material";

const Quote = () => {
    return (
        <section className="py-[30px] px-[5%]">
            <div className="w-full rounded-xl bg-[#62ff00] py-[5%] flex flex-col gap-5 px-[5%]">
                <h1 className="text-5xl font-bold text-center tracking-wider">From The Cloud To <span className="bg-black p-1 rounded text-white">Customers</span> We Bring <br />All The Answers</h1>

                <p className="text-gray-800 text-sm tracking-wider text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque autem suscipit rem aliquam porro beatae, dolores repellat optio temporibus facilis natus aliquid adipisci et delectus vero nemo excepturi vel quod!</p>

                <div className="flex gap-5 justify-center items-center">
                    <button className="bg-black text-white text-lg cursor-pointer rounded p-2">Get a Quote</button>
                    <button className="bg-transparent flex gap-3 text-lg font-bold cursor-pointer">
                        <PhoneAndroidOutlined />
                        +254 712222333
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Quote
