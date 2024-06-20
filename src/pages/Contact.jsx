import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact - Maweng Consulting Limited";
    }, []);
    return (
        <div>
            <h2 className="roboto-regular">Contact</h2>
        </div>
    )
}

export default Contact