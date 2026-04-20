import { Smartphone } from 'lucide-react';

const Project = () => {
    return (
        <div className="w-full px-6 py-16 max-w-[1200px] mx-auto">
            <div className="mb-14">
                <span className="text-[var(--theme-accent)]">VANSH DHIR // SYSTEM.ROOT</span>
                <p className="text-5xl mt-2 gap-y-2">
                    <span className="font-bold text-white">Project{" "}</span>
                    <span className="font-bold text-[var(--theme-accent)]">{" "}Vault{" "}</span>
                    <span className="font-bold text-white">{" "}Panel{" "}</span>
                </p>
            </div>
            <div className='flex flex-row'>
                <div className="glass-panel p-8 rounded-2xl w-full flex flex-col justify-between h-full shadow-[0_0_40px_rgba(0,240,255,0.06)]">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-9 bg-[var(--theme-accent)]/10">
                            <Smartphone className="text-[var(--theme-accent)]" size={30} />
                        </div>
                        <span className="text-xs tracking-widest text-[var(--theme-ink-soft)] uppercase">
                            Production // Mobile
                        </span>
                    </div>
                    <p className='text-2xl font-bold'>ACMOne App</p>
                    <p>An official app for ACM student chapter</p>
                    <p>An official app for ACM student chapter</p>
                    <p>An official app for ACM student chapter</p>
                    <p>An official app for ACM student chapter</p>
                </div>
                <div className="glass-panel p-8 rounded-lg flex flex-col justify-between h-full shadow-[0_0_40px_rgba(0,240,255,0.06)]">
                    <h3>GITHUB OPEN SOURCE PARSER</h3>
                    <p>An automated repository analyzer tool for the users to make the process of the open source contributions easier</p>
                    <p>An automated repository analyzer tool for the users to make the process of the open source contributions easier</p>
                </div>
            </div>
            <div className="glass-panel p-8 rounded-lg flex flex-col justify-between h-full shadow-[0_0_40px_rgba(0,240,255,0.06)]">
                <h3>APEX MARKET</h3>
                <p>A platform for buying and selling Apex Legends skins and other in-game items</p>
                <p>A platform for buying and selling Apex Legends skins and other in-game items</p>
            </div>
        </div>
    )
}

export default Project;