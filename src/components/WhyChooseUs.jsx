import whyChoseUsIcon from '../assets/whychoseus.svg';

const WhyChooseUs = () => {
    return (
        <section className="py-[100px] px-[5%]">
            <div className='flex flex-col lg:flex-row justify-center gap-[50px] lg:gap-[100px]'>
                <div className="flex flex-col gap-5">
                    <div>
                        <h4 className="font-bold text-md text-left text-[#62ff00]">Why Choose Us</h4>
                        <h1 className="text-left font-bold text-4xl tracking-widest">Delivering Technology <br /> Solutions</h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col gap-5 divide-y-2 w-full md:w-[350px]">
                            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-3xl">
                                01
                            </div>
                            <div className="pt-5">
                                <p className="tracking-wider text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad praesentium labore impedit eaque mollitia id velit earum enim optio ipsam? Temporibus repellendus eos ipsam iusto, quia expedita tenetur placeat quis, molestiae perspiciatis quam reiciendis consequuntur omnis facilis ut accusamus odit, cum repellat incidunt sed sit! Natus, repellendus minima hic sequi, cum totam tenetur inventore dolor sit labore neque nam velit!</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 divide-y-2 w-full md:w-[350px]">
                            <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center text-3xl">
                                02
                            </div>
                            <div className="pt-5">
                                <p className="tracking-wider text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad praesentium labore impedit eaque mollitia id velit earum enim optio ipsam? Temporibus repellendus eos ipsam iusto, quia expedita tenetur placeat quis, molestiae perspiciatis quam reiciendis consequuntur omnis facilis ut accusamus odit, cum repellat incidunt sed sit! Natus, repellendus minima hic sequi, cum totam tenetur inventore dolor sit labore neque nam velit!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[300px] h-[300px] mt-[50px] lg:mt-[100px]">
                    <img src={whyChoseUsIcon} alt="illustration" className='w-full h-full object-cover' />
                </div>
            </div>
        </section>

    )
}

export default WhyChooseUs