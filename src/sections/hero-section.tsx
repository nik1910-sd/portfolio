import { ArrowRightIcon } from "lucide-react";
import profilePic from  "/assets/user.jpg?url";
import githubIcon from "/assets/github.svg?url";
import linkedIcon from "/assets/linkedin.svg?url";
import leetcodeIcon from "/assets/leetcode.svg?url";


export default function HeroSection() {

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact-section");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="flex flex-col items-center pt-32 max-md:px-4  ">
           
           

            <img
                src= {profilePic}
                alt="Profile Image"
                className="size-40 rounded-full"
                width={160}
                height={160}
            />

            <h2 className="text-4xl md:text-6xl font-semibold mt-6">
                Nikhil Kumar
            </h2>
            <p className="text-2xl md:text-3xl font-mono mt-6">
                Full-Stack Creative Develpoer
            </p>
            <div className="mt-6">
      
                <a 
                  href="/assets/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center bg-black hover:bg-zinc-800 text-white px-7 py-2.5 rounded-lg transition-colors"
                >
                    Resume
                    <ArrowRightIcon className="group-hover:translate-x-0.5 transition ml-1 size-5" />
                </a>

                <button 
                  onClick={scrollToContact}
                  className="border border-zinc-400 hover:bg-zinc-200/60 px-6 py-2.5 rounded-lg ml-4"
                >
                    Contact me
                </button>
            </div>

            <div className="space-x-6 mt-10">
                <a href="https://www.linkedin.com/in/nikhil-kumar-5a1584223" target='new' className="inline-flex hover:-translate-y-0.5 transition ">
                    <img src={linkedIcon} alt="LinkedIn" className="size-7 grayscale hover:grayscale-0 transition-all" />
                </a>
                <a href="https://github.com/nik1910-sd" target='new' className="inline-flex hover:-translate-y-0.5 transition">
                    <img src={githubIcon}alt="GitHub" className="size-7 grayscale hover:grayscale-0 transition-all" />
                </a>
                <a href="https://leetcode.com/u/nik__2003/" target='new' className="inline-flex hover:-translate-y-0.5 transition">
                    <img src={leetcodeIcon} alt="LeetCode" className="size-7 grayscale hover:grayscale-0 transition-all" />
                </a>
            </div>
        </main>
    );
}