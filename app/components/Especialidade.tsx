interface EspecialidadeProps {
    titulo: string;
    descricao: string;
    delay: number;
}

export default function Especialidade({titulo, descricao, delay}: EspecialidadeProps) {
    return (
        <div className="flex flex-col p-10 text-center bg-teal-700 shadow-lg text-shadow-lg text-white rounded-2xl" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" data-aos-delay={delay}>
            <span className="text-2xl font-bold mb-5">{titulo}</span>
            <span className="text-lg text-xl">{descricao}</span>
        </div>
    );
}
