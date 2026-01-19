import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="mt-32 w-full text-center py-6 text-gray-500 border-t border-gray-100">
            <p className="flex items-center justify-center gap-1.5 text-sm">
                Made with 
                <Heart 
                    size={16} 
                    fill="#000000" 
                    stroke="#000000" 
                    className="inline-block animate-pulse" 
                /> 
                by Nikhil Kumar
            </p>
        </footer>
    );
}