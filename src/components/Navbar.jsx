// import {Router, Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__icon">
                    <h2>Lam</h2>
                </div>
                <div className="navbar__links">
                    <a className="navbar__links--default" href="#projects">Projects</a>
                    <a className="navbar__links--contained" href="#contact">Get In Touch</a>
                    {/* <Router exact to="/about" component={Showcase}/> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar