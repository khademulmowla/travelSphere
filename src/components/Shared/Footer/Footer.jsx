import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../../assets/images/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-300 dark:bg-gray-900 p-6 dark:text-gray-300 
                               flex flex-col md:flex-row justify-between items-center md:items-start
                               gap-6 md:gap-0">
                <aside className="flex flex-col items-center space-y-2 md:flex-row md:items-center md:space-x-6 md:space-y-0">
                    <img className='w-auto h-7 bg-base-200' src={logo} alt='TravelSphere Logo' />
                    <p className="text-center md:text-left">
                        <span className='text-lg font-bold'>
                            TravelSphere
                        </span>
                        <br />
                        Providing reliable travel guidance since 1992
                    </p>
                </aside>


                <nav className="text-center md:text-right">
                    <h6 className="text-lg text-center md:text-start font-semibold">Social</h6>
                    <div className="flex justify-center md:justify-end space-x-4 text-xl">
                        <a href="https://www.facebook.com/khademulmowla.aupu.7/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://github.com/khademulmowla" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/khademulmowla" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/a_u_p_u?igsh=Ym9yeTNrNXFpd296" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </nav>
            </footer>

            <footer className="footer footer-center bg-base-300 dark:bg-gray-900 dark:text-gray-300 text-base-content p-4">
                <aside>
                    <p className="text-center text-sm md:text-base">
                        Copyright © {new Date().getFullYear()} - All rights reserved by TravelSphere
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
