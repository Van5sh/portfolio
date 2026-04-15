import { Button } from "@/components/ui/button";

const Navbar=()=>{
    return(
        <nav className="flex flex-row w-full p-4 items-center justify-between">
            <div className="text-2xl font-bold text-[#00F0FF]">Dev Void</div>
            <ul className="flex space-x-8 text-white">
                <li><a href="#home" className="hover:text-[#00F0FF] hover:underline transition">Home</a></li>
                <li><a href="#about" className="hover:text-[#00F0FF] hover:underline transition">About</a></li>
                <li><a href="#skills" className="hover:text-[#00F0FF] hover:underline transition">Skills</a></li>
                <li><a href="#experience" className="hover:text-[#00F0FF] hover:underline transition">Experience</a></li>
                <li><a href="#projects" className="hover:text-[#00F0FF] hover:underline transition">Projects</a></li>
                <li><a href="#contact" className="hover:text-[#00F0FF] hover:underline transition">Contact</a></li>
            </ul>
            <div>
                <Button className="text-[#0A0A0B] border-white hover:bg-[#00F0FF] hover:border-[#00F0FF] transition">
                    CONNECT
                </Button>
            </div>
        </nav>
    )
}

export default Navbar;