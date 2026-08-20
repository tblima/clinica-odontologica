export default function Navbar() {
    return (
        <nav className="flex gap-8 text-xl">

            <input id="menu-toggle" type="checkbox" className="peer hidden" />
            <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden p-2">
                <div className="w-6 h-0.5 bg-teal-900 mb-1 transition-all peer-checked:rotate-45 peer-checked:translate-y-2"></div>
                <div className="w-6 h-0.5 bg-teal-900 mb-1 transition-opacity peer-checked:opacity-0"></div>
                <div className="w-6 h-0.5 bg-teal-900 transition-all peer-checked:-rotate-45 peer-checked:-translate-y-2"></div>
            </label>

            <div className="hidden lg:flex lg:gap-5">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="100">
                    <a className="text-center py-2 rounded-lg text-teal-900 hover:text-shadow-lg transition-all duration-300" href="#home">Início</a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="200">
                    <a className="text-center py-2 rounded-lg text-teal-900 hover:text-shadow-lg transition-all duration-300" href="#especialidades">Especialidades</a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="300">
                    <a className="text-center py-2 rounded-lg text-teal-900 hover:text-shadow-lg transition-all duration-300" href="#quem-somos">Quem Somos</a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="400">
                    <a className="text-center py-2 rounded-lg text-teal-900 hover:text-shadow-lg transition-all duration-300" href="#depoimentos">Depoimentos</a>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="500">
                    <a className="text-center py-2 rounded-lg text-teal-900 hover:text-shadow-lg transition-all duration-300" href="#contato">Contato</a>
                </div>
            </div>

            {/* menu mobile */}
            <div className="absolute hidden top-24 w-full right-0 flex-col peer-checked:flex lg:hidden transition-all duration-300 bg-white">
                <div className="text-right">
                    <a href="#home" className="block p-3">Início</a>
                    <a href="#especialidades" className="block p-3 border-t border-gray-300/50">Especialidades</a>
                    <a href="#quem-somos" className="block p-3 border-t border-gray-300/50">Quem Somos</a>
                    <a href="#depoimentos" className="block p-3 border-t border-gray-300/50">Depoimentos</a>
                    <a href="#contato" className="block p-3 border-t border-gray-300/50">Contato</a>
                </div>
            </div>
        </nav>
    );
}
