import React from "react";
import lottie from "lottie-web";
import mouseScroll from "../public/mouse-scroll.json";


export default function MouseScrollComponent({profileRef}) {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#mouseScroll"),
            animationData: mouseScroll
        });
    }, []);
    const handleClick = () => {
        profileRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className="mouseScroll" onClick={handleClick}>
            <div id="mouseScroll" style={{ width: 100, height: 100 }}></div>
        </div>
    )
}