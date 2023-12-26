import logo from "../../assets/logo.svg"

const Footer = () => {
    return (
        <div >
            <footer className="footer p-10 bg-[#151515] text-white">
                <aside>
                   <img src={logo} alt="" />
                    <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                    <div>

                    </div>
                </aside>
                <nav>
                    <header className="footer-title">About</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Contact</a>
                    
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