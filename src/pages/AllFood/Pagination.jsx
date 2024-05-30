

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center items-center mt-5">
            <button 
                onClick={handlePrevPage} 
                disabled={currentPage === 1} 
                className={`px-4 py-2 mx-2 border ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700 text-white'} rounded`}>
                Previous
            </button>
            <span className="mx-2">{currentPage} of {totalPages}</span>
            <button 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages} 
                className={`px-4 py-2 mx-2 border ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700 text-white'} rounded`}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
