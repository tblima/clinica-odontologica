import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-center p-12 bg-gray-200 gap-12 lg:gap-96">
            <div className="flex justify-center flex-col text-center">
                <div className="font-bold mb-5">Endereço</div>
                <div>
                    Rua Um, 100<br />
                    Bairro Novo<br />
                    Cidade/UF
                </div>
            </div>
            <div className="justify-center flex-col text-center">
                <div className="font-bold mb-10">Telefones</div>
                +55 (99) 99999-9999<br />
                +55 (99) 88888-8888<br />
            </div>
            <div className="justify-center flex-col text-center">
                <div className="font-bold mb-10">Redes Sociais</div>
                <div>
                    <FontAwesomeIcon icon={faInstagram} size="3x"  />
                    <FontAwesomeIcon icon={faYoutube} size="3x"  />
                </div>
            </div>

        </footer>
    )
}