import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ currentPage, totalPages, onNext, onPrevious, onPageChange }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex justify-center items-center -space-x-px h-10 text-base">
        <li>
          <button
            onClick={onPrevious}
            disabled={currentPage === 1}
            className="flex items-center justify-center h-10 ms-0 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeft />
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index}>
            <button
              onClick={() => onPageChange(index + 1)}
              className={`flex items-center justify-center px-4 h-10 leading-tight ${currentPage === index + 1 ? 'text-black bg-gray-200 hover:bg-gray-200' : 'text-gray-500 bg-white border-gray-200'} hover:bg-gray-100 hover:text-gray-700`}
            >
              {index + 1}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={onNext}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center h-10 leading-tight text-gray-500 bg-white  hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="sr-only">Next</span>
            <ChevronRight />
          </button>
        </li>
      </ul>
      
    </nav>
  );
}
