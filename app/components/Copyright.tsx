export default function Copyright() {
    const currentYear = new Date().getFullYear()

    return (
        <div className="w-full bg-teal-900 text-white flex justify-center text-center py-5">
            &copy; 2026-{currentYear} Thiago Bittencourt. Todos os direitos reservados.
        </div>
    )
}
