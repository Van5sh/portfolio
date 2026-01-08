const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-full h-0.5 mb-16">
            <h1 className="text-2xl font-bold text-black">VD</h1>
            <nav>
                <ul className="flex gap-8 text-sm font-medium text-black">
                    <li className="cursor-pointer hover:text-orange-500">Skills</li>
                    <li className="cursor-pointer hover:text-orange-500">Projects</li>
                    <li className="cursor-pointer hover:text-orange-500">About</li>
                    <li className="cursor-pointer hover:text-orange-500">Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;