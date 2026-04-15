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
            <div>

                <div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-full shadow-[0_0_40px_rgba(0,240,255,0.06)]">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-9 bg-[var(--theme-accent)]/10">
                            <Smartphone className="text-[var(--theme-accent)]" size={24} />
                        </div>
                        <span className="text-xs tracking-widest text-[var(--theme-ink-soft)] uppercase">
                            Production // Mobile
                        </span>
                    </div>
                    <p className='text-2xl font-bold'>ACMOne App</p>
                    <p></p>
                </div>
                <div className="glass-panel p-8 rounded-lg flex flex-col justify-between h-full shadow-[0_0_40px_rgba(0,240,255,0.06)]">

                </div>
            </div>
        </div>
    )
}

export default Project;