// src/components/AddSchemeModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AddSchemeModal = ({ isOpen, onClose, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        onSubmit(data);
        onClose();
    };

    const backdropVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const modalVariant = {
        hidden: { scale: 0.3, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 260, damping: 20 },
        },
        exit: { scale: 0.5, opacity: 0 },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
                    variants={backdropVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.div
                        className="bg-base-100 rounded-xl shadow-xl p-8 w-full max-w-2xl"
                        variants={modalVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <h3 className="text-2xl font-bold mb-6">Add New Scheme</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <input
                                type="text"
                                name="schemeName"
                                placeholder="Scheme Name"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                type="date"
                                name="launchDate"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                type="text"
                                name="area"
                                placeholder="Area (e.g., Block A)"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                type="text"
                                name="type"
                                placeholder="Type (e.g., Infrastructure)"
                                className="input input-bordered w-full"
                                required
                            />
                            <div className="flex justify-end gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="btn btn-ghost"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary px-6">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AddSchemeModal;
