import "../styles/home.css";
import MouseScrollComponent from "./MouseScrollComponent";

export default function HomeComponent({ profileRef }) {
    return (
        <div className="home section">
            <h1 className="name heading">Robin Jose Raju
                <p className="subHeading">FullStack Developer</p>
            </h1>
            <br></br><MouseScrollComponent profileRef={profileRef} />
        </div>
    )
}