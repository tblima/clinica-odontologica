import {Carousel} from "@/app/components/Carousel";

export default function Depoimentos() {
    const depoimentos = [
        <div key="1" className="p-12 text-center w-full">
            <p className="text-white italic mb-4">
                "Fui super bem atendida, desde a recepção até a consulta. O dentista explicou
                cada etapa do tratamento com muita paciência."
            </p>
            <p className="font-medium text-white">Marina Costa</p>
            <p className="text-sm text-white">Clareamento dental</p>
        </div>,

        <div key="2" className="p-12 text-center w-full">
            <p className="text-white italic mb-4">
                "Fiz meu tratamento ortodôntico aqui e o resultado ficou perfeito. Equipe
                sempre pontual e atenciosa em todas as consultas."
            </p>
            <p className="font-medium text-white">Rafael Almeida</p>
            <p className="text-sm text-white">Ortodontia</p>
        </div>,

        <div key="3" className="p-12 text-center w-full">
            <p className="text-white italic mb-4">
                "Ambiente muito acolhedor, principalmente pra quem tem receio de dentista
                como eu. Consegui marcar direto pelo WhatsApp, bem prático."
            </p>
            <p className="font-medium text-white">Juliana Ferreira</p>
            <p className="text-sm text-white">Limpeza e profilaxia</p>
        </div>,

        <div key="4" className="p-12 text-center w-full">
            <p className="text-white italic mb-4">
                "Levei meu filho pra primeira consulta e a equipe foi incrível com ele.
                Hoje ele não tem mais medo de ir ao dentista."
            </p>
            <p className="font-medium text-white">Carlos Eduardo Souza</p>
            <p className="text-sm text-white">Odontopediatria</p>
        </div>,

        <div key="5" className="p-12 text-center w-full">
            <p className="text-white italic mb-4">
                "Precisei de um tratamento de canal e fiquei surpresa com o quanto foi
                tranquilo. Recomendo de olhos fechados."
            </p>
            <p className="font-medium text-white">Beatriz Lima</p>
            <p className="text-sm text-white">Endodontia</p>
        </div>,
    ]

    return (
        <section id="depoimentos" className="w-full mb-10 py-20 px-7 lg:px-18 bg-teal-900 text-white" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <div className="text-4xl font-bold text-center m-10">Depoimentos</div>
            <Carousel slides={depoimentos} />
        </section>
    )
}