const SkeletonCard = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="min-h-[100px] flex items-center justify-center">
                <div className="w-4/5 h-20 bg-gray-200 animate-pulse rounded"></div>
            </div>
            <div className="mt-3 w-full h-10 bg-gray-200 animate-pulse rounded"></div>
        </div>
    );
};

export default SkeletonCard;
