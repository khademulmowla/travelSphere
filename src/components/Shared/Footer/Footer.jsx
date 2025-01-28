import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../../assets/images/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-neutral text-neutral-content p-10">
                <aside>
                    <img className='w-auto h-7 bg-base-200' src={logo} alt='' />
                    <p>
                        <span className='text-lg font-bold'>
                            TravelSphere
                        </span>
                        <br />
                        Providing reliable travel guidance since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/khademulmowla.aupu.7/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://github.com/khademulmowla" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/khademulmowla" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/a_u_p_u?igsh=Ym9yeTNrNXFpd296" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </div>

                </nav>
            </footer>
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by TravelSphere</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;