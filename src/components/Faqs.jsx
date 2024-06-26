import { useState } from 'react';
import { questions } from '../data';

const Faqs = () => {

    const [faqs, setFaqs] = useState(questions);

    const toggleFAQ = (index) => {
        setFaqs(questions.map((question, i) => {
            if (i === index) {
                question.open = !question.open;
            } else {
                question.open = false;
            }
            return question;
        }));
    };


    return (
        <section className="max-w-3xl mx-auto mt-8 py-[40px] px-[5%]" id='faqs'>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 w-full">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-[#62ff00] text-white p-4 rounded-lg shadow-md">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-xl font-semibold">{faq.question}</h3>
                            <span className={faq.open ? "transform rotate-180 transition duration-300" : "transform transition duration-300"}>&#x2B;</span>
                        </div>
                        {faq.open && (
                            <div className='p-1 rounded-lg bg-white'>
                                <p className="text-md mt-2 text-[#62ff00]">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Faqs
