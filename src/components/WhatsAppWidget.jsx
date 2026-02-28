import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
    // Replace with actual phone number
    const phoneNumber = "573115356374";
    const message = encodeURIComponent("Hola Alejandro, vi tu portafolio y me gustaría contactarte.");

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group hover:scale-110 transition-transform duration-300"
            aria-label="Contact on WhatsApp"
        >
            <div className="relative">
                <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-pulse blur-xl"></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl transition-all duration-500 hover:ring-4 hover:ring-blue-500/40">
                    <img
                        src="/alejandro-wa.jpg"
                        alt="Alejandro"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-3 bg-[#25D366] p-1.5 rounded-full shadow-lg flex items-center justify-center border-2 border-white dark:border-zinc-900">
                        <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-white fill-white" />
                    </div>
                </div>

                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium hidden md:block">
                    ¡Hola! ¿En qué puedo ayudarte?
                    <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45"></div>
                </div>
            </div>
        </a>
    );
};

export default WhatsAppWidget;
