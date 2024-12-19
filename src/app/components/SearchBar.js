import { X, Search } from 'lucide-react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full px-2 sm:px-4 md:px-0">
      <form className="relative w-full max-w-2xl pl-2 sm:pl-8 pb-2 sm:pb-4 mt-2 sm:mt-4">
        <div className="relative w-full">
          <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-400 px-2 sm:px-3">
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
          
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search jobs..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-md rounded-full block w-full pl-8 sm:pl-10 pr-8 sm:pr-12 p-1.5 sm:p-2 h-8 sm:h-9 md:h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5 sm:p-1 rounded-full transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}