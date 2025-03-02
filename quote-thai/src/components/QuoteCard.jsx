const QuoteCard = ({ quote }) => {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(quote);
            alert('คัดลอกคำคมแล้ว!');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <p className="text-lg text-gray-800 min-h-[100px] flex items-center justify-center text-center">
                {quote}
            </p>
            <button
                onClick={handleCopy}
                className="w-full mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
            >
                <span>📋</span>
                <span>คัดลอก</span>
            </button>
        </div>
    );
};

export default QuoteCard;
