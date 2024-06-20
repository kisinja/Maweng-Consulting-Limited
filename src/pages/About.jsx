import { useEffect } from 'react';
const About = () => {

    useEffect(() => {
        document.title = "About - Maweng Consulting Limited";
    }, []);

    return (
        <div>
            <h2 className="roboto-regular">About</h2>
        </div>
    )
}

export default About