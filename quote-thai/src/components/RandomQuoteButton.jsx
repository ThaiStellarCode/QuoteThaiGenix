import { motion } from 'framer-motion';

const RandomQuoteButton = ({ onRandomClick }) => {
    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={onRandomClick}
            className="w-full max-w-xs mx-auto px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
        >
            <span>🎲</span>
            <span>สุ่มคำคม</span>
        </motion.button>
    );
};

export default RandomQuoteButton;
