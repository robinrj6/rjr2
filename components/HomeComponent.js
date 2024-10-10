
import MouseScrollComponent from "./MouseScrollComponent";

export default function HomeComponent({ homeRef, profileRef }) {
    return (
        <div className="home section" homeRef={homeRef}>
            <h1 className="name heading"><span className="red" >R</span>obin Jose Raju
                <p className="subHeading">FullStack Developer</p>
            </h1>
            <br></br><MouseScrollComponent profileRef={profileRef} />
        </div>
        
    )
}