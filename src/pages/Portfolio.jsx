import { useEffect } from "react";

const Portfolio = () => {

    
    useEffect(() => {
        document.title = "Portfolio - Maweng Consulting Limited";
    }, []);


    return (
        <div>
            <h2 className="roboto-regular">Portfolio</h2>
        </div>
    )
}

export default Portfolio
