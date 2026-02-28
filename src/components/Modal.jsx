import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
                    />

                    {/* Modal Content container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl z-[70] my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]">
                            {/* Ambient Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none -mr-20 -mt-20" />

                            <div className="relative z-10 flex flex-col h-full overflow-hidden">
                                <div className="flex justify-between items-center mb-8 shrink-0">
                                    <h3 className="text-2xl md:text-3xl font-black font-outfit text-white tracking-tighter">
                                        {title}
                                    </h3>
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="text-zinc-400 space-y-6 text-sm md:text-base leading-relaxed font-medium overflow-y-auto pr-4 custom-scrollbar flex-grow">
                                    {children}
                                </div>

                                <div className="mt-10 shrink-0">
                                    <button
                                        onClick={onClose}
                                        className="w-full py-4 bg-white text-black rounded-2xl font-black hover:bg-zinc-200 transition-all active:scale-95"
                                    >
                                        Entendido
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};


export default Modal;
