import { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`flex w-full h-24 fixed top-0 z-10 ${ isScrolled ? 'bg-white shadow-2xl' : 'bg-none' } transition-all duration-300`}>
            <div className="flex w-full items-center justify-between p-8">
                <div className="text-2xl lg:text-4xl font-bold text-teal-900" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Clínica Odontológica</div>
                <Navbar />
            </div>
        </header>
    )
}
