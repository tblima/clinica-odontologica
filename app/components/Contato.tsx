import { useState } from 'react'

export default function Contato() {
    const [telefone, setTelefone] = useState('')

    const aplicarMascara = (texto: string) => {
        let nums = texto.replace(/\D/g, '')
        if (nums.length > 11) nums = nums.slice(0, 11)
        if (nums.length === 0) return ''

        if (nums.length > 10) {
            return nums.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
        } else if (nums.length > 6) {
            return nums.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3')
        } else if (nums.length > 2) {
            return nums.replace(/^(\d{2})(\d{0,5})/, '($1) $2')
        } else {
            return nums.replace(/^(\d*)/, '($1')
        }
    }

    return (
        <section id="contato" className="w-full lg:w-2/3 pt-20 mb-20 px-7 lg:px-18 flex flex-col" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <div className="text-4xl font-bold text-center m-10">Contato</div>
            <div className="flex flex-col mb-5">
                <label>Nome</label>
                <input type="text" className="rounded-lg border border-neutral-300 p-2" />
            </div>
            <div className="flex flex-col mb-5">
                <label>E-mail</label>
                <input type="text" className="rounded-lg border border-neutral-300 p-2" />
            </div>
            <div className="flex flex-col mb-5">
                <label>Telefone/WhatsApp</label>
                <input type="tel" value={telefone} onChange={(e) => setTelefone(aplicarMascara(e.target.value))} className="rounded-lg border border-neutral-300 p-2" />
            </div>
            <div className="flex flex-col mb-5">
                <label>Mensagem</label>
                <textarea rows={5} className="rounded-lg border border-neutral-300 p-2 resize-none" />
            </div>
            <div className="flex justify-center">
                <button className="bg-teal-700 hover:bg-teal-600 duration-300 cursor-pointer text-white shadow-2xl text-shadow-lg font-bold rounded-2xl p-5 w-96 text-2xl">Enviar mensagem</button>
            </div>
        </section>
    )
}
