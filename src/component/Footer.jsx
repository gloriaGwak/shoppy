import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className='pb-8'>
            <div className='h-[5px] mb-8 bg-gradient-to-r from-sky to-navy'></div>
            <div className="inner">
                <div className="social-icons flex justify-start gap-2 mb-2">
                    <Link to="https://github.com/gloriaGwak" target="_blank" title='Go to new window' aria-label="Gloria`s GitHub">
                        <FaGithub alt="Gloria's GitHub" className="w-6 h-6" />
                        <span className='blind'>Gloria's GitHub</span>
                    </Link>
                    <Link to="https://www.linkedin.com/in/gloria-gwak-803667236" target="_blank" title='Go to new window' aria-label="Gloria`s LinkedIn">
                        <FaLinkedin className="w-6 h-6" />
                        <span className='blind'>Gloria's LinkedIn</span>
                    </Link>
                </div>
                <p className=''>Designed and developed by Gloria Gwak | © 2024 Gloria Gwak. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

