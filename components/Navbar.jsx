import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-neutral-900 text-gray-400 hover:text-gray-300 focus:text-gray-300 shadow-lg shadow-gray-700">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div className="container-fluid">
                    <Link href="/">
                        <a className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">Vinit Parekh</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}