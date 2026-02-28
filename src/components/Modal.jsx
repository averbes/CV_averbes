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
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-[70] px-4"
                    >
                        <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            {/* Ambient Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none -mr-20 -mt-20" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-center mb-8">
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

                                <div className="text-zinc-400 space-y-6 text-sm md:text-base leading-relaxed font-medium max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                                    {children}
                                </div>

                                <div className="mt-10">
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
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
