import Especialidade from "@/app/components/Especialidade";

export default function Especialidades() {
    return (
        <section id="especialidades" className="w-full pt-20 mb-20 px-7 lg:px-18 flex flex-col items-center" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <div className="text-4xl text-center m-10 font-bold">Especialidades</div>
            <div className="grid lg:grid-rows-2 grid-cols-1 lg:grid-cols-3 gap-5">
                <Especialidade
                    titulo="Clareamento Dental"
                    descricao="Procedimento rápido e seguro pra devolver o brilho do seu sorriso." delay={0} />
                <Especialidade
                    titulo="Ortodontia"
                    descricao="Aparelhos tradicionais e estéticos, com acompanhamento em cada etapa." delay={100} />
                <Especialidade
                    titulo="Limpeza e Profilaxia"
                    descricao="Prevenção contra cáries e tártaro, recomendada a cada 6 meses." delay={200} />
                <Especialidade
                    titulo="Odontopediatria"
                    descricao="Atendimento especializado pra deixar as crianças à vontade no consultório." delay={300} />
                <Especialidade
                    titulo="Endodontia"
                    descricao="Tratamento de canal com técnicas modernas para reduzir o desconforto." delay={400} />
                <Especialidade
                    titulo="Estética Dental"
                    descricao="Facetas e lentes de contato dental para um sorriso mais uniforme." delay={500} />
            </div>
        </section>
    )
}