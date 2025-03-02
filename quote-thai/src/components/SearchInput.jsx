import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { useCallback, useEffect, useState } from 'react';

const SearchInput = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const debouncedSearch = useCallback(
        (value) => {
            const handler = setTimeout(() => {
                onSearch(value);
            }, 500);

            return () => clearTimeout(handler);
        },
        [onSearch]
    );

    useEffect(() => {
        const cleanup = debouncedSearch(searchTerm);
        return cleanup;
    }, [searchTerm, debouncedSearch]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl mx-auto p-4"
        >
            <div className="relative">
                <input
                    type="text"
                    placeholder="ค้นหาคำคม..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-red-500"
                />
                <div className="absolute top-3 right-3">
                    <FaSearch className="text-gray-300" />
                </div>
            </div>
        </motion.div>
    );
};

export default SearchInput;
