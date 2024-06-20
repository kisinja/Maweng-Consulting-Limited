import { useEffect } from "react";

const Gallery = () => {
    useEffect(() => {
        document.title = "Gallery - Maweng Consulting Limited";
    }, []);
    return (
        <div>
            <h2 className="roboto-regular">Gallery</h2>
        </div>
    )
}

export default Gallery
