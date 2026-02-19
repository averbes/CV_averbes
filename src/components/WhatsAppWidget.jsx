import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
    // Replace with actual phone number
    const phoneNumber = "573013730306";
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
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75 duration-1000"></div>
                <div className="relative bg-[#25D366] p-4 rounded-full shadow-lg flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white fill-white" />
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
