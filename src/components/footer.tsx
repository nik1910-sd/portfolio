import { Heart, ArrowUp } from 'lucide-react';
import githubIcon from "/assets/github.svg?url";
import linkedIcon from "/assets/linkedin.svg?url";
import leetcodeIcon from "/assets/leetcode.svg?url";

export default function Footer() {
    // Function to handle smooth scroll back to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="mt-32 w-full py-8 text-zinc-900 border-t border-zinc-200 bg-zinc-50 px-4 md:px-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* LEFT: Made with Heart */}
                <p className="flex items-center gap-1.5 text-sm font-medium order-2 md:order-1">
                    Made with 
                    <Heart 
                        size={16} 
                        fill="#000000" 
                        stroke="#000000" 
                        className="inline-block animate-pulse" 
                    /> 
                    by Nikhil Kumar
                </p>

                <div className="flex items-center gap-6 order-1 md:order-2">
                    {/* Social Links */}
                    <div className="flex items-center gap-5">
                        <a href="https://www.linkedin.com/in/nikhil-kumar-5a1584223" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
                            <img src={linkedIcon} alt="LinkedIn" className="size-6 grayscale hover:grayscale-0 transition-all" />
                        </a>
                        <a href="https://github.com/nik1910-sd" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
                            <img src={githubIcon} alt="GitHub" className="size-6 grayscale hover:grayscale-0 transition-all" />
                        </a>
                        <a href="https://leetcode.com/u/nik__2003/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
                            <img src={ leetcodeIcon} alt="LeetCode" className="size-6 grayscale hover:grayscale-0 transition-all" />
                        </a>
                    </div>

                    <div className="h-6 w-[2px] bg-zinc-300 hidden md:block"></div>

                    <button 
                        onClick={scrollToTop}
                        className="p-2 bg-white border border-zinc-200 rounded-full hover:bg-zinc-100 hover:border-zinc-300 transition-all group shadow-sm"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}