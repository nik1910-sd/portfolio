import { useState } from 'react';
import Section from "../components/section";
import { Mail, Phone, Copy, Check } from "lucide-react";

export default function ContactSection() {
    const [copied, setCopied] = useState("");
    const email = "nikhilkumar191003@gmail.com";
    const phone = "+91 8445364921";

    const copyToClipboard = (text:any, type:any) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(""), 2000);
    };

    return (
       <div id="contact-section"> 
        <Section title="Contact">
            {/* Using a margin-top that matches your Skills list spacing */}
            <div className="flex flex-col gap-5 mt-1">
                
                {/* EMAIL ROW */}
                <div className="flex items-center justify-between group w-full max-w-xs">
                    <div className="flex items-center gap-3">
                        <Mail size={16} className="text-zinc-500" />
                        <a href={`mailto:${email}`} className="text-zinc-900 hover:text-black transition-colors text-sm hover:underline">
                            {email}
                        </a>
                    </div>
                    <button 
                        onClick={() => copyToClipboard(email, "email")} 
                        className="p-1.5 hover:bg-gray-200 rounded-md transition-all"
                    >
                        {copied === "email" ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-zinc-500" />}
                    </button>
                </div>

                {/* PHONE ROW */}
                <div className="flex items-center justify-between group w-full max-w-xs">
                    <div className="flex items-center gap-3">
                        <Phone size={16} className="text-zinc-500" />
                        <a href={`tel:${phone}`} className="text-zinc-900 hover:text-black transition-colors text-sm hover:underline">
                            {phone}
                        </a>
                    </div>
                    <button 
                        onClick={() => copyToClipboard(phone, "phone")} 
                        className="p-1.5 hover:bg-gray-200 rounded-md transition-all"
                    >
                        {copied === "phone" ? <Check size={14} className="text-green-600" /> : <Copy size={14} className="text-zinc-500" />}
                    </button>
                </div>

            </div>
        </Section>
        </div>
    );
}