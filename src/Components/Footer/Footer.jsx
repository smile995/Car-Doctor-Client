import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { FaFacebook, FaGoogle, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div >
            <footer className="footer p-10 bg-[#151515] text-white">
                <aside>
                    <img src={logo} alt="" />
                    <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                    <div className=" flex justify-between gap-6 text-xl  ">
                        <Link><FaGoogle></FaGoogle></Link>
                        <Link><FaFacebook></FaFacebook></Link>
                        <Link><FaLinkedinIn></FaLinkedinIn></Link>
                        <Link><FaYoutube></FaYoutube></Link>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">About</header>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/service' className="link link-hover">Service</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>

                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">Why Car Doctor</a>

                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Jobs</a>

                </nav>
                <nav>
                    <header className="footer-title">Support</header>
                    <a className="link link-hover">Suport Center</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Accesbility</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;