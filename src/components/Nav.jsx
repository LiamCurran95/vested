import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { UserContext } from "../context/userContext";
import { ThemeContext } from "../context/themeContext";


export default function Nav() {

    const { loggedInUser } = useContext(UserContext)
    const {toggle, toggleFunction } = useContext(ThemeContext)
    const [navClicked, setNavClicked] = useState(false)

    return (
        <>
        
        <nav className="nav-content-container">
   


            <div className="dropdown">
                <button className="drop-btn" onClick={() => { navClicked ? setNavClicked(false) : setNavClicked(true) }}>☰</button>

                <section className="drop-content" >
                    <Link to="/" style={{ textDecoration: "none" }} id={navClicked ? "show" : "hide"} onClick={() => { setNavClicked(false) }}>Home</Link>
                    <Link to="/profile" style={{ textDecoration: "none" }} id={navClicked ? "show" : "hide"} onClick={() => { setNavClicked(false) }}>Profile</Link>
                    <Link to="/newsfeed" style={{ textDecoration: "none" }} id={navClicked ? "show" : "hide"} onClick={() => { setNavClicked(false) }}>Feed</Link>
                    <Link to="/infopage" style={{ textDecoration: "none" }} id={navClicked ? "show" : "hide"} onClick={() => { setNavClicked(false) }}>What is ESG?</Link>
                    <Link to="/form" style={{ textDecoration: "none" }} id={navClicked ? "show" : "hide"} onClick={() => { setNavClicked(false) }}>New Portfolio</Link>
                </section>
            </div>
            
            <section className="right-nav">
            <button onClick={toggleFunction}> {toggle? " ☼ " : " ☾ " } </button>
            <span className="nav-user">
                {loggedInUser? loggedInUser.username : "No Logged In User"}
                <img className="nav-img-avatar" src={loggedInUser ? loggedInUser.avatarUrl : ""} alt="Please Log In" />
            </span>	
				{/* <button >
					<Link to="/login" style={{ textDecoration: "none" }}>
						Log In
					</Link>
				</button> */}
                

            </section>
        </nav>
        </>
    )
}