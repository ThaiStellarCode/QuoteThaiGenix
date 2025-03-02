import { motion } from 'framer-motion';
import QuoteCard from './QuoteCard';
import SkeletonCard from './SkeletonCard';

const QuoteList = ({ quotes, isLoading }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
        >
            {isLoading
                ? Array(6)
                      .fill(0)
                      .map((_, index) => <SkeletonCard key={index} />)
                : quotes.map((quote, index) => (
                      <QuoteCard key={index} quote={quote} />
                  ))}
        </motion.div>
    );
};

export default QuoteList;
