import Image from "next/image";
import ImagemClinica from "@/app/assets/consultorio-odontologico.jpg";

export default function Hero() {
    return (
        <section id="home" className="flex w-full h-96 lg:h-180 justify-between mb-10">
            <div
                className="w-full relative overflow-hidden flex flex-col justify-end"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="0"
            >
                <Image
                    className="absolute z-0 object-cover opacity-70 mask-y-from-70% mask-y-to-100% mask-x-from-70% mask-x-to-100%"
                    src={ImagemClinica}
                    alt=""
                    fill
                    sizes="100vw"
                />
                <div className="flex flex-col p-7 lg:p-18 bg-teal-900/70">
                    <span className="relative z-10 mb-3 text-lg font-medium text-white text-shadow-lg lg:text-2xl">Sua saúde em primeiro lugar</span>
                    <span className="relative z-10 text-md lg:text-4xl font-bold mb-3 lg:mb-10 text-white text-shadow-lg">Agende sua consulta em 2 minutos</span>
                    <button className="relative z-10 bg-teal-700 hover:bg-teal-600 duration-300 cursor-pointer transition-all text-white shadow-2xl text-shadow-lg font-bold rounded-2xl p-5 lg:p-8 w-52 lg:w-96 lg:text-2xl">Agendar avaliação</button>
                </div>
            </div>
        </section>
    )
}
