import React from "react";
import mouseScroll from "../public/mouse-scroll.json";


export default function MouseScrollComponent({ profileRef }) {
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            import('lottie-web').then(lottie => {
                lottie.default.loadAnimation({
                    container: document.querySelector("#mouseScroll"),
                    animationData: mouseScroll
                });
            });
        }
    }, []);

    const handleClick = () => {
        profileRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <p style={{ display: "flex", textAlign: "center", justifyContent: "center" }}> Get to know me.</p>
            <div className="mouseScroll" onClick={handleClick} >
                <div id="mouseScroll"></div>
            </div>
        </>
    )
}